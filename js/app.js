/**
 * CEFR Speaking Practice (A1 • A2 • B1) - Minimalist Teleprompter App
 * Architecture:
 * - AudioEngine: Audio playback, lo-fi playlist management, speechSynthesis fallback, soundscape
 * - ScrollEngine: Smooth WPM-driven teleprompter with blank slowdown
 * - UIManager: Screen transitions, controls, keyboard shortcuts, DOM bindings
 */

'use strict';

// ============================================================================
// 1. DATA REPOSITORIES (Default / Fallback for direct file:// launch)
// ============================================================================

const DEFAULT_PLAYLIST = [
  { id: 1, title: "Aurora Serenity", subtitle: "Peaceful Ambient Strings & Piano", src: "assets/audio/music-01.mp3" },
  { id: 2, title: "Morning Calm", subtitle: "Soft Ambient Acoustic", src: "assets/audio/music-02.mp3" },
  { id: 3, title: "Gentle Piano Dream", subtitle: "Warm Meditative Keys", src: "assets/audio/music-03.mp3" },
  { id: 4, title: "Tranquil Reverie", subtitle: "Quiet Ambient Soundscape", src: "assets/audio/music-04.mp3" },
  { id: 5, title: "Velvet Breeze", subtitle: "Soothing Slow Ambience", src: "assets/audio/music-05.mp3" },
  { id: 6, title: "Still Waters", subtitle: "Peaceful Mind Chords", src: "assets/audio/music-06.mp3" },
  { id: 7, title: "Sunlit Meadow", subtitle: "Soft Atmospheric Warmth", src: "assets/audio/music-07.mp3" },
  { id: 8, title: "Evening Peace", subtitle: "Relaxing Mellow Piano", src: "assets/audio/music-08.mp3" },
  { id: 9, title: "Cloud Drift", subtitle: "Calm Minimal Melodies", src: "assets/audio/music-09.mp3" },
  { id: 10, title: "Serene Horizon", subtitle: "Gentle Head-Clearing Calm", src: "assets/audio/music-10.mp3" }
];

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
    music: "assets/audio/music-01.mp3",
    musicTitle: "Aurora Serenity (Calm Ambient)",
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
    music: "assets/audio/music-02.mp3",
    musicTitle: "Morning Calm (Soft Acoustic)",
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
    music: "assets/audio/music-03.mp3",
    musicTitle: "Gentle Piano Dream (Warm Keys)",
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
    music: "assets/audio/music-04.mp3",
    musicTitle: "Tranquil Reverie (Quiet Ambient)",
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
    music: "assets/audio/music-05.mp3",
    musicTitle: "Velvet Breeze (Soothing Ambience)",
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
    music: "assets/audio/music-06.mp3",
    musicTitle: "Still Waters (Peaceful Chords)",
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
    music: "assets/audio/music-07.mp3",
    musicTitle: "Sunlit Meadow (Atmospheric Warmth)",
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
    music: "assets/audio/music-08.mp3",
    musicTitle: "Evening Peace (Mellow Piano)",
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
    music: "assets/audio/music-09.mp3",
    musicTitle: "Cloud Drift (Minimal Melodies)",
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
    music: "assets/audio/music-10.mp3",
    musicTitle: "Serene Horizon (Calm Flow)",
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
let activePlaylist = DEFAULT_PLAYLIST;

// ============================================================================
// 2. AUDIO ENGINE MODULE (Calm Lo-Fi Music & Speech Synthesizer)
// ============================================================================
const AudioEngine = (() => {
  let playlist = DEFAULT_PLAYLIST;
  let currentTrackIndex = 0;
  let musicAudio = null;
  let musicEnabled = true;
  let currentVolume = 0.12; // 12% calm soothing background volume
  let isFading = false;
  let fadeInterval = null;

  // Listeners
  const trackChangeListeners = new Set();
  const volumeChangeListeners = new Set();
  const stateChangeListeners = new Set();

  // Web Audio fallback for serene ambient sound when mp3 file is absent
  let audioCtx = null;
  let ambientOsc1 = null;
  let ambientOsc2 = null;
  let ambientGain = null;
  let isAmbientPlaying = false;

  // Audio Context unlock for mobile browsers
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
   * Plays intro audio once ("Speak fast and clear").
   * Prioritizes local assets/audio/intro.mp3 -> assets/audio/intro.wav -> speechSynthesis fallback.
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

      // Fallback: Web Speech API synthesis
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
            // Prioritize English female voices
            const femaleEnVoice = voices.find(v => {
              const langMatch = v.lang && v.lang.toLowerCase().startsWith('en');
              const nameLower = v.name.toLowerCase();
              return langMatch && (
                nameLower.includes('female') ||
                nameLower.includes('zira') ||
                nameLower.includes('samantha') ||
                nameLower.includes('victoria') ||
                nameLower.includes('karen') ||
                nameLower.includes('serena') ||
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

            // Safety timeout
            setTimeout(finish, 2200);
          };

          const voices = window.speechSynthesis.getVoices();
          if (voices && voices.length > 0) {
            setVoiceAndSpeak();
          } else {
            window.speechSynthesis.onvoiceschanged = () => {
              window.speechSynthesis.onvoiceschanged = null;
              setVoiceAndSpeak();
            };
            setTimeout(setVoiceAndSpeak, 300);
          }
        } catch (e) {
          finish();
        }
      };

      // Try playing intro audio file
      const introAudio = new Audio();
      introAudio.preload = 'auto';
      introAudio.src = 'assets/audio/intro.mp3';

      introAudio.onended = finish;

      introAudio.onerror = () => {
        const wavAudio = new Audio();
        wavAudio.src = 'assets/audio/intro.wav';
        wavAudio.onended = finish;
        wavAudio.onerror = () => speakWithTTS();
        
        const wavPlayPromise = wavAudio.play();
        if (wavPlayPromise !== undefined) {
          wavPlayPromise.catch(() => speakWithTTS());
        }
      };

      const playPromise = introAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          introAudio.onerror();
        });
      }

      // Fast responsive safeguard: never block UI
      setTimeout(finish, 800);
    });
  }

  /**
   * Initializes soft ambient synth drone if audio file is missing
   */
  function startAmbientDrone() {
    if (!musicEnabled || isAmbientPlaying) return;
    try {
      unlockAudioContext();
      if (!audioCtx) return;

      ambientGain = audioCtx.createGain();
      ambientGain.gain.setValueAtTime(0.001, audioCtx.currentTime);

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, audioCtx.currentTime);

      ambientOsc1 = audioCtx.createOscillator();
      ambientOsc1.type = 'sine';
      ambientOsc1.frequency.setValueAtTime(146.83, audioCtx.currentTime); // D3

      ambientOsc2 = audioCtx.createOscillator();
      ambientOsc2.type = 'triangle';
      ambientOsc2.frequency.setValueAtTime(220.00, audioCtx.currentTime); // A3

      ambientOsc1.connect(filter);
      ambientOsc2.connect(filter);
      filter.connect(ambientGain);
      ambientGain.connect(audioCtx.destination);

      ambientOsc1.start();
      ambientOsc2.start();

      ambientGain.gain.exponentialRampToValueAtTime(
        Math.max(0.001, currentVolume * 0.15),
        audioCtx.currentTime + 1.2
      );

      isAmbientPlaying = true;
    } catch (e) {
      // Audio context error, ignore gracefully
    }
  }

  function stopAmbientDrone() {
    if (!isAmbientPlaying) return;
    try {
      if (ambientGain && audioCtx) {
        ambientGain.gain.setValueAtTime(ambientGain.gain.value, audioCtx.currentTime);
        ambientGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
        setTimeout(() => {
          if (ambientOsc1) ambientOsc1.stop();
          if (ambientOsc2) ambientOsc2.stop();
          isAmbientPlaying = false;
        }, 650);
      } else {
        isAmbientPlaying = false;
      }
    } catch (e) {
      isAmbientPlaying = false;
    }
  }

  /**
   * Plays a track from the playlist by index with smooth crossfade / fade-in
   */
  function playTrack(index, options = { fadeIn: true, crossfade: true }) {
    if (!playlist || playlist.length === 0) return;

    // Wrap index safely
    currentTrackIndex = ((index % playlist.length) + playlist.length) % playlist.length;
    const track = playlist[currentTrackIndex];

    notifyTrackChanged(track);

    if (fadeInterval) {
      clearInterval(fadeInterval);
      fadeInterval = null;
    }

    const prevAudio = musicAudio;

    // Crossfade out previous audio if playing
    if (prevAudio && !prevAudio.paused && options.crossfade) {
      let oldVol = prevAudio.volume;
      const step = oldVol / 10;
      const xfade = setInterval(() => {
        oldVol -= step;
        if (oldVol <= 0) {
          clearInterval(xfade);
          prevAudio.pause();
          prevAudio.src = '';
        } else {
          prevAudio.volume = Math.max(0, oldVol);
        }
      }, 30);
    } else if (prevAudio) {
      prevAudio.pause();
    }

    stopAmbientDrone();

    try {
      const newAudio = new Audio();
      newAudio.src = track.src;
      newAudio.loop = true;
      newAudio.preload = 'auto';

      if (!musicEnabled) {
        newAudio.volume = 0;
        musicAudio = newAudio;
        return;
      }

      if (options.fadeIn) {
        newAudio.volume = 0;
      } else {
        newAudio.volume = currentVolume;
      }

      newAudio.onerror = () => {
        startAmbientDrone();
      };

      const playPromise = newAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          musicAudio = newAudio;
          if (options.fadeIn) {
            let v = 0;
            const targetVol = currentVolume;
            clearInterval(fadeInterval);
            fadeInterval = setInterval(() => {
              v += 0.02;
              if (v >= targetVol) {
                v = targetVol;
                clearInterval(fadeInterval);
              }
              if (musicAudio) musicAudio.volume = v;
            }, 50);
          }
        }).catch(() => {
          startAmbientDrone();
        });
      } else {
        musicAudio = newAudio;
      }
    } catch (e) {
      startAmbientDrone();
    }
  }

  function nextTrack() {
    playTrack(currentTrackIndex + 1);
  }

  function prevTrack() {
    playTrack(currentTrackIndex - 1);
  }

  function selectTrackIndex(idx) {
    playTrack(idx);
  }

  /**
   * Starts music for a given topic
   */
  function startMusicForTopic(topic) {
    if (!topic) return;

    let targetIdx = 0;
    if (topic.id && playlist) {
      const foundIdx = playlist.findIndex(p => p.id === topic.id);
      if (foundIdx !== -1) {
        targetIdx = foundIdx;
      } else if (topic.music) {
        const bySrc = playlist.findIndex(p => p.src === topic.music);
        if (bySrc !== -1) targetIdx = bySrc;
      }
    }

    playTrack(targetIdx, { fadeIn: true, crossfade: false });
  }

  /**
   * Smoothly fades out music and pauses it
   */
  function fadeOutMusic(callback) {
    if (fadeInterval) clearInterval(fadeInterval);

    stopAmbientDrone();

    if (!musicAudio || musicAudio.paused) {
      if (callback) callback();
      return;
    }

    isFading = true;
    const startVol = musicAudio.volume;
    const step = startVol / 15;

    fadeInterval = setInterval(() => {
      if (!musicAudio) {
        clearInterval(fadeInterval);
        isFading = false;
        if (callback) callback();
        return;
      }

      if (musicAudio.volume > step) {
        musicAudio.volume = Math.max(0, musicAudio.volume - step);
      } else {
        musicAudio.volume = 0;
        musicAudio.pause();
        clearInterval(fadeInterval);
        isFading = false;
        if (callback) callback();
      }
    }, 45);
  }

  function stopMusic() {
    if (fadeInterval) clearInterval(fadeInterval);
    if (musicAudio) {
      musicAudio.pause();
      musicAudio.currentTime = 0;
      musicAudio = null;
    }
    stopAmbientDrone();
    isFading = false;
  }

  function setVolume(val) {
    currentVolume = Math.max(0, Math.min(1, val));
    if (musicAudio && !isFading) {
      musicAudio.volume = currentVolume;
    }
    if (ambientGain && audioCtx && isAmbientPlaying) {
      ambientGain.gain.setValueAtTime(currentVolume * 0.15, audioCtx.currentTime);
    }
    notifyVolumeChanged(currentVolume);
  }

  function toggleMusic() {
    musicEnabled = !musicEnabled;
    if (!musicEnabled) {
      if (musicAudio) musicAudio.pause();
      stopAmbientDrone();
    } else {
      if (musicAudio && musicAudio.src) {
        musicAudio.volume = currentVolume;
        musicAudio.play().catch(() => startAmbientDrone());
      } else {
        playTrack(currentTrackIndex, { fadeIn: true, crossfade: false });
      }
    }
    notifyStateChanged(musicEnabled);
    return musicEnabled;
  }

  function isMusicOn() {
    return musicEnabled;
  }

  function getVolume() {
    return currentVolume;
  }

  function getCurrentTrack() {
    if (!playlist || playlist.length === 0) return null;
    return {
      ...playlist[currentTrackIndex],
      index: currentTrackIndex,
      total: playlist.length
    };
  }

  function getPlaylist() {
    return playlist;
  }

  function setPlaylist(newList) {
    if (Array.isArray(newList) && newList.length > 0) {
      playlist = newList;
    }
  }

  // Event dispatchers
  function onTrackChanged(fn) {
    trackChangeListeners.add(fn);
  }

  function onVolumeChanged(fn) {
    volumeChangeListeners.add(fn);
  }

  function onStateChanged(fn) {
    stateChangeListeners.add(fn);
  }

  function notifyTrackChanged(track) {
    trackChangeListeners.forEach(fn => fn(track));
  }

  function notifyVolumeChanged(vol) {
    volumeChangeListeners.forEach(fn => fn(vol));
  }

  function notifyStateChanged(state) {
    stateChangeListeners.forEach(fn => fn(state));
  }

  return {
    unlockAudioContext,
    playIntro,
    startMusicForTopic,
    playTrack,
    nextTrack,
    prevTrack,
    selectTrackIndex,
    fadeOutMusic,
    stopMusic,
    setVolume,
    getVolume,
    toggleMusic,
    isMusicOn,
    getCurrentTrack,
    getPlaylist,
    setPlaylist,
    onTrackChanged,
    onVolumeChanged,
    onStateChanged
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
  let wpm = 110; // Default B2 comfortable pace
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

    setupManualScrollInterception();
  }

  /**
   * Applies hardware GPU subpixel translation (translate3d)
   */
  function applyTransform(y) {
    if (contentEl) {
      contentEl.style.transform = `translate3d(0, ${-y.toFixed(3)}px, 0)`;
      contentEl.style.webkitTransform = `translate3d(0, ${-y.toFixed(3)}px, 0)`;
    }
  }

  function updateProgressBar() {
    if (progressBarEl && scrollDistance > 0) {
      const progress = Math.min(100, Math.max(0, (currentScrollY / scrollDistance) * 100));
      progressBarEl.style.width = `${progress.toFixed(1)}%`;
    }
  }

  /**
   * Sets up wheel and touch listeners to pause auto-scroll if user interacts manually
   */
  function setupManualScrollInterception() {
    let touchStartY = 0;
    let touchScrollStartY = 0;
    let isTouchDragging = false;

    viewportEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (isRunning) {
        pauseScroll(true);
      }
      currentScrollY = Math.max(0, Math.min(scrollDistance, currentScrollY + e.deltaY));
      applyTransform(currentScrollY);
      updateProgressBar();
    }, { passive: false });

    viewportEl.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      touchScrollStartY = currentScrollY;
      isTouchDragging = false;
    }, { passive: true });

    viewportEl.addEventListener('touchmove', (e) => {
      const currentY = e.touches[0].clientY;
      const delta = touchStartY - currentY;
      if (Math.abs(delta) > 5) {
        isTouchDragging = true;
        if (isRunning) {
          pauseScroll(true);
        }
        currentScrollY = Math.max(0, Math.min(scrollDistance, touchScrollStartY + delta));
        applyTransform(currentScrollY);
        updateProgressBar();
      }
    }, { passive: true });

    // Clicking / tapping the viewport toggles pause/resume
    viewportEl.addEventListener('click', () => {
      if (isTouchDragging) {
        isTouchDragging = false;
        return;
      }
      if (isRunning) {
        togglePause();
      }
    });
  }

  /**
   * Loads text into the container.
   * Renders clean, coherent, beautiful natural text without gaps/underscores.
   */
  function loadText(rawText) {
    textContainerEl.innerHTML = '';

    const words = rawText.trim().split(/\s+/);
    totalWords = words.length;

    const p = document.createElement('p');
    p.className = 'teleprompter-paragraph';
    p.textContent = rawText;
    textContainerEl.appendChild(p);

    currentScrollY = 0;
    applyTransform(0);

    if (progressBarEl) {
      progressBarEl.style.width = '0%';
    }

    measureGeometry();
  }

  /**
   * Measures geometry and determines smooth scroll distance.
   */
  function measureGeometry() {
    const viewportHeight = viewportEl.clientHeight || window.innerHeight;
    const textHeight = textContainerEl ? textContainerEl.scrollHeight : 500;
    scrollDistance = Math.max(100, textHeight + (viewportHeight * 0.40));
    recalculateDuration();
  }

  function recalculateDuration() {
    if (wpm > 0 && totalWords > 0) {
      const minutesNeeded = totalWords / wpm;
      scrollDurationMs = minutesNeeded * 60 * 1000;
    } else {
      scrollDurationMs = 60000;
    }
  }

  /**
   * Starts the continuous auto-scroll
   */
  function start() {
    measureGeometry();

    isRunning = true;
    isPaused = false;
    lastTimestamp = 0;

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(scrollLoop);
  }

  /**
   * Continuous requestAnimationFrame loop:
   * Constant buttery-smooth floating-point subpixel GPU translation. Never freezes or stutters!
   */
  function scrollLoop(timestamp) {
    if (!isRunning) return;

    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    let deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    // Safety clamp: ignore excessive jumps if tab was backgrounded or vsync hiccuped
    if (deltaTime > 100) {
      deltaTime = 16.67;
    }

    if (!isPaused && deltaTime > 0) {
      // Steady, continuous, buttery-smooth velocity in px/ms
      const baseVelocity = scrollDistance / scrollDurationMs;
      currentScrollY += baseVelocity * deltaTime;

      applyTransform(currentScrollY);
      updateProgressBar();

      // Check if end of text has passed reading zone
      if (currentScrollY >= scrollDistance) {
        currentScrollY = scrollDistance;
        applyTransform(scrollDistance);
        if (progressBarEl) progressBarEl.style.width = '100%';
        stop();
        if (onCompleteCallback) {
          onCompleteCallback();
        }
        return;
      }
    }

    animationFrameId = requestAnimationFrame(scrollLoop);
  }

  function pauseScroll(notify = false) {
    if (!isRunning) return;
    isPaused = true;
    lastTimestamp = 0;
    if (notify && onPauseCallback) {
      onPauseCallback(true);
    }
  }

  function resumeScroll(notify = false) {
    if (!isRunning) return;
    isPaused = false;
    lastTimestamp = 0;
    if (notify && onPauseCallback) {
      onPauseCallback(false);
    }
  }

  function togglePause() {
    if (isPaused) {
      resumeScroll(true);
      return false;
    } else {
      pauseScroll(true);
      return true;
    }
  }

  function setWpm(newWpm) {
    const parsed = parseInt(newWpm, 10);
    if (!isNaN(parsed) && parsed > 0) {
      wpm = Math.max(40, Math.min(250, parsed));
      recalculateDuration();
    }
  }

  function restart() {
    stop();
    currentScrollY = 0;
    applyTransform(0);
    if (progressBarEl) progressBarEl.style.width = '0%';
    start();
  }

  function stop() {
    isRunning = false;
    isPaused = false;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    lastTimestamp = 0;
  }

  function getWpm() {
    return wpm;
  }

  function getTotalWords() {
    return totalWords;
  }

  return {
    init,
    loadText,
    start,
    stop,
    pauseScroll,
    resumeScroll,
    togglePause,
    restart,
    setWpm,
    getWpm,
    getTotalWords,
    isRunning: () => isRunning
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

  // Topic screen header controls
  const btnBrowseMusic = document.getElementById('btn-browse-music');

  // Practice screen controls
  const btnTogglePause = document.getElementById('btn-toggle-pause');
  const btnRestart = document.getElementById('btn-restart');
  const btnBack = document.getElementById('btn-back');
  const btnToggleMusic = document.getElementById('btn-toggle-music');
  const musicVolumeSlider = document.getElementById('music-volume');
  const volumeDisplay = document.getElementById('volume-display');

  // Reading speed controls
  const speedSlider = document.getElementById('speed-slider');
  const speedDisplay = document.getElementById('speed-display');
  const speedPresetButtons = document.querySelectorAll('.speed-preset-btn');
  const btnSpeedDown = document.getElementById('btn-speed-down');
  const btnSpeedUp = document.getElementById('btn-speed-up');

  // Enhanced music controls
  const btnPrevTrack = document.getElementById('btn-prev-track');
  const btnNextTrack = document.getElementById('btn-next-track');
  const btnTrackMenu = document.getElementById('btn-track-menu');
  const trackNameLabel = document.getElementById('track-name-label');

  // Track selection modal
  const trackMenuModal = document.getElementById('track-menu-modal');
  const trackMenuBackdrop = document.getElementById('track-menu-backdrop');
  const btnCloseTrackMenu = document.getElementById('btn-close-track-menu');
  const trackList = document.getElementById('track-list');

  // Level filter buttons & state
  const levelButtons = document.querySelectorAll('.level-btn');
  let selectedLevel = 'all';

  // Session state
  let currentTopic = null;
  let sessionStartTime = 0;
  let isSessionActive = false;
  let isBrowsingMusicPlaying = false;

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

    // Initialize AudioEngine listeners
    AudioEngine.onTrackChanged((track) => {
      updateTrackUI(track);
    });

    AudioEngine.onVolumeChanged((vol) => {
      updateVolumeUI(vol);
    });

    AudioEngine.onStateChanged((isOn) => {
      updateMusicStateUI(isOn);
    });

    // Render topics grid and track selection modal
    renderTopicsList();
    renderTrackList();

    // Sync initial UI states
    const initTrack = AudioEngine.getCurrentTrack();
    if (initTrack) updateTrackUI(initTrack);
    updateVolumeUI(AudioEngine.getVolume());
    updateMusicStateUI(AudioEngine.isMusicOn());
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
    const root = document.documentElement;
    root.style.setProperty('--topic-bg', theme.bg);
    root.style.setProperty('--topic-text', theme.text);
    root.style.setProperty('--topic-border', theme.border);
    root.style.setProperty('--topic-fade-98', hexToRgba(theme.bg, 0.98));
    root.style.setProperty('--topic-fade-85', hexToRgba(theme.bg, 0.85));
    root.style.setProperty('--topic-fade-35', hexToRgba(theme.bg, 0.35));
    root.style.setProperty('--topic-bar-bg', hexToRgba(theme.bg, 0.96));
  }

  function renderTopicsList() {
    topicsContainer.innerHTML = '';

    const filteredTopics = activeTopics.filter((topic) => {
      if (selectedLevel === 'all') return true;
      return topic.level === selectedLevel;
    });

    filteredTopics.forEach((topic) => {
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.setAttribute('type', 'button');
      card.setAttribute('aria-label', `Start topic: ${topic.title}. Level: ${topic.levelName || topic.level}. Grammar focus: ${topic.grammarFocus}`);

      if (topic.theme) {
        card.style.backgroundColor = topic.theme.cardBg || '#FFFFFF';
        card.style.borderColor = topic.theme.border || '#E5E5E5';
      }

      const topRow = document.createElement('div');
      topRow.className = 'topic-card-top';

      const indexLabel = document.createElement('span');
      indexLabel.className = 'topic-index';
      indexLabel.textContent = `Topic ${topic.id < 10 ? '0' + topic.id : topic.id}`;

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
        levelBadge.style.backgroundColor = topic.theme.badgeBg;
        levelBadge.style.borderColor = topic.theme.border;
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

      const musicEl = document.createElement('span');
      musicEl.className = 'topic-card-music';
      musicEl.textContent = `Calm Sound: ${topic.musicTitle || 'Aurora Serenity'}`;

      bottomEl.appendChild(grammarEl);
      bottomEl.appendChild(musicEl);

      card.appendChild(topRow);
      card.appendChild(titleEl);
      card.appendChild(bottomEl);

      card.addEventListener('click', () => {
        startTopicSession(topic);
      });

      topicsContainer.appendChild(card);
    });
  }

  /**
   * Renders the 10 calm lo-fi tracks inside the track selection modal
   */
  function renderTrackList() {
    if (!trackList) return;
    trackList.innerHTML = '';

    const playlist = AudioEngine.getPlaylist();
    const currentTrack = AudioEngine.getCurrentTrack();

    playlist.forEach((track, idx) => {
      const item = document.createElement('button');
      item.className = 'track-item';
      item.setAttribute('type', 'button');
      item.setAttribute('role', 'radio');
      const isCurrent = currentTrack && currentTrack.index === idx;
      item.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
      if (isCurrent) item.classList.add('active');

      const info = document.createElement('div');
      info.className = 'track-item-info';

      const name = document.createElement('span');
      name.className = 'track-item-name';
      name.textContent = `Track ${track.id < 10 ? '0' + track.id : track.id}: ${track.title}`;

      const sub = document.createElement('span');
      sub.className = 'track-item-sub';
      sub.textContent = track.subtitle || 'Chill Lo-Fi';

      info.appendChild(name);
      info.appendChild(sub);

      const badge = document.createElement('span');
      badge.className = 'track-item-badge';
      badge.textContent = isCurrent ? 'Active' : 'Select';

      item.appendChild(info);
      item.appendChild(badge);

      item.addEventListener('click', () => {
        AudioEngine.selectTrackIndex(idx);
        closeTrackMenu();
      });

      trackList.appendChild(item);
    });
  }

  function updateTrackUI(track) {
    if (!track) return;
    if (trackNameLabel) {
      trackNameLabel.textContent = `Track ${track.id < 10 ? '0' + track.id : track.id}: ${track.title}`;
    }
    // Update active item in modal
    if (trackList) {
      const items = trackList.querySelectorAll('.track-item');
      items.forEach((item, idx) => {
        const matches = idx === track.index;
        item.classList.toggle('active', matches);
        item.setAttribute('aria-checked', matches ? 'true' : 'false');
        const badge = item.querySelector('.track-item-badge');
        if (badge) badge.textContent = matches ? 'Active' : 'Select';
      });
    }
  }

  function updateVolumeUI(vol) {
    if (volumeDisplay) {
      volumeDisplay.textContent = `${Math.round(vol * 100)}%`;
    }
    if (musicVolumeSlider) {
      musicVolumeSlider.value = vol;
    }
  }

  function updateSpeedUI(wpm) {
    if (speedSlider) {
      speedSlider.value = wpm;
    }
    if (speedDisplay) {
      speedDisplay.textContent = `${wpm} WPM`;
    }
    speedPresetButtons.forEach((btn) => {
      const targetWpm = parseInt(btn.dataset.wpm, 10);
      const isMatch = targetWpm === wpm;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-checked', isMatch ? 'true' : 'false');
    });
  }

  function setSpeed(wpm) {
    const clamped = Math.max(40, Math.min(250, parseInt(wpm, 10) || 110));
    updateSpeedUI(clamped);
    ScrollEngine.setWpm(clamped);
  }

  function updateMusicStateUI(isOn) {
    if (btnToggleMusic) {
      btnToggleMusic.textContent = isOn ? 'Music: On' : 'Music: Muted';
    }
    if (btnBrowseMusic) {
      btnBrowseMusic.textContent = isBrowsingMusicPlaying ? 'Calm Music: On' : 'Calm Music: Off';
    }
  }

  function openTrackMenu() {
    if (trackMenuModal) {
      trackMenuModal.classList.remove('hidden');
      trackMenuModal.setAttribute('aria-hidden', 'false');
      btnTrackMenu.setAttribute('aria-expanded', 'true');
    }
  }

  function closeTrackMenu() {
    if (trackMenuModal) {
      trackMenuModal.classList.add('hidden');
      trackMenuModal.setAttribute('aria-hidden', 'true');
      btnTrackMenu.setAttribute('aria-expanded', 'false');
    }
  }

  /**
   * Starts a practice session with the selected topic
   */
  async function startTopicSession(topic) {
    currentTopic = topic;
    isSessionActive = true;
    isBrowsingMusicPlaying = false;
    updateMusicStateUI(AudioEngine.isMusicOn());

    // Apply eye-friendly pastel background theme
    applyTopicTheme(topic.theme);

    // Switch screen to practice
    showScreen('practice');

    // Update pause button state
    btnTogglePause.textContent = 'Pause';

    // Load topic text into scroll engine
    ScrollEngine.loadText(topic.text);

    // Fade in calm background music
    AudioEngine.startMusicForTopic(topic);

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
      countdownResolver = resolve;
      countdownOverlay.classList.remove('hidden');

      const steps = ['3', '2', '1'];
      let idx = 0;

      const showNext = () => {
        if (!isSessionActive) {
          cleanupCountdown();
          return;
        }
        if (idx < steps.length) {
          countdownNumber.textContent = steps[idx];
          idx++;
          countdownTimer = setTimeout(showNext, 420);
        } else {
          cleanupCountdown();
          resolve();
        }
      };

      showNext();
    });
  }

  function cleanupCountdown() {
    if (countdownTimer) {
      clearTimeout(countdownTimer);
      countdownTimer = null;
    }
    countdownOverlay.classList.add('hidden');
    countdownResolver = null;
  }

  function showCountdown(text) {
    countdownOverlay.classList.remove('hidden');
    countdownNumber.textContent = text;
  }

  /**
   * Handles completion when text passes the reading zone
   */
  function handleSessionComplete() {
    isSessionActive = false;

    // Fade out background music smoothly
    AudioEngine.fadeOutMusic();

    // Remain directly in teleprompter view without interrupting the speaker
    // Update pause button to "Restart" so learner can easily re-read or navigate Back
    if (btnTogglePause) {
      btnTogglePause.textContent = 'Restart';
    }
  }

  function showScreen(screenName) {
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

    // Topic screen music preview toggle
    if (btnBrowseMusic) {
      btnBrowseMusic.addEventListener('click', () => {
        isBrowsingMusicPlaying = !isBrowsingMusicPlaying;
        if (isBrowsingMusicPlaying) {
          AudioEngine.unlockAudioContext();
          AudioEngine.playTrack(0, { fadeIn: true, crossfade: false });
        } else {
          AudioEngine.stopMusic();
        }
        btnBrowseMusic.textContent = isBrowsingMusicPlaying ? 'Calm Music: On' : 'Calm Music: Off';
      });
    }

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
        AudioEngine.fadeOutMusic(() => {
          AudioEngine.startMusicForTopic(currentTopic);
        });
        sessionStartTime = Date.now();
        ScrollEngine.restart();
      }
    });

    // Back to topics button
    btnBack.addEventListener('click', () => {
      leavePracticeSession();
    });

    // Speed Slider: Smooth real-time adjustment from slow (40 WPM) to fast (max 250 WPM)
    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        const wpm = parseInt(e.target.value, 10);
        setSpeed(wpm);
      });
    }

    // Step down speed (-10 WPM)
    if (btnSpeedDown) {
      btnSpeedDown.addEventListener('click', () => {
        setSpeed(ScrollEngine.getWpm() - 10);
      });
    }

    // Step up speed (+10 WPM)
    if (btnSpeedUp) {
      btnSpeedUp.addEventListener('click', () => {
        setSpeed(ScrollEngine.getWpm() + 10);
      });
    }

    // Quick speed preset buttons (60, 110, 160, 250)
    speedPresetButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const wpm = parseInt(btn.dataset.wpm, 10);
        setSpeed(wpm);
      });
    });

    // Music track navigation
    if (btnPrevTrack) {
      btnPrevTrack.addEventListener('click', () => {
        AudioEngine.prevTrack();
      });
    }

    if (btnNextTrack) {
      btnNextTrack.addEventListener('click', () => {
        AudioEngine.nextTrack();
      });
    }

    // Track selector dialog toggle
    if (btnTrackMenu) {
      btnTrackMenu.addEventListener('click', () => {
        openTrackMenu();
      });
    }

    if (btnCloseTrackMenu) {
      btnCloseTrackMenu.addEventListener('click', () => {
        closeTrackMenu();
      });
    }

    if (trackMenuBackdrop) {
      trackMenuBackdrop.addEventListener('click', () => {
        closeTrackMenu();
      });
    }

    // Music toggle
    btnToggleMusic.addEventListener('click', () => {
      AudioEngine.toggleMusic();
    });

    // Volume slider
    musicVolumeSlider.addEventListener('input', (e) => {
      AudioEngine.setVolume(parseFloat(e.target.value));
    });

    // Keyboard Shortcuts:
    // Space = Pause / Resume / Restart
    // R = Restart
    // M = Mute / Unmute music
    // N = Next track
    // P = Previous track
    // + / = = Volume up
    // - / _ = Volume down
    // 1, 2, 3, 4 = Speed options (90, 110, 130, 150)
    // Esc = Close modal if open; else Back to topics
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' && e.target.type !== 'range') return;
      if (e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'Escape') {
        if (trackMenuModal && !trackMenuModal.classList.contains('hidden')) {
          e.preventDefault();
          closeTrackMenu();
          return;
        }
      }

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
        } else if (e.key === 'm' || e.key === 'M') {
          e.preventDefault();
          AudioEngine.toggleMusic();
        } else if (e.key === 'n' || e.key === 'N') {
          e.preventDefault();
          AudioEngine.nextTrack();
        } else if (e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          AudioEngine.prevTrack();
        } else if (e.key === '+' || e.key === '=') {
          e.preventDefault();
          AudioEngine.setVolume(AudioEngine.getVolume() + 0.05);
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          AudioEngine.setVolume(AudioEngine.getVolume() - 0.05);
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
  }

  function leavePracticeSession() {
    isSessionActive = false;
    isBrowsingMusicPlaying = false;
    cleanupCountdown();
    closeTrackMenu();
    ScrollEngine.stop();
    AudioEngine.stopMusic();
    updateMusicStateUI(AudioEngine.isMusicOn());
    applyTopicTheme({ bg: '#FFFFFF', text: '#111111', border: '#E5E5E5' });
    showScreen('topics');
  }

  function setCustomTopics(newTopics, newPlaylist) {
    if (Array.isArray(newTopics) && newTopics.length > 0) {
      activeTopics = newTopics;
      renderTopicsList();
    }
    if (Array.isArray(newPlaylist) && newPlaylist.length > 0) {
      activePlaylist = newPlaylist;
      AudioEngine.setPlaylist(newPlaylist);
      renderTrackList();
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
  initTopics: (topics, playlist) => {
    UIManager.setCustomTopics(topics, playlist);
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
