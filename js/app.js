/**
 * CEFR Speaking Practice (A1 • A2 • B1) - Minimalist Teleprompter App
 * Architecture:
 * - AudioEngine: Soft voice prompt cue ("Speak fast and clear")
 * - ScrollEngine: Smooth WPM-driven teleprompter with blank slowdown
 * - UIManager: Screen transitions, controls, keyboard shortcuts, DOM bindings
 */

'use strict';

// ============================================================================
// 1. DATA REPOSITORIES (Default / Fallback for direct file:// launch)
// ============================================================================

const DEFAULT_TOPICS = [
  // ==========================================
  // CEFR LEVEL A1 (Beginner)
  // ==========================================
  {
    id: 1,
    level: "A1",
    levelName: "A1 Beginner",
    title: "Introducing myself and my family",
    grammarFocus: "Present simple, verb to be, family words",
    theme: {
      name: "Warm Linen",
      bg: "#F8F4EE",
      text: "#221C16",
      border: "#E4D9C8",
      cardBg: "#FAF6F1",
      badgeBg: "#EDE4D6"
    },
    text: "Hello! My name is Alex and I am twenty-two years old. I live in a lovely house in a quiet neighborhood with my family. My family is very friendly, welcoming, and kind. My father works as an architect and he is a hardworking, patient person. My mother is a talented teacher and she enjoys cooking delicious meals for all of us. I also have an older brother, who is always cheerful, funny, and supportive. Every evening, we sit together around the dinner table, share our warm food, and talk about our daily experiences. On Sundays, we usually go for a refreshing walk in the central park. I truly love and cherish my family because they inspire me and always support me in everything I do."
  },
  {
    id: 2,
    level: "A1",
    levelName: "A1 Beginner",
    title: "My daily routine",
    grammarFocus: "Present simple, daily actions, time phrases",
    theme: {
      name: "Tranquil Sage",
      bg: "#F0F5F1",
      text: "#1A251E",
      border: "#CFDDD2",
      cardBg: "#F4F8F5",
      badgeBg: "#DAE7DD"
    },
    text: "Every weekday, my morning starts bright and early at seven o'clock. First, I wash my face, brush my teeth, and get dressed in comfortable clothes. Then, I enjoy a wholesome breakfast with fresh toast, fruit, and a warm cup of green tea. At eight o'clock in the morning, I leave home and travel to the university library by bus. In the afternoon, I eat a healthy lunch with my close friends and study English grammar. Later in the evening, I return home, relax on the sofa, and listen to calm acoustic music. Before going to bed at eleven o'clock, I read an inspiring short story and prepare my schedule for tomorrow."
  },
  {
    id: 3,
    level: "A1",
    levelName: "A1 Beginner",
    title: "My home and neighborhood",
    grammarFocus: "There is / There are, adjectives, prepositions",
    theme: {
      name: "Morning Mist",
      bg: "#F0F4F8",
      text: "#17232F",
      border: "#D0DEEC",
      cardBg: "#F4F7FB",
      badgeBg: "#DAE5F1"
    },
    text: "I live in a bright and comfortable apartment in a peaceful district. My neighborhood is small and pleasantly quiet, yet it offers everything I need for daily life. Near my home, there is a beautiful green park and a friendly local bakery where I buy fresh bread every morning. Inside my home, my favorite space is the study corner because it is naturally lit and calm. In this room, there is a large window overlooking the garden, a comfortable armchair, and a wooden desk for my laptop. In the evenings, I like sitting by the window and watching the gentle evening breeze move through the trees. It is a wonderfully pleasant place to live."
  },

  // ==========================================
  // CEFR LEVEL A2 (Elementary)
  // ==========================================
  {
    id: 4,
    level: "A2",
    levelName: "A2 Elementary",
    title: "Where I live: Comparing two places",
    grammarFocus: "Comparatives, simple contrast (than, but)",
    theme: {
      name: "Soft Almond",
      bg: "#F7F2EC",
      text: "#261E16",
      border: "#E5DACB",
      cardBg: "#FAF6F1",
      badgeBg: "#EDE2D3"
    },
    text: "At the moment, I live in an energetic modern city, which offers a completely different atmosphere compared to my previous hometown in the countryside. My current city is much larger and more modern than where I lived before. Here, the streets are livelier and the grocery markets are located just a few steps from my apartment. On the other hand, the air in my old hometown was noticeably fresher, and the pace of daily life was significantly calmer. People in the city are always moving quickly, yet they remain polite, respectful, and helpful. Even though apartment rent here is more expensive, I definitely prefer living here because there are reliable transport links and superior facilities for study and self-improvement."
  },
  {
    id: 5,
    level: "A2",
    levelName: "A2 Elementary",
    title: "Hobbies and free time activities",
    grammarFocus: "Likes/dislikes, expressing reasons (because, so)",
    theme: {
      name: "Gentle Lavender",
      bg: "#F5F2F8",
      text: "#231A2E",
      border: "#DED5EA",
      cardBg: "#F8F5FB",
      badgeBg: "#E6DEEF"
    },
    text: "During my free time away from work and studies, I genuinely enjoy landscape photography and painting. I started these creative pastimes two years ago because they help me decompress and clear my thoughts after a busy week. Whenever I have an open Saturday afternoon, I love to practice sketching with friends at our local community studio. Another activity that brings me great joy is cycling, which I regularly do along scenic river paths. It is both invigorating and physically healthy, so I never feel exhausted while doing it. Engaging in these enjoyable pursuits keeps me optimistic and provides me with renewed focus for the week ahead."
  },
  {
    id: 6,
    level: "A2",
    levelName: "A2 Elementary",
    title: "A memorable holiday trip",
    grammarFocus: "Past simple (regular and irregular), time connectors",
    theme: {
      name: "Sunlit Peach",
      bg: "#FAF4ED",
      text: "#291E15",
      border: "#EADBCB",
      cardBg: "#FCF7F1",
      badgeBg: "#F0E4D5"
    },
    text: "Last summer, I went on a wonderful journey to the coastal mountains together with my close companions. We travelled there by morning train, and the scenic route took approximately five hours through lush green valleys. The weather was pleasantly sunny and warm during our entire stay. On our first morning, we explored the historic castle fortress and captured dozens of stunning photographs. Later in the afternoon, we strolled through the cobblestone old town and tasted delicious regional specialties at a cozy family restaurant. On one afternoon, we took a wrong turn along a winding footpath, but a friendly local villager kindly guided us back. That holiday was truly memorable because I discovered fascinating cultural traditions and made lasting memories with wonderful people."
  },

  // ==========================================
  // CEFR LEVEL B1 (Intermediate)
  // ==========================================
  {
    id: 7,
    level: "B1",
    levelName: "B1 Intermediate",
    title: "Education and work experience",
    grammarFocus: "Present perfect vs past simple, career growth",
    theme: {
      name: "Pale Seafoam",
      bg: "#EFF6F3",
      text: "#182720",
      border: "#CFE2D8",
      cardBg: "#F3F9F6",
      badgeBg: "#DAE9E1"
    },
    text: "Over the past few years, I have placed strong priority on my personal education and continuous career growth. After completing my secondary education with distinction, I decided to specialize in digital design and communication because I wanted to acquire modern, practical skills. Recently, I completed an intensive project management certification, which significantly improved my analytical thinking and problem-solving abilities. In my current role within a creative team, I collaborate closely with international colleagues to deliver high-quality assignments within strict deadlines. Although handling complex responsibilities was demanding in the beginning, I have developed structured time management habits and a resilient work ethic. Looking forward, I aspire to gain broader global experience and lead innovative educational initiatives."
  },
  {
    id: 8,
    level: "B1",
    levelName: "B1 Intermediate",
    title: "Technology in my daily life",
    grammarFocus: "Giving opinions, expressing advantages/disadvantages",
    theme: {
      name: "Quiet Pearl",
      bg: "#F1F3F7",
      text: "#1A212B",
      border: "#D3DAE5",
      cardBg: "#F5F7FA",
      badgeBg: "#DCE2ED"
    },
    text: "In my view, modern digital technology plays an indispensable role in how we acquire knowledge, communicate across borders, and structure our daily lives. I routinely utilize specialized productivity platforms and educational applications to coordinate teamwork and master foreign languages effectively. On the one hand, smart devices enable us to access global research and connect with mentors instantly from any location. On the other hand, spending excessive time on social media feeds can lead to digital fatigue and fragmented concentration. For this reason, I establish intentional tech-free intervals during the evening and keep notifications silenced during focused reading sessions. Ultimately, technology serves as an exceptionally powerful instrument when guided by mindfulness and disciplined personal habits."
  },
  {
    id: 9,
    level: "B1",
    levelName: "B1 Intermediate",
    title: "Health, food and habits",
    grammarFocus: "Modals for advice (should), conditional sentences (if)",
    theme: {
      name: "Chamomile Cream",
      bg: "#F7F4EC",
      text: "#242017",
      border: "#E2DAC7",
      cardBg: "#FAF7F1",
      badgeBg: "#EBE3D2"
    },
    text: "Cultivating sustainable physical and psychological well-being is vital for maintaining productivity and long-term vitality. If we desire sustained mental clarity throughout demanding workdays, we should prioritize nutrient-rich foods, stay hydrated, and honor consistent sleep schedules. I strongly believe individuals should incorporate more seasonal produce into their meals while gradually reducing reliance on processed snacks and sugary beverages. Furthermore, if you engage in regular cardiovascular exercise, such as brisk jogging or swimming three times each week, your stamina and emotional resilience improve dramatically. Whenever stress begins to accumulate, taking a peaceful walk in natural surroundings and practicing mindful breathing restores balance and renewed energy."
  },
  {
    id: 10,
    level: "B1",
    levelName: "B1 Intermediate",
    title: "Future plans and personal ambitions",
    grammarFocus: "Future intentions (going to, planning to, by the time)",
    theme: {
      name: "Cashmere Rose",
      bg: "#F8F1F2",
      text: "#2A1A1E",
      border: "#E8D2D7",
      cardBg: "#FAF4F5",
      badgeBg: "#EEDCE0"
    },
    text: "Reflecting upon my trajectory for the upcoming years, I have formulated clear and purposeful objectives for my professional and personal life. First of all, I intend to achieve an advanced international English qualification by the conclusion of this academic term. In order to realize this ambition, I dedicate uninterrupted time every single morning to reading aloud, expanding vocabulary, and refining pronunciation. Furthermore, I plan to travel abroad on a cultural exchange program, where I can immerse myself in diverse perspectives and test my communication skills in real-world environments. By the time I complete my current research projects, I hope to launch an independent creative platform. Pursuing these aspirations will demand discipline, yet I look forward with genuine enthusiasm to each milestone."
  }
];

// Active state
let activeTopics = DEFAULT_TOPICS;

// ============================================================================
// 2. AUDIO ENGINE MODULE (Voice Prompt Cue)
// ============================================================================
const AudioEngine = (() => {
  let audioCtx = null;

  function unlockAudioContext() {
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {
      // AudioContext unavailable or restricted
    }
  }

  /**
   * Plays soft intro audio cue once ("Speak fast and clear").
   * Prioritizes local assets/audio/intro.mp3 -> speechSynthesis fallback.
   */
  function playIntro() {
    unlockAudioContext();

    return new Promise((resolve) => {
      let resolved = false;
      const finish = () => {
        if (!resolved) {
          resolved = true;
          resolve();
        }
      };

      const speakWithTTS = () => {
        if (!('speechSynthesis' in window)) {
          finish();
          return;
        }

        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance("Speak fast and clear");

          const setVoiceAndSpeak = () => {
            const voices = window.speechSynthesis.getVoices() || [];
            const femaleEnVoice = voices.find(v => {
              const langMatch = v.lang && v.lang.toLowerCase().startsWith('en');
              const nameLower = v.name.toLowerCase();
              return langMatch && (
                nameLower.includes('female') ||
                nameLower.includes('zira') ||
                nameLower.includes('samantha') ||
                nameLower.includes('victoria') ||
                nameLower.includes('natural')
              );
            }) || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'));

            if (femaleEnVoice) {
              utterance.voice = femaleEnVoice;
            }
            utterance.rate = 0.95;
            utterance.pitch = 1.05;
            utterance.onend = finish;
            utterance.onerror = finish;
            window.speechSynthesis.speak(utterance);
            setTimeout(finish, 1800);
          };

          const voices = window.speechSynthesis.getVoices();
          if (voices && voices.length > 0) {
            setVoiceAndSpeak();
          } else {
            window.speechSynthesis.onvoiceschanged = () => {
              window.speechSynthesis.onvoiceschanged = null;
              setVoiceAndSpeak();
            };
            setTimeout(setVoiceAndSpeak, 250);
          }
        } catch (e) {
          finish();
        }
      };

      try {
        const introAudio = new Audio();
        introAudio.preload = 'auto';
        introAudio.src = 'assets/audio/intro.mp3';
        introAudio.onended = finish;
        introAudio.onerror = () => speakWithTTS();

        const playPromise = introAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => speakWithTTS());
        }
      } catch (e) {
        speakWithTTS();
      }

      setTimeout(finish, 1500);
    });
  }

  return {
    unlockAudioContext,
    playIntro
  };
})();

// ============================================================================
// 3. SCROLL ENGINE MODULE (Buttery-Smooth GPU-Accelerated Teleprompter)
// ============================================================================
const ScrollEngine = (() => {
  let viewportEl = null;
  let contentEl = null;
  let textContainerEl = null;
  let progressBarEl = null;
  let onCompleteCallback = null;
  let onPauseCallback = null;

  // Animation state
  let animationFrameId = null;
  let lastTimestamp = 0;
  let isRunning = false;
  let isPaused = false;

  // Reading metrics
  let wpm = 110; // Default comfortable pace
  let totalWords = 0;
  let scrollDistance = 0;
  let scrollDurationMs = 0;
  let currentScrollY = 0;

  function init(viewport, content, textContainer, progressBar, onComplete, onPause) {
    viewportEl = viewport;
    contentEl = content;
    textContainerEl = textContainer;
    progressBarEl = progressBar;
    onCompleteCallback = onComplete;
    onPauseCallback = onPause;

    // Direct touch & manual wheel interaction detection
    attachScrollListeners();
  }

  function attachScrollListeners() {
    if (!viewportEl) return;

    let touchStartY = 0;
    viewportEl.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    viewportEl.addEventListener('touchmove', (e) => {
      if (isRunning && !isPaused) {
        const delta = Math.abs(e.touches[0].clientY - touchStartY);
        if (delta > 10) {
          pause();
        }
      }
    }, { passive: true });

    viewportEl.addEventListener('wheel', (e) => {
      if (isRunning && !isPaused && Math.abs(e.deltaY) > 5) {
        pause();
      }
    }, { passive: true });
  }

  function loadText(rawText) {
    stop();
    currentScrollY = 0;
    if (contentEl) {
      contentEl.style.transform = `translate3d(0, 0, 0)`;
    }
    if (progressBarEl) {
      progressBarEl.style.width = '0%';
    }

    if (!textContainerEl) return;
    textContainerEl.innerHTML = '';

    const lines = rawText.split('\n');
    let countedWords = 0;

    lines.forEach((line) => {
      const trimmed = line.trim();
      const p = document.createElement('p');
      p.className = 'teleprompter-line';

      if (trimmed === '') {
        p.classList.add('blank-pause-line');
        p.innerHTML = '&nbsp;';
      } else {
        p.textContent = trimmed;
        const words = trimmed.split(/\s+/).filter(Boolean);
        countedWords += words.length;
      }
      textContainerEl.appendChild(p);
    });

    totalWords = Math.max(1, countedWords);
    recalculateMetrics();
  }

  function recalculateMetrics() {
    if (!viewportEl || !contentEl) return;

    const viewportHeight = viewportEl.clientHeight;
    const contentHeight = contentEl.scrollHeight;

    // Scroll until the last line of text passes through the upper reading zone
    scrollDistance = Math.max(0, contentHeight - viewportHeight * 0.45);

    // Continuous exact speed: duration is strictly (totalWords / wpm) * 60 * 1000 ms
    const wordsPerSec = Math.max(1, wpm) / 60;
    scrollDurationMs = (totalWords / wordsPerSec) * 1000;
  }

  function start() {
    if (isRunning && !isPaused) return;

    recalculateMetrics();
    isRunning = true;
    isPaused = false;
    lastTimestamp = performance.now();

    if (onPauseCallback) onPauseCallback(false);
    animationFrameId = requestAnimationFrame(step);
  }

  function pause() {
    if (!isRunning || isPaused) return;
    isPaused = true;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    if (onPauseCallback) onPauseCallback(true);
  }

  function resume() {
    if (!isRunning || !isPaused) return;
    isPaused = false;
    lastTimestamp = performance.now();
    if (onPauseCallback) onPauseCallback(false);
    animationFrameId = requestAnimationFrame(step);
  }

  function togglePause() {
    if (!isRunning) {
      start();
      return false;
    }
    if (isPaused) {
      resume();
      return false;
    } else {
      pause();
      return true;
    }
  }

  function stop() {
    isRunning = false;
    isPaused = false;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function restart() {
    stop();
    currentScrollY = 0;
    if (contentEl) {
      contentEl.style.transform = `translate3d(0, 0, 0)`;
    }
    if (progressBarEl) {
      progressBarEl.style.width = '0%';
    }
    start();
  }

  function step(timestamp) {
    if (!isRunning || isPaused) return;

    const elapsedMs = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    if (scrollDurationMs > 0 && scrollDistance > 0) {
      const pixelsPerMs = scrollDistance / scrollDurationMs;
      currentScrollY += pixelsPerMs * elapsedMs;

      // Update hardware GPU position
      if (contentEl) {
        contentEl.style.transform = `translate3d(0, -${currentScrollY}px, 0)`;
      }

      // Update progress bar
      if (progressBarEl) {
        const pct = Math.min(100, (currentScrollY / scrollDistance) * 100);
        progressBarEl.style.width = `${pct}%`;
      }

      // Check session completion
      if (currentScrollY >= scrollDistance) {
        currentScrollY = scrollDistance;
        if (contentEl) {
          contentEl.style.transform = `translate3d(0, -${currentScrollY}px, 0)`;
        }
        if (progressBarEl) {
          progressBarEl.style.width = '100%';
        }
        stop();
        if (onCompleteCallback) {
          onCompleteCallback();
        }
        return;
      }
    }

    animationFrameId = requestAnimationFrame(step);
  }

  function setWpm(newWpm) {
    wpm = Math.max(30, Math.min(300, newWpm));
    if (totalWords > 0) {
      const wordsPerSec = wpm / 60;
      scrollDurationMs = (totalWords / wordsPerSec) * 1000;
    }
  }

  function getWpm() {
    return wpm;
  }

  function isRunningState() {
    return isRunning;
  }

  function isPausedState() {
    return isPaused;
  }

  return {
    init,
    loadText,
    start,
    pause,
    resume,
    togglePause,
    stop,
    restart,
    setWpm,
    getWpm,
    isRunning: isRunningState,
    isPaused: isPausedState
  };
})();

// ============================================================================
// 4. UI MANAGER & APPLICATION CONTROLLER
// ============================================================================
const UIManager = (() => {
  // Screens
  const screenTopics = document.getElementById('screen-topics');
  const screenPractice = document.getElementById('screen-practice');

  // Containers
  const topicsContainer = document.getElementById('topics-container');
  const teleprompterViewport = document.getElementById('teleprompter-viewport');
  const teleprompterContent = document.getElementById('teleprompter-content');
  const teleprompterText = document.getElementById('teleprompter-text');
  const progressBar = document.getElementById('progress-bar');
  const countdownOverlay = document.getElementById('countdown-overlay');
  const countdownNumber = document.getElementById('countdown-number');

  // Practice screen controls
  const btnTogglePause = document.getElementById('btn-toggle-pause');
  const btnRestart = document.getElementById('btn-restart');
  const btnBack = document.getElementById('btn-back');

  // Reading speed controls
  const speedSlider = document.getElementById('speed-slider');
  const speedDisplay = document.getElementById('speed-display');
  const speedPresetButtons = document.querySelectorAll('.speed-preset-btn');
  const btnSpeedDown = document.getElementById('btn-speed-down');
  const btnSpeedUp = document.getElementById('btn-speed-up');

  // Level filter buttons & state
  const levelButtons = document.querySelectorAll('.level-btn');
  let selectedLevel = 'all';

  // Session state
  let currentTopic = null;
  let sessionStartTime = 0;
  let isSessionActive = false;

  let countdownTimer = null;
  let countdownResolver = null;

  function init() {
    // Initialize ScrollEngine with hardware GPU content element
    ScrollEngine.init(
      teleprompterViewport,
      teleprompterContent,
      teleprompterText,
      progressBar,
      handleSessionComplete,
      (isPaused) => {
        btnTogglePause.textContent = isPaused ? 'Resume' : 'Pause';
      }
    );

    // Render topics grid
    renderTopicsList();

    // Sync initial speed state
    updateSpeedUI(ScrollEngine.getWpm());

    // Attach event listeners
    bindEvents();
  }

  function hexToRgba(hex, alpha) {
    if (!hex) return `rgba(248, 244, 238, ${alpha})`;
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function applyTopicTheme(theme) {
    if (!theme) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const root = document.documentElement;

    if (isDark) {
      root.style.setProperty('--color-topic-bg', '#0B0F19');
      root.style.setProperty('--color-topic-text', '#F8FAFC');
      root.style.setProperty('--color-topic-border', '#243248');

      const topFade = 'rgba(11, 15, 25, 1)';
      const topFadeTrans = 'rgba(11, 15, 25, 0)';
      root.style.setProperty('--color-topic-fade-top', `linear-gradient(to bottom, ${topFade} 0%, ${topFade} 20%, ${topFadeTrans} 100%)`);
      root.style.setProperty('--color-topic-fade-bottom', `linear-gradient(to top, ${topFade} 0%, ${topFade} 20%, ${topFadeTrans} 100%)`);
      return;
    }

    root.style.setProperty('--color-topic-bg', theme.bg || '#F8F4EE');
    root.style.setProperty('--color-topic-text', theme.text || '#221C16');
    root.style.setProperty('--color-topic-border', theme.border || '#E4D9C8');

    const topFade = hexToRgba(theme.bg || '#F8F4EE', 1);
    const topFadeTrans = hexToRgba(theme.bg || '#F8F4EE', 0);
    root.style.setProperty('--color-topic-fade-top', `linear-gradient(to bottom, ${topFade} 0%, ${topFade} 20%, ${topFadeTrans} 100%)`);
    root.style.setProperty('--color-topic-fade-bottom', `linear-gradient(to top, ${topFade} 0%, ${topFade} 20%, ${topFadeTrans} 100%)`);
  }

  function renderTopicsList() {
    if (!topicsContainer) return;
    topicsContainer.innerHTML = '';

    const filtered = selectedLevel === 'all'
      ? activeTopics
      : activeTopics.filter(t => t.level === selectedLevel);

    if (filtered.length === 0) {
      const emptyMsg = document.createElement('p');
      emptyMsg.className = 'page-instruction';
      emptyMsg.textContent = 'No topics found for this level.';
      topicsContainer.appendChild(emptyMsg);
      return;
    }

    filtered.forEach((topic) => {
      const card = document.createElement('article');
      card.className = 'topic-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');

      if (topic.theme) {
        card.style.setProperty('--topic-card-bg', topic.theme.cardBg || topic.theme.bg || '#FFFFFF');
        card.style.setProperty('--topic-card-border', topic.theme.border || '#E5E5E5');
        if (topic.theme.badgeBg) {
          card.style.setProperty('--topic-badge-bg', topic.theme.badgeBg);
        }
      }

      const topRow = document.createElement('div');
      topRow.className = 'topic-card-top';

      const indexLabel = document.createElement('span');
      indexLabel.className = 'topic-index-badge';
      indexLabel.textContent = topic.id < 10 ? `0${topic.id}` : `${topic.id}`;

      const badgesWrap = document.createElement('div');
      badgesWrap.className = 'topic-card-badges';

      if (topic.theme && topic.theme.name) {
        const themeTag = document.createElement('span');
        themeTag.className = 'topic-theme-tag';
        themeTag.textContent = topic.theme.name;
        badgesWrap.appendChild(themeTag);
      }

      const levelBadge = document.createElement('span');
      levelBadge.className = 'topic-level-badge';
      levelBadge.textContent = topic.levelName || topic.level || 'CEFR';
      if (topic.theme && topic.theme.badgeBg) {
        levelBadge.style.setProperty('--topic-badge-bg', topic.theme.badgeBg);
      }
      badgesWrap.appendChild(levelBadge);

      topRow.appendChild(indexLabel);
      topRow.appendChild(badgesWrap);

      const titleEl = document.createElement('h2');
      titleEl.className = 'topic-title';
      titleEl.textContent = topic.title;

      const bottomEl = document.createElement('div');
      bottomEl.className = 'topic-card-bottom';

      const grammarEl = document.createElement('p');
      grammarEl.className = 'topic-grammar';
      grammarEl.textContent = topic.grammarFocus;

      bottomEl.appendChild(grammarEl);

      card.appendChild(topRow);
      card.appendChild(titleEl);
      card.appendChild(bottomEl);

      card.addEventListener('click', () => {
        startTopicSession(topic);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startTopicSession(topic);
        }
      });

      topicsContainer.appendChild(card);
    });
  }

  function updateSpeedUI(wpm) {
    if (speedSlider) {
      speedSlider.value = wpm;
    }
    if (speedDisplay) {
      speedDisplay.textContent = `${wpm} WPM`;
    }
    speedPresetButtons.forEach((btn) => {
      const btnWpm = parseInt(btn.dataset.wpm, 10);
      const isPreset = btnWpm === wpm;
      btn.classList.toggle('active', isPreset);
      btn.setAttribute('aria-checked', isPreset ? 'true' : 'false');
    });
  }

  function setSpeed(wpm) {
    const clamped = Math.max(40, Math.min(250, wpm));
    ScrollEngine.setWpm(clamped);
    updateSpeedUI(clamped);
  }

  async function startTopicSession(topic) {
    currentTopic = topic;
    isSessionActive = true;

    // Apply eye-friendly pastel background theme
    applyTopicTheme(topic.theme);

    // Switch screen to practice
    showScreen('practice');

    // Update pause button state
    btnTogglePause.textContent = 'Pause';

    // Load topic text into scroll engine
    ScrollEngine.loadText(topic.text);

    // Soft non-blocking voice prompt
    AudioEngine.playIntro();

    // Snappy, pleasant 3-2-1 countdown (zero freeze/delay)
    await runCountdownSequence();

    if (!isSessionActive) return;

    sessionStartTime = Date.now();
    ScrollEngine.start();
  }

  function runCountdownSequence() {
    return new Promise((resolve) => {
      cleanupCountdown();
      countdownResolver = resolve;

      if (!countdownOverlay || !countdownNumber) {
        resolve();
        return;
      }

      countdownOverlay.classList.remove('hidden');
      countdownOverlay.classList.remove('fade-out');

      let currentNum = 3;
      countdownNumber.textContent = '3';
      countdownNumber.className = 'countdown-number pop';

      countdownTimer = setInterval(() => {
        currentNum -= 1;
        if (currentNum > 0) {
          countdownNumber.textContent = `${currentNum}`;
          countdownNumber.className = 'countdown-number';
          void countdownNumber.offsetWidth; // Trigger reflow for animation restart
          countdownNumber.className = 'countdown-number pop';
        } else {
          cleanupCountdown();
          countdownOverlay.classList.add('fade-out');
          setTimeout(() => {
            countdownOverlay.classList.add('hidden');
            countdownOverlay.classList.remove('fade-out');
            resolve();
          }, 200);
        }
      }, 750);
    });
  }

  function cleanupCountdown() {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    if (countdownOverlay) {
      countdownOverlay.classList.add('hidden');
      countdownOverlay.classList.remove('fade-out');
    }
    if (countdownResolver) {
      countdownResolver = null;
    }
  }

  function handleSessionComplete() {
    isSessionActive = false;

    // Remain directly in teleprompter view without interrupting the speaker
    // Update pause button to "Restart" so learner can easily re-read or navigate Back
    if (btnTogglePause) {
      btnTogglePause.textContent = 'Restart';
    }
  }

  function showScreen(screenName) {
    const otherScreens = document.querySelectorAll('#screen-quiz-setup, #screen-quiz-play, #screen-quiz-result, #screen-flashcards, #screen-listening-main, #screen-listening-exercise, #screen-listening-result');
    otherScreens.forEach(s => {
      s.classList.remove('active');
      s.setAttribute('aria-hidden', 'true');
    });

    if (window.ListeningEngine && typeof window.ListeningEngine.stopAudio === 'function') {
      window.ListeningEngine.stopAudio();
    }

    const tabs = [
      document.getElementById('tab-nav-speaking'),
      document.getElementById('tab-nav-listening'),
      document.getElementById('tab-nav-quiz'),
      document.getElementById('tab-nav-flashcards')
    ];
    tabs.forEach(t => {
      if (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      }
    });
    const tabSpeaking = document.getElementById('tab-nav-speaking');
    if (tabSpeaking) {
      tabSpeaking.classList.add('active');
      tabSpeaking.setAttribute('aria-selected', 'true');
    }

    screenTopics.classList.remove('active');
    screenTopics.setAttribute('aria-hidden', 'true');

    screenPractice.classList.remove('active');
    screenPractice.setAttribute('aria-hidden', 'true');

    if (screenName === 'topics') {
      screenTopics.classList.add('active');
      screenTopics.setAttribute('aria-hidden', 'false');
    } else if (screenName === 'practice') {
      screenPractice.classList.add('active');
      screenPractice.setAttribute('aria-hidden', 'false');
    }
  }

  function bindEvents() {
    // Level filter buttons (All, A1, A2, B1)
    levelButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const level = btn.dataset.level || 'all';
        selectedLevel = level;
        levelButtons.forEach((b) => {
          const isActive = b.dataset.level === level;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });
        renderTopicsList();
      });
    });

    // Pause / Resume / Restart toggle
    btnTogglePause.addEventListener('click', () => {
      if (btnTogglePause.textContent === 'Restart' || !ScrollEngine.isRunning()) {
        btnRestart.click();
      } else {
        const isNowPaused = ScrollEngine.togglePause();
        btnTogglePause.textContent = isNowPaused ? 'Resume' : 'Pause';
      }
    });

    // Restart button
    btnRestart.addEventListener('click', () => {
      if (currentTopic) {
        btnTogglePause.textContent = 'Pause';
        sessionStartTime = Date.now();
        ScrollEngine.restart();
      }
    });

    // Back to topics button
    btnBack.addEventListener('click', () => {
      leavePracticeSession();
    });

    // Speed slider continuous adjustment
    speedSlider.addEventListener('input', (e) => {
      const wpm = parseInt(e.target.value, 10);
      setSpeed(wpm);
    });

    // Fine-grained +/- speed step buttons
    if (btnSpeedDown) {
      btnSpeedDown.addEventListener('click', () => {
        setSpeed(ScrollEngine.getWpm() - 5);
      });
    }

    if (btnSpeedUp) {
      btnSpeedUp.addEventListener('click', () => {
        setSpeed(ScrollEngine.getWpm() + 5);
      });
    }

    // Quick speed preset buttons (60, 110, 160, 250)
    speedPresetButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const wpm = parseInt(btn.dataset.wpm, 10);
        setSpeed(wpm);
      });
    });

    // Keyboard Shortcuts:
    // Space = Pause / Resume / Restart
    // R = Restart
    // 1, 2, 3, 4 = Speed presets (60, 110, 160, 250)
    // [, ] = Decrease / Increase speed
    // Esc = Back to topics
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' && e.target.type !== 'range') return;
      if (e.target.tagName === 'TEXTAREA') return;

      if (screenPractice.classList.contains('active')) {
        if (e.code === 'Space') {
          e.preventDefault();
          if (btnTogglePause.textContent === 'Restart' || !ScrollEngine.isRunning()) {
            btnRestart.click();
          } else {
            const isNowPaused = ScrollEngine.togglePause();
            btnTogglePause.textContent = isNowPaused ? 'Resume' : 'Pause';
          }
        } else if (e.key === 'r' || e.key === 'R') {
          e.preventDefault();
          btnRestart.click();
        } else if (e.key === '1') {
          e.preventDefault();
          setSpeed(60);
        } else if (e.key === '2') {
          e.preventDefault();
          setSpeed(110);
        } else if (e.key === '3') {
          e.preventDefault();
          setSpeed(160);
        } else if (e.key === '4') {
          e.preventDefault();
          setSpeed(250);
        } else if (e.key === '[' || e.key === '{') {
          e.preventDefault();
          setSpeed(ScrollEngine.getWpm() - 10);
        } else if (e.key === ']' || e.key === '}') {
          e.preventDefault();
          setSpeed(ScrollEngine.getWpm() + 10);
        } else if (e.key === 'Escape') {
          e.preventDefault();
          leavePracticeSession();
        }
      }
    });

    // React to dynamic theme toggle
    window.addEventListener('themeChanged', () => {
      if (isSessionActive && currentTopic) {
        applyTopicTheme(currentTopic.theme);
      }
    });
  }

  function leavePracticeSession() {
    isSessionActive = false;
    cleanupCountdown();
    ScrollEngine.stop();
    applyTopicTheme({ bg: '#FFFFFF', text: '#111111', border: '#E5E5E5' });
    showScreen('topics');
  }

  function setCustomTopics(newTopics) {
    if (Array.isArray(newTopics) && newTopics.length > 0) {
      activeTopics = newTopics;
      renderTopicsList();
    }
  }

  return {
    init,
    setCustomTopics,
    handleSessionComplete,
    leavePracticeSession,
    setSpeed,
    updateSpeedUI
  };
})();

// ============================================================================
// 5. APPLICATION INITIALIZATION & EXTERNAL EXPORT
// ============================================================================
window.SpeakingApp = {
  initTopics: (topics) => {
    UIManager.setCustomTopics(topics);
  },
  ScrollEngine,
  AudioEngine,
  UIManager
};

// Auto-boot: initialize immediately if DOM elements exist, or on DOM ready
if (document.getElementById('topics-container')) {
  UIManager.init();
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => UIManager.init());
} else {
  UIManager.init();
}
