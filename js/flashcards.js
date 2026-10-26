/**
 * Vocabulary Flashcards Engine - Interactive 3D Cards
 * Features:
 * - 3D Card Flip (Front: Word, IPA, Translation, Colorful SVG illustration; Back: Example sentence, Uzbek translation, collocations)
 * - Text-To-Speech (Native English pronunciation for words and sentences)
 * - Level Filtering (All, A1, A2, B1) and Category Filtering
 * - Progress Tracking (Mastered vs Review needed) with localStorage persistence
 * - Keyboard navigation (Space/Enter to flip, Left/Right arrows to navigate, 1/2 to rate)
 * - Shuffle & Reset capabilities
 */

'use strict';

(function () {
  const FlashcardEngine = {
    allCards: [],
    cards: [],
    currentIndex: 0,
    isFlipped: false,
    selectedLevel: 'all',
    selectedCategory: 'all',
    masteredSet: new Set(),
    reviewSet: new Set(),

    init() {
      this.loadDataset();
      this.loadStorage();
      this.cacheDOM();
      this.bindEvents();
      this.applyFilters();
    },

    loadDataset() {
      if (typeof FLASHCARDS_DATA !== 'undefined' && Array.isArray(FLASHCARDS_DATA)) {
        this.allCards = [...FLASHCARDS_DATA];
      } else {
        this.allCards = [];
      }
      this.cards = [...this.allCards];
    },

    loadStorage() {
      try {
        const savedMastered = localStorage.getItem('english_mastery_fc_mastered');
        if (savedMastered) {
          this.masteredSet = new Set(JSON.parse(savedMastered));
        }
        const savedReview = localStorage.getItem('english_mastery_fc_review');
        if (savedReview) {
          this.reviewSet = new Set(JSON.parse(savedReview));
        }
      } catch (e) {
        console.warn('Could not load flashcard progress from storage:', e);
      }
    },

    saveStorage() {
      try {
        localStorage.setItem('english_mastery_fc_mastered', JSON.stringify([...this.masteredSet]));
        localStorage.setItem('english_mastery_fc_review', JSON.stringify([...this.reviewSet]));
      } catch (e) {
        console.warn('Could not save flashcard progress:', e);
      }
    },

    cacheDOM() {
      // Main Elements
      this.screen = document.getElementById('screen-flashcards');
      this.cardElement = document.getElementById('flashcard');
      this.cardFront = document.getElementById('flashcard-front');
      this.cardBack = document.getElementById('flashcard-back');

      // Top Status / Progress
      this.progressFill = document.getElementById('fc-progress-fill');
      this.counterText = document.getElementById('fc-counter-text');
      this.badgeMastered = document.getElementById('fc-count-mastered');
      this.badgeReview = document.getElementById('fc-count-review');

      // Filter controls
      this.levelPills = document.querySelectorAll('.fc-level-pill');
      this.categorySelect = document.getElementById('fc-category-select');
      this.btnShuffle = document.getElementById('btn-fc-shuffle');
      this.btnResetProgress = document.getElementById('btn-fc-reset');

      // Front Card Fields
      this.frontBadgeLevel = document.getElementById('fc-front-level');
      this.frontBadgeCategory = document.getElementById('fc-front-category');
      this.frontWord = document.getElementById('fc-front-word');
      this.frontPhonetic = document.getElementById('fc-front-phonetic');
      this.frontPartOfSpeech = document.getElementById('fc-front-pos');
      this.frontTranslation = document.getElementById('fc-front-translation');
      this.frontSvgContainer = document.getElementById('fc-front-svg');
      this.frontBtnAudio = document.getElementById('btn-fc-audio-word');
      this.frontStatusBadge = document.getElementById('fc-front-status');

      // Back Card Fields
      this.backBadgeLevel = document.getElementById('fc-back-level');
      this.backSentence = document.getElementById('fc-back-sentence');
      this.backSentenceUz = document.getElementById('fc-back-sentence-uz');
      this.backCollocation = document.getElementById('fc-back-collocation');
      this.backBtnAudio = document.getElementById('btn-fc-audio-sentence');

      // Action Controls
      this.btnPrev = document.getElementById('btn-fc-prev');
      this.btnFlip = document.getElementById('btn-fc-flip');
      this.btnNext = document.getElementById('btn-fc-next');
      this.btnMarkReview = document.getElementById('btn-fc-mark-review');
      this.btnMarkMastered = document.getElementById('btn-fc-mark-mastered');
    },

    bindEvents() {
      // 3D Card Flip when clicking the card itself (excluding buttons inside)
      if (this.cardElement) {
        this.cardElement.addEventListener('click', (e) => {
          if (e.target.closest('button')) return;
          this.flip();
        });
      }

      // Flip button
      if (this.btnFlip) {
        this.btnFlip.addEventListener('click', () => this.flip());
      }

      // Next / Previous
      if (this.btnNext) {
        this.btnNext.addEventListener('click', () => this.nextCard());
      }
      if (this.btnPrev) {
        this.btnPrev.addEventListener('click', () => this.prevCard());
      }

      // Mastery buttons
      if (this.btnMarkMastered) {
        this.btnMarkMastered.addEventListener('click', () => this.markMastered());
      }
      if (this.btnMarkReview) {
        this.btnMarkReview.addEventListener('click', () => this.markReview());
      }

      // Audio buttons
      if (this.frontBtnAudio) {
        this.frontBtnAudio.addEventListener('click', (e) => {
          e.stopPropagation();
          const current = this.cards[this.currentIndex];
          if (current) this.speak(current.word);
        });
      }
      if (this.backBtnAudio) {
        this.backBtnAudio.addEventListener('click', (e) => {
          e.stopPropagation();
          const current = this.cards[this.currentIndex];
          if (current) this.speak(current.sentence);
        });
      }

      // Level Filters
      if (this.levelPills) {
        this.levelPills.forEach(pill => {
          pill.addEventListener('click', () => {
            this.levelPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            this.selectedLevel = pill.getAttribute('data-level') || 'all';
            this.applyFilters();
          });
        });
      }

      // Category Select
      if (this.categorySelect) {
        this.categorySelect.addEventListener('change', () => {
          this.selectedCategory = this.categorySelect.value || 'all';
          this.applyFilters();
        });
      }

      // Shuffle Deck
      if (this.btnShuffle) {
        this.btnShuffle.addEventListener('click', () => this.shuffleDeck());
      }

      // Reset Progress
      if (this.btnResetProgress) {
        this.btnResetProgress.addEventListener('click', () => this.resetProgress());
      }

      // Global Keyboard Shortcuts (active when Flashcards screen is visible)
      window.addEventListener('keydown', (e) => {
        if (!this.screen || !this.screen.classList.contains('active')) return;
        // Don't intercept if an input is focused
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

        if (e.code === 'Space') {
          e.preventDefault();
          this.flip();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextCard();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prevCard();
        } else if (e.key === '1') {
          e.preventDefault();
          this.markReview();
        } else if (e.key === '2') {
          e.preventDefault();
          this.markMastered();
        }
      });
    },

    applyFilters() {
      let filtered = [...this.allCards];

      if (this.selectedLevel !== 'all') {
        filtered = filtered.filter(c => c.level === this.selectedLevel);
      }

      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(c => c.category === this.selectedCategory);
      }

      this.cards = filtered;
      this.currentIndex = 0;
      this.isFlipped = false;
      this.renderCard();
    },

    flip() {
      this.isFlipped = !this.isFlipped;
      if (this.cardElement) {
        if (this.isFlipped) {
          this.cardElement.classList.add('is-flipped');
        } else {
          this.cardElement.classList.remove('is-flipped');
        }
      }
    },

    nextCard() {
      if (this.cards.length === 0) return;
      this.isFlipped = false;
      if (this.cardElement) this.cardElement.classList.remove('is-flipped');
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.renderCard();
    },

    prevCard() {
      if (this.cards.length === 0) return;
      this.isFlipped = false;
      if (this.cardElement) this.cardElement.classList.remove('is-flipped');
      this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
      this.renderCard();
    },

    markMastered() {
      const current = this.cards[this.currentIndex];
      if (!current) return;

      this.masteredSet.add(current.id);
      this.reviewSet.delete(current.id);
      this.saveStorage();
      this.updateProgressSummary();
      this.renderCardBadge(current.id);

      // Smooth advance after marking
      setTimeout(() => {
        this.nextCard();
      }, 280);
    },

    markReview() {
      const current = this.cards[this.currentIndex];
      if (!current) return;

      this.reviewSet.add(current.id);
      this.masteredSet.delete(current.id);
      this.saveStorage();
      this.updateProgressSummary();
      this.renderCardBadge(current.id);

      setTimeout(() => {
        this.nextCard();
      }, 280);
    },

    renderCardBadge(cardId) {
      if (!this.frontStatusBadge) return;
      if (this.masteredSet.has(cardId)) {
        this.frontStatusBadge.className = 'fc-status-badge status-mastered';
        this.frontStatusBadge.textContent = 'O‘rganildi ✓';
        this.frontStatusBadge.classList.remove('hidden');
      } else if (this.reviewSet.has(cardId)) {
        this.frontStatusBadge.className = 'fc-status-badge status-review';
        this.frontStatusBadge.textContent = 'Takrorlash kerak ↺';
        this.frontStatusBadge.classList.remove('hidden');
      } else {
        this.frontStatusBadge.className = 'fc-status-badge hidden';
      }
    },

    renderCard() {
      if (this.cards.length === 0) {
        if (this.frontWord) this.frontWord.textContent = 'So‘zlar topilmadi';
        if (this.frontTranslation) this.frontTranslation.textContent = 'Boshqa daraja yoki mavzuni tanlang';
        if (this.counterText) this.counterText.textContent = '0 / 0';
        if (this.progressFill) this.progressFill.style.width = '0%';
        return;
      }

      const card = this.cards[this.currentIndex];
      if (!card) return;

      // Update Counter & Progress
      const total = this.cards.length;
      const currentNumber = this.currentIndex + 1;
      if (this.counterText) {
        this.counterText.textContent = `${currentNumber} / ${total}`;
      }
      if (this.progressFill) {
        const pct = Math.round((currentNumber / total) * 100);
        this.progressFill.style.width = `${pct}%`;
      }

      // Update Front Face
      if (this.frontBadgeLevel) this.frontBadgeLevel.textContent = card.level;
      if (this.frontBadgeCategory) this.frontBadgeCategory.textContent = card.category;
      if (this.frontWord) this.frontWord.textContent = card.word;
      if (this.frontPhonetic) this.frontPhonetic.textContent = card.phonetic || '';
      if (this.frontPartOfSpeech) this.frontPartOfSpeech.textContent = `[${card.partOfSpeech || 'word'}]`;
      if (this.frontTranslation) this.frontTranslation.textContent = card.translation;
      if (this.frontSvgContainer) this.frontSvgContainer.innerHTML = card.svg;

      this.renderCardBadge(card.id);

      // Update Back Face
      if (this.backBadgeLevel) this.backBadgeLevel.textContent = `${card.level} • ${card.category}`;

      // Highlight target word in sentence
      if (this.backSentence) {
        const sentence = card.sentence;
        const hl = card.highlightWord || card.word;
        const regex = new RegExp(`(${hl})`, 'gi');
        const highlighted = sentence.replace(regex, '<mark class="sentence-highlight">$1</mark>');
        this.backSentence.innerHTML = highlighted;
      }

      if (this.backSentenceUz) {
        this.backSentenceUz.textContent = card.sentenceTranslation;
      }

      if (this.backCollocation) {
        if (card.collocation) {
          this.backCollocation.innerHTML = `<strong>Foydali birikma:</strong> ${card.collocation}`;
          this.backCollocation.classList.remove('hidden');
        } else {
          this.backCollocation.classList.add('hidden');
        }
      }

      this.updateProgressSummary();
    },

    updateProgressSummary() {
      if (this.badgeMastered) {
        this.badgeMastered.textContent = `${this.masteredSet.size} o‘rganildi`;
      }
      if (this.badgeReview) {
        this.badgeReview.textContent = `${this.reviewSet.size} takrorlash`;
      }
    },

    shuffleDeck() {
      // Fisher-Yates shuffle
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
      this.currentIndex = 0;
      this.isFlipped = false;
      if (this.cardElement) this.cardElement.classList.remove('is-flipped');
      this.renderCard();
    },

    resetProgress() {
      if (window.ModalManager && typeof window.ModalManager.show === 'function') {
        window.ModalManager.show({
          title: "Progressni qayta o‘rnatish",
          message: "Barcha saqlangan so‘zlar statistikasi («O‘rganildi» va «Takrorlash») tozalansinmi?",
          icon: "warning",
          type: "confirm",
          confirmText: "Ha, tozalash",
          cancelText: "Bekor qilish",
          danger: true
        }).then(confirmed => {
          if (confirmed) {
            this.masteredSet.clear();
            this.reviewSet.clear();
            this.saveStorage();
            this.renderCard();
          }
        });
      } else {
        this.masteredSet.clear();
        this.reviewSet.clear();
        this.saveStorage();
        this.renderCard();
      }
    },

    speak(text) {
      if (!text || !('speechSynthesis' in window)) return;
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.88; // comfortable learning rate
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('Speech synthesis error:', e);
      }
    }
  };

  // Expose globally
  window.FlashcardEngine = FlashcardEngine;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => FlashcardEngine.init());
  } else {
    FlashcardEngine.init();
  }
})();
