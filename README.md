# CEFR Speaking Practice Teleprompter (A1 • A2 • B1)

A minimalist, responsive English speaking-practice web application designed for CEFR candidates across **A1 Beginner**, **A2 Elementary**, and **B1 Intermediate** levels. The application presents practice topics with auto-scrolling teleprompter text driven strictly by words-per-minute (WPM), giving learners a structured pace to practice reading aloud and speaking fluently.

There are no scores, no win/lose states, and no gamification. A session simply completes when the text finishes scrolling.

---

## Quick Start

- **No installation, no build step, no dependencies required.**
- Open the application directly by **double-clicking `index.html`** in any modern web browser (Edge, Chrome, Safari, Firefox). Runs 100% offline via `file://`.
- Or serve via any local static server if preferred (`python -m http.server 8000` or `npx serve`).

---

## Eye-Friendly Pastel Themes (Har bir matn uchun alohida sokin fon)

Each topic features its own custom, soothing pastel color palette carefully calibrated (94%–97% lightness) to prevent eye strain during practice:

| Topic | Title | Theme Name | Background Color | Reading Text Color |
|---|---|---|---|---|
| **01** | Introducing myself and my family | Warm Linen | `#F8F4EE` | `#221C16` |
| **02** | My daily routine | Tranquil Sage | `#F0F5F1` | `#1A251E` |
| **03** | My home and neighborhood | Morning Mist | `#F0F4F8` | `#17232F` |
| **04** | Where I live: Comparing two places | Soft Almond | `#F7F2EC` | `#261E16` |
| **05** | Hobbies and free time activities | Gentle Lavender | `#F5F2F8` | `#231A2E` |
| **06** | A memorable holiday trip | Sunlit Peach | `#FAF4ED` | `#291E15` |
| **07** | Education and work experience | Pale Seafoam | `#EFF6F3` | `#182720` |
| **08** | Technology in my daily life | Quiet Pearl | `#F1F3F7` | `#1A212B` |
| **09** | Health, food and habits | Chamomile Cream | `#F7F4EC` | `#242017` |
| **10** | Future plans and personal ambitions | Cashmere Rose | `#F8F1F2` | `#2A1A1E` |

The optical top and bottom gradient fade overlays automatically match each topic's pastel background for a seamless, beautiful reading experience.

---

## CEFR Levels & Topic Structure

All practice texts are complete, fluent, authentic English reading passages with **zero gaps or underscores**:

### Level A1: Beginner (~90–95 words each)
- **Topic 01**: *Introducing myself and my family* — Present simple, verb "to be", family relations
- **Topic 02**: *My daily routine* — Present simple, time markers, morning/evening habits
- **Topic 03**: *My home and neighborhood* — "There is / There are", prepositions, sensory adjectives

### Level A2: Elementary (~110–120 words each)
- **Topic 04**: *Where I live: Comparing two places* — Comparatives (*larger than*, *more modern*), simple contrast
- **Topic 05**: *Hobbies and free time activities* — Expressing reasons & results (*because*, *so*)
- **Topic 06**: *A memorable holiday trip* — Past simple (regular and irregular), time sequences

### Level B1: Intermediate (~135–140 words each)
- **Topic 07**: *Education and work experience* — Present perfect vs. past simple, career growth
- **Topic 08**: *Technology in my daily life* — Expressing opinions (*in my view*, *on the one hand / on the other hand*)
- **Topic 09**: *Health, food and habits* — Modals for advice (*should*), first conditional (*if*)
- **Topic 10**: *Future plans and personal ambitions* — Future intentions (*planning to*, *by the time*)

---

## How It Works

1. **CEFR Level Filter & Topic Selection**:
   - Filter topics instantly by clicking **All (10)**, **A1 Beginner**, **A2 Elementary**, or **B1 Intermediate**.
   - Each topic card displays its CEFR level badge, theme tag, grammar focus, and assigned calm soundtrack.
2. **Audio Unlock & Intro**:
   - Clicking a topic unlocks browser audio and plays the intro cue ("*Speak fast and clear*").
   - Non-blocking start ensures zero freezing or lag.
3. **Countdown**:
   - A clean, snappy `3` → `2` → `1` text countdown prepares you to speak.
4. **Buttery-Smooth GPU Teleprompter Scroll**:
   - Auto-scrolls using hardware GPU `translate3d(0, -Ypx, 0)` with floating-point subpixel precision.
   - Paced by words-per-minute (WPM), not pixels per second.
   - Constant, steady velocity without slowdown pauses or freezing.
   - Optical gradient mask creates an elegant focus on the active reading lines.
5. **Ultra-Calm Background Music**:
   - Soothing, peaceful ambient tracks designed specifically for speech focus without headaches.
   - Soft default volume (12%) with live slider adjustment and mute toggle.
   - Switch tracks on the fly (`Prev Track` / `Next Track`) or select from the track menu.
6. **Seamless Completion**:
   - When the text reaches the end, background music gently fades out and the teleprompter remains gracefully in view.
   - The primary button updates to **Restart** (or press `Space`/`R`) to immediately practice again, or click **Back** (`Esc`) to choose another topic.

---

## Controls & Keyboard Shortcuts

| Shortcut / Control | Action |
|---|---|
| `Space` | Pause / Resume teleprompter scroll |
| `R` | Restart current topic from the beginning |
| `M` | Toggle background music (Mute / Unmute) |
| `N` | Next calm track |
| `P` | Previous calm track |
| `+` / `=` | Increase music volume (+5%) |
| `-` / `_` | Decrease music volume (-5%) |
| **Speed Slider** | Continuous range slider from slow `40 WPM` up to max `250 WPM` |
| `[` / `]` | Decrease / Increase reading speed by 10 WPM |
| `1`, `2`, `3`, `4` | Quick speed presets: `60` (Slow), `110` (Normal), `160` (Brisk), `250` (Max) |
| `Esc` | Close music selector dialog or return to topic selection screen |
| **Manual Scroll** | Mouse wheel or touch gestures pause scroll; clicking **Resume** continues from current position |

---

## File Structure

```
├── index.html                  # Semantic markup (zero icons, pure typography, level filter)
├── css/
│   └── style.css               # Minimalist styling (100dvh, GPU translate3d, pastel theme variables)
├── js/
│   ├── app.js                  # Modular AudioEngine, ScrollEngine, and UIManager
│   └── texts.js                # 10 A1/A2/B1 complete topics and calm playlist metadata
├── assets/
│   └── audio/
│       ├── intro.mp3           # Voice prompt ("Speak fast and clear")
│       ├── intro.wav           # WAV audio file
│       └── music-01.mp3 ...    # 10 calm soothing audio tracks
└── README.md
```
