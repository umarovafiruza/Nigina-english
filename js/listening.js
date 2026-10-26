/**
 * ============================================================================
 * LISTENING PRACTICE ENGINE
 * Professional Audio Listening & Comprehension system
 * Designed in Apple Minimalist style (No emojis, no AI gradients, crisp SVG icons)
 * ============================================================================
 */

const ListeningEngine = (() => {
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------
  let exercises = [];
  let selectedLevel = 'all';
  let selectedPart = 'all';
  let currentExercise = null;
  let currentQuestionIndex = 0;
  let userAnswers = {}; // { questionId: answerValue }
  let sessionStartTime = null;

  // LocalStorage Key
  const STORAGE_KEY = 'english_mastery_listening_progress';

  // --------------------------------------------------------------------------
  // AUDIO CONTROLLER (Dual Engine: HTML5 Audio + SpeechSynthesis Fallback)
  // --------------------------------------------------------------------------
  const AudioPlayer = {
    audioEl: null,
    isPlaying: false,
    duration: 35,
    currentTime: 0,
    playbackRate: 1.0,
    volume: 1.0,
    isMuted: false,
    useTTSFallback: false,
    ttsUtterance: null,
    timerInterval: null,

    init() {
      if (!this.audioEl) {
        this.audioEl = new Audio();
        this.bindAudioEvents();
      }
    },

    bindAudioEvents() {
      this.audioEl.addEventListener('timeupdate', () => {
        if (!this.useTTSFallback) {
          this.currentTime = this.audioEl.currentTime;
          this.duration = this.audioEl.duration || this.duration;
          this.updatePlayerUI();
        }
      });

      this.audioEl.addEventListener('loadedmetadata', () => {
        if (this.audioEl.duration && !isNaN(this.audioEl.duration)) {
          this.duration = this.audioEl.duration;
        }
        this.updatePlayerUI();
      });

      this.audioEl.addEventListener('ended', () => {
        this.isPlaying = false;
        this.updatePlayStateUI();
      });

      this.audioEl.addEventListener('error', () => {
        // Fallback to SpeechSynthesis automatically if file can't load
        this.useTTSFallback = true;
      });
    },

    load(exercise) {
      this.stop();
      this.currentTime = 0;
      this.duration = exercise.durationSec || 35;
      this.useTTSFallback = false;

      if (exercise.audioFile) {
        this.audioEl.src = exercise.audioFile;
        this.audioEl.playbackRate = this.playbackRate;
        this.audioEl.volume = this.volume;
        this.audioEl.load();
      } else {
        this.useTTSFallback = true;
      }

      this.updatePlayerUI();
      this.updatePlayStateUI();
    },

    togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },

    play() {
      if (!currentExercise) return;

      if (this.useTTSFallback) {
        this.playWithTTS();
      } else {
        const playPromise = this.audioEl.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.isPlaying = true;
              this.updatePlayStateUI();
            })
            .catch(() => {
              // Browser autoplay policy or missing audio file -> switch to speech synthesis
              this.useTTSFallback = true;
              this.playWithTTS();
            });
        }
      }
    },

    playWithTTS() {
      if (!('speechSynthesis' in window)) {
        this.showAudioError("Audio tizimi qo'llab-quvvatlanmadi.");
        return;
      }

      window.speechSynthesis.cancel();
      if (this.timerInterval) clearInterval(this.timerInterval);

      const utterance = new SpeechSynthesisUtterance(currentExercise.script);
      utterance.rate = this.playbackRate;
      utterance.volume = this.isMuted ? 0 : this.volume;

      // Select natural English female voice
      const voices = window.speechSynthesis.getVoices() || [];
      const enVoice = voices.find(v => {
        const lang = (v.lang || '').toLowerCase();
        const name = (v.name || '').toLowerCase();
        return lang.startsWith('en') && (
          name.includes('zira') ||
          name.includes('samantha') ||
          name.includes('natural') ||
          name.includes('female') ||
          name.includes('jenny')
        );
      }) || voices.find(v => (v.lang || '').toLowerCase().startsWith('en'));

      if (enVoice) utterance.voice = enVoice;

      utterance.onstart = () => {
        this.isPlaying = true;
        this.updatePlayStateUI();
        const startTime = Date.now() - (this.currentTime * 1000);
        this.timerInterval = setInterval(() => {
          this.currentTime = (Date.now() - startTime) / 1000;
          if (this.currentTime >= this.duration) {
            this.currentTime = this.duration;
            this.stop();
          }
          this.updatePlayerUI();
        }, 100);
      };

      utterance.onend = () => {
        this.stop();
      };

      utterance.onerror = () => {
        this.stop();
      };

      this.ttsUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    },

    pause() {
      this.isPlaying = false;
      if (this.useTTSFallback) {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.pause();
        }
        if (this.timerInterval) clearInterval(this.timerInterval);
      } else {
        if (this.audioEl) this.audioEl.pause();
      }
      this.updatePlayStateUI();
    },

    stop() {
      this.isPlaying = false;
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      if (this.useTTSFallback && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (this.audioEl) {
        this.audioEl.pause();
        this.audioEl.currentTime = 0;
      }
      this.currentTime = 0;
      this.updatePlayerUI();
      this.updatePlayStateUI();
    },

    seek(percent) {
      const targetTime = (percent / 100) * this.duration;
      this.currentTime = targetTime;
      if (!this.useTTSFallback && this.audioEl) {
        this.audioEl.currentTime = targetTime;
      }
      this.updatePlayerUI();
    },

    rewind(seconds = 5) {
      this.currentTime = Math.max(0, this.currentTime - seconds);
      if (!this.useTTSFallback && this.audioEl) {
        this.audioEl.currentTime = this.currentTime;
      }
      this.updatePlayerUI();
    },

    setSpeed(rate) {
      this.playbackRate = rate;
      if (this.audioEl) this.audioEl.playbackRate = rate;
      if (this.isPlaying && this.useTTSFallback) {
        // Restart speech at new rate
        this.playWithTTS();
      }
      this.updateSpeedUI();
    },

    setVolume(vol) {
      this.volume = vol;
      this.isMuted = vol === 0;
      if (this.audioEl) this.audioEl.volume = vol;
    },

    formatTime(sec) {
      if (isNaN(sec) || sec < 0) sec = 0;
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    },

    updatePlayerUI() {
      const curEl = document.getElementById('listening-player-cur-time');
      const durEl = document.getElementById('listening-player-dur-time');
      const fillEl = document.getElementById('listening-player-progress-fill');
      const trackEl = document.getElementById('listening-player-progress-track');

      if (curEl) curEl.textContent = this.formatTime(this.currentTime);
      if (durEl) durEl.textContent = this.formatTime(this.duration);

      const pct = this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
      if (fillEl) fillEl.style.width = `${Math.min(100, Math.max(0, pct))}%`;
      if (trackEl) trackEl.setAttribute('aria-valuenow', Math.round(pct));
    },

    updatePlayStateUI() {
      const playIcon = document.getElementById('listening-play-icon');
      const pauseIcon = document.getElementById('listening-pause-icon');
      const btn = document.getElementById('btn-listening-play-toggle');

      if (playIcon && pauseIcon) {
        if (this.isPlaying) {
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'inline-flex';
          if (btn) btn.setAttribute('aria-label', 'Pauza');
        } else {
          playIcon.style.display = 'inline-flex';
          pauseIcon.style.display = 'none';
          if (btn) btn.setAttribute('aria-label', 'Ijro etish');
        }
      }
    },

    updateSpeedUI() {
      document.querySelectorAll('.listening-speed-chip').forEach(btn => {
        const rate = parseFloat(btn.getAttribute('data-rate'));
        const isActive = rate === this.playbackRate;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
      });
    },

    showAudioError(msg) {
      const errEl = document.getElementById('listening-audio-notice');
      if (errEl) {
        errEl.textContent = msg;
        errEl.classList.add('error');
      }
    }
  };

  // --------------------------------------------------------------------------
  // LOCALSTORAGE PROGRESS HELPERS
  // --------------------------------------------------------------------------
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { exercises: {} };
    } catch (e) {
      return { exercises: {} };
    }
  }

  function saveProgress(exerciseId, score, total, percentage) {
    try {
      const data = loadProgress();
      const existing = data.exercises[exerciseId] || {};
      data.exercises[exerciseId] = {
        lastScore: score,
        bestScore: Math.max(score, existing.bestScore || 0),
        total: total,
        percentage: percentage,
        completedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Unable to persist listening progress to localStorage:', e);
    }
  }

  function getExerciseStats(exerciseId) {
    const data = loadProgress();
    return data.exercises[exerciseId] || null;
  }

  function getOverallStats() {
    const data = loadProgress();
    const completedIds = Object.keys(data.exercises || {});
    const totalCompleted = completedIds.length;

    if (totalCompleted === 0) {
      return { totalCompleted: 0, averagePct: 0 };
    }

    let sumPct = 0;
    completedIds.forEach(id => {
      sumPct += data.exercises[id].percentage || 0;
    });

    return {
      totalCompleted,
      averagePct: Math.round(sumPct / totalCompleted)
    };
  }

  // --------------------------------------------------------------------------
  // INITIALIZATION & SCREEN MANAGEMENT
  // --------------------------------------------------------------------------
  function init() {
    exercises = typeof LISTENING_EXERCISES !== 'undefined' ? LISTENING_EXERCISES : [];
    AudioPlayer.init();
    bindEvents();
    renderMainPage();
  }

  function showScreen(screenId) {
    // Hide all main section screens
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(s => {
      s.classList.remove('active');
      s.setAttribute('aria-hidden', 'true');
    });

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      target.setAttribute('aria-hidden', 'false');
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  // --------------------------------------------------------------------------
  // MAIN LISTENING HUB VIEW
  // --------------------------------------------------------------------------
  function renderMainPage() {
    updateStatsHeader();
    renderExerciseGrid();
  }

  function updateStatsHeader() {
    const overall = getOverallStats();
    const totalCountEl = document.getElementById('listening-stat-total-count');
    const compCountEl = document.getElementById('listening-stat-completed-count');
    const avgScoreEl = document.getElementById('listening-stat-avg-score');

    if (totalCountEl) totalCountEl.textContent = `${exercises.length} ta mashq`;
    if (compCountEl) compCountEl.textContent = `${overall.totalCompleted} bajarildi`;
    if (avgScoreEl) avgScoreEl.textContent = overall.totalCompleted > 0 ? `${overall.averagePct}% o‘rtacha` : '0% natija';
  }

  function renderExerciseGrid() {
    const container = document.getElementById('listening-grid');
    if (!container) return;

    container.innerHTML = '';

    let filtered = exercises;
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(e => e.level === selectedLevel);
    }
    if (selectedPart !== 'all') {
      const partNum = parseInt(selectedPart, 10);
      filtered = filtered.filter(e => e.part === partNum);
    }

    if (filtered.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'listening-empty-state';
      empty.innerHTML = `
        <p class="empty-title">Mos mashqlar topilmadi</p>
        <p class="empty-desc">Boshqa daraja yoki part filtrini tanlab ko‘ring.</p>
      `;
      container.appendChild(empty);
      return;
    }

    filtered.forEach(ex => {
      const card = document.createElement('article');
      card.className = 'listening-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');

      const stats = getExerciseStats(ex.id);
      let statusBadge = '<span class="listening-status-pill status-unstarted">Boshlanmagan</span>';
      if (stats) {
        const isPerfect = stats.bestScore === stats.total;
        statusBadge = `
          <span class="listening-status-pill ${isPerfect ? 'status-perfect' : 'status-done'}">
            <svg class="check-svg" viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5"/></svg>
            ${stats.bestScore}/${stats.total} (${stats.percentage}%)
          </span>
        `;
      }

      card.innerHTML = `
        <div class="listening-card-top">
          <div class="listening-card-badges">
            <span class="listening-part-tag">${ex.partCategory}</span>
            <span class="listening-level-badge">${ex.level}</span>
          </div>
          ${statusBadge}
        </div>
        <h2 class="listening-card-title">${escapeHTML(ex.title)}</h2>
        <p class="listening-card-desc">${escapeHTML(ex.description)}</p>
        <div class="listening-card-footer">
          <div class="listening-card-meta">
            <span class="meta-item">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="6.5"/><polyline points="8 4 8 8 10.5 9.5"/></svg>
              ~${ex.durationSec}s audio
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="12" height="10" rx="1.5"/><line x1="5" y1="7" x2="11" y2="7"/><line x1="5" y1="10" x2="9" y2="10"/></svg>
              ${ex.questions.length} ta savol
            </span>
          </div>
          <button class="btn-start-exercise" type="button">
            <span>Boshlash</span>
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="8" x2="13" y2="8"/><polyline points="8 3 13 8 8 13"/></svg>
          </button>
        </div>
      `;

      card.addEventListener('click', () => startExercise(ex));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startExercise(ex);
        }
      });

      container.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // EXERCISE SESSION RUNNER
  // --------------------------------------------------------------------------
  function startExercise(ex) {
    currentExercise = ex;
    currentQuestionIndex = 0;
    userAnswers = {};
    sessionStartTime = Date.now();

    // Setup Header UI
    const titleEl = document.getElementById('listening-ex-header-title');
    const partEl = document.getElementById('listening-ex-header-part');
    const levelEl = document.getElementById('listening-ex-header-level');

    if (titleEl) titleEl.textContent = ex.title;
    if (partEl) partEl.textContent = ex.partCategory;
    if (levelEl) levelEl.textContent = ex.levelName;

    // Load Audio into player
    AudioPlayer.load(ex);

    // Render Question Stepper & First Question
    renderQuestionStepper();
    renderCurrentQuestion();

    // Show screen
    showScreen('screen-listening-exercise');
  }

  function renderQuestionStepper() {
    const stepper = document.getElementById('listening-stepper');
    if (!stepper || !currentExercise) return;

    stepper.innerHTML = '';
    currentExercise.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'stepper-step-btn';
      btn.textContent = `${idx + 1}`;

      const isCurrent = idx === currentQuestionIndex;
      const isAnswered = hasAnswer(q.id);

      if (isCurrent) btn.classList.add('current');
      if (isAnswered) btn.classList.add('answered');

      btn.setAttribute('aria-label', `Savol ${idx + 1}`);
      btn.addEventListener('click', () => {
        saveCurrentInputAnswer();
        currentQuestionIndex = idx;
        renderQuestionStepper();
        renderCurrentQuestion();
      });

      stepper.appendChild(btn);
    });

    const stepLabel = document.getElementById('listening-step-label');
    if (stepLabel) {
      stepLabel.textContent = `Savol ${currentQuestionIndex + 1} / ${currentExercise.questions.length}`;
    }
  }

  function hasAnswer(qId) {
    const val = userAnswers[qId];
    if (val === undefined || val === null) return false;
    if (typeof val === 'string') return val.trim().length > 0;
    if (Array.isArray(val)) return val.length > 0;
    if (typeof val === 'object') return Object.keys(val).length > 0;
    return false;
  }

  function renderCurrentQuestion() {
    if (!currentExercise) return;
    const q = currentExercise.questions[currentQuestionIndex];
    if (!q) return;

    const typeBadge = document.getElementById('listening-q-type-badge');
    const promptEl = document.getElementById('listening-q-prompt');
    const container = document.getElementById('listening-q-input-area');

    if (typeBadge) {
      let formatName = 'Savol';
      if (q.type === 'multiple-choice') formatName = 'Multiple Choice';
      else if (q.type === 'true-false') formatName = 'True / False';
      else if (q.type === 'fill-in-the-blank') formatName = 'Fill in the Blank';
      else if (q.type === 'short-answer') formatName = 'Short Answer';
      else if (q.type === 'matching') formatName = 'Matching';
      else if (q.type === 'ordering') formatName = 'Ordering';
      typeBadge.textContent = `${formatName}`;
    }

    if (promptEl) {
      promptEl.textContent = q.question;
    }

    if (!container) return;
    container.innerHTML = '';

    const currentVal = userAnswers[q.id];

    // RENDER BASED ON QUESTION TYPE
    if (q.type === 'multiple-choice' || q.type === 'true-false') {
      const list = document.createElement('div');
      list.className = 'q-options-grid';
      list.setAttribute('role', 'radiogroup');

      q.options.forEach((opt, optIdx) => {
        const optionCard = document.createElement('button');
        optionCard.type = 'button';
        optionCard.className = 'q-option-card';
        optionCard.setAttribute('role', 'radio');

        const letter = String.fromCharCode(65 + optIdx);
        const isSelected = currentVal === opt;
        if (isSelected) optionCard.classList.add('selected');
        optionCard.setAttribute('aria-checked', isSelected ? 'true' : 'false');

        optionCard.innerHTML = `
          <span class="q-option-letter">${letter}</span>
          <span class="q-option-text">${escapeHTML(opt)}</span>
          <span class="selection-check" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5"/></svg>
          </span>
        `;

        optionCard.addEventListener('click', () => {
          userAnswers[q.id] = opt;
          renderQuestionStepper();
          renderCurrentQuestion();
        });

        list.appendChild(optionCard);
      });

      container.appendChild(list);
    } else if (q.type === 'fill-in-the-blank' || q.type === 'short-answer') {
      const inputWrap = document.createElement('div');
      inputWrap.className = 'q-text-input-wrap';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'q-text-input';
      input.placeholder = q.type === 'fill-in-the-blank' ? "Yetishmayotgan so'z yoki raqamni yozing..." : "Qisqa javobni yozing...";
      input.value = currentVal || '';
      input.autocomplete = 'off';
      input.spellcheck = false;

      input.addEventListener('input', (e) => {
        userAnswers[q.id] = e.target.value;
        renderQuestionStepper();
      });

      inputWrap.appendChild(input);
      container.appendChild(inputWrap);

      setTimeout(() => input.focus(), 50);
    } else if (q.type === 'matching') {
      const matchWrap = document.createElement('div');
      matchWrap.className = 'q-matching-container';

      const savedPairs = (typeof currentVal === 'object' && currentVal !== null) ? currentVal : {};

      q.pairs.forEach((pair, pIdx) => {
        const row = document.createElement('div');
        row.className = 'q-matching-row';

        const itemLabel = document.createElement('div');
        itemLabel.className = 'q-matching-item';
        itemLabel.textContent = pair.item;

        const selectWrap = document.createElement('div');
        selectWrap.className = 'q-matching-select-wrap';

        const select = document.createElement('select');
        select.className = 'q-matching-select';
        select.setAttribute('aria-label', `Mos variant: ${pair.item}`);

        const defOpt = document.createElement('option');
        defOpt.value = '';
        defOpt.textContent = '-- Tanlang --';
        select.appendChild(defOpt);

        q.options.forEach(opt => {
          const o = document.createElement('option');
          o.value = opt;
          o.textContent = opt;
          if (savedPairs[pair.item] === opt) o.selected = true;
          select.appendChild(o);
        });

        select.addEventListener('change', (e) => {
          if (!userAnswers[q.id] || typeof userAnswers[q.id] !== 'object') {
            userAnswers[q.id] = {};
          }
          userAnswers[q.id][pair.item] = e.target.value;
          renderQuestionStepper();
        });

        selectWrap.appendChild(select);
        row.appendChild(itemLabel);
        row.appendChild(selectWrap);
        matchWrap.appendChild(row);
      });

      container.appendChild(matchWrap);
    } else if (q.type === 'ordering') {
      const orderWrap = document.createElement('div');
      orderWrap.className = 'q-ordering-container';

      let itemsOrder = Array.isArray(currentVal) && currentVal.length === q.items.length
        ? [...currentVal]
        : [...q.items];

      userAnswers[q.id] = itemsOrder;

      const renderOrderList = () => {
        orderWrap.innerHTML = '';
        itemsOrder.forEach((itemText, iIdx) => {
          const itemRow = document.createElement('div');
          itemRow.className = 'q-ordering-row';

          itemRow.innerHTML = `
            <span class="q-ordering-num">${iIdx + 1}</span>
            <span class="q-ordering-text">${escapeHTML(itemText)}</span>
            <div class="q-ordering-actions">
              <button type="button" class="btn-order-step btn-order-up" ${iIdx === 0 ? 'disabled' : ''} aria-label="Yuqoriga surish">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 10 8 5 13 10"/></svg>
              </button>
              <button type="button" class="btn-order-step btn-order-down" ${iIdx === itemsOrder.length - 1 ? 'disabled' : ''} aria-label="Pastga surish">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 8 11 13 6"/></svg>
              </button>
            </div>
          `;

          const btnUp = itemRow.querySelector('.btn-order-up');
          const btnDown = itemRow.querySelector('.btn-order-down');

          if (btnUp) {
            btnUp.addEventListener('click', () => {
              if (iIdx > 0) {
                const tmp = itemsOrder[iIdx - 1];
                itemsOrder[iIdx - 1] = itemsOrder[iIdx];
                itemsOrder[iIdx] = tmp;
                userAnswers[q.id] = [...itemsOrder];
                renderOrderList();
                renderQuestionStepper();
              }
            });
          }

          if (btnDown) {
            btnDown.addEventListener('click', () => {
              if (iIdx < itemsOrder.length - 1) {
                const tmp = itemsOrder[iIdx + 1];
                itemsOrder[iIdx + 1] = itemsOrder[iIdx];
                itemsOrder[iIdx] = tmp;
                userAnswers[q.id] = [...itemsOrder];
                renderOrderList();
                renderQuestionStepper();
              }
            });
          }

          orderWrap.appendChild(itemRow);
        });
      };

      renderOrderList();
      container.appendChild(orderWrap);
    }

    // UPDATE PREV / NEXT / FINISH BUTTONS
    const btnPrev = document.getElementById('btn-listening-q-prev');
    const btnNext = document.getElementById('btn-listening-q-next');
    const btnFinish = document.getElementById('btn-listening-q-finish');

    if (btnPrev) {
      btnPrev.disabled = currentQuestionIndex === 0;
    }

    if (btnNext && btnFinish) {
      const isLast = currentQuestionIndex === currentExercise.questions.length - 1;
      btnNext.style.display = isLast ? 'none' : 'inline-flex';
      btnFinish.style.display = isLast ? 'inline-flex' : 'none';
    }
  }

  function saveCurrentInputAnswer() {
    if (!currentExercise) return;
    const q = currentExercise.questions[currentQuestionIndex];
    if (!q) return;

    if (q.type === 'fill-in-the-blank' || q.type === 'short-answer') {
      const inp = document.querySelector('.q-text-input');
      if (inp) {
        userAnswers[q.id] = inp.value;
      }
    }
  }

  function nextQuestion() {
    saveCurrentInputAnswer();
    if (currentExercise && currentQuestionIndex < currentExercise.questions.length - 1) {
      currentQuestionIndex++;
      renderQuestionStepper();
      renderCurrentQuestion();
    }
  }

  function prevQuestion() {
    saveCurrentInputAnswer();
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestionStepper();
      renderCurrentQuestion();
    }
  }

  async function tryFinishTest() {
    saveCurrentInputAnswer();
    if (!currentExercise) return;

    // Check for unanswered questions
    let unansweredCount = 0;
    currentExercise.questions.forEach(q => {
      if (!hasAnswer(q.id)) unansweredCount++;
    });

    if (unansweredCount > 0) {
      let confirmed = true;
      if (typeof ModalManager !== 'undefined' && typeof ModalManager.show === 'function') {
        confirmed = await ModalManager.show({
          title: "Javobsiz savollar mavjud",
          message: `Sizda hali ${unansweredCount} ta javob berilmagan savol bor. Testni hozir yakunlamoqchimisiz?`,
          icon: "warning",
          type: "confirm",
          confirmText: "Ha, yakunlash",
          cancelText: "Savollarga qaytish",
          danger: false
        });
      }
      if (!confirmed) return;
    }

    finalizeAndShowResults();
  }

  // --------------------------------------------------------------------------
  // SCORING & RESULTS CALCULATION
  // --------------------------------------------------------------------------
  function normalizeText(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .toLowerCase()
      .trim()
      .replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s+/g, " ");
  }

  function evaluateQuestion(q, userAns) {
    if (!userAns) return false;

    if (q.type === 'multiple-choice' || q.type === 'true-false') {
      return String(userAns).trim() === String(q.answer).trim();
    }

    if (q.type === 'fill-in-the-blank' || q.type === 'short-answer') {
      const normUser = normalizeText(userAns);
      if (!normUser) return false;
      return q.acceptedAnswers.some(accepted => normalizeText(accepted) === normUser);
    }

    if (q.type === 'matching') {
      if (typeof userAns !== 'object' || userAns === null) return false;
      return q.pairs.every(p => {
        return userAns[p.item] === p.target;
      });
    }

    if (q.type === 'ordering') {
      if (!Array.isArray(userAns) || userAns.length !== q.correctOrder.length) return false;
      return userAns.every((val, idx) => val === q.correctOrder[idx]);
    }

    return false;
  }

  function finalizeAndShowResults() {
    AudioPlayer.stop();

    const ex = currentExercise;
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const evaluationResults = ex.questions.map(q => {
      const userAns = userAnswers[q.id];
      const isAnswered = hasAnswer(q.id);
      const isCorrect = evaluateQuestion(q, userAns);

      if (!isAnswered) unansweredCount++;
      else if (isCorrect) correctCount++;
      else incorrectCount++;

      return {
        question: q,
        userAns: userAns,
        isAnswered: isAnswered,
        isCorrect: isCorrect
      };
    });

    const totalQuestions = ex.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    // Persist to localStorage
    saveProgress(ex.id, correctCount, totalQuestions, percentage);

    // Populate Results Screen
    const scoreNumEl = document.getElementById('listening-res-score-num');
    const scorePctEl = document.getElementById('listening-res-score-pct');
    const ratingBadgeEl = document.getElementById('listening-res-rating-badge');
    const countCorrectEl = document.getElementById('listening-res-count-correct');
    const countWrongEl = document.getElementById('listening-res-count-wrong');
    const countUnansEl = document.getElementById('listening-res-count-unans');
    const titleEl = document.getElementById('listening-res-exercise-title');

    if (titleEl) titleEl.textContent = ex.title;
    if (scoreNumEl) scoreNumEl.textContent = `${correctCount} / ${totalQuestions}`;
    if (scorePctEl) scorePctEl.textContent = `${percentage}%`;

    if (ratingBadgeEl) {
      if (percentage >= 85) {
        ratingBadgeEl.textContent = "A'lo darajada! (Excellent)";
        ratingBadgeEl.className = "listening-rating-pill rating-excellent";
      } else if (percentage >= 60) {
        ratingBadgeEl.textContent = "Yaxshi natija! (Good)";
        ratingBadgeEl.className = "listening-rating-pill rating-good";
      } else {
        ratingBadgeEl.textContent = "Yana mashq qilish kerak (Practice needed)";
        ratingBadgeEl.className = "listening-rating-pill rating-needs-work";
      }
    }

    if (countCorrectEl) countCorrectEl.textContent = `${correctCount} ta to'g'ri`;
    if (countWrongEl) countWrongEl.textContent = `${incorrectCount} ta xato`;
    if (countUnansEl) countUnansEl.textContent = `${unansweredCount} ta javobsiz`;

    // Render Transcript Section
    renderTranscript(ex);

    // Render Review Breakdown
    renderQuestionReview(evaluationResults);

    showScreen('screen-listening-result');
  }

  function renderTranscript(ex) {
    const scriptEnEl = document.getElementById('listening-transcript-en');
    const scriptUzEl = document.getElementById('listening-transcript-uz');
    const wrap = document.getElementById('listening-transcript-panel');
    const toggleBtn = document.getElementById('btn-listening-toggle-transcript');

    if (scriptEnEl) scriptEnEl.textContent = ex.script;
    if (scriptUzEl) scriptUzEl.textContent = ex.scriptUz;

    // Reset closed state
    if (wrap) wrap.classList.add('hidden');
    if (toggleBtn) {
      toggleBtn.textContent = "Transkriptni ko'rish";
    }
  }

  function renderQuestionReview(evaluationResults) {
    const list = document.getElementById('listening-review-list');
    if (!list) return;

    list.innerHTML = '';
    evaluationResults.forEach((res, idx) => {
      const q = res.question;
      const card = document.createElement('div');
      card.className = `listening-review-card ${res.isCorrect ? 'is-correct' : 'is-wrong'}`;

      let userAnsDisplay = 'Javob berilmagan';
      if (res.isAnswered) {
        if (typeof res.userAns === 'string') {
          userAnsDisplay = res.userAns;
        } else if (Array.isArray(res.userAns)) {
          userAnsDisplay = res.userAns.join(' → ');
        } else if (typeof res.userAns === 'object' && res.userAns !== null) {
          userAnsDisplay = Object.entries(res.userAns).map(([k, v]) => `${k}: ${v}`).join('; ');
        }
      }

      let correctAnsDisplay = '';
      if (q.type === 'multiple-choice' || q.type === 'true-false') {
        correctAnsDisplay = q.answer;
      } else if (q.type === 'fill-in-the-blank' || q.type === 'short-answer') {
        correctAnsDisplay = q.displayAnswer || q.acceptedAnswers[0];
      } else if (q.type === 'matching') {
        correctAnsDisplay = q.pairs.map(p => `${p.item} → ${p.target}`).join('; ');
      } else if (q.type === 'ordering') {
        correctAnsDisplay = q.correctOrder.join(' → ');
      }

      card.innerHTML = `
        <div class="review-card-top">
          <span class="review-q-num">Savol ${idx + 1}</span>
          <span class="review-status-badge ${res.isCorrect ? 'badge-correct' : 'badge-wrong'}">
            ${res.isCorrect 
              ? '<svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5"/></svg> To‘g‘ri' 
              : '<svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3.5" y1="3.5" x2="12.5" y2="12.5"/><line x1="12.5" y1="3.5" x2="3.5" y2="12.5"/></svg> Xato'
            }
          </span>
        </div>
        <p class="review-q-prompt">${escapeHTML(q.question)}</p>
        <div class="review-answers-box">
          <div class="review-ans-item">
            <span class="ans-label">Sizning javobingiz:</span>
            <span class="ans-val user-val ${res.isCorrect ? 'text-correct' : 'text-wrong'}">${escapeHTML(userAnsDisplay)}</span>
          </div>
          ${!res.isCorrect ? `
            <div class="review-ans-item">
              <span class="ans-label">To'g'ri javob:</span>
              <span class="ans-val correct-val text-correct">${escapeHTML(correctAnsDisplay)}</span>
            </div>
          ` : ''}
        </div>
        <div class="review-explanation">
          <span class="exp-title">Audio izoh:</span>
          <p class="exp-text">${escapeHTML(q.explanation)}</p>
        </div>
      `;

      list.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // EVENT BINDINGS
  // --------------------------------------------------------------------------
  function bindEvents() {
    // Level Filters in Hub
    document.querySelectorAll('.listening-level-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.listening-level-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLevel = btn.getAttribute('data-level') || 'all';
        renderExerciseGrid();
      });
    });

    // Part Filters in Hub
    document.querySelectorAll('.listening-part-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.listening-part-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedPart = btn.getAttribute('data-part') || 'all';
        renderExerciseGrid();
      });
    });

    // Audio Player Controls
    const btnPlay = document.getElementById('btn-listening-play-toggle');
    if (btnPlay) {
      btnPlay.addEventListener('click', () => AudioPlayer.togglePlay());
    }

    const btnRewind = document.getElementById('btn-listening-rewind');
    if (btnRewind) {
      btnRewind.addEventListener('click', () => AudioPlayer.rewind(5));
    }

    const progressTrack = document.getElementById('listening-player-progress-track');
    if (progressTrack) {
      progressTrack.addEventListener('click', (e) => {
        const rect = progressTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
        AudioPlayer.seek(pct);
      });
    }

    // Speed Chips
    document.querySelectorAll('.listening-speed-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const rate = parseFloat(chip.getAttribute('data-rate')) || 1.0;
        AudioPlayer.setSpeed(rate);
      });
    });

    // Question Navigation Controls
    const btnPrev = document.getElementById('btn-listening-q-prev');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => prevQuestion());
    }

    const btnNext = document.getElementById('btn-listening-q-next');
    if (btnNext) {
      btnNext.addEventListener('click', () => nextQuestion());
    }

    const btnFinish = document.getElementById('btn-listening-q-finish');
    if (btnFinish) {
      btnFinish.addEventListener('click', () => tryFinishTest());
    }

    const btnQuit = document.getElementById('btn-listening-exercise-quit');
    if (btnQuit) {
      btnQuit.addEventListener('click', async () => {
        let confirmed = true;
        if (typeof ModalManager !== 'undefined' && typeof ModalManager.show === 'function') {
          confirmed = await ModalManager.show({
            title: "Mashqni to'xtatish",
            message: "Haqiqatan ham mashqni to'xtatmoqchimisiz? Natijalar saqlanmaydi.",
            icon: "warning",
            type: "confirm",
            confirmText: "Ha, to'xtatish",
            cancelText: "Davom etish",
            danger: true
          });
        }
        if (confirmed) {
          AudioPlayer.stop();
          renderMainPage();
          showScreen('screen-listening-main');
        }
      });
    }

    // Results Actions
    const btnToggleTranscript = document.getElementById('btn-listening-toggle-transcript');
    if (btnToggleTranscript) {
      btnToggleTranscript.addEventListener('click', () => {
        const panel = document.getElementById('listening-transcript-panel');
        if (panel) {
          const isHidden = panel.classList.toggle('hidden');
          btnToggleTranscript.textContent = isHidden ? "Transkriptni ko'rish" : "Transkriptni yashirish";
        }
      });
    }

    const btnReviewScroll = document.getElementById('btn-listening-res-review');
    if (btnReviewScroll) {
      btnReviewScroll.addEventListener('click', () => {
        const el = document.getElementById('listening-review-list');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const btnTryAgain = document.getElementById('btn-listening-res-retry');
    if (btnTryAgain) {
      btnTryAgain.addEventListener('click', () => {
        if (currentExercise) startExercise(currentExercise);
      });
    }

    const btnNextEx = document.getElementById('btn-listening-res-next');
    if (btnNextEx) {
      btnNextEx.addEventListener('click', () => {
        if (!currentExercise) return;
        const curIdx = exercises.findIndex(e => e.id === currentExercise.id);
        const nextEx = exercises[curIdx + 1] || exercises[0];
        if (nextEx) startExercise(nextEx);
      });
    }

    const btnBackToHub = document.getElementById('btn-listening-res-hub');
    if (btnBackToHub) {
      btnBackToHub.addEventListener('click', () => {
        AudioPlayer.stop();
        renderMainPage();
        showScreen('screen-listening-main');
      });
    }

    // Header Back to Hub from listening
    const btnBackMain = document.getElementById('btn-listening-main-back');
    if (btnBackMain) {
      btnBackMain.addEventListener('click', () => {
        AudioPlayer.stop();
        renderMainPage();
        showScreen('screen-listening-main');
      });
    }
  }

  function escapeHTML(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // --------------------------------------------------------------------------
  // PUBLIC API
  // --------------------------------------------------------------------------
  return {
    init,
    showScreen,
    renderMainPage,
    stopAudio: () => AudioPlayer.stop()
  };
})();

// Attach to window for global access
if (typeof window !== 'undefined') {
  window.ListeningEngine = ListeningEngine;
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ListeningEngine.init();
});
