/**
 * Grammar Tenses Quiz Questions Repository (400 Questions)
 * CEFR Levels: A1 (Beginner), A2 (Elementary), B1 (Intermediate)
 * Format: Error Identification (4 parts: [A], [B], [C], [D])
 * Explanations: Clear, educational explanations in Uzbek
 * Randomization: Drawn uniformly using Fisher-Yates algorithm
 */

const QUIZ_QUESTIONS = [
  {
    "id": 101,
    "level": "A1",
    "tense": "Present Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My brother",
        "isError": false
      },
      {
        "id": "B",
        "text": "work",
        "isError": true,
        "correction": "works",
        "explanation": "Uchinchi shaxs birlikda (he/she/it, ya'ni 'My brother') Present Simple da fe'lga '-s' qo'shiladi: 'works' bo'lishi kerak."
      },
      {
        "id": "C",
        "text": "at a big hospital",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the city center",
        "isError": false
      }
    ]
  },
  {
    "id": 102,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "don't like",
        "isError": true,
        "correction": "doesn't like",
        "explanation": "Present Simple inkor shaklida 'She' uchun 'don't' emas, balki 'doesn't' ishlatiladi ('She doesn't like')."
      },
      {
        "id": "C",
        "text": "drinking coffee",
        "isError": false
      },
      {
        "id": "D",
        "text": "late in the evening",
        "isError": false
      }
    ]
  },
  {
    "id": 103,
    "level": "A1",
    "tense": "Present Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Look!",
        "isError": false
      },
      {
        "id": "B",
        "text": "The children",
        "isError": false
      },
      {
        "id": "C",
        "text": "is playing",
        "isError": true,
        "correction": "are playing",
        "explanation": "'The children' (bolalar) ko'plikda bo'lgani sababli Present Continuous da 'is' emas, 'are' ishlatiladi: 'are playing'."
      },
      {
        "id": "D",
        "text": "in the green garden",
        "isError": false
      }
    ]
  },
  {
    "id": 104,
    "level": "A1",
    "tense": "Present Simple (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Do",
        "isError": true,
        "correction": "Does",
        "explanation": "Ega 'your father' (he) bo'lganligi sababli Present Simple so'roq shaklida 'Do' emas, 'Does' qo'yiladi: 'Does your father speak...'."
      },
      {
        "id": "B",
        "text": "your father",
        "isError": false
      },
      {
        "id": "C",
        "text": "speak fluent German",
        "isError": false
      },
      {
        "id": "D",
        "text": "at his workplace",
        "isError": false
      }
    ]
  },
  {
    "id": 105,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "goed",
        "isError": true,
        "correction": "went",
        "explanation": "'Go' fe'li noto'g'ri fe'l bo'lib, uning o'tgan zamon (Past Simple) shakli 'goed' emas, 'went' bo'ladi."
      },
      {
        "id": "D",
        "text": "to the supermarket together",
        "isError": false
      }
    ]
  },
  {
    "id": 106,
    "level": "A1",
    "tense": "Past Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "didn't bought",
        "isError": true,
        "correction": "didn't buy",
        "explanation": "Past Simple inkor shaklida 'didn't' dan so'ng asosiy fe'l o'tgan zamonda emas, balki boshlang'ich shaklda keladi: 'didn't buy'."
      },
      {
        "id": "C",
        "text": "that expensive jacket",
        "isError": false
      },
      {
        "id": "D",
        "text": "at the mall",
        "isError": false
      }
    ]
  },
  {
    "id": 107,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "are going to visiting",
        "isError": true,
        "correction": "are going to visit",
        "explanation": "'Be going to' qoidasida 'to' dan keyin fe'lga '-ing' qo'shilmaydi, oddiy fe'l o'zagi keladi: 'are going to visit'."
      },
      {
        "id": "C",
        "text": "their lovely grandparents",
        "isError": false
      },
      {
        "id": "D",
        "text": "next weekend",
        "isError": false
      }
    ]
  },
  {
    "id": 108,
    "level": "A1",
    "tense": "Past Simple (To Be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My classmates",
        "isError": false
      },
      {
        "id": "B",
        "text": "was",
        "isError": true,
        "correction": "were",
        "explanation": "'My classmates' ko'plikda bo'lgani sababli 'to be' fe'lining o'tgan zamon ko'plik shakli 'were' bo'lishi shart ('was' faqat birlikda)."
      },
      {
        "id": "C",
        "text": "very excited about",
        "isError": false
      },
      {
        "id": "D",
        "text": "the school trip",
        "isError": false
      }
    ]
  },
  {
    "id": 109,
    "level": "A1",
    "tense": "Present Continuous (Stative Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Right now,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I am wanting",
        "isError": true,
        "correction": "I want",
        "explanation": "'Want' (xohlamoq) holat fe'li bo'lib, continuous zamonlarida ishlatilmaydi. Hozirgi payt uchun ham 'I want' deyiladi."
      },
      {
        "id": "C",
        "text": "a glass of cold water",
        "isError": false
      },
      {
        "id": "D",
        "text": "after running",
        "isError": false
      }
    ]
  },
  {
    "id": 110,
    "level": "A1",
    "tense": "Past Simple (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did you",
        "isError": false
      },
      {
        "id": "B",
        "text": "saw",
        "isError": true,
        "correction": "see",
        "explanation": "'Did' bilan berilgan so'roq gapda asosiy fe'l ikkinchi shaklda (saw) emas, birinchi shaklda (see) bo'ladi: 'Did you see...'."
      },
      {
        "id": "C",
        "text": "the beautiful rainbow",
        "isError": false
      },
      {
        "id": "D",
        "text": "after the rain?",
        "isError": false
      }
    ]
  },
  {
    "id": 111,
    "level": "A1",
    "tense": "Present Simple (Frequency Adverb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Tom",
        "isError": false
      },
      {
        "id": "B",
        "text": "always is",
        "isError": true,
        "correction": "is always",
        "explanation": "'Always', 'usually', 'never' kabi chastota ravishlari 'to be' (am/is/are) fe'lidan KEYIN keladi: 'is always' to'g'ri tartibdir."
      },
      {
        "id": "C",
        "text": "on time for",
        "isError": false
      },
      {
        "id": "D",
        "text": "his morning classes",
        "isError": false
      }
    ]
  },
  {
    "id": 112,
    "level": "A1",
    "tense": "Present Continuous (Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The students",
        "isError": false
      },
      {
        "id": "B",
        "text": "are runing",
        "isError": true,
        "correction": "are running",
        "explanation": "Qisqa unli bilan tugagan bir bo'g'inli fe'llarga '-ing' qo'shilganda oxirgi undosh ikkilanadi: 'run' -> 'running' (ikkita 'n' bilan)."
      },
      {
        "id": "C",
        "text": "in the school yard",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the break",
        "isError": false
      }
    ]
  },
  {
    "id": 113,
    "level": "A1",
    "tense": "Present Simple (Have vs Has)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Every morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "my sister",
        "isError": false
      },
      {
        "id": "C",
        "text": "have",
        "isError": true,
        "correction": "has",
        "explanation": "Uchinchi shaxs birlikda ('my sister' - she) 'have' fe'lining to'g'ri shakli 'has' bo'ladi: 'my sister has breakfast'."
      },
      {
        "id": "D",
        "text": "breakfast at seven",
        "isError": false
      }
    ]
  },
  {
    "id": 114,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My parents",
        "isError": false
      },
      {
        "id": "B",
        "text": "doesn't live",
        "isError": true,
        "correction": "don't live",
        "explanation": "'My parents' (ota-onam) ko'plikda (they) bo'lgani uchun Present Simple da 'doesn't' emas, 'don't' ishlatiladi: 'don't live'."
      },
      {
        "id": "C",
        "text": "in an apartment",
        "isError": false
      },
      {
        "id": "D",
        "text": "near the train station",
        "isError": false
      }
    ]
  },
  {
    "id": 115,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last night,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "eated",
        "isError": true,
        "correction": "ate",
        "explanation": "'Eat' fe'li noto'g'ri fe'l hisoblanadi. Uning Past Simple shakli 'eated' emas, 'ate' bo'ladi."
      },
      {
        "id": "D",
        "text": "a slice of warm pizza",
        "isError": false
      }
    ]
  },
  {
    "id": 116,
    "level": "A1",
    "tense": "Past Simple (Regular Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday afternoon,",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "studyed",
        "isError": true,
        "correction": "studied",
        "explanation": "Undoshdan keyin kelgan 'y' harfi o'tgan zamonda '-ied' ga o'zgaradi: 'study' -> 'studied' (studyed emas)."
      },
      {
        "id": "D",
        "text": "English grammar at home",
        "isError": false
      }
    ]
  },
  {
    "id": 117,
    "level": "A1",
    "tense": "Present Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "You",
        "isError": false
      },
      {
        "id": "B",
        "text": "is listening",
        "isError": true,
        "correction": "are listening",
        "explanation": "'You' olmoshi uchun Present Continuous zamonida 'is' emas, 'are' ishlatiladi: 'You are listening to music'."
      },
      {
        "id": "C",
        "text": "to peaceful music",
        "isError": false
      },
      {
        "id": "D",
        "text": "in your room",
        "isError": false
      }
    ]
  },
  {
    "id": 118,
    "level": "A1",
    "tense": "Present Simple (Verb Ending -es)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The bus",
        "isError": false
      },
      {
        "id": "B",
        "text": "pass",
        "isError": true,
        "correction": "passes",
        "explanation": "'-ss', '-sh', '-ch', '-x' bilan tugagan fe'llarga 3-shaxs birlikda '-s' emas, '-es' qo'shiladi: 'pass' -> 'passes'."
      },
      {
        "id": "C",
        "text": "by our quiet school",
        "isError": false
      },
      {
        "id": "D",
        "text": "every thirty minutes",
        "isError": false
      }
    ]
  },
  {
    "id": 119,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Two days ago,",
        "isError": false
      },
      {
        "id": "B",
        "text": "my friend",
        "isError": false
      },
      {
        "id": "C",
        "text": "comed",
        "isError": true,
        "correction": "came",
        "explanation": "'Come' fe'lining o'tgan zamon shakli 'comed' emas, 'came' hisoblanadi (come - came - come)."
      },
      {
        "id": "D",
        "text": "to visit my new house",
        "isError": false
      }
    ]
  },
  {
    "id": 120,
    "level": "A1",
    "tense": "Future with 'Going to' (To be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "is going to cook",
        "isError": true,
        "correction": "am going to cook",
        "explanation": "'I' (men) uchun 'to be' fe'lining to'g'ri shakli 'am' bo'ladi: 'I am going to cook' (is emas)."
      },
      {
        "id": "C",
        "text": "a delicious dinner",
        "isError": false
      },
      {
        "id": "D",
        "text": "for my guests tonight",
        "isError": false
      }
    ]
  },
  {
    "id": 121,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last Sunday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "taked",
        "isError": true,
        "correction": "took",
        "explanation": "'Take' fe'lining Past Simple shakli 'taked' emas, 'took' bo'ladi (take - took - taken)."
      },
      {
        "id": "D",
        "text": "many beautiful photos",
        "isError": false
      }
    ]
  },
  {
    "id": 122,
    "level": "A1",
    "tense": "Present Simple (Question Word Order)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Where",
        "isError": false
      },
      {
        "id": "B",
        "text": "you live",
        "isError": true,
        "correction": "do you live",
        "explanation": "Present Simple maxsus so'roq gaplarida so'roq so'zidan keyin yordamchi fe'l 'do' kelishi shart: 'Where do you live?'."
      },
      {
        "id": "C",
        "text": "with your family",
        "isError": false
      },
      {
        "id": "D",
        "text": "in this large city?",
        "isError": false
      }
    ]
  },
  {
    "id": 123,
    "level": "A1",
    "tense": "Present Continuous (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "isn't watching",
        "isError": true,
        "correction": "aren't watching",
        "explanation": "'We' (biz) olmoshi ko'plik bo'lgani uchun 'isn't' emas, 'aren't' bo'lishi kerak: 'We aren't watching TV'."
      },
      {
        "id": "C",
        "text": "the football match",
        "isError": false
      },
      {
        "id": "D",
        "text": "at the moment",
        "isError": false
      }
    ]
  },
  {
    "id": 124,
    "level": "A1",
    "tense": "Past Simple (To Be Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The weather",
        "isError": false
      },
      {
        "id": "B",
        "text": "weren't",
        "isError": true,
        "correction": "wasn't",
        "explanation": "'The weather' (ob-havo) birlikda (it) bo'lgani sababli 'weren't' emas, 'wasn't' ishlatiladi: 'The weather wasn't cold'."
      },
      {
        "id": "C",
        "text": "cold or rainy",
        "isError": false
      },
      {
        "id": "D",
        "text": "during our walk",
        "isError": false
      }
    ]
  },
  {
    "id": 125,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "falled",
        "isError": true,
        "correction": "fell",
        "explanation": "'Fall' fe'lining o'tgan zamon shakli 'falled' emas, 'fell' bo'ladi (fall - fell - fallen)."
      },
      {
        "id": "C",
        "text": "off his yellow bicycle",
        "isError": false
      },
      {
        "id": "D",
        "text": "on the wet street",
        "isError": false
      }
    ]
  },
  {
    "id": 126,
    "level": "A1",
    "tense": "Present Simple (Stative - Like)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My little sister",
        "isError": false
      },
      {
        "id": "B",
        "text": "is liking",
        "isError": true,
        "correction": "likes",
        "explanation": "'Like' fe'li his-tuyg'u holat fe'li bo'lib, Continuous zamonda ishlatilmaydi: 'likes ice cream' to'g'ri shakldir."
      },
      {
        "id": "C",
        "text": "chocolate ice cream",
        "isError": false
      },
      {
        "id": "D",
        "text": "very much",
        "isError": false
      }
    ]
  },
  {
    "id": 127,
    "level": "A1",
    "tense": "Present Simple (Do vs Does)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Does",
        "isError": true,
        "correction": "Do",
        "explanation": "'Your friends' (do'stlaringiz) ko'plikda (they) bo'lgani sababli 'Does' emas, 'Do' ishlatiladi: 'Do your friends play...'."
      },
      {
        "id": "B",
        "text": "your friends",
        "isError": false
      },
      {
        "id": "C",
        "text": "play chess together",
        "isError": false
      },
      {
        "id": "D",
        "text": "after classes?",
        "isError": false
      }
    ]
  },
  {
    "id": 128,
    "level": "A1",
    "tense": "Past Simple (Negative Infinitive)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "didn't went",
        "isError": true,
        "correction": "didn't go",
        "explanation": "'Didn't' dan keyin fe'lning 2-shakli (went) emas, 1-shakli (go) keladi: 'didn't go to school'."
      },
      {
        "id": "C",
        "text": "to school yesterday",
        "isError": false
      },
      {
        "id": "D",
        "text": "because of the holiday",
        "isError": false
      }
    ]
  },
  {
    "id": 129,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "is going to buying",
        "isError": true,
        "correction": "is going to buy",
        "explanation": "'Going to' dan keyin fe'l boshlang'ich shaklda keladi: 'buy' ('buying' emas)."
      },
      {
        "id": "C",
        "text": "a brand new laptop",
        "isError": false
      },
      {
        "id": "D",
        "text": "next month",
        "isError": false
      }
    ]
  },
  {
    "id": 130,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "drinked",
        "isError": true,
        "correction": "drank",
        "explanation": "'Drink' fe'lining Past Simple shakli 'drinked' emas, 'drank' hisoblanadi (drink - drank - drunk)."
      },
      {
        "id": "C",
        "text": "two cups of warm tea",
        "isError": false
      },
      {
        "id": "D",
        "text": "this morning",
        "isError": false
      }
    ]
  },
  {
    "id": 131,
    "level": "A1",
    "tense": "Present Continuous (Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "is writeing",
        "isError": true,
        "correction": "is writing",
        "explanation": "'-e' harfi bilan tugagan fe'llarga '-ing' qo'shilganda 'e' tushib qoladi: 'write' -> 'writing' (writeing emas)."
      },
      {
        "id": "C",
        "text": "a kind postcard",
        "isError": false
      },
      {
        "id": "D",
        "text": "to his pen pal",
        "isError": false
      }
    ]
  },
  {
    "id": 132,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last winter,",
        "isError": false
      },
      {
        "id": "B",
        "text": "they",
        "isError": false
      },
      {
        "id": "C",
        "text": "builded",
        "isError": true,
        "correction": "built",
        "explanation": "'Build' fe'lining o'tgan zamon shakli 'builded' emas, 'built' bo'ladi (build - built - built)."
      },
      {
        "id": "D",
        "text": "a big snowman in the park",
        "isError": false
      }
    ]
  },
  {
    "id": 133,
    "level": "A1",
    "tense": "Present Simple (Frequency Adverb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "go usually",
        "isError": true,
        "correction": "usually go",
        "explanation": "Chastota ravishlari (usually, often, always) oddiy fe'llardan OLDIN keladi: 'usually go' to'g'ri tartibdir."
      },
      {
        "id": "C",
        "text": "to the central gym",
        "isError": false
      },
      {
        "id": "D",
        "text": "on Saturday mornings",
        "isError": false
      }
    ]
  },
  {
    "id": 134,
    "level": "A1",
    "tense": "Past Simple (To Be Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Was",
        "isError": true,
        "correction": "Were",
        "explanation": "'You' olmoshi bilan 'to be' fe'lining o'tgan zamon so'roq shaklida 'Was' emas, 'Were' ishlatiladi: 'Were you at home...'."
      },
      {
        "id": "B",
        "text": "you at home",
        "isError": false
      },
      {
        "id": "C",
        "text": "when I called",
        "isError": false
      },
      {
        "id": "D",
        "text": "at eight o'clock?",
        "isError": false
      }
    ]
  },
  {
    "id": 135,
    "level": "A1",
    "tense": "Present Continuous (Stative - Know)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Right now,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I am knowing",
        "isError": true,
        "correction": "I know",
        "explanation": "'Know' (bilmoq) aqliy faoliyat holat fe'li bo'lib, Continuous zamonida ishlatilmaydi. 'I know the answer' deyiladi."
      },
      {
        "id": "C",
        "text": "the correct answer",
        "isError": false
      },
      {
        "id": "D",
        "text": "to that grammar question",
        "isError": false
      }
    ]
  },
  {
    "id": 136,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My grandmother",
        "isError": false
      },
      {
        "id": "B",
        "text": "gived",
        "isError": true,
        "correction": "gave",
        "explanation": "'Give' fe'lining o'tgan zamon shakli 'gived' emas, 'gave' bo'ladi (give - gave - given)."
      },
      {
        "id": "C",
        "text": "me a warm sweater",
        "isError": false
      },
      {
        "id": "D",
        "text": "for my birthday",
        "isError": false
      }
    ]
  },
  {
    "id": 137,
    "level": "A1",
    "tense": "Present Simple (Verb ending -y)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The airplane",
        "isError": false
      },
      {
        "id": "B",
        "text": "flys",
        "isError": true,
        "correction": "flies",
        "explanation": "Undoshdan keyingi 'y' bilan tugagan fe'llarga 3-shaxsda '-ies' qo'shiladi: 'fly' -> 'flies' (flys emas)."
      },
      {
        "id": "C",
        "text": "above the white clouds",
        "isError": false
      },
      {
        "id": "D",
        "text": "every single afternoon",
        "isError": false
      }
    ]
  },
  {
    "id": 138,
    "level": "A1",
    "tense": "Past Simple (Question Form)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did she",
        "isError": false
      },
      {
        "id": "B",
        "text": "met",
        "isError": true,
        "correction": "meet",
        "explanation": "'Did' yordamchi fe'li bor so'roq gapda asosiy fe'l o'tgan zamonda (met) emas, boshlang'ich shaklda (meet) bo'ladi: 'Did she meet...'."
      },
      {
        "id": "C",
        "text": "her new teacher",
        "isError": false
      },
      {
        "id": "D",
        "text": "at the entrance?",
        "isError": false
      }
    ]
  },
  {
    "id": 139,
    "level": "A1",
    "tense": "Present Continuous (Action happening now)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Listen carefully!",
        "isError": false
      },
      {
        "id": "B",
        "text": "Somebody",
        "isError": false
      },
      {
        "id": "C",
        "text": "knock",
        "isError": true,
        "correction": "is knocking",
        "explanation": "Ayni damda sodir bo'layotgan ish-harakat (Listen!) uchun Present Continuous ishlatiladi: 'is knocking' bo'lishi lozim."
      },
      {
        "id": "D",
        "text": "at the wooden door",
        "isError": false
      }
    ]
  },
  {
    "id": 140,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the dog",
        "isError": false
      },
      {
        "id": "C",
        "text": "runned",
        "isError": true,
        "correction": "ran",
        "explanation": "'Run' fe'lining Past Simple shakli 'runned' emas, 'ran' hisoblanadi (run - ran - run)."
      },
      {
        "id": "D",
        "text": "across the wide park",
        "isError": false
      }
    ]
  },
  {
    "id": 141,
    "level": "A1",
    "tense": "Present Simple (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "His shoes",
        "isError": false
      },
      {
        "id": "B",
        "text": "is",
        "isError": true,
        "correction": "are",
        "explanation": "'His shoes' (poyabzali) ko'plikda bo'lgani uchun 'to be' fe'lining ko'plik shakli 'are' ishlatiladi: 'are very clean'."
      },
      {
        "id": "C",
        "text": "very clean and shiny",
        "isError": false
      },
      {
        "id": "D",
        "text": "today",
        "isError": false
      }
    ]
  },
  {
    "id": 142,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "going to clean",
        "isError": true,
        "correction": "are going to clean",
        "explanation": "'Going to' oldidan 'to be' fe'li tushirib qoldirilmasligi shart: 'We are going to clean' bo'lishi kerak."
      },
      {
        "id": "C",
        "text": "our sunny kitchen",
        "isError": false
      },
      {
        "id": "D",
        "text": "this afternoon",
        "isError": false
      }
    ]
  },
  {
    "id": 143,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "heared",
        "isError": true,
        "correction": "heard",
        "explanation": "'Hear' fe'lining o'tgan zamon shakli 'heared' emas, 'heard' bo'ladi (hear - heard - heard)."
      },
      {
        "id": "C",
        "text": "a strange noise outside",
        "isError": false
      },
      {
        "id": "D",
        "text": "at midnight",
        "isError": false
      }
    ]
  },
  {
    "id": 144,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Jack",
        "isError": false
      },
      {
        "id": "B",
        "text": "doesn't works",
        "isError": true,
        "correction": "doesn't work",
        "explanation": "'Doesn't' yordamchi fe'li kelganda asosiy fe'ldan '-s' qo'shimchasi tushib qoladi: 'doesn't work' (works emas)."
      },
      {
        "id": "C",
        "text": "on Sundays",
        "isError": false
      },
      {
        "id": "D",
        "text": "at the bakery",
        "isError": false
      }
    ]
  },
  {
    "id": 145,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "speaked",
        "isError": true,
        "correction": "spoke",
        "explanation": "'Speak' fe'lining o'tgan zamon shakli 'speaked' emas, 'spoke' bo'ladi (speak - spoke - spoken)."
      },
      {
        "id": "C",
        "text": "very politely",
        "isError": false
      },
      {
        "id": "D",
        "text": "to the new librarian",
        "isError": false
      }
    ]
  },
  {
    "id": 146,
    "level": "A1",
    "tense": "Present Continuous (Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The cat",
        "isError": false
      },
      {
        "id": "B",
        "text": "is siting",
        "isError": true,
        "correction": "is sitting",
        "explanation": "'Sit' qisqa unli bilan tugagani sababli '-ing' qo'shilganda 't' ikkilanadi: 'sitting' (siting emas)."
      },
      {
        "id": "C",
        "text": "on the soft armchair",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the living room",
        "isError": false
      }
    ]
  },
  {
    "id": 147,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "finded",
        "isError": true,
        "correction": "found",
        "explanation": "'Find' fe'lining Past Simple shakli 'finded' emas, 'found' bo'ladi (find - found - found)."
      },
      {
        "id": "C",
        "text": "our lost silver key",
        "isError": false
      },
      {
        "id": "D",
        "text": "under the carpet",
        "isError": false
      }
    ]
  },
  {
    "id": 148,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Those birds",
        "isError": false
      },
      {
        "id": "B",
        "text": "doesn't fly",
        "isError": true,
        "correction": "don't fly",
        "explanation": "'Those birds' (ana u qushlar) ko'plikda (they) bo'lgani uchun 'doesn't' emas, 'don't' bo'lishi kerak: 'don't fly'."
      },
      {
        "id": "C",
        "text": "to warm countries",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the autumn",
        "isError": false
      }
    ]
  },
  {
    "id": 149,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "sleeped",
        "isError": true,
        "correction": "slept",
        "explanation": "'Sleep' fe'lining Past Simple shakli 'sleeped' emas, 'slept' bo'ladi (sleep - slept - slept)."
      },
      {
        "id": "D",
        "text": "for nine hours straight",
        "isError": false
      }
    ]
  },
  {
    "id": 150,
    "level": "A1",
    "tense": "Present Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The baby",
        "isError": false
      },
      {
        "id": "B",
        "text": "are sleeping",
        "isError": true,
        "correction": "is sleeping",
        "explanation": "'The baby' (chaqaloq) birlikda bo'lgani sababli 'are' emas, 'is' ishlatiladi: 'is sleeping'."
      },
      {
        "id": "C",
        "text": "in the peaceful bedroom",
        "isError": false
      },
      {
        "id": "D",
        "text": "right now",
        "isError": false
      }
    ]
  },
  {
    "id": 151,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "bringed",
        "isError": true,
        "correction": "brought",
        "explanation": "'Bring' fe'lining o'tgan zamon shakli 'bringed' emas, 'brought' hisoblanadi (bring - brought - brought)."
      },
      {
        "id": "C",
        "text": "an apple pie",
        "isError": false
      },
      {
        "id": "D",
        "text": "to our tea party",
        "isError": false
      }
    ]
  },
  {
    "id": 152,
    "level": "A1",
    "tense": "Present Simple (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Do",
        "isError": true,
        "correction": "Does",
        "explanation": "Ega 'she' bo'lgani uchun Present Simple so'roq gapida 'Do' emas, 'Does' qo'yiladi: 'Does she have...?'."
      },
      {
        "id": "B",
        "text": "she have",
        "isError": false
      },
      {
        "id": "C",
        "text": "an umbrella",
        "isError": false
      },
      {
        "id": "D",
        "text": "in her bag?",
        "isError": false
      }
    ]
  },
  {
    "id": 153,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "leaved",
        "isError": true,
        "correction": "left",
        "explanation": "'Leave' fe'lining Past Simple shakli 'leaved' emas, 'left' bo'ladi (leave - left - left)."
      },
      {
        "id": "C",
        "text": "the office early",
        "isError": false
      },
      {
        "id": "D",
        "text": "on Friday evening",
        "isError": false
      }
    ]
  },
  {
    "id": 154,
    "level": "A1",
    "tense": "Present Continuous (Stative - Need)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Excuse me,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I am needing",
        "isError": true,
        "correction": "I need",
        "explanation": "'Need' (kerak bo'lmoq) holat fe'li bo'lib, '-ing' bilan ishlatilmaydi: 'I need some help' to'g'ri shakldir."
      },
      {
        "id": "C",
        "text": "some help",
        "isError": false
      },
      {
        "id": "D",
        "text": "with my heavy luggage",
        "isError": false
      }
    ]
  },
  {
    "id": 155,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "sended",
        "isError": true,
        "correction": "sent",
        "explanation": "'Send' fe'lining o'tgan zamon shakli 'sended' emas, 'sent' hisoblanadi (send - sent - sent)."
      },
      {
        "id": "C",
        "text": "a short text message",
        "isError": false
      },
      {
        "id": "D",
        "text": "to his manager",
        "isError": false
      }
    ]
  },
  {
    "id": 156,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Are you",
        "isError": false
      },
      {
        "id": "B",
        "text": "going to invited",
        "isError": true,
        "correction": "going to invite",
        "explanation": "'Going to' dan keyin fe'l o'tgan zamonda emas, boshlang'ich shaklda (invite) keladi: 'going to invite'."
      },
      {
        "id": "C",
        "text": "your neighbors",
        "isError": false
      },
      {
        "id": "D",
        "text": "to the dinner?",
        "isError": false
      }
    ]
  },
  {
    "id": 157,
    "level": "A1",
    "tense": "Past Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The teacher",
        "isError": false
      },
      {
        "id": "B",
        "text": "didn't gave",
        "isError": true,
        "correction": "didn't give",
        "explanation": "'Didn't' dan keyin fe'lning 2-shakli (gave) emas, 1-shakli (give) kelishi lozim: 'didn't give homework'."
      },
      {
        "id": "C",
        "text": "any homework",
        "isError": false
      },
      {
        "id": "D",
        "text": "for the weekend",
        "isError": false
      }
    ]
  },
  {
    "id": 158,
    "level": "A1",
    "tense": "Present Simple (Verb ending -ch)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My grandfather",
        "isError": false
      },
      {
        "id": "B",
        "text": "watch",
        "isError": true,
        "correction": "watches",
        "explanation": "'-ch' bilan tugagan fe'llarga 3-shaxsda '-es' qo'shiladi: 'watch' -> 'watches' (watch emas)."
      },
      {
        "id": "C",
        "text": "the evening news",
        "isError": false
      },
      {
        "id": "D",
        "text": "at eight o'clock",
        "isError": false
      }
    ]
  },
  {
    "id": 159,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "buyed",
        "isError": true,
        "correction": "bought",
        "explanation": "'Buy' fe'lining Past Simple shakli 'buyed' emas, 'bought' bo'ladi (buy - bought - bought)."
      },
      {
        "id": "C",
        "text": "fresh red apples",
        "isError": false
      },
      {
        "id": "D",
        "text": "at the farmer's market",
        "isError": false
      }
    ]
  },
  {
    "id": 160,
    "level": "A1",
    "tense": "Present Continuous (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Is",
        "isError": true,
        "correction": "Are",
        "explanation": "'You' olmoshi bilan Present Continuous so'roq gapida 'Is' emas, 'Are' ishlatiladi: 'Are you doing your homework?'."
      },
      {
        "id": "B",
        "text": "you doing",
        "isError": false
      },
      {
        "id": "C",
        "text": "your daily homework",
        "isError": false
      },
      {
        "id": "D",
        "text": "right now?",
        "isError": false
      }
    ]
  },
  {
    "id": 161,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The little girl",
        "isError": false
      },
      {
        "id": "B",
        "text": "losed",
        "isError": true,
        "correction": "lost",
        "explanation": "'Lose' fe'lining Past Simple shakli 'losed' emas, 'lost' hisoblanadi (lose - lost - lost)."
      },
      {
        "id": "C",
        "text": "her favorite doll",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the garden",
        "isError": false
      }
    ]
  },
  {
    "id": 162,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "don't drive",
        "isError": true,
        "correction": "doesn't drive",
        "explanation": "'He' olmoshi uchun inkor shaklda 'don't' emas, 'doesn't' ishlatiladi: 'He doesn't drive to work'."
      },
      {
        "id": "C",
        "text": "his car to work",
        "isError": false
      },
      {
        "id": "D",
        "text": "on rainy days",
        "isError": false
      }
    ]
  },
  {
    "id": 163,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "telled",
        "isError": true,
        "correction": "told",
        "explanation": "'Tell' fe'lining Past Simple shakli 'telled' emas, 'told' bo'ladi (tell - told - told)."
      },
      {
        "id": "C",
        "text": "him the true story",
        "isError": false
      },
      {
        "id": "D",
        "text": "yesterday afternoon",
        "isError": false
      }
    ]
  },
  {
    "id": 164,
    "level": "A1",
    "tense": "Present Continuous (Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The boys",
        "isError": false
      },
      {
        "id": "B",
        "text": "are swiming",
        "isError": true,
        "correction": "are swimming",
        "explanation": "'Swim' bir bo'g'inli qisqa unlili fe'l bo'lgani sababli '-ing' qo'shilganda 'm' ikkilanadi: 'swimming' (swiming emas)."
      },
      {
        "id": "C",
        "text": "in the clean pool",
        "isError": false
      },
      {
        "id": "D",
        "text": "after school",
        "isError": false
      }
    ]
  },
  {
    "id": 165,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "It",
        "isError": false
      },
      {
        "id": "B",
        "text": "are going to be",
        "isError": true,
        "correction": "is going to be",
        "explanation": "'It' olmoshi uchun 'are' emas, 'is' qo'llaniladi: 'It is going to be sunny tomorrow'."
      },
      {
        "id": "C",
        "text": "a sunny day",
        "isError": false
      },
      {
        "id": "D",
        "text": "tomorrow morning",
        "isError": false
      }
    ]
  },
  {
    "id": 201,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While I was studying",
        "isError": false
      },
      {
        "id": "B",
        "text": "for my test,",
        "isError": false
      },
      {
        "id": "C",
        "text": "the telephone was ringing",
        "isError": true,
        "correction": "the telephone rang",
        "explanation": "Davom etayotgan jarayon paytida to'satdan sodir bo'lgan qisqa ish-harakat uchun Past Simple ('rang') ishlatiladi."
      },
      {
        "id": "D",
        "text": "suddenly three times",
        "isError": false
      }
    ]
  },
  {
    "id": 202,
    "level": "A2",
    "tense": "Present Perfect (Since vs For)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We have lived",
        "isError": false
      },
      {
        "id": "B",
        "text": "in this quiet town",
        "isError": false
      },
      {
        "id": "C",
        "text": "since five years",
        "isError": true,
        "correction": "for five years",
        "explanation": "Vaqt davomiyligi (muddat: five years) uchun 'since' emas, 'for' predlogi ishlatiladi ('since' aniq boshlanish yili/vaqti uchun)."
      },
      {
        "id": "D",
        "text": "and we love it here",
        "isError": false
      }
    ]
  },
  {
    "id": 203,
    "level": "A2",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "catched",
        "isError": true,
        "correction": "caught",
        "explanation": "'Catch' fe'lining Past Simple shakli 'catched' emas, 'caught' bo'ladi (catch - caught - caught)."
      },
      {
        "id": "C",
        "text": "the early morning bus",
        "isError": false
      },
      {
        "id": "D",
        "text": "to reach work on time",
        "isError": false
      }
    ]
  },
  {
    "id": 204,
    "level": "A2",
    "tense": "Present Perfect (Have vs Has)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My sister",
        "isError": false
      },
      {
        "id": "B",
        "text": "have already finished",
        "isError": true,
        "correction": "has already finished",
        "explanation": "'My sister' (she) uchun Present Perfect zamonida 'have' emas, 'has' yordamchi fe'li ishlatiladi: 'has already finished'."
      },
      {
        "id": "C",
        "text": "her science project",
        "isError": false
      },
      {
        "id": "D",
        "text": "before the deadline",
        "isError": false
      }
    ]
  },
  {
    "id": 205,
    "level": "A2",
    "tense": "Future: Will vs Going to",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Look at those dark black clouds!",
        "isError": false
      },
      {
        "id": "B",
        "text": "It",
        "isError": false
      },
      {
        "id": "C",
        "text": "will rain",
        "isError": true,
        "correction": "is going to rain",
        "explanation": "Hozir ko'rinib turgan aniq alomat (dark clouds) asosidagi bashorat uchun 'will' emas, 'be going to' qo'llaniladi: 'is going to rain'."
      },
      {
        "id": "D",
        "text": "in a few minutes",
        "isError": false
      }
    ]
  },
  {
    "id": 206,
    "level": "A2",
    "tense": "Past Continuous (Subject Agreement)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At eight o'clock yesterday evening,",
        "isError": false
      },
      {
        "id": "B",
        "text": "you and your brother",
        "isError": false
      },
      {
        "id": "C",
        "text": "was watching",
        "isError": true,
        "correction": "were watching",
        "explanation": "'You and your brother' ko'plik (they/sizlar) bo'lgani sababli Past Continuous da 'was' emas, 'were' bo'ladi: 'were watching'."
      },
      {
        "id": "D",
        "text": "the football match",
        "isError": false
      }
    ]
  },
  {
    "id": 207,
    "level": "A2",
    "tense": "Present Perfect (Yet / Already)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The delivery driver",
        "isError": false
      },
      {
        "id": "B",
        "text": "hasn't arrived",
        "isError": false
      },
      {
        "id": "C",
        "text": "with our warm dinner",
        "isError": false
      },
      {
        "id": "D",
        "text": "already",
        "isError": true,
        "correction": "yet",
        "explanation": "Inkor gaplarning oxirida 'hali' ma'nosida 'already' emas, balki 'yet' so'zi ishlatiladi: 'hasn't arrived... yet'."
      }
    ]
  },
  {
    "id": 208,
    "level": "A2",
    "tense": "Past Simple (Irregular Verb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last summer,",
        "isError": false
      },
      {
        "id": "B",
        "text": "my uncle",
        "isError": false
      },
      {
        "id": "C",
        "text": "writed",
        "isError": true,
        "correction": "wrote",
        "explanation": "'Write' fe'lining Past Simple shakli 'writed' emas, 'wrote' hisoblanadi (write - wrote - written)."
      },
      {
        "id": "D",
        "text": "an inspiring travel guide",
        "isError": false
      }
    ]
  },
  {
    "id": 209,
    "level": "A2",
    "tense": "Present Simple with Schedule",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The express train",
        "isError": false
      },
      {
        "id": "B",
        "text": "is departing",
        "isError": true,
        "correction": "departs",
        "explanation": "Poyezd va transportlarning rasmiy harakat jadvali (timetable) uchun Present Simple qo'llaniladi: 'departs at 6:30 PM'."
      },
      {
        "id": "C",
        "text": "at 6:30 PM",
        "isError": false
      },
      {
        "id": "D",
        "text": "from platform number two",
        "isError": false
      }
    ]
  },
  {
    "id": 210,
    "level": "A2",
    "tense": "Past Continuous (When / While)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When we",
        "isError": false
      },
      {
        "id": "B",
        "text": "were having",
        "isError": false
      },
      {
        "id": "C",
        "text": "a picnic by the river,",
        "isError": false
      },
      {
        "id": "D",
        "text": "it was starting to snow",
        "isError": true,
        "correction": "it started to snow",
        "explanation": "Davomli jarayon paytida boshlangan to'satdan harakat Past Simple da beriladi: 'it started to snow' bo'ladi."
      }
    ]
  },
  {
    "id": 211,
    "level": "A2",
    "tense": "Present Perfect (Ever / Never)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Have you",
        "isError": false
      },
      {
        "id": "B",
        "text": "ever flew",
        "isError": true,
        "correction": "ever flown",
        "explanation": "Present Perfect zamonida 'have' dan keyin fe'lning 3-shakli (flown) keladi: 'fly - flew - flown'."
      },
      {
        "id": "C",
        "text": "in a hot air balloon",
        "isError": false
      },
      {
        "id": "D",
        "text": "over Cappadocia?",
        "isError": false
      }
    ]
  },
  {
    "id": 212,
    "level": "A2",
    "tense": "Future (Spontaneous decision)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The doorbell is ringing,",
        "isError": false
      },
      {
        "id": "B",
        "text": "so I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am going to open",
        "isError": true,
        "correction": "will open",
        "explanation": "Aynan gapirib turilgan vaqtda to'satdan qabul qilingan qaror uchun 'going to' emas, 'will' ishlatiladi: 'I will open it'."
      },
      {
        "id": "D",
        "text": "the front door right away",
        "isError": false
      }
    ]
  },
  {
    "id": 213,
    "level": "A2",
    "tense": "Present Perfect (Since with date)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He has worked",
        "isError": false
      },
      {
        "id": "B",
        "text": "as an engineer",
        "isError": false
      },
      {
        "id": "C",
        "text": "for 2015",
        "isError": true,
        "correction": "since 2015",
        "explanation": "Aniq boshlanish yili (2015) bilan 'for' emas, 'since' ishlatiladi: 'since 2015'."
      },
      {
        "id": "D",
        "text": "at this company",
        "isError": false
      }
    ]
  },
  {
    "id": 214,
    "level": "A2",
    "tense": "Past Continuous (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "wasn't playing",
        "isError": true,
        "correction": "weren't playing",
        "explanation": "'They' ko'plik olmoshi bo'lgani sababli Past Continuous da 'wasn't' emas, 'weren't' bo'lishi kerak: 'weren't playing'."
      },
      {
        "id": "C",
        "text": "video games",
        "isError": false
      },
      {
        "id": "D",
        "text": "when the electricity went out",
        "isError": false
      }
    ]
  },
  {
    "id": 215,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Break)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Who",
        "isError": false
      },
      {
        "id": "B",
        "text": "has broke",
        "isError": true,
        "correction": "has broken",
        "explanation": "Present Perfect zamonida 'has' dan keyin fe'lning 3-shakli (broken) ishlatiladi (break - broke - broken)."
      },
      {
        "id": "C",
        "text": "the glass vase",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the dining room?",
        "isError": false
      }
    ]
  },
  {
    "id": 216,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "As she was walking",
        "isError": false
      },
      {
        "id": "B",
        "text": "down the quiet street,",
        "isError": false
      },
      {
        "id": "C",
        "text": "she was seeing",
        "isError": true,
        "correction": "she saw",
        "explanation": "'See' fe'li qisqa harakat va holat fe'li bo'lib, bu yerda Past Simple da keladi: 'she saw an old friend'."
      },
      {
        "id": "D",
        "text": "an old friend from school",
        "isError": false
      }
    ]
  },
  {
    "id": 217,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Choose)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The committee",
        "isError": false
      },
      {
        "id": "B",
        "text": "has chose",
        "isError": true,
        "correction": "has chosen",
        "explanation": "'Choose' fe'lining 3-shakli 'chosen' bo'ladi: 'has chosen' (chose esa 2-shakldir)."
      },
      {
        "id": "C",
        "text": "the best painting",
        "isError": false
      },
      {
        "id": "D",
        "text": "for the exhibition",
        "isError": false
      }
    ]
  },
  {
    "id": 218,
    "level": "A2",
    "tense": "Future (Offer / Promise)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Don't worry about the bags,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am carrying",
        "isError": true,
        "correction": "will carry",
        "explanation": "Yordam taklif qilish (offer) uchun Present Continuous emas, balki 'will' ishlatiladi: 'I will carry them for you'."
      },
      {
        "id": "D",
        "text": "them to your car",
        "isError": false
      }
    ]
  },
  {
    "id": 219,
    "level": "A2",
    "tense": "Present Perfect (Just position)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "have finished just",
        "isError": true,
        "correction": "have just finished",
        "explanation": "'Just' so'zi yordamchi 'have' va asosiy fe'l orasida keladi: 'have just finished' to'g'ri tartibdir."
      },
      {
        "id": "C",
        "text": "cleaning the kitchen",
        "isError": false
      },
      {
        "id": "D",
        "text": "after cooking",
        "isError": false
      }
    ]
  },
  {
    "id": 220,
    "level": "A2",
    "tense": "Past Continuous (Interrupted action)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He was driving",
        "isError": false
      },
      {
        "id": "B",
        "text": "carefully along the highway",
        "isError": false
      },
      {
        "id": "C",
        "text": "when a deer was jumping",
        "isError": true,
        "correction": "when a deer jumped",
        "explanation": "'When' dan keyin to'satdan ro'y bergan voqea Past Simple da bo'ladi: 'when a deer jumped' (was jumping emas)."
      },
      {
        "id": "D",
        "text": "in front of the car",
        "isError": false
      }
    ]
  },
  {
    "id": 221,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Drive)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "has never drove",
        "isError": true,
        "correction": "has never driven",
        "explanation": "'Drive' fe'lining 3-shakli 'driven' bo'ladi: 'has never driven' (drove esa 2-shakl)."
      },
      {
        "id": "C",
        "text": "an electric vehicle",
        "isError": false
      },
      {
        "id": "D",
        "text": "in heavy traffic",
        "isError": false
      }
    ]
  },
  {
    "id": 222,
    "level": "A2",
    "tense": "Past Continuous (Parallel actions)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While my mother was cooking,",
        "isError": false
      },
      {
        "id": "B",
        "text": "my father",
        "isError": false
      },
      {
        "id": "C",
        "text": "readed",
        "isError": true,
        "correction": "was reading",
        "explanation": "'While' bilan bir vaqtda davom etayotgan parallel jarayonlar uchun Past Continuous qo'llaniladi: 'was reading'."
      },
      {
        "id": "D",
        "text": "the morning newspaper",
        "isError": false
      }
    ]
  },
  {
    "id": 223,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Forget)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Oh no!",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "have forgot",
        "isError": true,
        "correction": "have forgotten",
        "explanation": "'Forget' fe'lining 3-shakli 'forgotten' bo'ladi: 'have forgotten' (forgot emas)."
      },
      {
        "id": "D",
        "text": "my apartment keys at work",
        "isError": false
      }
    ]
  },
  {
    "id": 224,
    "level": "A2",
    "tense": "Future (Arranged Plan)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We bought the tickets,",
        "isError": false
      },
      {
        "id": "B",
        "text": "so we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will fly",
        "isError": true,
        "correction": "are flying",
        "explanation": "Chiptasi olingan va aniq rejalashtirilgan kelasi ish-harakat uchun Present Continuous ma'qul: 'are flying to Rome'."
      },
      {
        "id": "D",
        "text": "to Rome next Tuesday",
        "isError": false
      }
    ]
  },
  {
    "id": 225,
    "level": "A2",
    "tense": "Past Continuous (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "What",
        "isError": false
      },
      {
        "id": "B",
        "text": "was you doing",
        "isError": true,
        "correction": "were you doing",
        "explanation": "'You' bilan Past Continuous so'rog'ida 'was' emas, 'were' bo'ladi: 'What were you doing at that time?'."
      },
      {
        "id": "C",
        "text": "when the fire alarm sounded",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the office?",
        "isError": false
      }
    ]
  },
  {
    "id": 226,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Grow)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Your son",
        "isError": false
      },
      {
        "id": "B",
        "text": "has grew",
        "isError": true,
        "correction": "has grown",
        "explanation": "'Grow' fe'lining 3-shakli 'grown' hisoblanadi (grow - grew - grown): 'has grown so tall'."
      },
      {
        "id": "C",
        "text": "so much taller",
        "isError": false
      },
      {
        "id": "D",
        "text": "since last summer",
        "isError": false
      }
    ]
  },
  {
    "id": 227,
    "level": "A2",
    "tense": "Past Simple vs Past Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The electricity went out",
        "isError": false
      },
      {
        "id": "B",
        "text": "while the children",
        "isError": false
      },
      {
        "id": "C",
        "text": "slept",
        "isError": true,
        "correction": "were sleeping",
        "explanation": "'While' dan keyin davom etib turgan fon jarayoni uchun Past Continuous qo'llaniladi: 'were sleeping'."
      },
      {
        "id": "D",
        "text": "in their cozy room",
        "isError": false
      }
    ]
  },
  {
    "id": 228,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Know)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We have",
        "isError": false
      },
      {
        "id": "B",
        "text": "knew",
        "isError": true,
        "correction": "known",
        "explanation": "Present Perfect zamonida 'knew' (2-shakl) emas, 'known' (3-shakl) bo'lishi kerak: 'have known each other'."
      },
      {
        "id": "C",
        "text": "each other",
        "isError": false
      },
      {
        "id": "D",
        "text": "since primary school",
        "isError": false
      }
    ]
  },
  {
    "id": 229,
    "level": "A2",
    "tense": "Present Perfect (Since with clause)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She has been happy",
        "isError": false
      },
      {
        "id": "B",
        "text": "since she",
        "isError": false
      },
      {
        "id": "C",
        "text": "has started",
        "isError": true,
        "correction": "started",
        "explanation": "'Since' dan keyingi ergash gapda aniq boshlangan nuqta Past Simple da bo'ladi: 'since she started her new job'."
      },
      {
        "id": "D",
        "text": "her new job in finance",
        "isError": false
      }
    ]
  },
  {
    "id": 230,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The birds",
        "isError": false
      },
      {
        "id": "B",
        "text": "was singing",
        "isError": true,
        "correction": "were singing",
        "explanation": "'The birds' ko'plikda bo'lgani sababli Past Continuous da 'were singing' bo'lishi kerak ('was' emas)."
      },
      {
        "id": "C",
        "text": "cheerfully in the trees",
        "isError": false
      },
      {
        "id": "D",
        "text": "all morning yesterday",
        "isError": false
      }
    ]
  },
  {
    "id": 231,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Hide)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The puppy",
        "isError": false
      },
      {
        "id": "B",
        "text": "has hid",
        "isError": true,
        "correction": "has hidden",
        "explanation": "'Hide' fe'lining 3-shakli 'hidden' bo'ladi: 'has hidden under the sofa' (hid emas)."
      },
      {
        "id": "C",
        "text": "under the sofa",
        "isError": false
      },
      {
        "id": "D",
        "text": "because of the thunder",
        "isError": false
      }
    ]
  },
  {
    "id": 232,
    "level": "A2",
    "tense": "Future (Prediction with think)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I think",
        "isError": false
      },
      {
        "id": "B",
        "text": "our team",
        "isError": false
      },
      {
        "id": "C",
        "text": "is winning",
        "isError": true,
        "correction": "will win",
        "explanation": "'I think', 'I believe' kabi shaxsiy fikrlar bilan kelasi zamon uchun 'will' ishlatiladi: 'will win the match'."
      },
      {
        "id": "D",
        "text": "the final championship game",
        "isError": false
      }
    ]
  },
  {
    "id": 233,
    "level": "A2",
    "tense": "Past Continuous (Spelling - Run)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He was",
        "isError": false
      },
      {
        "id": "B",
        "text": "runing",
        "isError": true,
        "correction": "running",
        "explanation": "Past Continuous da ham 'run' fe'liga '-ing' qo'shilganda 'n' ikkilanadi: 'running' (runing emas)."
      },
      {
        "id": "C",
        "text": "to catch the train",
        "isError": false
      },
      {
        "id": "D",
        "text": "when he dropped his bag",
        "isError": false
      }
    ]
  },
  {
    "id": 234,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Ride)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Have you ever",
        "isError": false
      },
      {
        "id": "B",
        "text": "rode",
        "isError": true,
        "correction": "ridden",
        "explanation": "'Ride' fe'lining 3-shakli 'ridden' hisoblanadi (ride - rode - ridden): 'Have you ever ridden a camel?'."
      },
      {
        "id": "C",
        "text": "a camel across the desert",
        "isError": false
      },
      {
        "id": "D",
        "text": "during a trip?",
        "isError": false
      }
    ]
  },
  {
    "id": 235,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While they were walking in the forest,",
        "isError": false
      },
      {
        "id": "B",
        "text": "they",
        "isError": false
      },
      {
        "id": "C",
        "text": "were finding",
        "isError": true,
        "correction": "found",
        "explanation": "Biror narsani to'satdan topib olish qisqa harakat bo'lib, Past Simple da keladi: 'they found a small cave'."
      },
      {
        "id": "D",
        "text": "a mysterious small cave",
        "isError": false
      }
    ]
  },
  {
    "id": 236,
    "level": "A2",
    "tense": "Present Perfect (For vs Since)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I haven't eaten",
        "isError": false
      },
      {
        "id": "B",
        "text": "any sweets",
        "isError": false
      },
      {
        "id": "C",
        "text": "for this morning",
        "isError": true,
        "correction": "since this morning",
        "explanation": "'This morning' aniq boshlangan nuqta bo'lgani sababli 'for' emas, 'since' ishlatiladi: 'since this morning'."
      },
      {
        "id": "D",
        "text": "to protect my health",
        "isError": false
      }
    ]
  },
  {
    "id": 237,
    "level": "A2",
    "tense": "Past Continuous (Subject Agreement)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The police officer",
        "isError": false
      },
      {
        "id": "B",
        "text": "were questioning",
        "isError": true,
        "correction": "was questioning",
        "explanation": "'The police officer' (birlikda) bo'lgani sababli 'were' emas, 'was' ishlatiladi: 'was questioning the witness'."
      },
      {
        "id": "C",
        "text": "the witness carefully",
        "isError": false
      },
      {
        "id": "D",
        "text": "after the accident",
        "isError": false
      }
    ]
  },
  {
    "id": 238,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Ring)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The school bell",
        "isError": false
      },
      {
        "id": "B",
        "text": "has rang",
        "isError": true,
        "correction": "has rung",
        "explanation": "'Ring' fe'lining 3-shakli 'rung' bo'ladi (ring - rang - rung): 'has rung twice'."
      },
      {
        "id": "C",
        "text": "twice already",
        "isError": false
      },
      {
        "id": "D",
        "text": "this morning",
        "isError": false
      }
    ]
  },
  {
    "id": 239,
    "level": "A2",
    "tense": "Future (Scheduled Event)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The art museum",
        "isError": false
      },
      {
        "id": "B",
        "text": "will open",
        "isError": true,
        "correction": "opens",
        "explanation": "Muzey va rasmiy muassasalarning jadval bo'yicha ochilish vaqti uchun Present Simple ishlatiladi: 'opens at 9:00 AM'."
      },
      {
        "id": "C",
        "text": "at nine o'clock tomorrow",
        "isError": false
      },
      {
        "id": "D",
        "text": "for visitors",
        "isError": false
      }
    ]
  },
  {
    "id": 240,
    "level": "A2",
    "tense": "Past Continuous (When / While)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Someone",
        "isError": false
      },
      {
        "id": "B",
        "text": "was knocking",
        "isError": true,
        "correction": "knocked",
        "explanation": "O'qish jarayoni davom etayotganda eshik qoqilishi to'satdan qisqa harakatdir: 'someone knocked at the door'."
      },
      {
        "id": "C",
        "text": "at the front door",
        "isError": false
      },
      {
        "id": "D",
        "text": "while I was reading",
        "isError": false
      }
    ]
  },
  {
    "id": 241,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Shake)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The two presidents",
        "isError": false
      },
      {
        "id": "B",
        "text": "have shook",
        "isError": true,
        "correction": "have shaken",
        "explanation": "'Shake' fe'lining 3-shakli 'shaken' bo'ladi (shake - shook - shaken): 'have shaken hands'."
      },
      {
        "id": "C",
        "text": "hands warmly",
        "isError": false
      },
      {
        "id": "D",
        "text": "in front of reporters",
        "isError": false
      }
    ]
  },
  {
    "id": 242,
    "level": "A2",
    "tense": "Past Continuous (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "weren't wearing",
        "isError": true,
        "correction": "wasn't wearing",
        "explanation": "'She' olmoshi bilan 'weren't' emas, 'wasn't' ishlatiladi: 'She wasn't wearing a jacket'."
      },
      {
        "id": "C",
        "text": "a warm winter jacket",
        "isError": false
      },
      {
        "id": "D",
        "text": "despite the chilly wind",
        "isError": false
      }
    ]
  },
  {
    "id": 243,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Steal)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "A thief",
        "isError": false
      },
      {
        "id": "B",
        "text": "has stole",
        "isError": true,
        "correction": "has stolen",
        "explanation": "'Steal' fe'lining 3-shakli 'stolen' bo'ladi: 'has stolen a valuable painting' (stole emas)."
      },
      {
        "id": "C",
        "text": "a valuable painting",
        "isError": false
      },
      {
        "id": "D",
        "text": "from the gallery",
        "isError": false
      }
    ]
  },
  {
    "id": 244,
    "level": "A2",
    "tense": "Future (Instant decision)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "It is quite warm here,",
        "isError": false
      },
      {
        "id": "B",
        "text": "so I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am going to open",
        "isError": true,
        "correction": "will open",
        "explanation": "Hozirgi his-tuyg'u ta'sirida qabul qilingan oniy qaror uchun 'will' ma'qul: 'I will open the window'."
      },
      {
        "id": "D",
        "text": "the large window",
        "isError": false
      }
    ]
  },
  {
    "id": 245,
    "level": "A2",
    "tense": "Past Continuous (Specific past time)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At this exact time yesterday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "traveled",
        "isError": true,
        "correction": "were traveling",
        "explanation": "O'tgan zamondagi aniq vaqtda ('At this exact time yesterday') jarayon davom etayotgan bo'ladi: 'were traveling'."
      },
      {
        "id": "D",
        "text": "by train to Samarkand",
        "isError": false
      }
    ]
  },
  {
    "id": 246,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Wear)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "has wore",
        "isError": true,
        "correction": "has worn",
        "explanation": "'Wear' fe'lining 3-shakli 'worn' hisoblanadi (wear - wore - worn): 'has worn that tie'."
      },
      {
        "id": "C",
        "text": "that silk tie",
        "isError": false
      },
      {
        "id": "D",
        "text": "to every official wedding",
        "isError": false
      }
    ]
  },
  {
    "id": 247,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While we were having lunch,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the postman",
        "isError": false
      },
      {
        "id": "C",
        "text": "was delivering",
        "isError": true,
        "correction": "delivered",
        "explanation": "Tushlik paytida xat yetkazib berilishi to'satdan sodir bo'lgan qisqa harakatdir: 'the postman delivered a parcel'."
      },
      {
        "id": "D",
        "text": "an important parcel",
        "isError": false
      }
    ]
  },
  {
    "id": 248,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Bite)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Be careful,",
        "isError": false
      },
      {
        "id": "B",
        "text": "that dog",
        "isError": false
      },
      {
        "id": "C",
        "text": "has bit",
        "isError": true,
        "correction": "has bitten",
        "explanation": "'Bite' fe'lining 3-shakli 'bitten' bo'ladi (bite - bit - bitten): 'has bitten two people'."
      },
      {
        "id": "D",
        "text": "two people this week",
        "isError": false
      }
    ]
  },
  {
    "id": 249,
    "level": "A2",
    "tense": "Present Perfect (Already in positive)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We have",
        "isError": false
      },
      {
        "id": "B",
        "text": "yet",
        "isError": true,
        "correction": "already",
        "explanation": "Darak gapda 'allaqachon' ma'nosida 'yet' emas, 'already' ishlatiladi: 'We have already booked our hotel'."
      },
      {
        "id": "C",
        "text": "booked our comfortable hotel",
        "isError": false
      },
      {
        "id": "D",
        "text": "for the summer trip",
        "isError": false
      }
    ]
  },
  {
    "id": 250,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The mechanics",
        "isError": false
      },
      {
        "id": "B",
        "text": "was fixing",
        "isError": true,
        "correction": "were fixing",
        "explanation": "'The mechanics' (ustalar) ko'plikda bo'lgani sababli 'were fixing' bo'lishi shart ('was' emas)."
      },
      {
        "id": "C",
        "text": "the broken engine",
        "isError": false
      },
      {
        "id": "D",
        "text": "all afternoon yesterday",
        "isError": false
      }
    ]
  },
  {
    "id": 251,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Draw)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The architect",
        "isError": false
      },
      {
        "id": "B",
        "text": "has drew",
        "isError": true,
        "correction": "has drawn",
        "explanation": "'Draw' fe'lining 3-shakli 'drawn' bo'ladi (draw - drew - drawn): 'has drawn a plan'."
      },
      {
        "id": "C",
        "text": "a wonderful new floor plan",
        "isError": false
      },
      {
        "id": "D",
        "text": "for our cottage",
        "isError": false
      }
    ]
  },
  {
    "id": 252,
    "level": "A2",
    "tense": "Future (Will in condition result)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "If you help me,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am finishing",
        "isError": true,
        "correction": "will finish",
        "explanation": "Birinchi tur shart gaplarining bosh qismida kelasi zamon uchun 'will finish' ishlatiladi: 'I will finish earlier'."
      },
      {
        "id": "D",
        "text": "much earlier today",
        "isError": false
      }
    ]
  },
  {
    "id": 253,
    "level": "A2",
    "tense": "Past Continuous (Spelling - Lie)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The dog was",
        "isError": false
      },
      {
        "id": "B",
        "text": "lieing",
        "isError": true,
        "correction": "lying",
        "explanation": "'-ie' bilan tugagan 'lie' fe'liga '-ing' qo'shilganda '-ying' ga o'zgaradi: 'lying' (lieing emas)."
      },
      {
        "id": "C",
        "text": "on the warm rug",
        "isError": false
      },
      {
        "id": "D",
        "text": "by the fireplace",
        "isError": false
      }
    ]
  },
  {
    "id": 254,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Blow)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The strong autumn wind",
        "isError": false
      },
      {
        "id": "B",
        "text": "has blew",
        "isError": true,
        "correction": "has blown",
        "explanation": "'Blow' fe'lining 3-shakli 'blown' hisoblanadi (blow - blew - blown): 'has blown away'."
      },
      {
        "id": "C",
        "text": "all the yellow leaves",
        "isError": false
      },
      {
        "id": "D",
        "text": "from the tree",
        "isError": false
      }
    ]
  },
  {
    "id": 255,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I was making a salad",
        "isError": false
      },
      {
        "id": "B",
        "text": "when I",
        "isError": false
      },
      {
        "id": "C",
        "text": "was cutting",
        "isError": true,
        "correction": "cut",
        "explanation": "Jarayon paytida qo'lni to'satdan kesib olish qisqa harakatdir: 'cut' (cut fe'lining 3 shakli bir xil: cut - cut - cut)."
      },
      {
        "id": "D",
        "text": "my finger accidentally",
        "isError": false
      }
    ]
  },
  {
    "id": 256,
    "level": "A2",
    "tense": "Present Perfect (Duration with for)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They have been married",
        "isError": false
      },
      {
        "id": "B",
        "text": "since twenty years",
        "isError": true,
        "correction": "for twenty years",
        "explanation": "Muddat ko'rsatilganda (twenty years) 'since' emas, 'for' ishlatiladi: 'for twenty years'."
      },
      {
        "id": "C",
        "text": "and they have",
        "isError": false
      },
      {
        "id": "D",
        "text": "three lovely children",
        "isError": false
      }
    ]
  },
  {
    "id": 257,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Neither of the boys",
        "isError": false
      },
      {
        "id": "B",
        "text": "were listening",
        "isError": true,
        "correction": "was listening",
        "explanation": "'Neither of...' iborasi birlikda hisoblanadi va 'was listening' talab qiladi."
      },
      {
        "id": "C",
        "text": "to the teacher's instructions",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the lesson",
        "isError": false
      }
    ]
  },
  {
    "id": 258,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Sink)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The old wooden boat",
        "isError": false
      },
      {
        "id": "B",
        "text": "has sank",
        "isError": true,
        "correction": "has sunk",
        "explanation": "'Sink' fe'lining 3-shakli 'sunk' bo'ladi (sink - sank - sunk): 'has sunk to the bottom'."
      },
      {
        "id": "C",
        "text": "to the bottom of the lake",
        "isError": false
      },
      {
        "id": "D",
        "text": "after the storm",
        "isError": false
      }
    ]
  },
  {
    "id": 259,
    "level": "A2",
    "tense": "Future (Evidence prediction)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Watch out!",
        "isError": false
      },
      {
        "id": "B",
        "text": "That ladder",
        "isError": false
      },
      {
        "id": "C",
        "text": "will fall",
        "isError": true,
        "correction": "is going to fall",
        "explanation": "Ayni daqiqadagi ko'rinib turgan xavf/alomat uchun 'be going to' ishlatiladi: 'is going to fall'."
      },
      {
        "id": "D",
        "text": "onto the flowers",
        "isError": false
      }
    ]
  },
  {
    "id": 260,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While we were driving through the mountains,",
        "isError": false
      },
      {
        "id": "B",
        "text": "our car",
        "isError": false
      },
      {
        "id": "C",
        "text": "was breaking down",
        "isError": true,
        "correction": "broke down",
        "explanation": "Mashinaning buzilib qolishi jarayon ichida to'satdan ro'y bergan qisqa harakatdir: 'broke down' (Past Simple)."
      },
      {
        "id": "D",
        "text": "near a small village",
        "isError": false
      }
    ]
  },
  {
    "id": 261,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Freeze)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The surface of the pond",
        "isError": false
      },
      {
        "id": "B",
        "text": "has froze",
        "isError": true,
        "correction": "has frozen",
        "explanation": "'Freeze' fe'lining 3-shakli 'frozen' hisoblanadi (freeze - froze - frozen): 'has frozen solid'."
      },
      {
        "id": "C",
        "text": "completely solid",
        "isError": false
      },
      {
        "id": "D",
        "text": "overnight",
        "isError": false
      }
    ]
  },
  {
    "id": 262,
    "level": "A2",
    "tense": "Past Continuous (Subject Agreement)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The audience",
        "isError": false
      },
      {
        "id": "B",
        "text": "were applauding",
        "isError": false
      },
      {
        "id": "C",
        "text": "while the singer",
        "isError": false
      },
      {
        "id": "D",
        "text": "were performing",
        "isError": true,
        "correction": "was performing",
        "explanation": "'The singer' (qo'shiqchi) birlikda bo'lgani uchun 'were' emas, 'was' ishlatiladi: 'was performing'."
      }
    ]
  },
  {
    "id": 263,
    "level": "A2",
    "tense": "Present Perfect (Never with negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I haven't",
        "isError": true,
        "correction": "I have",
        "explanation": "'Never' so'zining o'zi inkor ma'nosini bildiradi, shuning uchun fe'l inkor bo'lmaydi: 'I have never visited' (I haven't never emas)."
      },
      {
        "id": "B",
        "text": "never visited",
        "isError": false
      },
      {
        "id": "C",
        "text": "an art gallery",
        "isError": false
      },
      {
        "id": "D",
        "text": "in that city",
        "isError": false
      }
    ]
  },
  {
    "id": 264,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He was taking a warm bath",
        "isError": false
      },
      {
        "id": "B",
        "text": "when the doorbell",
        "isError": false
      },
      {
        "id": "C",
        "text": "was ringing",
        "isError": true,
        "correction": "rang",
        "explanation": "Qo'ng'iroq chalinishi to'satdan bo'lgan harakat bo'lib, Past Simple da 'rang' bo'lishi kerak."
      },
      {
        "id": "D",
        "text": "very loudly",
        "isError": false
      }
    ]
  },
  {
    "id": 265,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Throw)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Somebody",
        "isError": false
      },
      {
        "id": "B",
        "text": "has threw",
        "isError": true,
        "correction": "has thrown",
        "explanation": "'Throw' fe'lining 3-shakli 'thrown' bo'ladi (throw - threw - thrown): 'has thrown a stone'."
      },
      {
        "id": "C",
        "text": "a stone through the glass window",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the garage",
        "isError": false
      }
    ]
  },
  {
    "id": 266,
    "level": "A2",
    "tense": "Future (Promise)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I promise that",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am telling",
        "isError": true,
        "correction": "will tell",
        "explanation": "Va'da berganda ('I promise') kelasi zamon uchun 'will' ishlatiladi: 'I will tell no one'."
      },
      {
        "id": "D",
        "text": "no one your secret",
        "isError": false
      }
    ]
  },
  {
    "id": 267,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My sister and her friend",
        "isError": false
      },
      {
        "id": "B",
        "text": "was baking",
        "isError": true,
        "correction": "were baking",
        "explanation": "'My sister and her friend' ikki kishi (ko'plik) bo'lgani uchun 'was' emas, 'were baking' bo'ladi."
      },
      {
        "id": "C",
        "text": "sweet chocolate cookies",
        "isError": false
      },
      {
        "id": "D",
        "text": "all yesterday afternoon",
        "isError": false
      }
    ]
  },
  {
    "id": 268,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Hide)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Where",
        "isError": false
      },
      {
        "id": "B",
        "text": "have you",
        "isError": false
      },
      {
        "id": "C",
        "text": "hid",
        "isError": true,
        "correction": "hidden",
        "explanation": "Present Perfect so'rog'ida fe'lning 3-shakli (hidden) bo'ladi: 'Where have you hidden the gift?'."
      },
      {
        "id": "D",
        "text": "the birthday gift?",
        "isError": false
      }
    ]
  },
  {
    "id": 269,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The students were writing an essay",
        "isError": false
      },
      {
        "id": "B",
        "text": "when the headmaster",
        "isError": false
      },
      {
        "id": "C",
        "text": "was entering",
        "isError": true,
        "correction": "entered",
        "explanation": "Xonaga kirib kelish to'satdan ro'y bergan qisqa harakatdir: 'entered the classroom'."
      },
      {
        "id": "D",
        "text": "the quiet classroom",
        "isError": false
      }
    ]
  },
  {
    "id": 270,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Wake)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The loud sound of thunder",
        "isError": false
      },
      {
        "id": "B",
        "text": "has woke",
        "isError": true,
        "correction": "has woken",
        "explanation": "'Wake' fe'lining 3-shakli 'woken' hisoblanadi (wake - woke - woken): 'has woken the baby'."
      },
      {
        "id": "C",
        "text": "the sleeping baby",
        "isError": false
      },
      {
        "id": "D",
        "text": "up again",
        "isError": false
      }
    ]
  },
  {
    "id": 301,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "have visited",
        "isError": true,
        "correction": "visited",
        "explanation": "Aniq o'tib ketgan vaqt ('two years ago') ko'rsatilganda Present Perfect emas, Past Simple ('visited') ishlatilishi shart."
      },
      {
        "id": "C",
        "text": "my relatives in Boston",
        "isError": false
      },
      {
        "id": "D",
        "text": "exactly two years ago",
        "isError": false
      }
    ]
  },
  {
    "id": 302,
    "level": "B1",
    "tense": "Past Perfect",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When we reached the cinema,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the movie",
        "isError": false
      },
      {
        "id": "C",
        "text": "already started",
        "isError": true,
        "correction": "had already started",
        "explanation": "O'tmishdagi boshqa bir harakatdan (reached) OLDIN sodir bo'lib tugagan harakat uchun Past Perfect ('had already started') qo'yiladi."
      },
      {
        "id": "D",
        "text": "ten minutes before",
        "isError": false
      }
    ]
  },
  {
    "id": 303,
    "level": "B1",
    "tense": "Present Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He is exhausted because",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "has worked",
        "isError": true,
        "correction": "has been working",
        "explanation": "O'tmishdan boshlanib hozirgacha to'xtovsiz davom etgan jarayon va uning hozirgi ko'rinib turgan natijasi uchun Present Perfect Continuous ('has been working') ishlatiladi."
      },
      {
        "id": "D",
        "text": "in the garden all morning",
        "isError": false
      }
    ]
  },
  {
    "id": 304,
    "level": "B1",
    "tense": "Time Clauses (Future rules)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I will call you",
        "isError": false
      },
      {
        "id": "B",
        "text": "as soon as",
        "isError": false
      },
      {
        "id": "C",
        "text": "I will arrive",
        "isError": true,
        "correction": "I arrive",
        "explanation": "'As soon as', 'when', 'if' kabi vaqt ergash gaplarida kelasi zamon o'rniga Present Simple ishlatiladi: 'as soon as I arrive'."
      },
      {
        "id": "D",
        "text": "at the international airport",
        "isError": false
      }
    ]
  },
  {
    "id": 305,
    "level": "B1",
    "tense": "Future Perfect",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the end of next month,",
        "isError": false
      },
      {
        "id": "B",
        "text": "our engineering team",
        "isError": false
      },
      {
        "id": "C",
        "text": "will complete",
        "isError": true,
        "correction": "will have completed",
        "explanation": "Kelajakdagi bir muddatgacha ('By the end of...') bajarilib tugatiladigan harakat uchun Future Perfect ('will have completed') ishlatiladi."
      },
      {
        "id": "D",
        "text": "the entire software project",
        "isError": false
      }
    ]
  },
  {
    "id": 306,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They were soaking wet because",
        "isError": false
      },
      {
        "id": "B",
        "text": "they",
        "isError": false
      },
      {
        "id": "C",
        "text": "had walked",
        "isError": true,
        "correction": "had been walking",
        "explanation": "O'tgan zamondagi ma'lum bir nuqtagacha davom etgan harakat va uning o'sha paytdagi natijasi uchun Past Perfect Continuous ('had been walking') ishlatiladi."
      },
      {
        "id": "D",
        "text": "in the heavy rain for an hour",
        "isError": false
      }
    ]
  },
  {
    "id": 307,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At this exact time tomorrow,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will fly",
        "isError": true,
        "correction": "will be flying",
        "explanation": "Kelajakdagi aniq bir paytda ayni davom etib turadigan harakat uchun Future Continuous ('will be flying') qo'llaniladi."
      },
      {
        "id": "D",
        "text": "over the Mediterranean Sea",
        "isError": false
      }
    ]
  },
  {
    "id": 308,
    "level": "B1",
    "tense": "Present Perfect (State Verb Duration)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Sarah and David",
        "isError": false
      },
      {
        "id": "B",
        "text": "have been knowing",
        "isError": true,
        "correction": "have known",
        "explanation": "'Know' fe'li holat fe'li bo'lgani sababli continuous shaklda kelmaydi. Muddat bilan oddiy Present Perfect ('have known') qo'yiladi."
      },
      {
        "id": "C",
        "text": "each other",
        "isError": false
      },
      {
        "id": "D",
        "text": "for more than ten years",
        "isError": false
      }
    ]
  },
  {
    "id": 309,
    "level": "B1",
    "tense": "Past Simple vs Present Perfect (Historical)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "William Shakespeare",
        "isError": false
      },
      {
        "id": "B",
        "text": "has written",
        "isError": true,
        "correction": "wrote",
        "explanation": "Hayotdan o'tgan tarixiy shaxslar haqidagi faktlar uchun Present Perfect emas, balki faqat Past Simple ('wrote') ishlatiladi."
      },
      {
        "id": "C",
        "text": "many world-famous plays",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the Elizabethan era",
        "isError": false
      }
    ]
  },
  {
    "id": 310,
    "level": "B1",
    "tense": "First Conditional (Tense Structure)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "If the company",
        "isError": false
      },
      {
        "id": "B",
        "text": "will offer",
        "isError": true,
        "correction": "offers",
        "explanation": "Birinchi tur shart gaplarida 'If' dan keyingi qismda kelasi zamon emas, Present Simple bo'lishi shart: 'If the company offers...'."
      },
      {
        "id": "C",
        "text": "me the promotion,",
        "isError": false
      },
      {
        "id": "D",
        "text": "I will gladly accept it",
        "isError": false
      }
    ]
  },
  {
    "id": 311,
    "level": "B1",
    "tense": "Past Simple vs Past Perfect (Sequence)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "After the chef",
        "isError": false
      },
      {
        "id": "B",
        "text": "had prepared",
        "isError": false
      },
      {
        "id": "C",
        "text": "the delicious three-course meal,",
        "isError": false
      },
      {
        "id": "D",
        "text": "the guests had arrived",
        "isError": true,
        "correction": "the guests arrived",
        "explanation": "'After' bilan birinchi harakat Past Perfect bo'lsa, undan keyin sodir bo'lgan navbatdagi harakat Past Simple ('arrived') bo'ladi."
      }
    ]
  },
  {
    "id": 312,
    "level": "B1",
    "tense": "Present Perfect Continuous (Duration)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "How long",
        "isError": false
      },
      {
        "id": "B",
        "text": "are you learning",
        "isError": true,
        "correction": "have you been learning",
        "explanation": "'How long' savolida hozirgacha davom etib kelayotgan muddat so'ralganda Present Perfect Continuous ('have you been learning') ishlatiladi."
      },
      {
        "id": "C",
        "text": "English grammar",
        "isError": false
      },
      {
        "id": "D",
        "text": "at this academy?",
        "isError": false
      }
    ]
  },
  {
    "id": 313,
    "level": "B1",
    "tense": "Past Perfect (By the time)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the time the rescue team arrived,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the hikers",
        "isError": false
      },
      {
        "id": "C",
        "text": "already found",
        "isError": true,
        "correction": "had already found",
        "explanation": "'By the time' (yetib kelguncha) qoidasida avval bajarilgan ish-harakat uchun Past Perfect ('had already found') ishlatiladi."
      },
      {
        "id": "D",
        "text": "shelter in a nearby hut",
        "isError": false
      }
    ]
  },
  {
    "id": 314,
    "level": "B1",
    "tense": "Time Clauses with 'Until'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We will wait here",
        "isError": false
      },
      {
        "id": "B",
        "text": "patiently until",
        "isError": false
      },
      {
        "id": "C",
        "text": "the manager will return",
        "isError": true,
        "correction": "the manager returns",
        "explanation": "'Until' (to... qadar) dan keyingi vaqt ergash gapida kelasi zamon emas, Present Simple qo'yiladi: 'until the manager returns'."
      },
      {
        "id": "D",
        "text": "from the urgent conference",
        "isError": false
      }
    ]
  },
  {
    "id": 315,
    "level": "B1",
    "tense": "Future Perfect (By next year)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By this time next year,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "will graduate",
        "isError": true,
        "correction": "will have graduated",
        "explanation": "Kelajakdagi belgilangan vaqtgacha tugallanadigan harakat uchun Future Perfect ('will have graduated') qo'llaniladi."
      },
      {
        "id": "D",
        "text": "from medical university",
        "isError": false
      }
    ]
  },
  {
    "id": 316,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did you ever",
        "isError": true,
        "correction": "Have you ever",
        "explanation": "Umr davomidagi umumiy tajriba so'ralganda 'ever' bilan Past Simple emas, Present Perfect ishlatiladi: 'Have you ever eaten caviar?'."
      },
      {
        "id": "B",
        "text": "taste caviar",
        "isError": false
      },
      {
        "id": "C",
        "text": "at a formal restaurant",
        "isError": false
      },
      {
        "id": "D",
        "text": "in your entire life?",
        "isError": false
      }
    ]
  },
  {
    "id": 317,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Her eyes were red because",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "had cried",
        "isError": true,
        "correction": "had been crying",
        "explanation": "O'tgan zamondagi jarayon va uning o'sha paytdagi ko'rinib turgan ta'siri uchun Past Perfect Continuous ('had been crying') ishlatiladi."
      },
      {
        "id": "D",
        "text": "for almost two hours",
        "isError": false
      }
    ]
  },
  {
    "id": 318,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Don't phone me at eight tonight,",
        "isError": false
      },
      {
        "id": "B",
        "text": "because I",
        "isError": false
      },
      {
        "id": "C",
        "text": "will watch",
        "isError": true,
        "correction": "will be watching",
        "explanation": "Kelajakdagi ayni soatda davom etayotgan bo'ladigan harakat uchun Future Continuous ('will be watching') ishlatiladi."
      },
      {
        "id": "D",
        "text": "the live documentary",
        "isError": false
      }
    ]
  },
  {
    "id": 319,
    "level": "B1",
    "tense": "Present Perfect (State Verb - Understand)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "have been understanding",
        "isError": true,
        "correction": "have understood",
        "explanation": "'Understand' holat fe'li bo'lib, davomli zamonda qo'llanilmaydi. 'have understood' to'g'ri shakldir."
      },
      {
        "id": "C",
        "text": "this complex math theorem",
        "isError": false
      },
      {
        "id": "D",
        "text": "since our last lecture",
        "isError": false
      }
    ]
  },
  {
    "id": 320,
    "level": "B1",
    "tense": "Past Perfect (Hardly / Scarcely inverted)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Hardly",
        "isError": false
      },
      {
        "id": "B",
        "text": "he had stepped",
        "isError": true,
        "correction": "had he stepped",
        "explanation": "'Hardly', 'Scarcely' gap boshida kelganda inversiya bo'lib, yordamchi fe'l egadan oldinga o'tadi: 'Hardly had he stepped...'."
      },
      {
        "id": "C",
        "text": "outside the building",
        "isError": false
      },
      {
        "id": "D",
        "text": "when the heavy storm began",
        "isError": false
      }
    ]
  },
  {
    "id": 321,
    "level": "B1",
    "tense": "Present Perfect Continuous vs Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I am writing letters all morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "and so far I",
        "isError": false
      },
      {
        "id": "C",
        "text": "have been writing",
        "isError": true,
        "correction": "have written",
        "explanation": "Bajarilgan ish-harakatlar soni (five letters) ko'rsatilganda Continuous emas, oddiy Present Perfect ('have written') ishlatiladi."
      },
      {
        "id": "D",
        "text": "five formal complaints",
        "isError": false
      }
    ]
  },
  {
    "id": 322,
    "level": "B1",
    "tense": "Time Clauses with 'Before'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Please wash your hands",
        "isError": false
      },
      {
        "id": "B",
        "text": "thoroughly before",
        "isError": false
      },
      {
        "id": "C",
        "text": "you will sit down",
        "isError": true,
        "correction": "you sit down",
        "explanation": "'Before' vaqt bog'lovchisidan keyin kelasi zamon ('will sit') emas, Present Simple ('sit') ishlatiladi."
      },
      {
        "id": "D",
        "text": "at the dinner table",
        "isError": false
      }
    ]
  },
  {
    "id": 323,
    "level": "B1",
    "tense": "Past Perfect (No sooner than)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "No sooner",
        "isError": false
      },
      {
        "id": "B",
        "text": "they had arrived",
        "isError": true,
        "correction": "had they arrived",
        "explanation": "'No sooner' gap boshida kelganda inversiya qo'llanadi: 'had they arrived' (they had arrived emas)."
      },
      {
        "id": "C",
        "text": "at the mountain hotel",
        "isError": false
      },
      {
        "id": "D",
        "text": "than the power cut occurred",
        "isError": false
      }
    ]
  },
  {
    "id": 324,
    "level": "B1",
    "tense": "Future Perfect (By the end of this week)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By Friday afternoon,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the author",
        "isError": false
      },
      {
        "id": "C",
        "text": "will write",
        "isError": true,
        "correction": "will have written",
        "explanation": "Juma kunigacha tugallanadigan ish uchun Future Perfect ('will have written') qo'yiladi."
      },
      {
        "id": "D",
        "text": "the final chapter of his novel",
        "isError": false
      }
    ]
  },
  {
    "id": 325,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last night,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "have lost",
        "isError": true,
        "correction": "lost",
        "explanation": "'Last night' aniq o'tgan zamon ko'rsatkichi bo'lgani uchun Present Perfect emas, Past Simple ('lost') bo'lishi shart."
      },
      {
        "id": "D",
        "text": "my wallet on the bus",
        "isError": false
      }
    ]
  },
  {
    "id": 326,
    "level": "B1",
    "tense": "Past Perfect (Cause and effect)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He could not enter his apartment",
        "isError": false
      },
      {
        "id": "B",
        "text": "because he",
        "isError": false
      },
      {
        "id": "C",
        "text": "forgot",
        "isError": true,
        "correction": "had forgotten",
        "explanation": "Kira olmaslikdan oldin kalit esdan chiqqan harakat bo'lgani uchun Past Perfect ('had forgotten') bo'lishi kerak."
      },
      {
        "id": "D",
        "text": "his keys on his office desk",
        "isError": false
      }
    ]
  },
  {
    "id": 327,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "This time next week,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will sunbathe",
        "isError": true,
        "correction": "will be sunbathing",
        "explanation": "Kelgusi haftadagi ayni paytda davom etayotgan bo'ladigan harakat uchun Future Continuous ('will be sunbathing') ishlatiladi."
      },
      {
        "id": "D",
        "text": "on the golden beach",
        "isError": false
      }
    ]
  },
  {
    "id": 328,
    "level": "B1",
    "tense": "Present Perfect Continuous (All day duration)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The mechanics",
        "isError": false
      },
      {
        "id": "B",
        "text": "have repaired",
        "isError": true,
        "correction": "have been repairing",
        "explanation": "Kun bo'yi to'xtovsiz davom etayotgan jarayon ('all day') uchun Present Perfect Continuous ('have been repairing') to'g'ri."
      },
      {
        "id": "C",
        "text": "this vintage sports car all day,",
        "isError": false
      },
      {
        "id": "D",
        "text": "and it still doesn't start",
        "isError": false
      }
    ]
  },
  {
    "id": 329,
    "level": "B1",
    "tense": "First Conditional (Unless structure)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Unless you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will practice",
        "isError": true,
        "correction": "practice",
        "explanation": "'Unless' (agar ... qilmasangiz) bog'lovchisidan keyin kelasi zamon ('will') ishlatilmaydi, Present Simple ('practice') qo'yiladi."
      },
      {
        "id": "C",
        "text": "regularly every single day,",
        "isError": false
      },
      {
        "id": "D",
        "text": "you will not pass the test",
        "isError": false
      }
    ]
  },
  {
    "id": 330,
    "level": "B1",
    "tense": "Past Perfect Continuous (Duration before past)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Before she finally passed her driving test,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "had practiced",
        "isError": true,
        "correction": "had been practicing",
        "explanation": "O'tmishdagi hodisagacha ma'lum muddat davomida mashq qilib kelingan jarayon uchun Past Perfect Continuous ('had been practicing') qo'yiladi."
      },
      {
        "id": "D",
        "text": "for six full months",
        "isError": false
      }
    ]
  },
  {
    "id": 331,
    "level": "B1",
    "tense": "Future Perfect (By 2030)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the year 2030,",
        "isError": false
      },
      {
        "id": "B",
        "text": "scientists",
        "isError": false
      },
      {
        "id": "C",
        "text": "will discover",
        "isError": true,
        "correction": "will have discovered",
        "explanation": "'By 2030' kelajakdagi belgilangan nuqtagacha kashf qilib bo'linishini anglatgani sababli Future Perfect ('will have discovered') kerak."
      },
      {
        "id": "D",
        "text": "a cure for many rare diseases",
        "isError": false
      }
    ]
  },
  {
    "id": 332,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When",
        "isError": false
      },
      {
        "id": "B",
        "text": "have you bought",
        "isError": true,
        "correction": "did you buy",
        "explanation": "'When' (qachon) savoli aniq vaqtni so'raydi, shuning uchun 'When have you bought' emas, 'When did you buy' deyiladi."
      },
      {
        "id": "C",
        "text": "this stylish leather jacket",
        "isError": false
      },
      {
        "id": "D",
        "text": "in Milan?",
        "isError": false
      }
    ]
  },
  {
    "id": 333,
    "level": "B1",
    "tense": "Past Perfect (Sequence with When)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When I arrived home,",
        "isError": false
      },
      {
        "id": "B",
        "text": "my family",
        "isError": false
      },
      {
        "id": "C",
        "text": "already ate",
        "isError": true,
        "correction": "had already eaten",
        "explanation": "Men uyga yetib kelishimdan avval oilam ovqatlanib bo'lgani sababli Past Perfect ('had already eaten') bo'lishi kerak."
      },
      {
        "id": "D",
        "text": "all the chocolate cake",
        "isError": false
      }
    ]
  },
  {
    "id": 334,
    "level": "B1",
    "tense": "Future Continuous (Tomorrow evening)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At eight o'clock tomorrow evening,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the professor",
        "isError": false
      },
      {
        "id": "C",
        "text": "will deliver",
        "isError": true,
        "correction": "will be delivering",
        "explanation": "Ertaga soat sakkizda ma'ruza ayni o'qilayotgan bo'ladi, shuning uchun Future Continuous ('will be delivering') ishlatiladi."
      },
      {
        "id": "D",
        "text": "an international online lecture",
        "isError": false
      }
    ]
  },
  {
    "id": 335,
    "level": "B1",
    "tense": "Present Perfect Continuous (Since with point)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "It has",
        "isError": false
      },
      {
        "id": "B",
        "text": "snowed",
        "isError": true,
        "correction": "been snowing",
        "explanation": "Tongdan beri to'xtovsiz yog'ayotgan jarayon uchun Present Perfect Continuous ('has been snowing') to'g'ri shakldir."
      },
      {
        "id": "C",
        "text": "continuously since early morning",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the mountains",
        "isError": false
      }
    ]
  },
  {
    "id": 336,
    "level": "B1",
    "tense": "Time Clauses with 'Once'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Once you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will submit",
        "isError": true,
        "correction": "submit",
        "explanation": "'Once' (qachonki ... qilgach) vaqt bog'lovchisidan keyin kelasi zamon o'rniga Present Simple ('submit') keladi."
      },
      {
        "id": "C",
        "text": "the online application,",
        "isError": false
      },
      {
        "id": "D",
        "text": "the HR team will review it",
        "isError": false
      }
    ]
  },
  {
    "id": 337,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The pilot was very tired because",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "had flown",
        "isError": true,
        "correction": "had been flying",
        "explanation": "12 soat davomida to'xtovsiz samolyot boshqargan jarayon uchun Past Perfect Continuous ('had been flying') qo'yiladi."
      },
      {
        "id": "D",
        "text": "for twelve consecutive hours",
        "isError": false
      }
    ]
  },
  {
    "id": 338,
    "level": "B1",
    "tense": "Future Perfect (By the time clause)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the time you wake up tomorrow,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "will leave",
        "isError": true,
        "correction": "will have left",
        "explanation": "'By the time' kelasi zamonda bo'lsa, asosiy qismda Future Perfect ('will have left') ishlatiladi."
      },
      {
        "id": "D",
        "text": "for the train station",
        "isError": false
      }
    ]
  },
  {
    "id": 339,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "In 2018,",
        "isError": false
      },
      {
        "id": "B",
        "text": "our company",
        "isError": false
      },
      {
        "id": "C",
        "text": "has opened",
        "isError": true,
        "correction": "opened",
        "explanation": "Aniq o'tib ketgan yil ('In 2018') bilan faqat Past Simple ('opened') ishlatiladi."
      },
      {
        "id": "D",
        "text": "two new branches in Europe",
        "isError": false
      }
    ]
  },
  {
    "id": 340,
    "level": "B1",
    "tense": "Past Perfect (Prior condition)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She couldn't call me",
        "isError": false
      },
      {
        "id": "B",
        "text": "because her mobile phone battery",
        "isError": false
      },
      {
        "id": "C",
        "text": "died",
        "isError": true,
        "correction": "had died",
        "explanation": "Qo'ng'iroq qila olmaslikdan avval telefon o'chib qolgani sababli Past Perfect ('had died') ishlatiladi."
      },
      {
        "id": "D",
        "text": "earlier that afternoon",
        "isError": false
      }
    ]
  },
  {
    "id": 341,
    "level": "B1",
    "tense": "Future Continuous (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Will you",
        "isError": false
      },
      {
        "id": "B",
        "text": "use",
        "isError": true,
        "correction": "be using",
        "explanation": "Kelgusida ayni o'sha paytda foydalanib turasizmi degan muloyim savolda Future Continuous ('Will you be using...?') ishlatiladi."
      },
      {
        "id": "C",
        "text": "your laptop this evening,",
        "isError": false
      },
      {
        "id": "D",
        "text": "or may I borrow it?",
        "isError": false
      }
    ]
  },
  {
    "id": 342,
    "level": "B1",
    "tense": "Present Perfect Continuous (How long)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "How long",
        "isError": false
      },
      {
        "id": "B",
        "text": "have you waited",
        "isError": true,
        "correction": "have you been waiting",
        "explanation": "'Wait' (kutmoq) davomli jarayon bo'lib, 'How long' bilan Present Perfect Continuous ('have you been waiting') afzal."
      },
      {
        "id": "C",
        "text": "for the delayed bus",
        "isError": false
      },
      {
        "id": "D",
        "text": "at this cold station?",
        "isError": false
      }
    ]
  },
  {
    "id": 343,
    "level": "B1",
    "tense": "Zero Conditional",
    "sentenceParts": [
      {
        "id": "A",
        "text": "If you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will heat",
        "isError": true,
        "correction": "heat",
        "explanation": "Ilmiy haqiqat va zero conditional da 'If' dan keyin 'will' ishlatilmaydi: 'If you heat water...'."
      },
      {
        "id": "C",
        "text": "pure water to 100 degrees Celsius,",
        "isError": false
      },
      {
        "id": "D",
        "text": "it always boils",
        "isError": false
      }
    ]
  },
  {
    "id": 344,
    "level": "B1",
    "tense": "Past Perfect (State Verb - Own)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He sold the car",
        "isError": false
      },
      {
        "id": "B",
        "text": "which he",
        "isError": false
      },
      {
        "id": "C",
        "text": "had been owning",
        "isError": true,
        "correction": "had owned",
        "explanation": "'Own' (egalik qilmoq) holat fe'li bo'lib, continuous shaklda ishlatilmaydi: 'had owned' to'g'ri shakldir."
      },
      {
        "id": "D",
        "text": "for more than fifteen years",
        "isError": false
      }
    ]
  },
  {
    "id": 345,
    "level": "B1",
    "tense": "Future Perfect (By midnight)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By midnight tonight,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the exhausted students",
        "isError": false
      },
      {
        "id": "C",
        "text": "will finish",
        "isError": true,
        "correction": "will have finished",
        "explanation": "'By midnight' kabi kelajakdagi muddat bilan Future Perfect ('will have finished') ishlatiladi."
      },
      {
        "id": "D",
        "text": "their graduation essays",
        "isError": false
      }
    ]
  },
  {
    "id": 346,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I have graduated",
        "isError": true,
        "correction": "graduated",
        "explanation": "'Graduated in 2020' aniq o'tgan yil bo'lgani uchun Present Perfect emas, Past Simple ('graduated') bo'ladi."
      },
      {
        "id": "B",
        "text": "from the polytechnic institute",
        "isError": false
      },
      {
        "id": "C",
        "text": "with honors",
        "isError": false
      },
      {
        "id": "D",
        "text": "in June 2020",
        "isError": false
      }
    ]
  },
  {
    "id": 347,
    "level": "B1",
    "tense": "Past Perfect (Before clause)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Before we",
        "isError": false
      },
      {
        "id": "B",
        "text": "had moved",
        "isError": true,
        "correction": "moved",
        "explanation": "'Before' dan keyingi harakat Past Simple ('moved') da, undan oldin sodir bo'lgani esa Past Perfect da bo'ladi."
      },
      {
        "id": "C",
        "text": "to this peaceful village,",
        "isError": false
      },
      {
        "id": "D",
        "text": "we had lived in the capital",
        "isError": false
      }
    ]
  },
  {
    "id": 348,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "During the entire weekend,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "will prepare",
        "isError": true,
        "correction": "will be preparing",
        "explanation": "Dam olish kunlari davomida jarayon davom etib turishini ko'rsatish uchun Future Continuous ('will be preparing') ishlatiladi."
      },
      {
        "id": "D",
        "text": "for her medical exams",
        "isError": false
      }
    ]
  },
  {
    "id": 349,
    "level": "B1",
    "tense": "Present Perfect Continuous (All morning)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "has painted",
        "isError": true,
        "correction": "has been painting",
        "explanation": "Ertalabdan beri to'xtovsiz bo'yoq bo'yash jarayoni uchun Present Perfect Continuous ('has been painting') kerak."
      },
      {
        "id": "C",
        "text": "the wooden fence all morning",
        "isError": false
      },
      {
        "id": "D",
        "text": "without taking a rest",
        "isError": false
      }
    ]
  },
  {
    "id": 350,
    "level": "B1",
    "tense": "Time Clauses with 'As soon as'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "As soon as the train",
        "isError": false
      },
      {
        "id": "B",
        "text": "will arrive",
        "isError": true,
        "correction": "arrives",
        "explanation": "'As soon as' vaqt bog'lovchisidan keyin kelasi zamon ('will arrive') emas, Present Simple ('arrives') ishlatiladi."
      },
      {
        "id": "C",
        "text": "at the main platform,",
        "isError": false
      },
      {
        "id": "D",
        "text": "we will help you with luggage",
        "isError": false
      }
    ]
  },
  {
    "id": 351,
    "level": "B1",
    "tense": "Past Perfect (Sequence with When)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When the firefighters reached the building,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the fire",
        "isError": false
      },
      {
        "id": "C",
        "text": "already destroyed",
        "isError": true,
        "correction": "had already destroyed",
        "explanation": "O't o'chiruvchilar kelguncha olov binoni vayron qilib bo'lgani uchun Past Perfect ('had already destroyed') qo'yiladi."
      },
      {
        "id": "D",
        "text": "the entire wooden roof",
        "isError": false
      }
    ]
  },
  {
    "id": 352,
    "level": "B1",
    "tense": "Future Perfect (By the end of this month)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the end of this month,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the construction workers",
        "isError": false
      },
      {
        "id": "C",
        "text": "will pave",
        "isError": true,
        "correction": "will have paved",
        "explanation": "Oy oxiriga qadar yo'l to'liq asfalt qilib bo'linishini ifodalash uchun Future Perfect ('will have paved') ishlatiladi."
      },
      {
        "id": "D",
        "text": "the whole highway section",
        "isError": false
      }
    ]
  },
  {
    "id": 353,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I haven't seen",
        "isError": true,
        "correction": "didn't see",
        "explanation": "'Yesterday evening' aniq o'tgan vaqt bo'lgani sababli Present Perfect emas, Past Simple ('didn't see') bo'lishi kerak."
      },
      {
        "id": "B",
        "text": "him anywhere",
        "isError": false
      },
      {
        "id": "C",
        "text": "at the university library",
        "isError": false
      },
      {
        "id": "D",
        "text": "yesterday evening",
        "isError": false
      }
    ]
  },
  {
    "id": 354,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The tennis players were exhausted because",
        "isError": false
      },
      {
        "id": "B",
        "text": "they",
        "isError": false
      },
      {
        "id": "C",
        "text": "had played",
        "isError": true,
        "correction": "had been playing",
        "explanation": "Uch soat to'xtovsiz davom etgan o'yin jarayoni uchun Past Perfect Continuous ('had been playing') ishlatiladi."
      },
      {
        "id": "D",
        "text": "under the hot sun for three hours",
        "isError": false
      }
    ]
  },
  {
    "id": 355,
    "level": "B1",
    "tense": "Future Continuous (Specific time tomorrow)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At ten o'clock tomorrow morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the delegates",
        "isError": false
      },
      {
        "id": "C",
        "text": "will discuss",
        "isError": true,
        "correction": "will be discussing",
        "explanation": "Ertaga soat o'nda muhokama jarayoni ayni davom etib turadigan bo'ladi: 'will be discussing' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "the international trade agreement",
        "isError": false
      }
    ]
  },
  {
    "id": 356,
    "level": "B1",
    "tense": "Present Perfect (State Verb - Believe)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "have been believing",
        "isError": true,
        "correction": "have believed",
        "explanation": "'Believe' holat fe'li bo'lgani uchun continuous qo'shilmaydi: 'have believed in your talent' to'g'ri shakldir."
      },
      {
        "id": "C",
        "text": "in your artistic talent",
        "isError": false
      },
      {
        "id": "D",
        "text": "since the very beginning",
        "isError": false
      }
    ]
  },
  {
    "id": 357,
    "level": "B1",
    "tense": "First Conditional with When",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will see",
        "isError": true,
        "correction": "see",
        "explanation": "'When' ergash gapida kelasi zamon ('will see') emas, balki Present Simple ('see') qo'llaniladi."
      },
      {
        "id": "C",
        "text": "the doctor tomorrow,",
        "isError": false
      },
      {
        "id": "D",
        "text": "tell him about your symptoms",
        "isError": false
      }
    ]
  },
  {
    "id": 358,
    "level": "B1",
    "tense": "Past Perfect (Realized after event)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She realized with horror",
        "isError": false
      },
      {
        "id": "B",
        "text": "that she",
        "isError": false
      },
      {
        "id": "C",
        "text": "sent",
        "isError": true,
        "correction": "had sent",
        "explanation": "Xatni adashib jo'natib yuborish anglashdan oldin sodir bo'lgani sababli Past Perfect ('had sent') bo'lishi kerak."
      },
      {
        "id": "D",
        "text": "the email to the wrong client",
        "isError": false
      }
    ]
  },
  {
    "id": 359,
    "level": "B1",
    "tense": "Future Perfect (By next decade)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the next decade,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the company",
        "isError": false
      },
      {
        "id": "C",
        "text": "will establish",
        "isError": true,
        "correction": "will have established",
        "explanation": "Kelgusi o'n yillikkacha tashkil qilib bo'linishini ifodalash uchun Future Perfect ('will have established') kerak."
      },
      {
        "id": "D",
        "text": "fifty sustainable solar plants",
        "isError": false
      }
    ]
  },
  {
    "id": 360,
    "level": "B1",
    "tense": "Present Perfect Continuous (Tired from activity)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "His hands are dirty because",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "has repaired",
        "isError": true,
        "correction": "has been repairing",
        "explanation": "Qo'li kir ekanligiga sabab bo'lgan jarayon uchun Present Perfect Continuous ('has been repairing his bicycle') ishlatiladi."
      },
      {
        "id": "D",
        "text": "his old bicycle in the yard",
        "isError": false
      }
    ]
  },
  {
    "id": 361,
    "level": "B1",
    "tense": "Time Clauses with 'Until'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The store won't open",
        "isError": false
      },
      {
        "id": "B",
        "text": "its doors until",
        "isError": false
      },
      {
        "id": "C",
        "text": "the clock will strike",
        "isError": true,
        "correction": "the clock strikes",
        "explanation": "'Until' dan keyin 'will' ishlatilmaydi, Present Simple ('the clock strikes nine') ishlatiladi."
      },
      {
        "id": "D",
        "text": "nine in the morning",
        "isError": false
      }
    ]
  },
  {
    "id": 362,
    "level": "B1",
    "tense": "Past Perfect (Prior departure)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When we reached the station,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the express train",
        "isError": false
      },
      {
        "id": "C",
        "text": "already left",
        "isError": true,
        "correction": "had already left",
        "explanation": "Biz yetib borgunimizcha poyezd jo'nab ketib bo'lgani sababli Past Perfect ('had already left') qo'yiladi."
      },
      {
        "id": "D",
        "text": "from the platform",
        "isError": false
      }
    ]
  },
  {
    "id": 363,
    "level": "B1",
    "tense": "Future Continuous (During flight)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Between three and five tomorrow,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will fly",
        "isError": true,
        "correction": "will be flying",
        "explanation": "Ertaga soat 3 va 5 oralig'idagi davomli jarayon uchun Future Continuous ('will be flying') ishlatiladi."
      },
      {
        "id": "D",
        "text": "over the Alps",
        "isError": false
      }
    ]
  },
  {
    "id": 364,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple (Life experience vs then)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He has broken his leg",
        "isError": true,
        "correction": "broke his leg",
        "explanation": "'While skiing in 2019' aniq o'tgan zamon bo'lgani sababli Present Perfect emas, Past Simple ('broke his leg') bo'ladi."
      },
      {
        "id": "B",
        "text": "in two places",
        "isError": false
      },
      {
        "id": "C",
        "text": "while skiing in the Alps",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the winter of 2019",
        "isError": false
      }
    ]
  },
  {
    "id": 365,
    "level": "B1",
    "tense": "Future Perfect (By the time she turns 30)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the time she turns thirty,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "will publish",
        "isError": true,
        "correction": "will have published",
        "explanation": "30 yoshga to'lguniga qadar nashr qilib bo'lishi haqida gap ketganda Future Perfect ('will have published') ishlatiladi."
      },
      {
        "id": "D",
        "text": "her third academic book",
        "isError": false
      }
    ]
  },
  {
    "id": 166,
    "level": "A1",
    "tense": "Present Simple (3rd person singular)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My uncle",
        "isError": false
      },
      {
        "id": "B",
        "text": "teach",
        "isError": true,
        "correction": "teaches",
        "explanation": "'-ch' bilan tugagan fe'llarga uchinchi shaxs birlikda '-es' qo'shiladi: 'teaches' bo'lishi kerak."
      },
      {
        "id": "C",
        "text": "mathematics at school",
        "isError": false
      },
      {
        "id": "D",
        "text": "every Monday",
        "isError": false
      }
    ]
  },
  {
    "id": 167,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Pay)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "payed",
        "isError": true,
        "correction": "paid",
        "explanation": "'Pay' fe'lining o'tgan zamon shakli 'payed' emas, 'paid' bo'ladi (pay - paid - paid)."
      },
      {
        "id": "D",
        "text": "for the groceries in cash",
        "isError": false
      }
    ]
  },
  {
    "id": 168,
    "level": "A1",
    "tense": "Present Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My parents",
        "isError": false
      },
      {
        "id": "B",
        "text": "is sitting",
        "isError": true,
        "correction": "are sitting",
        "explanation": "'My parents' ko'plikda (they) bo'lgani uchun 'is' emas, 'are' ishlatiladi: 'are sitting'."
      },
      {
        "id": "C",
        "text": "on the cozy sofa",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the living room",
        "isError": false
      }
    ]
  },
  {
    "id": 169,
    "level": "A1",
    "tense": "Past Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "didn't took",
        "isError": true,
        "correction": "didn't take",
        "explanation": "'Didn't' dan keyin fe'lning 2-shakli (took) emas, 1-shakli (take) keladi: 'didn't take'."
      },
      {
        "id": "C",
        "text": "an umbrella",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the morning",
        "isError": false
      }
    ]
  },
  {
    "id": 170,
    "level": "A1",
    "tense": "Present Simple (Have vs Has)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "This modern hotel",
        "isError": false
      },
      {
        "id": "B",
        "text": "have",
        "isError": true,
        "correction": "has",
        "explanation": "Birlikdagi ega ('This modern hotel' - it) uchun 'have' emas, 'has' ishlatiladi: 'has fifty rooms'."
      },
      {
        "id": "C",
        "text": "fifty comfortable rooms",
        "isError": false
      },
      {
        "id": "D",
        "text": "for foreign tourists",
        "isError": false
      }
    ]
  },
  {
    "id": 171,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "is going to fly",
        "isError": true,
        "correction": "are going to fly",
        "explanation": "'We' (biz) olmoshi bilan 'is' emas, 'are' bo'lishi shart: 'We are going to fly to Istanbul'."
      },
      {
        "id": "C",
        "text": "to Istanbul",
        "isError": false
      },
      {
        "id": "D",
        "text": "next month",
        "isError": false
      }
    ]
  },
  {
    "id": 172,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Send)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Two days ago,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "send",
        "isError": true,
        "correction": "sent",
        "explanation": "O'tgan zamonda 'Two days ago' bo'lgani sababli 'send' emas, uning o'tgan shakli 'sent' bo'lishi kerak."
      },
      {
        "id": "D",
        "text": "a beautiful postcard",
        "isError": false
      }
    ]
  },
  {
    "id": 173,
    "level": "A1",
    "tense": "Present Simple (Frequency Adverb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "drinks never",
        "isError": true,
        "correction": "never drinks",
        "explanation": "'Never' chastota ravishi asosiy fe'ldan oldin keladi: 'never drinks black coffee'."
      },
      {
        "id": "C",
        "text": "black coffee",
        "isError": false
      },
      {
        "id": "D",
        "text": "without milk",
        "isError": false
      }
    ]
  },
  {
    "id": 174,
    "level": "A1",
    "tense": "Present Continuous (Stative - Love)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Right now,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she is loving",
        "isError": true,
        "correction": "she loves",
        "explanation": "'Love' his-tuyg'u fe'li bo'lib, Continuous zamonda ishlatilmaydi: 'she loves reading stories' bo'ladi."
      },
      {
        "id": "C",
        "text": "reading detective stories",
        "isError": false
      },
      {
        "id": "D",
        "text": "in her free time",
        "isError": false
      }
    ]
  },
  {
    "id": 175,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Win)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Our school football team",
        "isError": false
      },
      {
        "id": "B",
        "text": "winned",
        "isError": true,
        "correction": "won",
        "explanation": "'Win' fe'lining Past Simple shakli 'winned' emas, 'won' bo'ladi (win - won - won)."
      },
      {
        "id": "C",
        "text": "the silver cup",
        "isError": false
      },
      {
        "id": "D",
        "text": "last Friday",
        "isError": false
      }
    ]
  },
  {
    "id": 176,
    "level": "A1",
    "tense": "Present Simple (Do vs Does Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Do",
        "isError": true,
        "correction": "Does",
        "explanation": "'Your mother' (she) birlikda bo'lgani sababli so'roq gapda 'Do' emas, 'Does' qo'yiladi: 'Does your mother bake...?'."
      },
      {
        "id": "B",
        "text": "your mother bake",
        "isError": false
      },
      {
        "id": "C",
        "text": "fresh bread",
        "isError": false
      },
      {
        "id": "D",
        "text": "every weekend?",
        "isError": false
      }
    ]
  },
  {
    "id": 177,
    "level": "A1",
    "tense": "Past Simple (Regular - Stop)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The red bus",
        "isError": false
      },
      {
        "id": "B",
        "text": "stoped",
        "isError": true,
        "correction": "stopped",
        "explanation": "Bir bo'g'inli 'stop' fe'liga '-ed' qo'shilganda 'p' harfi ikkilanadi: 'stopped' (stoped emas)."
      },
      {
        "id": "C",
        "text": "at the traffic light",
        "isError": false
      },
      {
        "id": "D",
        "text": "a minute ago",
        "isError": false
      }
    ]
  },
  {
    "id": 178,
    "level": "A1",
    "tense": "Present Continuous (Spelling - Make)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My grandmother",
        "isError": false
      },
      {
        "id": "B",
        "text": "is makeing",
        "isError": true,
        "correction": "is making",
        "explanation": "'-e' bilan tugagan 'make' fe'liga '-ing' qo'shilganda 'e' tushib qoladi: 'making' (makeing emas)."
      },
      {
        "id": "C",
        "text": "a fruit salad",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the sunny kitchen",
        "isError": false
      }
    ]
  },
  {
    "id": 179,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Sell)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last year,",
        "isError": false
      },
      {
        "id": "B",
        "text": "they",
        "isError": false
      },
      {
        "id": "C",
        "text": "selled",
        "isError": true,
        "correction": "sold",
        "explanation": "'Sell' fe'lining Past Simple shakli 'selled' emas, 'sold' hisoblanadi (sell - sold - sold)."
      },
      {
        "id": "D",
        "text": "their old blue car",
        "isError": false
      }
    ]
  },
  {
    "id": 180,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The cat",
        "isError": false
      },
      {
        "id": "B",
        "text": "don't like",
        "isError": true,
        "correction": "doesn't like",
        "explanation": "'The cat' (it) uchinchi shaxs birlik bo'lgani uchun 'don't' emas, 'doesn't' ishlatiladi: 'doesn't like'."
      },
      {
        "id": "C",
        "text": "taking a bath",
        "isError": false
      },
      {
        "id": "D",
        "text": "in warm water",
        "isError": false
      }
    ]
  },
  {
    "id": 181,
    "level": "A1",
    "tense": "Past Simple (To Be Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "weren't",
        "isError": true,
        "correction": "wasn't",
        "explanation": "'I' olmoshi bilan 'weren't' emas, 'wasn't' ishlatiladi: 'I wasn't tired after the walk'."
      },
      {
        "id": "C",
        "text": "tired or sleepy",
        "isError": false
      },
      {
        "id": "D",
        "text": "after the short walk",
        "isError": false
      }
    ]
  },
  {
    "id": 182,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "is going start",
        "isError": true,
        "correction": "is going to start",
        "explanation": "'Going to' iborasida 'to' zarrachasi tushirib qoldirilmaydi: 'is going to start' bo'lishi kerak."
      },
      {
        "id": "C",
        "text": "a new fitness routine",
        "isError": false
      },
      {
        "id": "D",
        "text": "tomorrow morning",
        "isError": false
      }
    ]
  },
  {
    "id": 183,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Keep)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "keeped",
        "isError": true,
        "correction": "kept",
        "explanation": "'Keep' fe'lining o'tgan zamon shakli 'keeped' emas, 'kept' bo'ladi (keep - kept - kept)."
      },
      {
        "id": "C",
        "text": "all the secret letters",
        "isError": false
      },
      {
        "id": "D",
        "text": "in a wooden box",
        "isError": false
      }
    ]
  },
  {
    "id": 184,
    "level": "A1",
    "tense": "Present Simple (Verb ending -y)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The small baby",
        "isError": false
      },
      {
        "id": "B",
        "text": "crys",
        "isError": true,
        "correction": "cries",
        "explanation": "Undoshdan keyingi 'y' harfi 3-shaxs birlikda '-ies' ga aylanadi: 'cry' -> 'cries' (crys emas)."
      },
      {
        "id": "C",
        "text": "when he is hungry",
        "isError": false
      },
      {
        "id": "D",
        "text": "at night",
        "isError": false
      }
    ]
  },
  {
    "id": 185,
    "level": "A1",
    "tense": "Present Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The birds",
        "isError": false
      },
      {
        "id": "B",
        "text": "is building",
        "isError": true,
        "correction": "are building",
        "explanation": "'The birds' ko'plikda (they) bo'lgani sababli 'is' emas, 'are' ishlatiladi: 'are building a nest'."
      },
      {
        "id": "C",
        "text": "a nest in the garden",
        "isError": false
      },
      {
        "id": "D",
        "text": "this spring",
        "isError": false
      }
    ]
  },
  {
    "id": 186,
    "level": "A1",
    "tense": "Past Simple (Question with Did)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did your brother",
        "isError": false
      },
      {
        "id": "B",
        "text": "wrote",
        "isError": true,
        "correction": "write",
        "explanation": "'Did' bor so'roq gapda asosiy fe'l o'tgan zamonda (wrote) emas, birinchi shaklda (write) bo'ladi: 'Did your brother write...?'."
      },
      {
        "id": "C",
        "text": "that funny letter",
        "isError": false
      },
      {
        "id": "D",
        "text": "to you?",
        "isError": false
      }
    ]
  },
  {
    "id": 187,
    "level": "A1",
    "tense": "Present Simple (3rd person -s)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My grandfather",
        "isError": false
      },
      {
        "id": "B",
        "text": "walk",
        "isError": true,
        "correction": "walks",
        "explanation": "'My grandfather' (he) uchinchi shaxs birlik bo'lgani uchun Present Simple da fe'lga '-s' qo'shiladi: 'walks'."
      },
      {
        "id": "C",
        "text": "in the central park",
        "isError": false
      },
      {
        "id": "D",
        "text": "every evening",
        "isError": false
      }
    ]
  },
  {
    "id": 188,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Cut)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the gardener",
        "isError": false
      },
      {
        "id": "C",
        "text": "cutted",
        "isError": true,
        "correction": "cut",
        "explanation": "'Cut' fe'lining o'tgan zamon shakli 'cutted' emas, 'cut' bo'ladi (uchala shakli bir xil: cut - cut - cut)."
      },
      {
        "id": "D",
        "text": "the green grass neatly",
        "isError": false
      }
    ]
  },
  {
    "id": 189,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "going to watch",
        "isError": true,
        "correction": "are going to watch",
        "explanation": "'Going to' oldidan 'are' yordamchi fe'li tushirib qoldirilmasligi shart: 'They are going to watch a film'."
      },
      {
        "id": "C",
        "text": "a funny comedy film",
        "isError": false
      },
      {
        "id": "D",
        "text": "tonight",
        "isError": false
      }
    ]
  },
  {
    "id": 190,
    "level": "A1",
    "tense": "Present Continuous (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "isn't working",
        "isError": true,
        "correction": "am not working",
        "explanation": "'I' (men) uchun 'isn't' emas, 'am not' ishlatiladi: 'I am not working today'."
      },
      {
        "id": "C",
        "text": "at the library today",
        "isError": false
      },
      {
        "id": "D",
        "text": "because it is Sunday",
        "isError": false
      }
    ]
  },
  {
    "id": 191,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Hurt)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He fell down and",
        "isError": false
      },
      {
        "id": "B",
        "text": "hurted",
        "isError": true,
        "correction": "hurt",
        "explanation": "'Hurt' fe'lining o'tgan zamon shakli 'hurted' emas, 'hurt' bo'ladi (hurt - hurt - hurt)."
      },
      {
        "id": "C",
        "text": "his right knee",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the football match",
        "isError": false
      }
    ]
  },
  {
    "id": 192,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "doesn't have",
        "isError": true,
        "correction": "don't have",
        "explanation": "'We' ko'plik olmoshi bilan 'doesn't' emas, 'don't' ishlatiladi: 'We don't have school on Saturdays'."
      },
      {
        "id": "C",
        "text": "any homework",
        "isError": false
      },
      {
        "id": "D",
        "text": "on Saturday",
        "isError": false
      }
    ]
  },
  {
    "id": 193,
    "level": "A1",
    "tense": "Present Continuous (Stative - Believe)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Right now,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I am believing",
        "isError": true,
        "correction": "I believe",
        "explanation": "'Believe' holat fe'li bo'lib, '-ing' bilan ishlatilmaydi: 'I believe his words' deyiladi."
      },
      {
        "id": "C",
        "text": "his honest story",
        "isError": false
      },
      {
        "id": "D",
        "text": "completely",
        "isError": false
      }
    ]
  },
  {
    "id": 194,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Hit)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The tennis ball",
        "isError": false
      },
      {
        "id": "B",
        "text": "hitted",
        "isError": true,
        "correction": "hit",
        "explanation": "'Hit' fe'lining o'tgan zamon shakli 'hitted' emas, 'hit' hisoblanadi (hit - hit - hit)."
      },
      {
        "id": "C",
        "text": "the net",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the second set",
        "isError": false
      }
    ]
  },
  {
    "id": 195,
    "level": "A1",
    "tense": "Present Simple (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Does",
        "isError": true,
        "correction": "Do",
        "explanation": "'These shops' (bu do'konlar) ko'plikda (they) bo'lgani uchun 'Does' emas, 'Do' qo'yiladi: 'Do these shops open...?'."
      },
      {
        "id": "B",
        "text": "these shops open",
        "isError": false
      },
      {
        "id": "C",
        "text": "early in the morning",
        "isError": false
      },
      {
        "id": "D",
        "text": "on weekdays?",
        "isError": false
      }
    ]
  },
  {
    "id": 196,
    "level": "A1",
    "tense": "Past Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "didn't came",
        "isError": true,
        "correction": "didn't come",
        "explanation": "'Didn't' dan keyin fe'l boshlang'ich shaklda (come) keladi: 'didn't come to my party'."
      },
      {
        "id": "C",
        "text": "to my birthday party",
        "isError": false
      },
      {
        "id": "D",
        "text": "last night",
        "isError": false
      }
    ]
  },
  {
    "id": 197,
    "level": "A1",
    "tense": "Present Continuous (Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Look!",
        "isError": false
      },
      {
        "id": "B",
        "text": "They are danceing",
        "isError": true,
        "correction": "are dancing",
        "explanation": "'-e' bilan tugagan 'dance' fe'liga '-ing' qo'shilganda 'e' tushib qoladi: 'dancing' (danceing emas)."
      },
      {
        "id": "C",
        "text": "happily to the music",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the hall",
        "isError": false
      }
    ]
  },
  {
    "id": 198,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Put)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "This morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "putted",
        "isError": true,
        "correction": "put",
        "explanation": "'Put' fe'lining o'tgan zamon shakli 'putted' emas, 'put' bo'ladi (put - put - put)."
      },
      {
        "id": "D",
        "text": "the fresh milk in the fridge",
        "isError": false
      }
    ]
  },
  {
    "id": 199,
    "level": "A1",
    "tense": "Present Simple (Frequency Adverb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "are usually late",
        "isError": false
      },
      {
        "id": "C",
        "text": "never are",
        "isError": true,
        "correction": "are never",
        "explanation": "'Never' ravishi 'to be' (are) fe'lidan KEYIN keladi: 'are never late' to'g'ri tartibdir."
      },
      {
        "id": "D",
        "text": "for our English lesson",
        "isError": false
      }
    ]
  },
  {
    "id": 200,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Are they",
        "isError": false
      },
      {
        "id": "B",
        "text": "going to moving",
        "isError": true,
        "correction": "going to move",
        "explanation": "'Going to' dan keyin fe'l boshlang'ich shaklda (move) keladi: 'going to move to a new flat'."
      },
      {
        "id": "C",
        "text": "to a new apartment",
        "isError": false
      },
      {
        "id": "D",
        "text": "next year?",
        "isError": false
      }
    ]
  },
  {
    "id": 2011,
    "level": "A1",
    "tense": "Present Simple (Verb ending -sh)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "wash",
        "isError": true,
        "correction": "washes",
        "explanation": "'-sh' bilan tugagan fe'llarga 3-shaxs birlikda '-es' qo'shiladi: 'washes his face'."
      },
      {
        "id": "C",
        "text": "his hands and face",
        "isError": false
      },
      {
        "id": "D",
        "text": "before every meal",
        "isError": false
      }
    ]
  },
  {
    "id": 2012,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Stand)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The students",
        "isError": false
      },
      {
        "id": "B",
        "text": "standed",
        "isError": true,
        "correction": "stood",
        "explanation": "'Stand' fe'lining o'tgan zamon shakli 'standed' emas, 'stood' bo'ladi (stand - stood - stood)."
      },
      {
        "id": "C",
        "text": "up politely",
        "isError": false
      },
      {
        "id": "D",
        "text": "when the headmaster entered",
        "isError": false
      }
    ]
  },
  {
    "id": 2013,
    "level": "A1",
    "tense": "Present Continuous (Action right now)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Quiet please!",
        "isError": false
      },
      {
        "id": "B",
        "text": "The professor",
        "isError": false
      },
      {
        "id": "C",
        "text": "speak",
        "isError": true,
        "correction": "is speaking",
        "explanation": "Ayni daqiqada sodir bo'layotgan ish-harakat uchun Present Continuous kerak: 'is speaking'."
      },
      {
        "id": "D",
        "text": "to the whole audience",
        "isError": false
      }
    ]
  },
  {
    "id": 2014,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Catch)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "catched",
        "isError": true,
        "correction": "caught",
        "explanation": "'Catch' fe'lining Past Simple shakli 'catched' emas, 'caught' bo'ladi."
      },
      {
        "id": "D",
        "text": "a big fish in the river",
        "isError": false
      }
    ]
  },
  {
    "id": 2015,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My brother",
        "isError": false
      },
      {
        "id": "B",
        "text": "doesn't likes",
        "isError": true,
        "correction": "doesn't like",
        "explanation": "'Doesn't' kelganda asosiy fe'ldan '-s' tushib qoladi: 'doesn't like' (likes emas)."
      },
      {
        "id": "C",
        "text": "spicy Asian food",
        "isError": false
      },
      {
        "id": "D",
        "text": "at all",
        "isError": false
      }
    ]
  },
  {
    "id": 2016,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "is going learn",
        "isError": true,
        "correction": "is going to learn",
        "explanation": "'Going' dan keyin 'to' zarrachasi bo'lishi shart: 'is going to learn English'."
      },
      {
        "id": "C",
        "text": "how to speak French",
        "isError": false
      },
      {
        "id": "D",
        "text": "this summer",
        "isError": false
      }
    ]
  },
  {
    "id": 2017,
    "level": "A1",
    "tense": "Past Simple (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did they",
        "isError": false
      },
      {
        "id": "B",
        "text": "lost",
        "isError": true,
        "correction": "lose",
        "explanation": "'Did' bilan berilgan so'roq gapda fe'l 1-shaklda (lose) keladi: 'Did they lose the match?'."
      },
      {
        "id": "C",
        "text": "their football match",
        "isError": false
      },
      {
        "id": "D",
        "text": "last Saturday?",
        "isError": false
      }
    ]
  },
  {
    "id": 2018,
    "level": "A1",
    "tense": "Present Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The dog",
        "isError": false
      },
      {
        "id": "B",
        "text": "are barking",
        "isError": true,
        "correction": "is barking",
        "explanation": "'The dog' (it) birlikda bo'lgani uchun 'are' emas, 'is' ishlatiladi: 'is barking at the cat'."
      },
      {
        "id": "C",
        "text": "loudly at the mailman",
        "isError": false
      },
      {
        "id": "D",
        "text": "outside",
        "isError": false
      }
    ]
  },
  {
    "id": 2019,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Hear)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last night,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "heared",
        "isError": true,
        "correction": "heard",
        "explanation": "'Hear' fe'lining o'tgan shakli 'heared' emas, 'heard' bo'ladi."
      },
      {
        "id": "D",
        "text": "an owl in the trees",
        "isError": false
      }
    ]
  },
  {
    "id": 2020,
    "level": "A1",
    "tense": "Present Simple (3rd person singular)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Water",
        "isError": false
      },
      {
        "id": "B",
        "text": "freeze",
        "isError": true,
        "correction": "freezes",
        "explanation": "'Water' (it) birlikdagi ega bo'lgani uchun fe'lga '-s' qo'shiladi: 'freezes at 0 degrees'."
      },
      {
        "id": "C",
        "text": "at zero degrees Celsius",
        "isError": false
      },
      {
        "id": "D",
        "text": "in winter",
        "isError": false
      }
    ]
  },
  {
    "id": 2021,
    "level": "A1",
    "tense": "Present Continuous (Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She is",
        "isError": false
      },
      {
        "id": "B",
        "text": "shoping",
        "isError": true,
        "correction": "shopping",
        "explanation": "'Shop' bir bo'g'inli fe'liga '-ing' qo'shilganda 'p' ikkilanadi: 'shopping' (shoping emas)."
      },
      {
        "id": "C",
        "text": "for warm clothes",
        "isError": false
      },
      {
        "id": "D",
        "text": "at the city mall",
        "isError": false
      }
    ]
  },
  {
    "id": 2022,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Leave)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The train",
        "isError": false
      },
      {
        "id": "B",
        "text": "leaved",
        "isError": true,
        "correction": "left",
        "explanation": "'Leave' fe'lining o'tgan zamon shakli 'leaved' emas, 'left' bo'ladi."
      },
      {
        "id": "C",
        "text": "the station on time",
        "isError": false
      },
      {
        "id": "D",
        "text": "yesterday morning",
        "isError": false
      }
    ]
  },
  {
    "id": 2023,
    "level": "A1",
    "tense": "Present Simple (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Where",
        "isError": false
      },
      {
        "id": "B",
        "text": "does your cousins live",
        "isError": true,
        "correction": "do your cousins live",
        "explanation": "'Your cousins' (amakivachchalaringiz) ko'plikda (they) bo'lgani uchun 'does' emas, 'do' qo'yiladi."
      },
      {
        "id": "C",
        "text": "with their parents",
        "isError": false
      },
      {
        "id": "D",
        "text": "in Tashkent?",
        "isError": false
      }
    ]
  },
  {
    "id": 2024,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Bring)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "bringed",
        "isError": true,
        "correction": "brought",
        "explanation": "'Bring' fe'lining Past Simple shakli 'bringed' emas, 'brought' hisoblanadi."
      },
      {
        "id": "C",
        "text": "a homemade chocolate cake",
        "isError": false
      },
      {
        "id": "D",
        "text": "to our family picnic",
        "isError": false
      }
    ]
  },
  {
    "id": 2025,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "am going clean",
        "isError": true,
        "correction": "am going to clean",
        "explanation": "'Going to' tarkibida 'to' zarrachasi bo'lishi shart: 'am going to clean'."
      },
      {
        "id": "C",
        "text": "my room thoroughly",
        "isError": false
      },
      {
        "id": "D",
        "text": "this Saturday",
        "isError": false
      }
    ]
  },
  {
    "id": 2026,
    "level": "A1",
    "tense": "Present Simple (Have vs Has)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My grandfather",
        "isError": false
      },
      {
        "id": "B",
        "text": "have",
        "isError": true,
        "correction": "has",
        "explanation": "'My grandfather' (he) uchinchi shaxs birlik bo'lgani sababli 'has' ishlatiladi: 'has a beautiful garden'."
      },
      {
        "id": "C",
        "text": "a beautiful rose garden",
        "isError": false
      },
      {
        "id": "D",
        "text": "behind his house",
        "isError": false
      }
    ]
  },
  {
    "id": 2027,
    "level": "A1",
    "tense": "Past Simple (Regular - Study)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "studyed",
        "isError": true,
        "correction": "studied",
        "explanation": "Undoshdan keyingi 'y' harfi '-ed' qo'shilganda '-ied' ga aylanadi: 'studied' (studyed emas)."
      },
      {
        "id": "C",
        "text": "for the driving test",
        "isError": false
      },
      {
        "id": "D",
        "text": "all night",
        "isError": false
      }
    ]
  },
  {
    "id": 2028,
    "level": "A1",
    "tense": "Present Continuous (Stative - Want)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Right now,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the child is wanting",
        "isError": true,
        "correction": "the child wants",
        "explanation": "'Want' holat fe'li bo'lib, Continuous zamonlarda qo'llanilmaydi: 'the child wants an apple'."
      },
      {
        "id": "C",
        "text": "a red delicious apple",
        "isError": false
      },
      {
        "id": "D",
        "text": "from the fruit bowl",
        "isError": false
      }
    ]
  },
  {
    "id": 2029,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Find)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "finded",
        "isError": true,
        "correction": "found",
        "explanation": "'Find' fe'lining o'tgan shakli 'finded' emas, 'found' bo'ladi."
      },
      {
        "id": "C",
        "text": "a golden ring",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the sand",
        "isError": false
      }
    ]
  },
  {
    "id": 2030,
    "level": "A1",
    "tense": "Present Simple (Frequency Adverb)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "goes always",
        "isError": true,
        "correction": "always goes",
        "explanation": "'Always' chastota ravishi fe'ldan oldin keladi: 'always goes to bed'."
      },
      {
        "id": "C",
        "text": "to bed early",
        "isError": false
      },
      {
        "id": "D",
        "text": "on workdays",
        "isError": false
      }
    ]
  },
  {
    "id": 2031,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Give)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The kind teacher",
        "isError": false
      },
      {
        "id": "B",
        "text": "gived",
        "isError": true,
        "correction": "gave",
        "explanation": "'Give' fe'lining Past Simple shakli 'gived' emas, 'gave' bo'ladi."
      },
      {
        "id": "C",
        "text": "us interesting books",
        "isError": false
      },
      {
        "id": "D",
        "text": "to read at home",
        "isError": false
      }
    ]
  },
  {
    "id": 2032,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "It",
        "isError": false
      },
      {
        "id": "B",
        "text": "are going to rain",
        "isError": true,
        "correction": "is going to rain",
        "explanation": "'It' olmoshi bilan 'are' emas, 'is' ishlatiladi: 'is going to rain'."
      },
      {
        "id": "C",
        "text": "this afternoon,",
        "isError": false
      },
      {
        "id": "D",
        "text": "so take your umbrella",
        "isError": false
      }
    ]
  },
  {
    "id": 2033,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "doesn't play",
        "isError": true,
        "correction": "don't play",
        "explanation": "'They' ko'plik olmoshi bo'lgani sababli 'doesn't' emas, 'don't' ishlatiladi: 'don't play'."
      },
      {
        "id": "C",
        "text": "basketball at school",
        "isError": false
      },
      {
        "id": "D",
        "text": "on rainy days",
        "isError": false
      }
    ]
  },
  {
    "id": 2034,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Build)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They",
        "isError": false
      },
      {
        "id": "B",
        "text": "builded",
        "isError": true,
        "correction": "built",
        "explanation": "'Build' fe'lining o'tgan shakli 'builded' emas, 'built' hisoblanadi."
      },
      {
        "id": "C",
        "text": "a modern wooden fence",
        "isError": false
      },
      {
        "id": "D",
        "text": "around their garden",
        "isError": false
      }
    ]
  },
  {
    "id": 2035,
    "level": "A1",
    "tense": "Present Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The students",
        "isError": false
      },
      {
        "id": "B",
        "text": "is writing",
        "isError": true,
        "correction": "are writing",
        "explanation": "'The students' ko'plikda bo'lgani sababli 'is' emas, 'are' ishlatiladi: 'are writing an essay'."
      },
      {
        "id": "C",
        "text": "an English essay",
        "isError": false
      },
      {
        "id": "D",
        "text": "in their notebooks",
        "isError": false
      }
    ]
  },
  {
    "id": 271,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At seven o'clock yesterday morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the farmers",
        "isError": false
      },
      {
        "id": "C",
        "text": "was harvesting",
        "isError": true,
        "correction": "were harvesting",
        "explanation": "'The farmers' (fermerlar) ko'plikda bo'lgani uchun Past Continuous da 'was' emas, 'were' ishlatiladi: 'were harvesting'."
      },
      {
        "id": "D",
        "text": "ripe apples in the orchard",
        "isError": false
      }
    ]
  },
  {
    "id": 272,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Choose)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The manager",
        "isError": false
      },
      {
        "id": "B",
        "text": "has chose",
        "isError": true,
        "correction": "has chosen",
        "explanation": "'Choose' fe'lining 3-shakli 'chosen' bo'ladi: 'has chosen a new assistant'."
      },
      {
        "id": "C",
        "text": "a new assistant",
        "isError": false
      },
      {
        "id": "D",
        "text": "for the sales department",
        "isError": false
      }
    ]
  },
  {
    "id": 273,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While she was cooking dinner,",
        "isError": false
      },
      {
        "id": "B",
        "text": "her phone",
        "isError": false
      },
      {
        "id": "C",
        "text": "was beeping",
        "isError": true,
        "correction": "beeped",
        "explanation": "Jarayon davomida telefonning to'satdan signal berishi qisqa harakatdir: 'beeped loudly'."
      },
      {
        "id": "D",
        "text": "loudly twice",
        "isError": false
      }
    ]
  },
  {
    "id": 274,
    "level": "A2",
    "tense": "Present Perfect (Since vs For)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He has worked here",
        "isError": false
      },
      {
        "id": "B",
        "text": "since three years",
        "isError": true,
        "correction": "for three years",
        "explanation": "Vaqt davomiyligi (three years) bilan 'since' emas, 'for' ishlatiladi: 'for three years'."
      },
      {
        "id": "C",
        "text": "and he enjoys",
        "isError": false
      },
      {
        "id": "D",
        "text": "every single project",
        "isError": false
      }
    ]
  },
  {
    "id": 275,
    "level": "A2",
    "tense": "Future (Spontaneous decision)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I am feeling hungry,",
        "isError": false
      },
      {
        "id": "B",
        "text": "so I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am going to make",
        "isError": true,
        "correction": "will make",
        "explanation": "Ayni daqiqadagi his-tuyg'u ta'sirida qabul qilingan oniy qaror uchun 'will' ishlatiladi: 'I will make a sandwich'."
      },
      {
        "id": "D",
        "text": "a quick cheese sandwich",
        "isError": false
      }
    ]
  },
  {
    "id": 276,
    "level": "A2",
    "tense": "Past Continuous (Interrupted action)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The children were playing outside",
        "isError": false
      },
      {
        "id": "B",
        "text": "when it",
        "isError": false
      },
      {
        "id": "C",
        "text": "was beginning to thunder",
        "isError": true,
        "correction": "began to thunder",
        "explanation": "O'yin paytida to'satdan momaqaldiroq boshlanishi Past Simple da bo'ladi: 'began to thunder'."
      },
      {
        "id": "D",
        "text": "in the sky",
        "isError": false
      }
    ]
  },
  {
    "id": 277,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Fly)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Have you ever",
        "isError": false
      },
      {
        "id": "B",
        "text": "flew",
        "isError": true,
        "correction": "flown",
        "explanation": "'Fly' fe'lining 3-shakli 'flown' bo'ladi: 'Have you ever flown in a helicopter?'."
      },
      {
        "id": "C",
        "text": "in a modern helicopter",
        "isError": false
      },
      {
        "id": "D",
        "text": "over the mountains?",
        "isError": false
      }
    ]
  },
  {
    "id": 278,
    "level": "A2",
    "tense": "Present Simple for Schedule",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The morning flight to London",
        "isError": false
      },
      {
        "id": "B",
        "text": "is departing",
        "isError": true,
        "correction": "departs",
        "explanation": "Samolyot parvoz jadvali (timetable) uchun Present Simple ishlatiladi: 'departs at 7:45 AM'."
      },
      {
        "id": "C",
        "text": "at 7:45 AM tomorrow",
        "isError": false
      },
      {
        "id": "D",
        "text": "from gate number four",
        "isError": false
      }
    ]
  },
  {
    "id": 279,
    "level": "A2",
    "tense": "Past Continuous (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The drivers",
        "isError": false
      },
      {
        "id": "B",
        "text": "wasn't speeding",
        "isError": true,
        "correction": "weren't speeding",
        "explanation": "'The drivers' ko'plikda bo'lgani sababli 'wasn't' emas, 'weren't' ishlatiladi: 'weren't speeding'."
      },
      {
        "id": "C",
        "text": "along the narrow mountain road",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the foggy night",
        "isError": false
      }
    ]
  },
  {
    "id": 280,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Break)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Someone",
        "isError": false
      },
      {
        "id": "B",
        "text": "has broke",
        "isError": true,
        "correction": "has broken",
        "explanation": "'Break' fe'lining 3-shakli 'broken' bo'ladi (break - broke - broken): 'has broken the door handle'."
      },
      {
        "id": "C",
        "text": "the silver door handle",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the office hallway",
        "isError": false
      }
    ]
  },
  {
    "id": 281,
    "level": "A2",
    "tense": "Future (Evidence-based prediction)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Look at the flat tire!",
        "isError": false
      },
      {
        "id": "B",
        "text": "We",
        "isError": false
      },
      {
        "id": "C",
        "text": "will miss",
        "isError": true,
        "correction": "are going to miss",
        "explanation": "Aniq ko'rinib turgan dalil (flat tire) asosidagi bashorat uchun 'be going to' ishlatiladi: 'are going to miss our train'."
      },
      {
        "id": "D",
        "text": "our morning train to Paris",
        "isError": false
      }
    ]
  },
  {
    "id": 282,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He was jogging in the park",
        "isError": false
      },
      {
        "id": "B",
        "text": "when he",
        "isError": false
      },
      {
        "id": "C",
        "text": "was slipping",
        "isError": true,
        "correction": "slipped",
        "explanation": "Yugurish paytida toyib ketish qisqa harakat bo'lib, Past Simple da keladi: 'slipped on the wet leaves'."
      },
      {
        "id": "D",
        "text": "on the wet autumn leaves",
        "isError": false
      }
    ]
  },
  {
    "id": 283,
    "level": "A2",
    "tense": "Present Perfect (Already in negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The postman",
        "isError": false
      },
      {
        "id": "B",
        "text": "hasn't delivered",
        "isError": false
      },
      {
        "id": "C",
        "text": "the letters",
        "isError": false
      },
      {
        "id": "D",
        "text": "already",
        "isError": true,
        "correction": "yet",
        "explanation": "Inkor gaplarda 'hali' ma'nosida 'already' emas, balki 'yet' so'zi ishlatiladi: 'hasn't delivered... yet'."
      }
    ]
  },
  {
    "id": 284,
    "level": "A2",
    "tense": "Past Continuous (Subject Agreement)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "You and your colleague",
        "isError": false
      },
      {
        "id": "B",
        "text": "was discussing",
        "isError": true,
        "correction": "were discussing",
        "explanation": "'You and your colleague' (sizlar/they) ko'plikda bo'lgani sababli 'were discussing' bo'lishi kerak."
      },
      {
        "id": "C",
        "text": "the new budget",
        "isError": false
      },
      {
        "id": "D",
        "text": "at yesterday's meeting",
        "isError": false
      }
    ]
  },
  {
    "id": 285,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Hide)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The cat",
        "isError": false
      },
      {
        "id": "B",
        "text": "has hid",
        "isError": true,
        "correction": "has hidden",
        "explanation": "'Hide' fe'lining 3-shakli 'hidden' hisoblanadi (hide - hid - hidden): 'has hidden under the bed'."
      },
      {
        "id": "C",
        "text": "under the warm bed",
        "isError": false
      },
      {
        "id": "D",
        "text": "all day long",
        "isError": false
      }
    ]
  },
  {
    "id": 286,
    "level": "A2",
    "tense": "Future (Offer of help)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "That box looks heavy,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am lifting",
        "isError": true,
        "correction": "will lift",
        "explanation": "Yordam taklif qilishda 'will' ishlatiladi: 'I will lift it for you'."
      },
      {
        "id": "D",
        "text": "it onto the high shelf for you",
        "isError": false
      }
    ]
  },
  {
    "id": 287,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While we were eating breakfast,",
        "isError": false
      },
      {
        "id": "B",
        "text": "a yellow bird",
        "isError": false
      },
      {
        "id": "C",
        "text": "was flying",
        "isError": true,
        "correction": "flew",
        "explanation": "Oynadan xonaga qushning kirib kelishi qisqa harakatdir: 'flew into the room'."
      },
      {
        "id": "D",
        "text": "through the open window",
        "isError": false
      }
    ]
  },
  {
    "id": 288,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Freeze)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The small water pipe",
        "isError": false
      },
      {
        "id": "B",
        "text": "has froze",
        "isError": true,
        "correction": "has frozen",
        "explanation": "'Freeze' fe'lining 3-shakli 'frozen' bo'ladi: 'has frozen during the cold night'."
      },
      {
        "id": "C",
        "text": "during the freezing night",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the garage",
        "isError": false
      }
    ]
  },
  {
    "id": 289,
    "level": "A2",
    "tense": "Past Continuous (Question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Was you",
        "isError": true,
        "correction": "Were you",
        "explanation": "'You' olmoshi bilan Past Continuous so'rog'ida 'Was' emas, 'Were' ishlatiladi: 'Were you sleeping...?'."
      },
      {
        "id": "B",
        "text": "sleeping peacefully",
        "isError": false
      },
      {
        "id": "C",
        "text": "when the heavy storm began",
        "isError": false
      },
      {
        "id": "D",
        "text": "last night?",
        "isError": false
      }
    ]
  },
  {
    "id": 290,
    "level": "A2",
    "tense": "Present Perfect (Ever with past simple confusion)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did you ever see",
        "isError": true,
        "correction": "Have you ever seen",
        "explanation": "Umr davomidagi tajriba so'ralganda 'ever' bilan Present Perfect ishlatiladi: 'Have you ever seen a shooting star?'."
      },
      {
        "id": "B",
        "text": "a shooting star",
        "isError": false
      },
      {
        "id": "C",
        "text": "in the clear night sky",
        "isError": false
      },
      {
        "id": "D",
        "text": "with your own eyes?",
        "isError": false
      }
    ]
  },
  {
    "id": 291,
    "level": "A2",
    "tense": "Future (Spontaneous decision)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I have a terrible headache,",
        "isError": false
      },
      {
        "id": "B",
        "text": "so I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am taking",
        "isError": true,
        "correction": "will take",
        "explanation": "Hozirgi holatga ko'ra qabul qilingan qaror uchun 'will' ishlatiladi: 'I will take an aspirin'."
      },
      {
        "id": "D",
        "text": "some pain medicine right now",
        "isError": false
      }
    ]
  },
  {
    "id": 292,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She was doing her makeup",
        "isError": false
      },
      {
        "id": "B",
        "text": "when the electricity",
        "isError": false
      },
      {
        "id": "C",
        "text": "was going off",
        "isError": true,
        "correction": "went off",
        "explanation": "Chiroqning o'chishi to'satdan bo'lgan harakat bo'lib, Past Simple da 'went off' bo'ladi."
      },
      {
        "id": "D",
        "text": "without warning",
        "isError": false
      }
    ]
  },
  {
    "id": 293,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Shake)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The dog",
        "isError": false
      },
      {
        "id": "B",
        "text": "has shook",
        "isError": true,
        "correction": "has shaken",
        "explanation": "'Shake' fe'lining 3-shakli 'shaken' bo'ladi (shake - shook - shaken): 'has shaken all the water'."
      },
      {
        "id": "C",
        "text": "all the cold water",
        "isError": false
      },
      {
        "id": "D",
        "text": "from its wet fur",
        "isError": false
      }
    ]
  },
  {
    "id": 294,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The guards",
        "isError": false
      },
      {
        "id": "B",
        "text": "was standing",
        "isError": true,
        "correction": "were standing",
        "explanation": "'The guards' (qo'riqchilar) ko'plikda bo'lgani sababli 'were standing' bo'lishi kerak."
      },
      {
        "id": "C",
        "text": "at the palace gates",
        "isError": false
      },
      {
        "id": "D",
        "text": "throughout the whole night",
        "isError": false
      }
    ]
  },
  {
    "id": 295,
    "level": "A2",
    "tense": "Present Perfect (Just position)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "have returned just",
        "isError": true,
        "correction": "have just returned",
        "explanation": "'Just' so'zi yordamchi fe'l va asosiy fe'l o'rtasida turadi: 'have just returned'."
      },
      {
        "id": "C",
        "text": "from our memorable holiday",
        "isError": false
      },
      {
        "id": "D",
        "text": "in Turkey",
        "isError": false
      }
    ]
  },
  {
    "id": 296,
    "level": "A2",
    "tense": "Future (Fixed Arrangement)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We booked the venue,",
        "isError": false
      },
      {
        "id": "B",
        "text": "so we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will celebrate",
        "isError": true,
        "correction": "are celebrating",
        "explanation": "Oldindan kelishilgan va joyi band qilingan voqea uchun Present Continuous ma'qul: 'are celebrating his birthday'."
      },
      {
        "id": "D",
        "text": "his fiftieth birthday next Friday",
        "isError": false
      }
    ]
  },
  {
    "id": 297,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While they were walking home,",
        "isError": false
      },
      {
        "id": "B",
        "text": "a stray dog",
        "isError": false
      },
      {
        "id": "C",
        "text": "was following",
        "isError": true,
        "correction": "followed",
        "explanation": "It ularning orqasidan ergashishi boshlanishi qisqa harakat sifatida Past Simple da beriladi: 'followed them'."
      },
      {
        "id": "D",
        "text": "them all the way",
        "isError": false
      }
    ]
  },
  {
    "id": 298,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Wear)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She",
        "isError": false
      },
      {
        "id": "B",
        "text": "has wore",
        "isError": true,
        "correction": "has worn",
        "explanation": "'Wear' fe'lining 3-shakli 'worn' hisoblanadi (wear - wore - worn): 'has worn that jacket'."
      },
      {
        "id": "C",
        "text": "that elegant blue jacket",
        "isError": false
      },
      {
        "id": "D",
        "text": "to every job interview",
        "isError": false
      }
    ]
  },
  {
    "id": 299,
    "level": "A2",
    "tense": "Past Continuous (Spelling)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He was",
        "isError": false
      },
      {
        "id": "B",
        "text": "swimmin",
        "isError": true,
        "correction": "swimming",
        "explanation": "Past Continuous da to'g'ri qo'shimcha '-ing' bilan yoziladi: 'swimming' (ikkita 'm' bilan)."
      },
      {
        "id": "C",
        "text": "across the wide river",
        "isError": false
      },
      {
        "id": "D",
        "text": "when his leg cramped",
        "isError": false
      }
    ]
  },
  {
    "id": 300,
    "level": "A2",
    "tense": "Present Perfect (For with specific year confusion)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "They have lived here",
        "isError": false
      },
      {
        "id": "B",
        "text": "for 2010",
        "isError": true,
        "correction": "since 2010",
        "explanation": "Aniq yil ko'rsatilganda (2010) 'for' emas, 'since' ishlatiladi: 'since 2010'."
      },
      {
        "id": "C",
        "text": "and they know",
        "isError": false
      },
      {
        "id": "D",
        "text": "all the local neighbors",
        "isError": false
      }
    ]
  },
  {
    "id": 3011,
    "level": "A2",
    "tense": "Future (Timetable Present Simple)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The university library",
        "isError": false
      },
      {
        "id": "B",
        "text": "will close",
        "isError": true,
        "correction": "closes",
        "explanation": "Kutubxonaning rasmiy yopilish vaqti (timetable) uchun Present Simple ishlatiladi: 'closes at 8:00 PM'."
      },
      {
        "id": "C",
        "text": "at eight o'clock tonight",
        "isError": false
      },
      {
        "id": "D",
        "text": "according to the schedule",
        "isError": false
      }
    ]
  },
  {
    "id": 3012,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Neither my brother nor I",
        "isError": false
      },
      {
        "id": "B",
        "text": "were watching",
        "isError": true,
        "correction": "was watching",
        "explanation": "'Neither... nor I' oxirgi ega 'I' bilan kelishganda 'was watching' bo'lishi grammatik jihatdan to'g'ri."
      },
      {
        "id": "C",
        "text": "the horror movie",
        "isError": false
      },
      {
        "id": "D",
        "text": "yesterday evening",
        "isError": false
      }
    ]
  },
  {
    "id": 3013,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Steal)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Somebody",
        "isError": false
      },
      {
        "id": "B",
        "text": "has stole",
        "isError": true,
        "correction": "has stolen",
        "explanation": "'Steal' fe'lining 3-shakli 'stolen' bo'ladi: 'has stolen my red bicycle'."
      },
      {
        "id": "C",
        "text": "my red bicycle",
        "isError": false
      },
      {
        "id": "D",
        "text": "from the garage",
        "isError": false
      }
    ]
  },
  {
    "id": 3014,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While we were having a cup of tea,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the storm",
        "isError": false
      },
      {
        "id": "C",
        "text": "was starting",
        "isError": true,
        "correction": "started",
        "explanation": "To'fon to'satdan boshlanishi Past Simple da 'started' bo'ladi."
      },
      {
        "id": "D",
        "text": "outside with heavy hail",
        "isError": false
      }
    ]
  },
  {
    "id": 3015,
    "level": "A2",
    "tense": "Future (Promise with will)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I promise that",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am helping",
        "isError": true,
        "correction": "will help",
        "explanation": "'I promise' dan keyin va'da ma'nosida 'will' ishlatiladi: 'I will help you tomorrow'."
      },
      {
        "id": "D",
        "text": "you with your homework tomorrow",
        "isError": false
      }
    ]
  },
  {
    "id": 3016,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Ring)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The alarm clock",
        "isError": false
      },
      {
        "id": "B",
        "text": "has rang",
        "isError": true,
        "correction": "has rung",
        "explanation": "'Ring' fe'lining 3-shakli 'rung' bo'ladi (ring - rang - rung): 'has rung three times'."
      },
      {
        "id": "C",
        "text": "three times already",
        "isError": false
      },
      {
        "id": "D",
        "text": "this morning",
        "isError": false
      }
    ]
  },
  {
    "id": 3017,
    "level": "A2",
    "tense": "Past Continuous (Subject Agreement)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The famous singer",
        "isError": false
      },
      {
        "id": "B",
        "text": "were performing",
        "isError": true,
        "correction": "was performing",
        "explanation": "'The famous singer' birlikda bo'lgani sababli 'were' emas, 'was' ishlatiladi: 'was performing'."
      },
      {
        "id": "C",
        "text": "on the big stage",
        "isError": false
      },
      {
        "id": "D",
        "text": "when the microphone failed",
        "isError": false
      }
    ]
  },
  {
    "id": 3018,
    "level": "A2",
    "tense": "Present Perfect (Never double negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She hasn't",
        "isError": true,
        "correction": "She has",
        "explanation": "'Never' bor gapda fe'l inkor bo'lmaydi: 'She has never flown' (hasn't never emas)."
      },
      {
        "id": "B",
        "text": "never flown",
        "isError": false
      },
      {
        "id": "C",
        "text": "in an airplane",
        "isError": false
      },
      {
        "id": "D",
        "text": "before today",
        "isError": false
      }
    ]
  },
  {
    "id": 3019,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I was reading a novel",
        "isError": false
      },
      {
        "id": "B",
        "text": "when someone",
        "isError": false
      },
      {
        "id": "C",
        "text": "was shouting",
        "isError": true,
        "correction": "shouted",
        "explanation": "O'qish paytida kimdir to'satdan baqirishi qisqa harakatdir: 'shouted my name'."
      },
      {
        "id": "D",
        "text": "my name in the street",
        "isError": false
      }
    ]
  },
  {
    "id": 3020,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Throw)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "has threw",
        "isError": true,
        "correction": "has thrown",
        "explanation": "'Throw' fe'lining 3-shakli 'thrown' bo'ladi: 'has thrown away the old newspapers'."
      },
      {
        "id": "C",
        "text": "away all the old papers",
        "isError": false
      },
      {
        "id": "D",
        "text": "into the recycling bin",
        "isError": false
      }
    ]
  },
  {
    "id": 3021,
    "level": "A2",
    "tense": "Future (Spontaneous decision)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The phone is ringing,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am going to answer",
        "isError": true,
        "correction": "will answer",
        "explanation": "Qo'ng'iroqqa javob berish to'satdan qabul qilingan oniy qaror bo'lgani uchun 'will' ishlatiladi: 'I will answer it'."
      },
      {
        "id": "D",
        "text": "it right now",
        "isError": false
      }
    ]
  },
  {
    "id": 3022,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The bakers",
        "isError": false
      },
      {
        "id": "B",
        "text": "was preparing",
        "isError": true,
        "correction": "were preparing",
        "explanation": "'The bakers' (novvoylar) ko'plikda bo'lgani sababli 'were preparing' bo'lishi shart."
      },
      {
        "id": "C",
        "text": "fresh croissants",
        "isError": false
      },
      {
        "id": "D",
        "text": "at five in the morning",
        "isError": false
      }
    ]
  },
  {
    "id": 3023,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Wake)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The noisy car",
        "isError": false
      },
      {
        "id": "B",
        "text": "has woke",
        "isError": true,
        "correction": "has woken",
        "explanation": "'Wake' fe'lining 3-shakli 'woken' bo'ladi: 'has woken up the whole family'."
      },
      {
        "id": "C",
        "text": "up everybody",
        "isError": false
      },
      {
        "id": "D",
        "text": "in our building",
        "isError": false
      }
    ]
  },
  {
    "id": 3024,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While she was cleaning the window,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "was dropping",
        "isError": true,
        "correction": "dropped",
        "explanation": "Darchani yuvayotganda matoni tushirib yuborish to'satdan qisqa harakatdir: 'dropped the sponge'."
      },
      {
        "id": "D",
        "text": "the sponge on the ground",
        "isError": false
      }
    ]
  },
  {
    "id": 3025,
    "level": "A2",
    "tense": "Present Perfect (Since with exact time)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I have waited here",
        "isError": false
      },
      {
        "id": "B",
        "text": "for two o'clock",
        "isError": true,
        "correction": "since two o'clock",
        "explanation": "Aniq soat (two o'clock) ko'rsatilganda 'for' emas, 'since' ishlatiladi: 'since two o'clock'."
      },
      {
        "id": "C",
        "text": "without any lunch",
        "isError": false
      },
      {
        "id": "D",
        "text": "today",
        "isError": false
      }
    ]
  },
  {
    "id": 3026,
    "level": "A2",
    "tense": "Future (Evidence-based prediction)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Look at those dark grey clouds,",
        "isError": false
      },
      {
        "id": "B",
        "text": "it",
        "isError": false
      },
      {
        "id": "C",
        "text": "will pour",
        "isError": true,
        "correction": "is going to pour",
        "explanation": "Aniq ko'rinib turgan dalil asosida yomg'ir yog'ishi bashorat qilinganda 'is going to pour' to'g'ri shakldir."
      },
      {
        "id": "D",
        "text": "with heavy rain shortly",
        "isError": false
      }
    ]
  },
  {
    "id": 3027,
    "level": "A2",
    "tense": "Past Continuous (Subject Agreement)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The captain of the ship",
        "isError": false
      },
      {
        "id": "B",
        "text": "were watching",
        "isError": true,
        "correction": "was watching",
        "explanation": "Ega 'The captain' (birlikda) bo'lgani sababli 'were' emas, 'was' ishlatiladi: 'was watching the storm'."
      },
      {
        "id": "C",
        "text": "the stormy horizon",
        "isError": false
      },
      {
        "id": "D",
        "text": "with anxiety",
        "isError": false
      }
    ]
  },
  {
    "id": 3028,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Bite)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "A mosquito",
        "isError": false
      },
      {
        "id": "B",
        "text": "has bit",
        "isError": true,
        "correction": "has bitten",
        "explanation": "'Bite' fe'lining 3-shakli 'bitten' bo'ladi: 'has bitten my arm'."
      },
      {
        "id": "C",
        "text": "my left arm",
        "isError": false
      },
      {
        "id": "D",
        "text": "in three places",
        "isError": false
      }
    ]
  },
  {
    "id": 3029,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While they were talking quietly,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the baby",
        "isError": false
      },
      {
        "id": "C",
        "text": "was waking up",
        "isError": true,
        "correction": "woke up",
        "explanation": "Suhbat paytida bolaning to'satdan uyg'onishi Past Simple da bo'ladi: 'woke up'."
      },
      {
        "id": "D",
        "text": "and started crying",
        "isError": false
      }
    ]
  },
  {
    "id": 3030,
    "level": "A2",
    "tense": "Present Perfect (Yet position in negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "haven't yet received",
        "isError": false
      },
      {
        "id": "C",
        "text": "our exam scores",
        "isError": false
      },
      {
        "id": "D",
        "text": "already",
        "isError": true,
        "correction": "yet",
        "explanation": "Inkor gap oxirida 'already' emas, 'yet' so'zi ishlatiladi: 'haven't received our scores yet'."
      }
    ]
  },
  {
    "id": 3031,
    "level": "A2",
    "tense": "Future (Timetable schedule)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The movie at the cinema",
        "isError": false
      },
      {
        "id": "B",
        "text": "will start",
        "isError": true,
        "correction": "starts",
        "explanation": "Kino seansi jadvali bo'yicha boshlanish vaqti uchun Present Simple ishlatiladi: 'starts at 6:30 PM'."
      },
      {
        "id": "C",
        "text": "at 6:30 PM tonight",
        "isError": false
      },
      {
        "id": "D",
        "text": "in Hall 1",
        "isError": false
      }
    ]
  },
  {
    "id": 3032,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The team members",
        "isError": false
      },
      {
        "id": "B",
        "text": "was training",
        "isError": true,
        "correction": "were training",
        "explanation": "'The team members' ko'plikda bo'lgani sababli 'were training' bo'lishi lozim."
      },
      {
        "id": "C",
        "text": "on the wet pitch",
        "isError": false
      },
      {
        "id": "D",
        "text": "all afternoon yesterday",
        "isError": false
      }
    ]
  },
  {
    "id": 3033,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Write)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The author",
        "isError": false
      },
      {
        "id": "B",
        "text": "has wrote",
        "isError": true,
        "correction": "has written",
        "explanation": "'Write' fe'lining 3-shakli 'written' bo'ladi: 'has written five chapters'."
      },
      {
        "id": "C",
        "text": "five thrilling chapters",
        "isError": false
      },
      {
        "id": "D",
        "text": "of his new book",
        "isError": false
      }
    ]
  },
  {
    "id": 3034,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He was fixing the kitchen pipe",
        "isError": false
      },
      {
        "id": "B",
        "text": "when the water",
        "isError": false
      },
      {
        "id": "C",
        "text": "was spraying",
        "isError": true,
        "correction": "sprayed",
        "explanation": "Suv to'satdan sachrab ketishi qisqa harakatdir: 'the water sprayed everywhere'."
      },
      {
        "id": "D",
        "text": "all over his face",
        "isError": false
      }
    ]
  },
  {
    "id": 3035,
    "level": "A2",
    "tense": "Present Perfect (Since with date)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She has been a doctor",
        "isError": false
      },
      {
        "id": "B",
        "text": "for 2012",
        "isError": true,
        "correction": "since 2012",
        "explanation": "Aniq yil bilan 'for' emas, 'since' ishlatiladi: 'since 2012'."
      },
      {
        "id": "C",
        "text": "at this central hospital",
        "isError": false
      },
      {
        "id": "D",
        "text": "in London",
        "isError": false
      }
    ]
  },
  {
    "id": 366,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did you already finish",
        "isError": true,
        "correction": "Have you already finished",
        "explanation": "'Already' so'zi bilan tugallangan natija so'ralganda Present Perfect qo'yiladi: 'Have you already finished...?'."
      },
      {
        "id": "B",
        "text": "the financial report",
        "isError": false
      },
      {
        "id": "C",
        "text": "for the board meeting",
        "isError": false
      },
      {
        "id": "D",
        "text": "this morning?",
        "isError": false
      }
    ]
  },
  {
    "id": 367,
    "level": "B1",
    "tense": "Past Perfect (Earlier action)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the time the ambulance arrived,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the doctor",
        "isError": false
      },
      {
        "id": "C",
        "text": "already bandaged",
        "isError": true,
        "correction": "had already bandaged",
        "explanation": "'By the time' o'tgan zamonda kelsa, oldinroq bajarilgan harakat Past Perfect ('had already bandaged') bo'ladi."
      },
      {
        "id": "D",
        "text": "the injured leg",
        "isError": false
      }
    ]
  },
  {
    "id": 368,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Don't visit us at two o'clock tomorrow,",
        "isError": false
      },
      {
        "id": "B",
        "text": "because we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will clean",
        "isError": true,
        "correction": "will be cleaning",
        "explanation": "Ertaga soat ikkida tozalash ishlari ayni davom etib turadigan bo'ladi: 'will be cleaning' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "the entire garden",
        "isError": false
      }
    ]
  },
  {
    "id": 369,
    "level": "B1",
    "tense": "Time Clauses with 'When'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When the president",
        "isError": false
      },
      {
        "id": "B",
        "text": "will arrive",
        "isError": true,
        "correction": "arrives",
        "explanation": "Vaqt ergash gapida 'When' dan keyin kelasi zamon ('will') ishlatilmaydi: 'When the president arrives' (Present Simple)."
      },
      {
        "id": "C",
        "text": "at the international summit,",
        "isError": false
      },
      {
        "id": "D",
        "text": "the press conference will begin",
        "isError": false
      }
    ]
  },
  {
    "id": 370,
    "level": "B1",
    "tense": "Present Perfect Continuous (State verb error)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "have been owning",
        "isError": true,
        "correction": "have owned",
        "explanation": "'Own' holat fe'li bo'lib, Continuous zamonda ishlatilmaydi: 'have owned this property for years'."
      },
      {
        "id": "C",
        "text": "this peaceful property",
        "isError": false
      },
      {
        "id": "D",
        "text": "for more than twenty years",
        "isError": false
      }
    ]
  },
  {
    "id": 371,
    "level": "B1",
    "tense": "Future Perfect (By Friday)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By Friday afternoon,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the editorial team",
        "isError": false
      },
      {
        "id": "C",
        "text": "will print",
        "isError": true,
        "correction": "will have printed",
        "explanation": "Jumagacha bosib chiqarib bo'linishini ifodalash uchun Future Perfect ('will have printed') kerak."
      },
      {
        "id": "D",
        "text": "ten thousand copies of the magazine",
        "isError": false
      }
    ]
  },
  {
    "id": 372,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The runner was breathless because",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "had sprinted",
        "isError": true,
        "correction": "had been sprinting",
        "explanation": "Holsizlanishga sabab bo'lgan o'tgan zamondagi davomli yugurish jarayoni uchun Past Perfect Continuous ('had been sprinting') ishlatiladi."
      },
      {
        "id": "D",
        "text": "uphill for forty minutes",
        "isError": false
      }
    ]
  },
  {
    "id": 373,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Three years ago,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "has founded",
        "isError": true,
        "correction": "founded",
        "explanation": "'Three years ago' aniq o'tgan vaqt bo'lgani sababli Present Perfect emas, Past Simple ('founded') ishlatiladi."
      },
      {
        "id": "D",
        "text": "a successful IT company",
        "isError": false
      }
    ]
  },
  {
    "id": 374,
    "level": "B1",
    "tense": "First Conditional",
    "sentenceParts": [
      {
        "id": "A",
        "text": "If the temperature",
        "isError": false
      },
      {
        "id": "B",
        "text": "will drop",
        "isError": true,
        "correction": "drops",
        "explanation": "First Conditional da 'If' qismida 'will' emas, Present Simple ('drops') bo'lishi shart."
      },
      {
        "id": "C",
        "text": "below zero tonight,",
        "isError": false
      },
      {
        "id": "D",
        "text": "the roads will be very slippery",
        "isError": false
      }
    ]
  },
  {
    "id": 375,
    "level": "B1",
    "tense": "Past Perfect (Sequence with Before)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Before the guests arrived at the party,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the host",
        "isError": false
      },
      {
        "id": "C",
        "text": "already decorated",
        "isError": true,
        "correction": "had already decorated",
        "explanation": "Mehmonlar kelishidan avval bezatib bo'lingani sababli Past Perfect ('had already decorated') qo'yiladi."
      },
      {
        "id": "D",
        "text": "the entire garden with lights",
        "isError": false
      }
    ]
  },
  {
    "id": 376,
    "level": "B1",
    "tense": "Future Continuous (During event)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Throughout the conference tomorrow,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the interpreters",
        "isError": false
      },
      {
        "id": "C",
        "text": "will translate",
        "isError": true,
        "correction": "will be translating",
        "explanation": "Kun davomidagi uzluksiz tarjima jarayoni uchun Future Continuous ('will be translating') ishlatiladi."
      },
      {
        "id": "D",
        "text": "every speech simultaneously",
        "isError": false
      }
    ]
  },
  {
    "id": 377,
    "level": "B1",
    "tense": "Time Clauses with 'As soon as'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "As soon as the results",
        "isError": false
      },
      {
        "id": "B",
        "text": "will be published",
        "isError": true,
        "correction": "are published",
        "explanation": "'As soon as' ergash gapida kelasi zamon o'rniga Present Simple passive ('are published') ishlatiladi."
      },
      {
        "id": "C",
        "text": "on the official website,",
        "isError": false
      },
      {
        "id": "D",
        "text": "we will send you a notification",
        "isError": false
      }
    ]
  },
  {
    "id": 378,
    "level": "B1",
    "tense": "Present Perfect Continuous (All day)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The detective",
        "isError": false
      },
      {
        "id": "B",
        "text": "has investigated",
        "isError": true,
        "correction": "has been investigating",
        "explanation": "Kun bo'yi to'xtovsiz surishtiruv jarayoni uchun Present Perfect Continuous ('has been investigating') to'g'ri."
      },
      {
        "id": "C",
        "text": "the bank robbery all day",
        "isError": false
      },
      {
        "id": "D",
        "text": "without any break",
        "isError": false
      }
    ]
  },
  {
    "id": 379,
    "level": "B1",
    "tense": "Future Perfect (By sunset)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By sunset today,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the hikers",
        "isError": false
      },
      {
        "id": "C",
        "text": "will reach",
        "isError": true,
        "correction": "will have reached",
        "explanation": "Quyosh botguncha yetib borib bo'linishini bildirish uchun Future Perfect ('will have reached') kerak."
      },
      {
        "id": "D",
        "text": "the top of the mountain",
        "isError": false
      }
    ]
  },
  {
    "id": 380,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She had a terrible headache because",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "had stared",
        "isError": true,
        "correction": "had been staring",
        "explanation": "Bosh og'rig'iga sabab bo'lgan 5 soatlik uzluksiz jarayon uchun Past Perfect Continuous ('had been staring') ishlatiladi."
      },
      {
        "id": "D",
        "text": "at the computer screen for five hours",
        "isError": false
      }
    ]
  },
  {
    "id": 381,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday at four,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the plumber",
        "isError": false
      },
      {
        "id": "C",
        "text": "has repaired",
        "isError": true,
        "correction": "repaired",
        "explanation": "O'tib ketgan aniq vaqt ('Yesterday at four') bo'lgani sababli Past Simple ('repaired') ishlatiladi."
      },
      {
        "id": "D",
        "text": "the leaking kitchen pipe",
        "isError": false
      }
    ]
  },
  {
    "id": 382,
    "level": "B1",
    "tense": "Time Clauses with 'Until'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Nobody will leave this room",
        "isError": false
      },
      {
        "id": "B",
        "text": "until the headmaster",
        "isError": false
      },
      {
        "id": "C",
        "text": "will finish",
        "isError": true,
        "correction": "finishes",
        "explanation": "'Until' dan keyin 'will' emas, Present Simple ('finishes') qo'llaniladi."
      },
      {
        "id": "D",
        "text": "his official statement",
        "isError": false
      }
    ]
  },
  {
    "id": 383,
    "level": "B1",
    "tense": "Past Perfect (No sooner than inversion)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "No sooner",
        "isError": false
      },
      {
        "id": "B",
        "text": "the plane took off",
        "isError": true,
        "correction": "had the plane taken off",
        "explanation": "'No sooner' gap boshida kelganda inversiya bo'lib Past Perfect qo'yiladi: 'had the plane taken off'."
      },
      {
        "id": "C",
        "text": "than one of its engines",
        "isError": false
      },
      {
        "id": "D",
        "text": "began smoking",
        "isError": false
      }
    ]
  },
  {
    "id": 384,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At eight tomorrow evening,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the orchestra",
        "isError": false
      },
      {
        "id": "C",
        "text": "will perform",
        "isError": true,
        "correction": "will be performing",
        "explanation": "Ertaga soat 8 da konsert ijro etib turilgan bo'ladi: 'will be performing' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "Beethoven's Fifth Symphony",
        "isError": false
      }
    ]
  },
  {
    "id": 385,
    "level": "B1",
    "tense": "Present Perfect Continuous (Count vs Duration)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I have been writing",
        "isError": true,
        "correction": "have written",
        "explanation": "Nechta maqola yozib bo'lingani soni (three articles) ko'rsatilganda oddiy Present Perfect ('have written') ishlatiladi."
      },
      {
        "id": "B",
        "text": "three comprehensive research articles",
        "isError": false
      },
      {
        "id": "C",
        "text": "so far",
        "isError": false
      },
      {
        "id": "D",
        "text": "this academic semester",
        "isError": false
      }
    ]
  },
  {
    "id": 386,
    "level": "B1",
    "tense": "First Conditional with Unless",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Unless you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will water",
        "isError": true,
        "correction": "water",
        "explanation": "'Unless' shart bog'lovchisidan keyin 'will' ishlatilmaydi: 'Unless you water the plants'."
      },
      {
        "id": "C",
        "text": "these indoor plants regularly,",
        "isError": false
      },
      {
        "id": "D",
        "text": "they will wither and die",
        "isError": false
      }
    ]
  },
  {
    "id": 387,
    "level": "B1",
    "tense": "Future Perfect (By the time clause)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the time the train arrives in London,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will travel",
        "isError": true,
        "correction": "will have traveled",
        "explanation": "'By the time' kelasi zamonda bo'lsa, asosiy qismda Future Perfect ('will have traveled') ishlatiladi."
      },
      {
        "id": "D",
        "text": "for over five hours",
        "isError": false
      }
    ]
  },
  {
    "id": 388,
    "level": "B1",
    "tense": "Past Perfect (Sequence with After)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "After the surgeon",
        "isError": false
      },
      {
        "id": "B",
        "text": "had completed",
        "isError": false
      },
      {
        "id": "C",
        "text": "the emergency operation,",
        "isError": false
      },
      {
        "id": "D",
        "text": "he had rested",
        "isError": true,
        "correction": "he rested",
        "explanation": "'After' bilan birinchi harakat Past Perfect bo'lsa, undan keyingi navbatdagi harakat Past Simple ('rested') da bo'ladi."
      }
    ]
  },
  {
    "id": 389,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last Tuesday,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the government",
        "isError": false
      },
      {
        "id": "C",
        "text": "has announced",
        "isError": true,
        "correction": "announced",
        "explanation": "'Last Tuesday' aniq o'tgan kun bo'lgani sababli Present Perfect emas, Past Simple ('announced') bo'ladi."
      },
      {
        "id": "D",
        "text": "new economic reforms",
        "isError": false
      }
    ]
  },
  {
    "id": 390,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The artist's fingers were stained because",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "had painted",
        "isError": true,
        "correction": "had been painting",
        "explanation": "Barmoqlar bo'yoq bo'lishiga sabab bo'lgan jarayon uchun Past Perfect Continuous ('had been painting') qo'yiladi."
      },
      {
        "id": "D",
        "text": "with oil colors all day",
        "isError": false
      }
    ]
  },
  {
    "id": 391,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "This time next month,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the students",
        "isError": false
      },
      {
        "id": "C",
        "text": "will celebrate",
        "isError": true,
        "correction": "will be celebrating",
        "explanation": "Kelgusi oydagi ayni vaqtda bayram qilish jarayoni bo'ladi: 'will be celebrating' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "their graduation in Madrid",
        "isError": false
      }
    ]
  },
  {
    "id": 392,
    "level": "B1",
    "tense": "Time Clauses with 'Before'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Before you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will sign",
        "isError": true,
        "correction": "sign",
        "explanation": "'Before' vaqt bog'lovchisidan keyin kelasi zamon emas, Present Simple ('sign') ishlatiladi."
      },
      {
        "id": "C",
        "text": "this official contract,",
        "isError": false
      },
      {
        "id": "D",
        "text": "read all the terms carefully",
        "isError": false
      }
    ]
  },
  {
    "id": 393,
    "level": "B1",
    "tense": "Present Perfect (State Verb - Contain)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "This historic archive",
        "isError": false
      },
      {
        "id": "B",
        "text": "has been containing",
        "isError": true,
        "correction": "has contained",
        "explanation": "'Contain' (o'z ichiga olmoq) holat fe'li bo'lib, Continuous zamonda qo'llanilmaydi: 'has contained rare manuscripts'."
      },
      {
        "id": "C",
        "text": "rare medieval manuscripts",
        "isError": false
      },
      {
        "id": "D",
        "text": "since the nineteenth century",
        "isError": false
      }
    ]
  },
  {
    "id": 394,
    "level": "B1",
    "tense": "Future Perfect (By next decade)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By 2035,",
        "isError": false
      },
      {
        "id": "B",
        "text": "renewable energy",
        "isError": false
      },
      {
        "id": "C",
        "text": "will replace",
        "isError": true,
        "correction": "will have replaced",
        "explanation": "2035 yilgacha o'rnini to'liq egallab bo'lishini ko'rsatish uchun Future Perfect ('will have replaced') ishlatiladi."
      },
      {
        "id": "D",
        "text": "fossil fuels in many nations",
        "isError": false
      }
    ]
  },
  {
    "id": 395,
    "level": "B1",
    "tense": "Past Perfect (Sequence with When)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When we entered the lecture hall,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the speaker",
        "isError": false
      },
      {
        "id": "C",
        "text": "already began",
        "isError": true,
        "correction": "had already begun",
        "explanation": "Biz kirishimizdan avval ma'ruza boshlanib bo'lgani uchun Past Perfect ('had already begun') qo'yiladi."
      },
      {
        "id": "D",
        "text": "his presentation on climate",
        "isError": false
      }
    ]
  },
  {
    "id": 396,
    "level": "B1",
    "tense": "Present Perfect Continuous (Duration with for)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The engineers",
        "isError": false
      },
      {
        "id": "B",
        "text": "are testing",
        "isError": true,
        "correction": "have been testing",
        "explanation": "Olti oydan beri sinovdan o'tkazib kelayotgan jarayon uchun Present Perfect Continuous ('have been testing') kerak."
      },
      {
        "id": "C",
        "text": "this electric engine for six months,",
        "isError": false
      },
      {
        "id": "D",
        "text": "and it performs wonderfully",
        "isError": false
      }
    ]
  },
  {
    "id": 397,
    "level": "B1",
    "tense": "Zero Conditional",
    "sentenceParts": [
      {
        "id": "A",
        "text": "If you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will freeze",
        "isError": true,
        "correction": "freeze",
        "explanation": "Tabiiy qonuniyatlarda 'If' dan keyin 'will' ishlatilmaydi: 'If you freeze water, it turns into ice'."
      },
      {
        "id": "C",
        "text": "water to zero degrees,",
        "isError": false
      },
      {
        "id": "D",
        "text": "it turns into solid ice",
        "isError": false
      }
    ]
  },
  {
    "id": 398,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The mechanic's overalls were oily because",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "had worked",
        "isError": true,
        "correction": "had been working",
        "explanation": "Ust-boshi moy bo'lishiga sabab bo'lgan jarayon uchun Past Perfect Continuous ('had been working on the truck') ishlatiladi."
      },
      {
        "id": "D",
        "text": "on the heavy truck all afternoon",
        "isError": false
      }
    ]
  },
  {
    "id": 399,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At midday tomorrow,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will drive",
        "isError": true,
        "correction": "will be driving",
        "explanation": "Ertaga tush paytida avtomobilda ketayotgan bo'lamiz: 'will be driving' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "across the scenic desert",
        "isError": false
      }
    ]
  },
  {
    "id": 400,
    "level": "B1",
    "tense": "Future Perfect (By the end of the year)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the end of this year,",
        "isError": false
      },
      {
        "id": "B",
        "text": "our development team",
        "isError": false
      },
      {
        "id": "C",
        "text": "will build",
        "isError": true,
        "correction": "will have built",
        "explanation": "Yil oxiriga qadar qurib tugatilishini ifodalash uchun Future Perfect ('will have built') ishlatiladi."
      },
      {
        "id": "D",
        "text": "three modern mobile apps",
        "isError": false
      }
    ]
  },
  {
    "id": 4011,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last month,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "has adopted",
        "isError": true,
        "correction": "adopted",
        "explanation": "'Last month' aniq o'tib ketgan vaqt bo'lgani uchun Present Perfect emas, Past Simple ('adopted') ishlatiladi."
      },
      {
        "id": "D",
        "text": "a rescued puppy from the shelter",
        "isError": false
      }
    ]
  },
  {
    "id": 4012,
    "level": "B1",
    "tense": "Past Perfect (Sequence with By the time)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the time we got to the theater,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the play",
        "isError": false
      },
      {
        "id": "C",
        "text": "already started",
        "isError": true,
        "correction": "had already started",
        "explanation": "'By the time' o'tgan zamonda bo'lsa, undan oldin sodir bo'lgan harakat Past Perfect ('had already started') da bo'ladi."
      },
      {
        "id": "D",
        "text": "twenty minutes ago",
        "isError": false
      }
    ]
  },
  {
    "id": 4013,
    "level": "B1",
    "tense": "Time Clauses with 'Once'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Once you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will complete",
        "isError": true,
        "correction": "complete",
        "explanation": "'Once' vaqt bog'lovchisidan keyin kelasi zamon emas, Present Simple ('complete') ishlatiladi."
      },
      {
        "id": "C",
        "text": "the final exam,",
        "isError": false
      },
      {
        "id": "D",
        "text": "you can enjoy your vacation",
        "isError": false
      }
    ]
  },
  {
    "id": 4014,
    "level": "B1",
    "tense": "Present Perfect Continuous (Since early morning)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The farmer",
        "isError": false
      },
      {
        "id": "B",
        "text": "has ploughed",
        "isError": true,
        "correction": "has been ploughing",
        "explanation": "Ertalabdan beri to'xtovsiz davom etayotgan yer haydash jarayoni uchun Present Perfect Continuous ('has been ploughing') kerak."
      },
      {
        "id": "C",
        "text": "the large field since dawn",
        "isError": false
      },
      {
        "id": "D",
        "text": "with his tractor",
        "isError": false
      }
    ]
  },
  {
    "id": 4015,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At eight tomorrow morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the scientists",
        "isError": false
      },
      {
        "id": "C",
        "text": "will launch",
        "isError": true,
        "correction": "will be launching",
        "explanation": "Ertaga ertalab soat sakkizda kosmik zondni uchirish jarayoni bo'ladi: 'will be launching' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "the experimental space probe",
        "isError": false
      }
    ]
  },
  {
    "id": 4016,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The mountain climbers were exhausted because",
        "isError": false
      },
      {
        "id": "B",
        "text": "they",
        "isError": false
      },
      {
        "id": "C",
        "text": "had climbed",
        "isError": true,
        "correction": "had been climbing",
        "explanation": "Holsizlanishga sabab bo'lgan 8 soatlik qattiq harakat uchun Past Perfect Continuous ('had been climbing') ishlatiladi."
      },
      {
        "id": "D",
        "text": "steep icy rocks for eight hours",
        "isError": false
      }
    ]
  },
  {
    "id": 4017,
    "level": "B1",
    "tense": "Present Perfect (State Verb - Belong)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "This silver pocket watch",
        "isError": false
      },
      {
        "id": "B",
        "text": "has been belonging",
        "isError": true,
        "correction": "has belonged",
        "explanation": "'Belong' (tegishli bo'lmoq) holat fe'li bo'lib, Continuous zamonda ishlatilmaydi: 'has belonged to our family'."
      },
      {
        "id": "C",
        "text": "to our noble family",
        "isError": false
      },
      {
        "id": "D",
        "text": "for three generations",
        "isError": false
      }
    ]
  },
  {
    "id": 4018,
    "level": "B1",
    "tense": "Future Perfect (By midnight)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By midnight tonight,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the servers",
        "isError": false
      },
      {
        "id": "C",
        "text": "will process",
        "isError": true,
        "correction": "will have processed",
        "explanation": "Yarim tungacha qayta ishlab bo'linishini ko'rsatish uchun Future Perfect ('will have processed') ishlatiladi."
      },
      {
        "id": "D",
        "text": "all pending transactions",
        "isError": false
      }
    ]
  },
  {
    "id": 4019,
    "level": "B1",
    "tense": "First Conditional",
    "sentenceParts": [
      {
        "id": "A",
        "text": "If you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will study",
        "isError": true,
        "correction": "study",
        "explanation": "First Conditional 'If' shart qismida 'will' emas, Present Simple ('study') ishlatiladi."
      },
      {
        "id": "C",
        "text": "regularly every day,",
        "isError": false
      },
      {
        "id": "D",
        "text": "you will achieve a high score",
        "isError": false
      }
    ]
  },
  {
    "id": 4020,
    "level": "B1",
    "tense": "Past Perfect (Sequence with When)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When the boss called her,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "already left",
        "isError": true,
        "correction": "had already left",
        "explanation": "Boshliq qo'ng'iroq qilguncha u allaqachon ketib bo'lgani sababli Past Perfect ('had already left') bo'lishi kerak."
      },
      {
        "id": "D",
        "text": "the office building",
        "isError": false
      }
    ]
  },
  {
    "id": 4021,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Two hours ago,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the delivery man",
        "isError": false
      },
      {
        "id": "C",
        "text": "has brought",
        "isError": true,
        "correction": "brought",
        "explanation": "'Two hours ago' aniq o'tgan vaqt bo'lgani uchun Past Simple ('brought') ishlatiladi."
      },
      {
        "id": "D",
        "text": "the fresh parcel to our door",
        "isError": false
      }
    ]
  },
  {
    "id": 4022,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At ten tonight,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "will sleep",
        "isError": true,
        "correction": "will be sleeping",
        "explanation": "Bugun soat o'nda u uxlayotgan bo'ladi: 'will be sleeping' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "in her comfortable bedroom",
        "isError": false
      }
    ]
  },
  {
    "id": 4023,
    "level": "B1",
    "tense": "Time Clauses with 'As soon as'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "As soon as we",
        "isError": false
      },
      {
        "id": "B",
        "text": "will land",
        "isError": true,
        "correction": "land",
        "explanation": "'As soon as' dan keyin 'will land' emas, Present Simple ('land') ishlatiladi."
      },
      {
        "id": "C",
        "text": "at Dubai airport,",
        "isError": false
      },
      {
        "id": "D",
        "text": "we will send you a message",
        "isError": false
      }
    ]
  },
  {
    "id": 4024,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The gardener's hands were dirty because",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "had planted",
        "isError": true,
        "correction": "had been planting",
        "explanation": "Qo'li kir bo'lishiga sabab bo'lgan o'tgan zamondagi jarayon uchun Past Perfect Continuous ('had been planting') kerak."
      },
      {
        "id": "D",
        "text": "rose bushes all morning",
        "isError": false
      }
    ]
  },
  {
    "id": 4025,
    "level": "B1",
    "tense": "Future Perfect (By next month)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By this time next month,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the architect",
        "isError": false
      },
      {
        "id": "C",
        "text": "will design",
        "isError": true,
        "correction": "will have designed",
        "explanation": "Kelgusi oygacha loyihani yakunlab bo'lishini ko'rsatish uchun Future Perfect ('will have designed') qo'yiladi."
      },
      {
        "id": "D",
        "text": "the complete blueprint for the tower",
        "isError": false
      }
    ]
  },
  {
    "id": 4026,
    "level": "B1",
    "tense": "Present Perfect (State Verb - Prefer)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "has been preferring",
        "isError": true,
        "correction": "has preferred",
        "explanation": "'Prefer' (afzal ko'rmoq) holat fe'li bo'lib, Continuous zamonda ishlatilmaydi: 'has preferred green tea'."
      },
      {
        "id": "C",
        "text": "green tea over black coffee",
        "isError": false
      },
      {
        "id": "D",
        "text": "since his youth",
        "isError": false
      }
    ]
  },
  {
    "id": 4027,
    "level": "B1",
    "tense": "Past Perfect (Sequence with Before)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Before the storm broke the trees,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the birds",
        "isError": false
      },
      {
        "id": "C",
        "text": "already flew",
        "isError": true,
        "correction": "had already flown",
        "explanation": "Bo'rondan oldin qushlar uchib ketgani sababli Past Perfect ('had already flown') bo'lishi kerak."
      },
      {
        "id": "D",
        "text": "to safe shelter",
        "isError": false
      }
    ]
  },
  {
    "id": 4028,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "In 2021,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the author",
        "isError": false
      },
      {
        "id": "C",
        "text": "has won",
        "isError": true,
        "correction": "won",
        "explanation": "Aniq o'tgan yil ('In 2021') bilan faqat Past Simple ('won') ishlatiladi."
      },
      {
        "id": "D",
        "text": "the national literature award",
        "isError": false
      }
    ]
  },
  {
    "id": 4029,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Between five and seven tomorrow,",
        "isError": false
      },
      {
        "id": "B",
        "text": "they",
        "isError": false
      },
      {
        "id": "C",
        "text": "will rehearse",
        "isError": true,
        "correction": "will be rehearsing",
        "explanation": "Ertaga soat 5 va 7 oralig'idagi davomli repetitsiya uchun Future Continuous ('will be rehearsing') ishlatiladi."
      },
      {
        "id": "D",
        "text": "their theatrical performance",
        "isError": false
      }
    ]
  },
  {
    "id": 4030,
    "level": "B1",
    "tense": "Future Perfect (By the end of this week)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By the end of this week,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the translation agency",
        "isError": false
      },
      {
        "id": "C",
        "text": "will deliver",
        "isError": true,
        "correction": "will have delivered",
        "explanation": "Hafta oxirigacha topshirib bo'linishini ifodalash uchun Future Perfect ('will have delivered') kerak."
      },
      {
        "id": "D",
        "text": "the translated legal documents",
        "isError": false
      }
    ]
  },
  {
    "id": 2036,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Sing)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday morning,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the children",
        "isError": false
      },
      {
        "id": "C",
        "text": "singed",
        "isError": true,
        "correction": "sang",
        "explanation": "'Sing' fe'lining Past Simple shakli 'singed' emas, 'sang' bo'ladi (sing - sang - sung)."
      },
      {
        "id": "D",
        "text": "a beautiful national song",
        "isError": false
      }
    ]
  },
  {
    "id": 2037,
    "level": "A1",
    "tense": "Present Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "My sister",
        "isError": false
      },
      {
        "id": "B",
        "text": "don't watch",
        "isError": true,
        "correction": "doesn't watch",
        "explanation": "'My sister' (she) uchun 'don't' emas, 'doesn't' ishlatiladi: 'doesn't watch television'."
      },
      {
        "id": "C",
        "text": "television programs",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the morning",
        "isError": false
      }
    ]
  },
  {
    "id": 2038,
    "level": "A1",
    "tense": "Present Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The birds",
        "isError": false
      },
      {
        "id": "B",
        "text": "is flying",
        "isError": true,
        "correction": "are flying",
        "explanation": "'The birds' ko'plikda (they) bo'lgani sababli 'is' emas, 'are' ishlatiladi: 'are flying'."
      },
      {
        "id": "C",
        "text": "towards the warm south",
        "isError": false
      },
      {
        "id": "D",
        "text": "today",
        "isError": false
      }
    ]
  },
  {
    "id": 2039,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Sit)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Last night,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "sitted",
        "isError": true,
        "correction": "sat",
        "explanation": "'Sit' fe'lining Past Simple shakli 'sitted' emas, 'sat' bo'ladi (sit - sat - sat)."
      },
      {
        "id": "D",
        "text": "around the campfire",
        "isError": false
      }
    ]
  },
  {
    "id": 2040,
    "level": "A1",
    "tense": "Future with 'Going to'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We",
        "isError": false
      },
      {
        "id": "B",
        "text": "is going to prepare",
        "isError": true,
        "correction": "are going to prepare",
        "explanation": "'We' olmoshi bilan 'is' emas, 'are' ishlatiladi: 'are going to prepare a party'."
      },
      {
        "id": "C",
        "text": "a surprise party",
        "isError": false
      },
      {
        "id": "D",
        "text": "for our friend",
        "isError": false
      }
    ]
  },
  {
    "id": 2041,
    "level": "A1",
    "tense": "Present Simple (Have vs Has)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Our cozy classroom",
        "isError": false
      },
      {
        "id": "B",
        "text": "have",
        "isError": true,
        "correction": "has",
        "explanation": "Birlikdagi ega ('Our classroom' - it) bilan 'have' emas, 'has' ishlatiladi: 'has twenty desks'."
      },
      {
        "id": "C",
        "text": "twenty comfortable desks",
        "isError": false
      },
      {
        "id": "D",
        "text": "and a big whiteboard",
        "isError": false
      }
    ]
  },
  {
    "id": 2042,
    "level": "A1",
    "tense": "Past Simple (Irregular Verb - Meet)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Two days ago,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "meeted",
        "isError": true,
        "correction": "met",
        "explanation": "'Meet' fe'lining Past Simple shakli 'meeted' emas, 'met' bo'ladi (meet - met - met)."
      },
      {
        "id": "D",
        "text": "my primary school teacher",
        "isError": false
      }
    ]
  },
  {
    "id": 2043,
    "level": "A1",
    "tense": "Present Continuous (Stative - Need)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Right now,",
        "isError": false
      },
      {
        "id": "B",
        "text": "he is needing",
        "isError": true,
        "correction": "he needs",
        "explanation": "'Need' holat fe'li bo'lib, '-ing' bilan qo'llanilmaydi: 'he needs some assistance' deyiladi."
      },
      {
        "id": "C",
        "text": "some assistance",
        "isError": false
      },
      {
        "id": "D",
        "text": "with the heavy boxes",
        "isError": false
      }
    ]
  },
  {
    "id": 2044,
    "level": "A1",
    "tense": "Past Simple (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He",
        "isError": false
      },
      {
        "id": "B",
        "text": "didn't ate",
        "isError": true,
        "correction": "didn't eat",
        "explanation": "'Didn't' dan keyin fe'lning 2-shakli (ate) emas, 1-shakli (eat) keladi: 'didn't eat breakfast'."
      },
      {
        "id": "C",
        "text": "any breakfast",
        "isError": false
      },
      {
        "id": "D",
        "text": "this morning",
        "isError": false
      }
    ]
  },
  {
    "id": 2045,
    "level": "A1",
    "tense": "Present Simple (3rd person singular)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The sun",
        "isError": false
      },
      {
        "id": "B",
        "text": "rise",
        "isError": true,
        "correction": "rises",
        "explanation": "'The sun' (it) uchinchi shaxs birlik bo'lgani uchun fe'lga '-s' qo'shiladi: 'rises in the east'."
      },
      {
        "id": "C",
        "text": "in the east",
        "isError": false
      },
      {
        "id": "D",
        "text": "every single morning",
        "isError": false
      }
    ]
  },
  {
    "id": 3036,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "While we were planting flowers,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "were finding",
        "isError": true,
        "correction": "found",
        "explanation": "Ekish paytida eski tanga topib olish qisqa harakatdir: 'found an old coin'."
      },
      {
        "id": "D",
        "text": "an old silver coin",
        "isError": false
      }
    ]
  },
  {
    "id": 3037,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Break)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The heavy wind",
        "isError": false
      },
      {
        "id": "B",
        "text": "has broke",
        "isError": true,
        "correction": "has broken",
        "explanation": "'Break' fe'lining 3-shakli 'broken' bo'ladi: 'has broken several branches'."
      },
      {
        "id": "C",
        "text": "several tree branches",
        "isError": false
      },
      {
        "id": "D",
        "text": "in our garden",
        "isError": false
      }
    ]
  },
  {
    "id": 3038,
    "level": "A2",
    "tense": "Past Continuous (Verb to be)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The children's grandfather",
        "isError": false
      },
      {
        "id": "B",
        "text": "were telling",
        "isError": true,
        "correction": "was telling",
        "explanation": "Ega 'grandfather' (birlikda) bo'lgani sababli 'were' emas, 'was' ishlatiladi: 'was telling a story'."
      },
      {
        "id": "C",
        "text": "a wonderful bedtime story",
        "isError": false
      },
      {
        "id": "D",
        "text": "at eight o'clock",
        "isError": false
      }
    ]
  },
  {
    "id": 3039,
    "level": "A2",
    "tense": "Future (Evidence-based prediction)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Look at the dark clouds gathering!",
        "isError": false
      },
      {
        "id": "B",
        "text": "It",
        "isError": false
      },
      {
        "id": "C",
        "text": "will storm",
        "isError": true,
        "correction": "is going to storm",
        "explanation": "Hozirgi alomat asosidagi ob-havo bashorati uchun 'is going to storm' ishlatiladi."
      },
      {
        "id": "D",
        "text": "in just a few minutes",
        "isError": false
      }
    ]
  },
  {
    "id": 3040,
    "level": "A2",
    "tense": "Present Perfect (Since with date)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "She has played tennis",
        "isError": false
      },
      {
        "id": "B",
        "text": "for 2018",
        "isError": true,
        "correction": "since 2018",
        "explanation": "Aniq yil bilan 'for' emas, 'since' ishlatiladi: 'since 2018'."
      },
      {
        "id": "C",
        "text": "at the local sports club",
        "isError": false
      },
      {
        "id": "D",
        "text": "every weekend",
        "isError": false
      }
    ]
  },
  {
    "id": 3041,
    "level": "A2",
    "tense": "Past Continuous vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "He was typing an email",
        "isError": false
      },
      {
        "id": "B",
        "text": "when the computer",
        "isError": false
      },
      {
        "id": "C",
        "text": "was crashing",
        "isError": true,
        "correction": "crashed",
        "explanation": "Kompyuterning qotib qolishi to'satdan yuz bergan qisqa harakatdir: 'crashed'."
      },
      {
        "id": "D",
        "text": "unexpectedly",
        "isError": false
      }
    ]
  },
  {
    "id": 3042,
    "level": "A2",
    "tense": "Present Perfect (Past Participle - Choose)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The jury",
        "isError": false
      },
      {
        "id": "B",
        "text": "has chose",
        "isError": true,
        "correction": "has chosen",
        "explanation": "'Choose' fe'lining 3-shakli 'chosen' hisoblanadi: 'has chosen the winner'."
      },
      {
        "id": "C",
        "text": "the winner of the competition",
        "isError": false
      },
      {
        "id": "D",
        "text": "unanimously",
        "isError": false
      }
    ]
  },
  {
    "id": 3043,
    "level": "A2",
    "tense": "Past Continuous (Negative)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The students",
        "isError": false
      },
      {
        "id": "B",
        "text": "wasn't talking",
        "isError": true,
        "correction": "weren't talking",
        "explanation": "'The students' ko'plikda bo'lgani sababli 'wasn't' emas, 'weren't' ishlatiladi: 'weren't talking'."
      },
      {
        "id": "C",
        "text": "during the silence",
        "isError": false
      },
      {
        "id": "D",
        "text": "in the library",
        "isError": false
      }
    ]
  },
  {
    "id": 3044,
    "level": "A2",
    "tense": "Future (Spontaneous decision)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "It is chilly inside,",
        "isError": false
      },
      {
        "id": "B",
        "text": "I",
        "isError": false
      },
      {
        "id": "C",
        "text": "am putting on",
        "isError": true,
        "correction": "will put on",
        "explanation": "Ayni damdagi his-tuyg'u ta'siridagi qaror uchun 'will' ishlatiladi: 'I will put on a sweater'."
      },
      {
        "id": "D",
        "text": "a warm wool sweater",
        "isError": false
      }
    ]
  },
  {
    "id": 3045,
    "level": "A2",
    "tense": "Present Perfect (Ever with question)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Did you ever visit",
        "isError": true,
        "correction": "Have you ever visited",
        "explanation": "Umr davomidagi tajriba haqida so'ralganda 'ever' bilan Present Perfect ishlatiladi: 'Have you ever visited...'."
      },
      {
        "id": "B",
        "text": "the ancient ruins",
        "isError": false
      },
      {
        "id": "C",
        "text": "in Greece",
        "isError": false
      },
      {
        "id": "D",
        "text": "during the summer?",
        "isError": false
      }
    ]
  },
  {
    "id": 4031,
    "level": "B1",
    "tense": "Present Perfect vs Past Simple",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Yesterday afternoon,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the plumber",
        "isError": false
      },
      {
        "id": "C",
        "text": "has repaired",
        "isError": true,
        "correction": "repaired",
        "explanation": "'Yesterday afternoon' aniq o'tgan vaqt bo'lgani uchun Past Simple ('repaired') ishlatiladi."
      },
      {
        "id": "D",
        "text": "the bathroom tap completely",
        "isError": false
      }
    ]
  },
  {
    "id": 4032,
    "level": "B1",
    "tense": "Past Perfect (Sequence with When)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "When we arrived at the concert,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the band",
        "isError": false
      },
      {
        "id": "C",
        "text": "already played",
        "isError": true,
        "correction": "had already played",
        "explanation": "Biz yetib borgunimizcha guruh birinchi qo'shig'ini ijro etib bo'lgani uchun Past Perfect ('had already played') bo'ladi."
      },
      {
        "id": "D",
        "text": "its opening song",
        "isError": false
      }
    ]
  },
  {
    "id": 4033,
    "level": "B1",
    "tense": "Future Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "At nine tomorrow night,",
        "isError": false
      },
      {
        "id": "B",
        "text": "we",
        "isError": false
      },
      {
        "id": "C",
        "text": "will fly",
        "isError": true,
        "correction": "will be flying",
        "explanation": "Ertaga soat 9 da parvoz davom etib turadigan bo'ladi: 'will be flying' (Future Continuous)."
      },
      {
        "id": "D",
        "text": "across the Atlantic Ocean",
        "isError": false
      }
    ]
  },
  {
    "id": 4034,
    "level": "B1",
    "tense": "Time Clauses with 'Until'",
    "sentenceParts": [
      {
        "id": "A",
        "text": "We will stay in the hut",
        "isError": false
      },
      {
        "id": "B",
        "text": "until the rain",
        "isError": false
      },
      {
        "id": "C",
        "text": "will stop",
        "isError": true,
        "correction": "stops",
        "explanation": "'Until' dan keyingi vaqt ergash gapida 'will' emas, Present Simple ('stops') ishlatiladi."
      },
      {
        "id": "D",
        "text": "in the mountains",
        "isError": false
      }
    ]
  },
  {
    "id": 4035,
    "level": "B1",
    "tense": "Present Perfect Continuous (All morning)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The researcher",
        "isError": false
      },
      {
        "id": "B",
        "text": "has examined",
        "isError": true,
        "correction": "has been examining",
        "explanation": "Ertalabdan beri to'xtovsiz laboratoriya namunasini tekshirish jarayoni uchun Present Perfect Continuous ('has been examining') to'g'ri."
      },
      {
        "id": "C",
        "text": "the blood samples all morning",
        "isError": false
      },
      {
        "id": "D",
        "text": "under the microscope",
        "isError": false
      }
    ]
  },
  {
    "id": 4036,
    "level": "B1",
    "tense": "Future Perfect (By next semester)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "By next semester,",
        "isError": false
      },
      {
        "id": "B",
        "text": "the university",
        "isError": false
      },
      {
        "id": "C",
        "text": "will open",
        "isError": true,
        "correction": "will have opened",
        "explanation": "Keyingi semestrgacha yangi kutubxona ochib bo'linishini ko'rsatish uchun Future Perfect ('will have opened') ishlatiladi."
      },
      {
        "id": "D",
        "text": "a brand new digital library",
        "isError": false
      }
    ]
  },
  {
    "id": 4037,
    "level": "B1",
    "tense": "Past Perfect Continuous",
    "sentenceParts": [
      {
        "id": "A",
        "text": "The driver was exhausted because",
        "isError": false
      },
      {
        "id": "B",
        "text": "he",
        "isError": false
      },
      {
        "id": "C",
        "text": "had driven",
        "isError": true,
        "correction": "had been driving",
        "explanation": "Holsizlanishga sabab bo'lgan 9 soatlik uzluksiz yo'l yurish jarayoni uchun Past Perfect Continuous ('had been driving') kerak."
      },
      {
        "id": "D",
        "text": "on the highway for nine hours",
        "isError": false
      }
    ]
  },
  {
    "id": 4038,
    "level": "B1",
    "tense": "First Conditional with Unless",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Unless you",
        "isError": false
      },
      {
        "id": "B",
        "text": "will reserve",
        "isError": true,
        "correction": "reserve",
        "explanation": "'Unless' dan keyin kelasi zamon ('will') ishlatilmaydi, Present Simple ('reserve') qo'yiladi."
      },
      {
        "id": "C",
        "text": "a table in advance,",
        "isError": false
      },
      {
        "id": "D",
        "text": "the restaurant will be full",
        "isError": false
      }
    ]
  },
  {
    "id": 4039,
    "level": "B1",
    "tense": "Past Perfect (Sequence with Before)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "Before she moved abroad,",
        "isError": false
      },
      {
        "id": "B",
        "text": "she",
        "isError": false
      },
      {
        "id": "C",
        "text": "already sold",
        "isError": true,
        "correction": "had already sold",
        "explanation": "Chet elga ko'chishdan avval kvartirani sotib bo'lgani sababli Past Perfect ('had already sold') qo'yiladi."
      },
      {
        "id": "D",
        "text": "her apartment in the city",
        "isError": false
      }
    ]
  },
  {
    "id": 4040,
    "level": "B1",
    "tense": "Present Perfect (State Verb - Trust)",
    "sentenceParts": [
      {
        "id": "A",
        "text": "I",
        "isError": false
      },
      {
        "id": "B",
        "text": "have been trusting",
        "isError": true,
        "correction": "have trusted",
        "explanation": "'Trust' (ishonmoq) holat fe'li bo'lib, Continuous zamonda ishlatilmaydi: 'have trusted his advice for years'."
      },
      {
        "id": "C",
        "text": "his professional advice",
        "isError": false
      },
      {
        "id": "D",
        "text": "for more than a decade",
        "isError": false
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
