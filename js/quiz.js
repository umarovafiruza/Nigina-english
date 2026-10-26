/**
 * Grammar Tenses Quiz Engine - Enhanced Edition
 * Features:
 * - 400 questions support with unbiased Fisher-Yates shuffle
 * - CEFR Level selection (All, A1, A2, B1)
 * - Specific tense sub-topic filtering
 * - Flexible question counts (5, 10, 20, 30)
 * - Countdown Timer options (Unlimited, 3m, 5m, 10m)
 * - Full Dark Mode support with localStorage persistence
 * - Weak tenses analysis & pedagogical instant feedback in Uzbek
 */

'use strict';

(function () {
  const ModalManager = {
    overlay: null,
    backdrop: null,
    dialog: null,
    iconWrap: null,
    titleEl: null,
    messageEl: null,
    actionsEl: null,
    currentResolver: null,

    init() {
      this.overlay = document.getElementById('modal-container');
      this.backdrop = document.getElementById('modal-backdrop');
      this.dialog = document.getElementById('modal-dialog');
      this.iconWrap = document.getElementById('modal-icon-wrap');
      this.titleEl = document.getElementById('modal-title');
      this.messageEl = document.getElementById('modal-message');
      this.actionsEl = document.getElementById('modal-actions');

      if (!this.overlay) return;

      if (this.backdrop) {
        this.backdrop.addEventListener('click', () => {
          this.close(false);
        });
      }

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.overlay && !this.overlay.classList.contains('hidden')) {
          this.close(false);
        }
      });
    },

    show({ title, message, icon = 'warning', type = 'confirm', confirmText = 'Ha', cancelText = 'Bekor qilish', danger = false }) {
      return new Promise((resolve) => {
        this.currentResolver = resolve;

        if (this.titleEl) this.titleEl.textContent = title || '';
        if (this.messageEl) this.messageEl.textContent = message || '';

        if (this.iconWrap) {
          this.iconWrap.className = `modal-icon-wrap icon-${icon}`;
          if (icon === 'warning') {
            this.iconWrap.innerHTML = `
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>`;
          } else if (icon === 'time') {
            this.iconWrap.innerHTML = `
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>`;
          } else if (icon === 'success') {
            this.iconWrap.innerHTML = `
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>`;
          } else {
            this.iconWrap.innerHTML = `
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>`;
          }
        }

        if (this.actionsEl) {
          this.actionsEl.innerHTML = '';

          if (type === 'confirm') {
            const cancelBtn = document.createElement('button');
            cancelBtn.type = 'button';
            cancelBtn.className = 'btn-modal-cancel';
            cancelBtn.textContent = cancelText;
            cancelBtn.addEventListener('click', () => this.close(false));
            this.actionsEl.appendChild(cancelBtn);

            const confirmBtn = document.createElement('button');
            confirmBtn.type = 'button';
            confirmBtn.className = danger ? 'btn-modal-danger' : 'btn-modal-primary';
            confirmBtn.textContent = confirmText;
            confirmBtn.addEventListener('click', () => this.close(true));
            this.actionsEl.appendChild(confirmBtn);

            setTimeout(() => confirmBtn.focus(), 50);
          } else {
            const okBtn = document.createElement('button');
            okBtn.type = 'button';
            okBtn.className = 'btn-modal-primary';
            okBtn.textContent = confirmText || 'Tushundim';
            okBtn.addEventListener('click', () => this.close(true));
            this.actionsEl.appendChild(okBtn);

            setTimeout(() => okBtn.focus(), 50);
          }
        }

        if (this.overlay) {
          this.overlay.classList.remove('hidden');
          this.overlay.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }
      });
    },

    close(result) {
      if (this.overlay) {
        this.overlay.classList.add('hidden');
        this.overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      if (this.currentResolver) {
        const resolve = this.currentResolver;
        this.currentResolver = null;
        resolve(result);
      }
    }
  };

  const QuizEngine = {
    // Current setup state
    selectedLevel: 'all',
    selectedTenseFilter: 'all',
    selectedCount: 10,
    selectedTimer: 0, // 0 = unlimited, in seconds

    // Active session state
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    userAnswers: [],
    weakTenses: {},
    sessionStartTime: null,
    timerInterval: null,
    remainingSeconds: 0,

    init() {
      ModalManager.init();
      this.cacheDOM();
      this.initTheme();
      this.bindEvents();
      this.updateSetupSummary();
    },

    cacheDOM() {
      // Screens
      this.screenTopics = document.getElementById('screen-topics');
      this.screenPractice = document.getElementById('screen-practice');
      this.screenQuizSetup = document.getElementById('screen-quiz-setup');
      this.screenQuizPlay = document.getElementById('screen-quiz-play');
      this.screenQuizResult = document.getElementById('screen-quiz-result');
      this.screenFlashcards = document.getElementById('screen-flashcards');

      // Top Tab Navigation & Theme Toggle
      this.navTabSpeaking = document.getElementById('tab-nav-speaking');
      this.navTabQuiz = document.getElementById('tab-nav-quiz');
      this.navTabFlashcards = document.getElementById('tab-nav-flashcards');
      this.themeToggleBtn = document.getElementById('theme-toggle-btn');

      // Setup DOM
      this.levelPills = document.querySelectorAll('.quiz-level-pill');
      this.tenseChips = document.querySelectorAll('.tense-chip');
      this.countPills = document.querySelectorAll('.quiz-count-pill');
      this.timerPills = document.querySelectorAll('.quiz-timer-pill');
      this.btnStartQuiz = document.getElementById('btn-start-quiz');
      this.setupSummaryText = document.getElementById('quiz-setup-summary');

      // Play DOM
      this.quizProgressBar = document.getElementById('quiz-progress-line');
      this.quizStepCounter = document.getElementById('quiz-step-counter');
      this.quizLevelBadge = document.getElementById('quiz-level-badge');
      this.quizTenseHint = document.getElementById('quiz-tense-hint');
      this.quizTimerChip = document.getElementById('quiz-timer-chip');
      this.quizTimerDisplay = document.getElementById('quiz-timer-display');
      this.quizSentenceBox = document.getElementById('quiz-sentence-box');
      this.quizFeedbackBox = document.getElementById('quiz-feedback-box');
      this.btnNextQuestion = document.getElementById('btn-quiz-next');
      this.btnQuitQuiz = document.getElementById('btn-quiz-quit');

      // Result DOM
      this.resultScoreNum = document.getElementById('result-score-num');
      this.resultScorePct = document.getElementById('result-score-pct');
      this.resultRatingBadge = document.getElementById('result-rating-badge');
      this.resultMessage = document.getElementById('result-message');
      this.resultTimeText = document.getElementById('result-time-text');
      this.resultWeakList = document.getElementById('result-weak-list');
      this.resultWeakContainer = document.getElementById('result-weak-container');
      this.btnRetakeQuiz = document.getElementById('btn-quiz-retake');
      this.btnChangeQuizSettings = document.getElementById('btn-quiz-change-settings');
      this.btnGoSpeaking = document.getElementById('btn-quiz-go-speaking');
    },

    initTheme() {
      const savedTheme = localStorage.getItem('english_mastery_theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

      document.documentElement.setAttribute('data-theme', initialTheme);
    },

    toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('english_mastery_theme', nextTheme);
      window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: nextTheme } }));
    },

    bindEvents() {
      // Theme Toggle
      if (this.themeToggleBtn) {
        this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
      }

      // Top Tab switcher
      if (this.navTabSpeaking) {
        this.navTabSpeaking.addEventListener('click', () => this.switchToSection('speaking'));
      }
      if (this.navTabQuiz) {
        this.navTabQuiz.addEventListener('click', () => this.switchToSection('quiz'));
      }
      if (this.navTabFlashcards) {
        this.navTabFlashcards.addEventListener('click', () => this.switchToSection('flashcards'));
      }

      // Setup Level selection
      this.levelPills.forEach(pill => {
        pill.addEventListener('click', () => {
          this.levelPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.selectedLevel = pill.getAttribute('data-level');
          this.updateSetupSummary();
        });
      });

      // Specific Tense Filter Chips
      this.tenseChips.forEach(chip => {
        chip.addEventListener('click', () => {
          this.tenseChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.selectedTenseFilter = chip.getAttribute('data-tense-filter') || 'all';
          this.updateSetupSummary();
        });
      });

      // Setup Count selection
      this.countPills.forEach(pill => {
        pill.addEventListener('click', () => {
          this.countPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.selectedCount = parseInt(pill.getAttribute('data-count'), 10) || 10;
          this.updateSetupSummary();
        });
      });

      // Setup Timer selection
      this.timerPills.forEach(pill => {
        pill.addEventListener('click', () => {
          this.timerPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.selectedTimer = parseInt(pill.getAttribute('data-timer'), 10) || 0;
          this.updateSetupSummary();
        });
      });

      // Start Quiz
      if (this.btnStartQuiz) {
        this.btnStartQuiz.addEventListener('click', () => this.startSession());
      }

      // Next Question
      if (this.btnNextQuestion) {
        this.btnNextQuestion.addEventListener('click', () => this.nextQuestion());
      }

      // Quit Quiz
      if (this.btnQuitQuiz) {
        this.btnQuitQuiz.addEventListener('click', async () => {
          const confirmed = await ModalManager.show({
            title: "Testni to'xtatish",
            message: "Haqiqatan ham testni to'xtatmoqchimisiz? Joriy urinish natijalari saqlanmaydi.",
            icon: "warning",
            type: "confirm",
            confirmText: "Ha, to'xtatish",
            cancelText: "Davom etish",
            danger: true
          });
          if (confirmed) {
            this.stopTimer();
            this.showScreen(this.screenQuizSetup);
          }
        });
      }

      // Retake Quiz
      if (this.btnRetakeQuiz) {
        this.btnRetakeQuiz.addEventListener('click', () => this.startSession());
      }

      // Change settings
      if (this.btnChangeQuizSettings) {
        this.btnChangeQuizSettings.addEventListener('click', () => {
          this.showScreen(this.screenQuizSetup);
        });
      }

      // Go to Speaking
      if (this.btnGoSpeaking) {
        this.btnGoSpeaking.addEventListener('click', () => {
          this.switchToSection('speaking');
        });
      }
    },

    switchToSection(section) {
      this.stopTimer();
      const tabs = [this.navTabSpeaking, this.navTabQuiz, this.navTabFlashcards];
      tabs.forEach(t => t && t.classList.remove('active'));

      if (section === 'speaking') {
        if (this.navTabSpeaking) this.navTabSpeaking.classList.add('active');
        this.showScreen(this.screenTopics);
      } else if (section === 'quiz') {
        if (window.SpeakingApp && window.SpeakingApp.UIManager && typeof window.SpeakingApp.UIManager.leavePracticeSession === 'function') {
          window.SpeakingApp.UIManager.leavePracticeSession();
        }
        if (this.navTabQuiz) this.navTabQuiz.classList.add('active');
        this.showScreen(this.screenQuizSetup);
      } else if (section === 'flashcards') {
        if (window.SpeakingApp && window.SpeakingApp.UIManager && typeof window.SpeakingApp.UIManager.leavePracticeSession === 'function') {
          window.SpeakingApp.UIManager.leavePracticeSession();
        }
        if (this.navTabFlashcards) this.navTabFlashcards.classList.add('active');
        this.showScreen(this.screenFlashcards);
        if (window.FlashcardEngine && typeof window.FlashcardEngine.renderCard === 'function') {
          window.FlashcardEngine.renderCard();
        }
      }
    },

    showScreen(targetScreen) {
      const allScreens = [
        this.screenTopics,
        this.screenPractice,
        this.screenQuizSetup,
        this.screenQuizPlay,
        this.screenQuizResult,
        this.screenFlashcards
      ];
      allScreens.forEach(s => {
        if (s) {
          s.classList.remove('active');
          s.setAttribute('aria-hidden', 'true');
        }
      });

      if (targetScreen) {
        targetScreen.classList.add('active');
        targetScreen.setAttribute('aria-hidden', 'false');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },

    updateSetupSummary() {
      if (!this.setupSummaryText) return;
      const pool = typeof QUIZ_QUESTIONS !== 'undefined' ? QUIZ_QUESTIONS : [];
      let filtered = pool;

      if (this.selectedLevel !== 'all') {
        filtered = filtered.filter(q => q.level === this.selectedLevel);
      }
      if (this.selectedTenseFilter !== 'all') {
        const key = this.selectedTenseFilter.toLowerCase();
        filtered = filtered.filter(q => q.tense.toLowerCase().includes(key));
      }

      let levelLabel = 'Barcha zamonlar';
      if (this.selectedLevel === 'A1') levelLabel = 'A1 Beginner';
      else if (this.selectedLevel === 'A2') levelLabel = 'A2 Elementary';
      else if (this.selectedLevel === 'B1') levelLabel = 'B1 Intermediate';

      let tenseNote = this.selectedTenseFilter === 'all' 
        ? '' 
        : ` • Filtr: ${this.selectedTenseFilter.toUpperCase()}`;

      let timerText = 'Cheklovsiz rejim';
      if (this.selectedTimer === 180) timerText = '3 daqiqa';
      else if (this.selectedTimer === 300) timerText = '5 daqiqa';
      else if (this.selectedTimer === 600) timerText = '10 daqiqa';

      this.setupSummaryText.textContent = `Tanlangan: ${levelLabel}${tenseNote} • ${this.selectedCount} ta savol (${filtered.length} ta bazadan) • ${timerText}.`;
    },

    shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    },

    startSession() {
      this.stopTimer();

      const pool = typeof QUIZ_QUESTIONS !== 'undefined' ? QUIZ_QUESTIONS : [];
      let filtered = pool;

      // Filter by Level
      if (this.selectedLevel !== 'all') {
        filtered = filtered.filter(q => q.level === this.selectedLevel);
      }

      // Filter by Specific Tense Sub-topic
      if (this.selectedTenseFilter !== 'all') {
        const key = this.selectedTenseFilter.toLowerCase();
        const specific = filtered.filter(q => q.tense.toLowerCase().includes(key));
        if (specific.length > 0) {
          filtered = specific;
        } else {
          // If no match in level, search entire pool
          const anyMatch = pool.filter(q => q.tense.toLowerCase().includes(key));
          if (anyMatch.length > 0) filtered = anyMatch;
        }
      }

      if (filtered.length === 0) {
        filtered = pool;
      }

      // Fisher-Yates Unbiased True Random Shuffle
      const shuffled = this.shuffleArray(filtered);
      this.questions = shuffled.slice(0, Math.min(this.selectedCount, shuffled.length));

      this.currentIndex = 0;
      this.score = 0;
      this.userAnswers = [];
      this.weakTenses = {};
      this.sessionStartTime = Date.now();

      // Timer Setup
      if (this.selectedTimer > 0) {
        this.remainingSeconds = this.selectedTimer;
        this.startTimer();
      } else {
        if (this.quizTimerChip) {
          this.quizTimerChip.classList.remove('timer-warning');
        }
        if (this.quizTimerDisplay) {
          this.quizTimerDisplay.textContent = 'Cheklovsiz';
        }
      }

      this.showScreen(this.screenQuizPlay);
      this.renderCurrentQuestion();
    },

    startTimer() {
      this.updateTimerDisplay();
      if (this.quizTimerChip) {
        this.quizTimerChip.classList.remove('timer-warning');
      }

      this.timerInterval = setInterval(() => {
        this.remainingSeconds--;
        this.updateTimerDisplay();

        if (this.remainingSeconds <= 30 && this.quizTimerChip) {
          this.quizTimerChip.classList.add('timer-warning');
        }

        if (this.remainingSeconds <= 0) {
          this.stopTimer();
          ModalManager.show({
            title: "Vaqt tugadi!",
            message: "Ajratilgan vaqt yakuniga yetdi. Sizning hozirgi natijalaringiz hisoblanmoqda...",
            icon: "time",
            type: "alert",
            confirmText: "Natijalarni ko'rish"
          }).then(() => {
            this.finishSession(true);
          });
        }
      }, 1000);
    },

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },

    updateTimerDisplay() {
      if (!this.quizTimerDisplay) return;
      const mins = Math.floor(Math.max(0, this.remainingSeconds) / 60);
      const secs = Math.max(0, this.remainingSeconds) % 60;
      this.quizTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    },

    renderCurrentQuestion() {
      this.answered = false;
      const q = this.questions[this.currentIndex];
      if (!q) {
        this.finishSession();
        return;
      }

      // Update counters & progress
      const total = this.questions.length;
      const currentNum = this.currentIndex + 1;
      this.quizStepCounter.textContent = `Savol ${currentNum} / ${total}`;
      const pct = ((currentNum - 1) / total) * 100;
      this.quizProgressBar.style.width = `${pct}%`;

      this.quizLevelBadge.textContent = `${q.level} • ${q.tense}`;
      this.quizTenseHint.textContent = "Quyidagi gapda 4 qismdan biri zamon jihatidan xatodir. Xato qismni bosing:";

      // Render sentence parts [A], [B], [C], [D]
      this.quizSentenceBox.innerHTML = '';
      
      const sentenceRow = document.createElement('div');
      sentenceRow.className = 'quiz-sentence-row';

      q.sentenceParts.forEach((part) => {
        const partBtn = document.createElement('button');
        partBtn.type = 'button';
        partBtn.className = 'quiz-part-btn';
        partBtn.setAttribute('data-id', part.id);
        partBtn.setAttribute('aria-label', `Variant ${part.id}: ${part.text}`);

        partBtn.innerHTML = `
          <span class="part-pill">[${part.id}]</span>
          <span class="part-text">${this.escapeHTML(part.text)}</span>
        `;

        partBtn.addEventListener('click', () => this.handlePartSelect(part.id));
        sentenceRow.appendChild(partBtn);
      });

      this.quizSentenceBox.appendChild(sentenceRow);

      // Hide feedback box initially
      this.quizFeedbackBox.classList.add('hidden');
      this.quizFeedbackBox.innerHTML = '';
      this.btnNextQuestion.classList.add('hidden');
    },

    handlePartSelect(selectedPartId) {
      if (this.answered) return;
      this.answered = true;

      const q = this.questions[this.currentIndex];
      const errorPart = q.sentenceParts.find(p => p.isError);
      const isCorrect = (selectedPartId === errorPart.id);

      if (isCorrect) {
        this.score++;
      } else {
        this.weakTenses[q.tense] = (this.weakTenses[q.tense] || 0) + 1;
      }

      this.userAnswers.push({
        question: q,
        selectedPartId,
        isCorrect
      });

      // Style parts
      const allPartBtns = this.quizSentenceBox.querySelectorAll('.quiz-part-btn');
      allPartBtns.forEach(btn => {
        btn.disabled = true;
        const pid = btn.getAttribute('data-id');
        if (pid === errorPart.id) {
          btn.classList.add('part-actual-error');
        }
        if (pid === selectedPartId) {
          btn.classList.add(isCorrect ? 'part-selected-correct' : 'part-selected-wrong');
        }
      });

      // Show instant feedback box
      this.showInstantFeedback(isCorrect, errorPart, q);

      // Show Next button
      const isLast = (this.currentIndex === this.questions.length - 1);
      this.btnNextQuestion.innerHTML = `
        <span>${isLast ? "Natijalarni ko'rish" : "Keyingi savol"}</span>
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      `;
      this.btnNextQuestion.classList.remove('hidden');
      this.btnNextQuestion.focus();
    },

    showInstantFeedback(isCorrect, errorPart, q) {
      this.quizFeedbackBox.className = `quiz-feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

      const statusTitle = isCorrect 
        ? "To'g'ri topdingiz!" 
        : "Noto'g'ri tanlov. Xato boshqa qismda edi.";

      this.quizFeedbackBox.innerHTML = `
        <div class="feedback-header">
          <span class="feedback-badge">${isCorrect ? '<svg class="badge-icon-svg" viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:-1px;margin-right:4px;"><polyline points="3.5 8.5 6.5 11.5 12.5 4.5"/></svg>To‘g‘ri' : '<svg class="badge-icon-svg" viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:-1px;margin-right:4px;"><line x1="3.5" y1="3.5" x2="12.5" y2="12.5"/><line x1="12.5" y1="3.5" x2="3.5" y2="12.5"/></svg>Xato'}</span>
          <h3 class="feedback-title">${statusTitle}</h3>
        </div>
        <div class="feedback-correction">
          <div class="correction-item">
            <span class="correction-label">Gapdagi xato:</span>
            <span class="correction-wrong">[${errorPart.id}] "${this.escapeHTML(errorPart.text)}"</span>
          </div>
          <div class="correction-arrow" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="14" y2="8"/><polyline points="9 3 14 8 9 13"/></svg></div>
          <div class="correction-item">
            <span class="correction-label">To'g'ri shakl:</span>
            <span class="correction-right">"${this.escapeHTML(errorPart.correction)}"</span>
          </div>
        </div>
        <div class="feedback-explanation">
          <p class="explanation-title">Grammatik izoh (${q.tense}):</p>
          <p class="explanation-body">${this.escapeHTML(errorPart.explanation)}</p>
        </div>
      `;

      this.quizFeedbackBox.classList.remove('hidden');
    },

    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.renderCurrentQuestion();
      } else {
        this.finishSession();
      }
    },

    finishSession(timeRanOut = false) {
      this.stopTimer();

      const total = this.questions.length;
      const pct = Math.round((this.score / total) * 100);

      this.resultScoreNum.textContent = `${this.score} / ${total}`;
      this.resultScorePct.textContent = `${pct}%`;

      // Calculate elapsed time
      if (this.sessionStartTime && this.resultTimeText) {
        const elapsedSec = Math.floor((Date.now() - this.sessionStartTime) / 1000);
        const mm = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
        const ss = String(elapsedSec % 60).padStart(2, '0');
        this.resultTimeText.textContent = `Sarflangan vaqt: ${mm}:${ss}${timeRanOut ? ' (Vaqt tugadi)' : ''}`;
      }

      // Performance badge & description
      let badge = 'Yaxshi natija';
      let message = 'Grammatika bo‘yicha yaxshi natija ko‘rsatdingiz!';
      if (pct === 100) {
        badge = 'A’lo • Mukammal';
        message = 'Barcha zamonlar bo‘yicha savollarga 100% to‘g‘ri javob berdingiz! Qoyilmaqom bilim!';
      } else if (pct >= 80) {
        badge = 'Yaxshi • Yuqori';
        message = 'Ajoyib natija! Zamonlar qoidalarini mustahkam o‘zlashtirgansiz.';
      } else if (pct >= 60) {
        badge = 'Qoniqarli';
        message = 'Yaxshi urinish, lekin ayrim zamon shakllarida xatoliklar mavjud. Quyidagi tavsiyalarga e’tibor bering.';
      } else {
        badge = 'Ko‘proq mashq kerak';
        message = 'Zamonlar bo‘yicha ko‘proq mashq qilish va qoidalarni qayta o‘rganish tavsiya etiladi.';
      }

      this.resultRatingBadge.textContent = badge;
      this.resultMessage.textContent = message;

      // Weak tenses analysis
      const weakKeys = Object.keys(this.weakTenses);
      if (weakKeys.length > 0) {
        this.resultWeakContainer.classList.remove('hidden');
        this.resultWeakList.innerHTML = '';
        weakKeys.forEach(tense => {
          const count = this.weakTenses[tense];
          const li = document.createElement('li');
          li.className = 'weak-tense-item';
          li.innerHTML = `
            <span class="weak-tense-name">${this.escapeHTML(tense)}</span>
            <span class="weak-tense-note">${count} ta xato • bu zamon qoidasini takrorlang</span>
          `;
          this.resultWeakList.appendChild(li);
        });
      } else {
        this.resultWeakContainer.classList.add('hidden');
      }

      this.showScreen(this.screenQuizResult);
    },

    escapeHTML(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
  };

  // Expose globally
  window.ModalManager = ModalManager;
  window.QuizEngine = QuizEngine;

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => QuizEngine.init());
  } else {
    QuizEngine.init();
  }
})();
