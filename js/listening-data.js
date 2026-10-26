/**
 * ============================================================================
 * LISTENING PRACTICE EXERCISES DATA (12 Complete Exercises • 96 Questions)
 * CEFR Levels: A2, B1, B2, C1
 * Formats: Multiple Choice, True/False, Fill in the Blank, Short Answer, Matching, Ordering
 * ============================================================================
 */

const LISTENING_EXERCISES = [
  // --------------------------------------------------------------------------
  // PART 1: EVERYDAY CONVERSATIONS (2 Exercises: A2, B1)
  // --------------------------------------------------------------------------
  {
    id: 1,
    part: 1,
    partName: "Everyday Conversations",
    partCategory: "Part 1 • Conversations",
    level: "A2",
    levelName: "A2 Elementary",
    title: "Booking a Weekend Train to Oxford",
    description: "A conversation between a train passenger and a ticket agent regarding weekend departures, platforms, and student discounts.",
    audioFile: "assets/audio/listening/ex_1.wav",
    durationSec: 34,
    script: "Good morning! I would like to book a return train ticket to Oxford for this Saturday, please. The next direct train departs at nine fifteen from platform four, arriving in Oxford at ten past ten. A standard off-peak return ticket costs twenty-four pounds, but with a valid student card, you receive a thirty percent discount, reducing the price to sixteen pounds eighty. Return trains operate every thirty minutes throughout the evening until eleven forty-five at night. Would you prefer a window seat in the quiet coach?",
    scriptUz: "Xayrli tong! Men ushbu shanba kuni Oksfordga borib-kelish (return) poyezd chiptasini bron qilmoqchi edim. Keyingi to‘g‘ridan-to‘g‘ri poyezd to‘rtinchi platformadan to‘qqizdan o‘n besh daqiqa o‘tganda jo‘naydi va Oksfordga o‘ndan o‘n daqiqa o‘tganda yetib boradi. Standart off-peak borib-kelish chiptasi yigirma to‘rt funt turadi, ammo amaldagi talabalik guvohnomasi bilan siz o‘ttiz foiz chegirmaga ega bo‘lasiz va narx o‘n olti funt sakson pensga tushadi. Qaytish poyezdlari butun oqshom davomida har o‘ttiz daqiqada kechki soat o‘n birdan qirq besh daqiqa o‘tgunga qadar qatnaydi. Tinch vagonda deraza yonidagi o‘rindiqni ma’qul ko‘rasizmi?",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What time does the direct Saturday train depart for Oxford?",
        options: ["8:45 AM", "9:15 AM", "9:50 AM", "10:10 AM"],
        answer: "9:15 AM",
        explanation: "The agent explicitly states: 'The next direct train departs at nine fifteen from platform four.'"
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "From which platform does the train leave?",
        options: ["Platform 2", "Platform 4", "Platform 7", "Platform 9"],
        answer: "Platform 4",
        explanation: "The ticket agent says: 'departs at nine fifteen from platform four.'"
      },
      {
        id: 3,
        type: "fill-in-the-blank",
        question: "A standard off-peak return ticket normally costs ______ pounds.",
        acceptedAnswers: ["24", "twenty four", "twenty-four", "24 pounds", "twenty four pounds"],
        displayAnswer: "24",
        explanation: "The agent notes: 'A standard off-peak return ticket costs twenty-four pounds.'"
      },
      {
        id: 4,
        type: "true-false",
        question: "Students receive a 40% discount on train fares.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The agent specifies: 'with a valid student card, you receive a thirty percent discount' (30%, not 40%)."
      },
      {
        id: 5,
        type: "fill-in-the-blank",
        question: "With the student discount, the passenger pays ______ pounds.",
        acceptedAnswers: ["16.80", "16.8", "sixteen eighty", "16 pounds 80", "sixteen pounds eighty"],
        displayAnswer: "16.80",
        explanation: "The agent states the discount reduces the price to 'sixteen pounds eighty' (£16.80)."
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "How frequently do return trains operate throughout the evening?",
        options: ["Every 15 minutes", "Every 20 minutes", "Every 30 minutes", "Every 60 minutes"],
        answer: "Every 30 minutes",
        explanation: "The script confirms: 'Return trains operate every thirty minutes throughout the evening.'"
      },
      {
        id: 7,
        type: "short-answer",
        question: "What time does the final return train depart at night?",
        acceptedAnswers: ["11:45", "11:45 pm", "11:45 at night", "eleven forty-five", "eleven forty five", "quarter to twelve"],
        displayAnswer: "11:45 PM",
        explanation: "The agent states evening trains operate 'until eleven forty-five at night' (11:45 PM)."
      },
      {
        id: 8,
        type: "true-false",
        question: "The agent asks if the passenger prefers a window seat in the quiet coach.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The final question is: 'Would you prefer a window seat in the quiet coach?'"
      }
    ]
  },
  {
    id: 2,
    part: 1,
    partName: "Everyday Conversations",
    partCategory: "Part 1 • Conversations",
    level: "B1",
    levelName: "B1 Intermediate",
    title: "Enquiring About an Intensive Language Course",
    description: "A student phones a language academy to enquire about course timetables, fees, class limits, and registration terms.",
    audioFile: "assets/audio/listening/ex_2.wav",
    durationSec: 38,
    script: "Hello, I am calling to ask about your upcoming four-week intensive English program starting on July seventh. We offer morning sessions from nine to twelve thirty, Monday to Thursday, with a maximum class size of twelve students. All applicants must complete an online placement evaluation forty-eight hours prior to registration to ensure accurate placement. The total tuition fee is four hundred and fifty pounds, which includes textbook materials and access to our digital multimedia lab. If you confirm your enrolment before June fifteenth, we also waive the twenty-five pound administration charge.",
    scriptUz: "Salom, men yettinchi iyulda boshlanadigan to‘rt haftalik intensiv ingliz tili dasturingiz haqida so‘ramoqchi edim. Biz dushanbadan payshanbagacha ertalab soat to‘qqizdan o‘n ikkidan o‘ttiz daqiqa o‘tgunga qadar, har bir guruhda maksimal o‘n ikki nafar talabadan iborat mashg‘ulotlarni taklif qilamiz. Barcha nomzodlar to‘g‘ri guruhga joylashtirishni ta’minlash uchun ro‘yxatdan o‘tishdan qirq sakkiz soat oldin onlayn daraja aniqlash testini topshirishlari shart. Umumiy o‘qish to‘lovi to‘rt yuz ellik funt bo‘lib, darslik materiallari va raqamli multimedia laboratoriyamizdan foydalanishni o‘z ichiga oladi. Agar siz ro‘yxatdan o‘tishni o‘n beshinchi iyungacha tasdiqlasangiz, biz yigirma besh funtlik ma’muriy to‘lovni ham bekor qilamiz.",
    questions: [
      {
        id: 1,
        type: "short-answer",
        question: "On what date does the four-week intensive program begin?",
        acceptedAnswers: ["july 7", "july 7th", "july seventh", "7 july", "7th july"],
        displayAnswer: "July 7th",
        explanation: "The speaker mentions: 'four-week intensive English program starting on July seventh.'"
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "Daily morning classes run from 9:00 until ______.",
        acceptedAnswers: ["12:30", "12:30 pm", "twelve thirty", "twelve-thirty", "half past twelve"],
        displayAnswer: "12:30",
        explanation: "The speaker details: 'morning sessions from nine to twelve thirty.'"
      },
      {
        id: 3,
        type: "true-false",
        question: "Classes are held five days a week from Monday to Friday.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Classes run 'Monday to Thursday' (four days, not five)."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "What is the maximum number of students allowed in each class?",
        options: ["8 students", "10 students", "12 students", "15 students"],
        answer: "12 students",
        explanation: "The audio specifies: 'with a maximum class size of twelve students.'"
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "When must applicants take the online placement evaluation?",
        options: ["24 hours prior to registration", "48 hours prior to registration", "On the first day of class", "Within one week after payment"],
        answer: "48 hours prior to registration",
        explanation: "The speaker states: 'must complete an online placement evaluation forty-eight hours prior to registration.'"
      },
      {
        id: 6,
        type: "fill-in-the-blank",
        question: "The total tuition fee for the course is ______ pounds.",
        acceptedAnswers: ["450", "450 pounds", "four hundred and fifty", "four hundred fifty"],
        displayAnswer: "450",
        explanation: "The fee is clearly stated: 'The total tuition fee is four hundred and fifty pounds.'"
      },
      {
        id: 7,
        type: "true-false",
        question: "Course fees include both textbook materials and digital multimedia lab access.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The speaker confirms tuition 'includes textbook materials and access to our digital multimedia lab.'"
      },
      {
        id: 8,
        type: "short-answer",
        question: "By which deadline must enrolment be confirmed to waive the £25 fee?",
        acceptedAnswers: ["june 15", "june 15th", "june fifteenth", "15 june", "15th june"],
        displayAnswer: "June 15th",
        explanation: "The incentive is: 'If you confirm your enrolment before June fifteenth, we also waive the twenty-five pound administration charge.'"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PART 2: MONOLOGUE AND INFORMATION (2 Exercises: B1, B2)
  // --------------------------------------------------------------------------
  {
    id: 3,
    part: 2,
    partName: "Monologue and Information",
    partCategory: "Part 2 • Monologue",
    level: "B1",
    levelName: "B1 Intermediate",
    title: "Welcome Orientation at City Central Library",
    description: "An informational talk by the chief librarian outlining borrowing quotas, floor directories, and study cubicle rules.",
    audioFile: "assets/audio/listening/ex_3.wav",
    durationSec: 36,
    script: "Welcome to City Central Library. We are open daily from eight thirty in the morning until eight in the evening, except on Sundays when we close at five. Members can borrow up to ten books for three weeks using their digital membership barcode. The ground floor features fiction and automated self-checkout kiosks, while the second floor is reserved for quiet academic study with high-speed internet access. Individual study cubicles on the third floor require advance reservation via our mobile portal, and drinks in spill-proof containers are welcome in all zones.",
    scriptUz: "Shahar Markaziy kutubxonasiga xush kelibsiz. Biz har kuni ertalab sakkizdan o‘ttiz daqiqa o‘tgandan kechki soat sakkizgacha ochiqmiz, faqat yakshanba kunlari soat beshda yopilamiz. A’zolar raqamli a’zolik shtrix-kodi yordamida uch hafta muddatga o‘ntagacha kitob olishlari mumkin. Birinchi qavatda (ground floor) badiiy adabiyot va avtomatlashtirilgan o‘z-o‘ziga xizmat ko‘rsatish kioskalari joylashgan, ikkinchi qavat esa yuqori tezlikdagi internetga ega sokin akademik o‘qish uchun ajratilgan. Uchinchi qavatdagi yakka tartibdagi o‘quv xonalari mobil portalimiz orqali oldindan band qilishni talab qiladi va to‘kilmaydigan idishdagi ichimliklar barcha hududlarda ruxsat etiladi.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "At what time does the library close on Sunday evenings?",
        options: ["5:00 PM", "6:00 PM", "8:00 PM", "8:30 PM"],
        answer: "5:00 PM",
        explanation: "The speaker notes: 'except on Sundays when we close at five.'"
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "Members are permitted to borrow up to ______ books at one time.",
        acceptedAnswers: ["10", "ten", "10 books", "ten books"],
        displayAnswer: "10",
        explanation: "The script says: 'Members can borrow up to ten books.'"
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What is the standard borrowing period for borrowed books?",
        options: ["One week", "Two weeks", "Three weeks", "One month"],
        answer: "Three weeks",
        explanation: "Books may be borrowed 'for three weeks using their digital membership barcode.'"
      },
      {
        id: 4,
        type: "true-false",
        question: "The ground floor is designated as a silent academic study area.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The ground floor features fiction and kiosks; the second floor is reserved for quiet study."
      },
      {
        id: 5,
        type: "matching",
        question: "Match each library floor to its primary feature:",
        pairs: [
          { item: "Ground Floor", target: "Fiction & self-checkout kiosks" },
          { item: "Second Floor", target: "Quiet academic study & WiFi" },
          { item: "Third Floor", target: "Reservable individual cubicles" }
        ],
        options: [
          "Fiction & self-checkout kiosks",
          "Quiet academic study & WiFi",
          "Reservable individual cubicles"
        ],
        explanation: "Ground: fiction/kiosks; Second: quiet study; Third: reservable individual cubicles."
      },
      {
        id: 6,
        type: "short-answer",
        question: "Where must members go to reserve study cubicles on the third floor?",
        acceptedAnswers: ["mobile portal", "the mobile portal", "online portal", "portal", "mobile app"],
        displayAnswer: "Mobile portal",
        explanation: "The monologue specifies reservations are made 'via our mobile portal'."
      },
      {
        id: 7,
        type: "true-false",
        question: "Drinks are permitted in all zones if stored in spill-proof containers.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The speaker confirms: 'drinks in spill-proof containers are welcome in all zones.'"
      },
      {
        id: 8,
        type: "short-answer",
        question: "What time does the library open on weekday mornings?",
        acceptedAnswers: ["8:30", "8:30 am", "eight thirty", "8:30 in the morning", "half past eight"],
        displayAnswer: "8:30 AM",
        explanation: "The monologue begins: 'We are open daily from eight thirty in the morning.'"
      }
    ]
  },
  {
    id: 4,
    part: 2,
    partName: "Monologue and Information",
    partCategory: "Part 2 • Monologue",
    level: "B2",
    levelName: "B2 Upper-Intermediate",
    title: "Botanical Garden Guided Tour Announcement",
    description: "A conservatory ranger announcing rules, delicate climate conditions, and visitor guidance at the Royal Alpine Pavilion.",
    audioFile: "assets/audio/listening/ex_4.wav",
    durationSec: 35,
    script: "Attention visitors, our specialized guided tour of the Royal Alpine Pavilion will commence in ten minutes at the western courtyard arch. Please ensure you remain on the marked gravel pathways at all times, as our collection includes fragile sub-Antarctic mosses and endangered Mediterranean orchids. Humidity inside the glass conservatory is maintained at seventy-five percent, so keep sensitive electronics protected in waterproof cases. Flash photography and drone equipment are strictly prohibited to protect pollinators, but tripod use is permitted during the final thirty minutes of today's tour.",
    scriptUz: "Tashrif buyuruvchilar diqqatiga, Qirollik Alp tog‘lari pavilyoni bo‘yicha maxsus ekskursiyamiz o‘n daqiqadan so‘ng g‘arbiy hovli arkasida boshlanadi. Iltimos, doimo belgilangan shag‘al yo‘lakchalarda bo‘lishingizni ta’minlang, chunki bizning kolleksiyamizga nozik subantarktika yo‘sinlari va yo‘qolib ketish xavfi ostidagi O‘rta yer dengizi orxideyalari kiradi. Shisha oranjereya ichidagi namlik yetmish besh foiz darajasida saqlanadi, shuning uchun nozik elektronikalarni suv o‘tkazmaydigan g‘iloflarda himoyalangan holda saqlang. Changlatuvchi hasharotlarni himoya qilish maqsadida fleshkali suratga olish va dron uskunalaridan foydalanish qat’iyan man etiladi, ammo bugungi turning so‘nggi o‘ttiz daqiqasida shtativdan (tripod) foydalanishga ruxsat beriladi.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Where will the guided Alpine tour assemble?",
        options: ["Main botanical gates", "Western courtyard arch", "Central glass cafe", "Eastern rose garden"],
        answer: "Western courtyard arch",
        explanation: "The guide announces assembly 'in ten minutes at the western courtyard arch.'"
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "The tour will begin in ______ minutes.",
        acceptedAnswers: ["10", "ten", "10 minutes", "ten minutes"],
        displayAnswer: "10",
        explanation: "The announcement states the tour 'will commence in ten minutes'."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Which endangered plant category is highlighted in the conservatory?",
        options: ["Tropical ferns", "Amazon waterlilies", "Mediterranean orchids", "Alpine pine trees"],
        answer: "Mediterranean orchids",
        explanation: "The guide notes: 'our collection includes fragile sub-Antarctic mosses and endangered Mediterranean orchids.'"
      },
      {
        id: 4,
        type: "fill-in-the-blank",
        question: "The internal conservatory humidity is maintained at ______ percent.",
        acceptedAnswers: ["75", "75%", "seventy-five", "seventy five", "75 percent"],
        displayAnswer: "75",
        explanation: "The guide states: 'Humidity inside the glass conservatory is maintained at seventy-five percent.'"
      },
      {
        id: 5,
        type: "true-false",
        question: "Visitors are permitted to step off the gravel paths onto the moss beds.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Visitors must 'remain on the marked gravel pathways at all times'."
      },
      {
        id: 6,
        type: "true-false",
        question: "Flash photography is prohibited in order to protect pollinators.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The announcement explicitly states: 'Flash photography and drone equipment are strictly prohibited to protect pollinators.'"
      },
      {
        id: 7,
        type: "short-answer",
        question: "What photography equipment is permitted during the final 30 minutes?",
        acceptedAnswers: ["tripod", "tripods", "a tripod", "tripod use"],
        displayAnswer: "Tripod",
        explanation: "The guide states: 'tripod use is permitted during the final thirty minutes of today's tour.'"
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "How should visitors safeguard sensitive electronic devices?",
        options: ["Leave them in lockers", "Turn off power entirely", "Keep in waterproof cases", "Hand them to the guide"],
        answer: "Keep in waterproof cases",
        explanation: "The guide advises to 'keep sensitive electronics protected in waterproof cases.'"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PART 3: ACADEMIC DISCUSSION (2 Exercises: B1, B2)
  // --------------------------------------------------------------------------
  {
    id: 5,
    part: 3,
    partName: "Academic Discussion",
    partCategory: "Part 3 • Academic",
    level: "B1",
    levelName: "B1 Intermediate",
    title: "Planning a Group Biology Presentation",
    description: "Two university students dividing research tasks and organizing slides on urban bird adaptation for their upcoming seminar.",
    audioFile: "assets/audio/listening/ex_5.wav",
    durationSec: 34,
    script: "Hi Marcus. Have you reviewed Professor Evans's comments on our urban bird adaptation outline? Yes, she advised us to narrow our focus specifically to how city pigeons and song sparrows adapt to noise pollution. Good idea. I can analyze the acoustic data and vocal frequency shifts, while you summarize the nesting material changes. We need twenty PowerPoint slides ready by Thursday afternoon so we can do a mock rehearsal in seminar room B. Remember, our speaking allocation is twelve minutes followed by five minutes of peer questions.",
    scriptUz: "Salom, Markus. Professor Evansning shahardagi qushlarning moslashuvi rejamiz bo‘yicha bildirgan fikrlarini ko‘rib chiqdingizmi? Ha, u bizga e’tiborimizni shahar kaptarlari va sayroqi chumchuqlarning shovqin ifloslanishiga qanday moslashishiga qaratishni maslahat berdi. Yaxshi fikr. Men akustik ma’lumotlarni va ovoz chastotasi o‘zgarishlarini tahlil qila olaman, siz esa uya qurish materiallaridagi o‘zgarishlarni umumlashtirasiz. Payshanba kuni tushdan keyin B seminar xonasida sinov mashg‘ulotini o‘tkazishimiz uchun yigirmata PowerPoint slayd tayyor bo‘lishi kerak. Yodingizda bo‘lsin, bizning nutqimizga o‘n ikki daqiqa va undan keyin talabalar savollari uchun besh daqiqa vaqt ajratilgan.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which professor provided feedback on their biology project?",
        options: ["Professor Davies", "Professor Evans", "Professor Miller", "Professor Smith"],
        answer: "Professor Evans",
        explanation: "The student asks: 'Have you reviewed Professor Evans's comments on our urban bird adaptation outline?'"
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What specific environmental challenge did the professor advise them to focus on?",
        options: ["Light pollution", "Air pollution", "Noise pollution", "Water scarcity"],
        answer: "Noise pollution",
        explanation: "The focus is 'specifically to how city pigeons and song sparrows adapt to noise pollution.'"
      },
      {
        id: 3,
        type: "fill-in-the-blank",
        question: "The two bird species being investigated are city pigeons and song ______.",
        acceptedAnswers: ["sparrows", "sparrow", "song sparrows"],
        displayAnswer: "sparrows",
        explanation: "The script mentions: 'how city pigeons and song sparrows adapt'."
      },
      {
        id: 4,
        type: "matching",
        question: "Match each student to their assigned presentation duty:",
        pairs: [
          { item: "Female Speaker", target: "Acoustic data & vocal shifts" },
          { item: "Marcus", target: "Nesting material changes" }
        ],
        options: [
          "Acoustic data & vocal shifts",
          "Nesting material changes"
        ],
        explanation: "Speaker: 'I can analyze the acoustic data... while you summarize the nesting material changes.'"
      },
      {
        id: 5,
        type: "fill-in-the-blank",
        question: "How many total presentation slides must be prepared?",
        acceptedAnswers: ["20", "twenty", "20 slides", "twenty slides"],
        displayAnswer: "20",
        explanation: "The speaker says: 'We need twenty PowerPoint slides ready by Thursday afternoon.'"
      },
      {
        id: 6,
        type: "short-answer",
        question: "In which room will their practice rehearsal take place?",
        acceptedAnswers: ["seminar room b", "room b", "seminar room 'b'", "b"],
        displayAnswer: "Seminar room B",
        explanation: "The dialogue states: 'so we can do a mock rehearsal in seminar room B.'"
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "What is their designated speaking time allocation?",
        options: ["8 minutes", "10 minutes", "12 minutes", "15 minutes"],
        answer: "12 minutes",
        explanation: "The speaker reminds Marcus: 'our speaking allocation is twelve minutes.'"
      },
      {
        id: 8,
        type: "fill-in-the-blank",
        question: "Peer questions will last for ______ minutes following the presentation.",
        acceptedAnswers: ["5", "five", "5 minutes", "five minutes"],
        displayAnswer: "5",
        explanation: "The script finishes: 'followed by five minutes of peer questions.'"
      }
    ]
  },
  {
    id: 6,
    part: 3,
    partName: "Academic Discussion",
    partCategory: "Part 3 • Academic",
    level: "B2",
    levelName: "B2 Upper-Intermediate",
    title: "Feedback on Architectural Design Proposal",
    description: "An architecture professor critiquing a graduate student's civic center design regarding southern facade solar shading and basement tanks.",
    audioFile: "assets/audio/listening/ex_6.wav",
    durationSec: 37,
    script: "Elena, your sustainable civic center proposal demonstrates sophisticated thermal engineering, but we should reconsider the southern facade. By replacing seventy percent of the reflective glazing with louvred cross-laminated timber, you can diminish cooling demands by nearly thirty percent without sacrificing interior daylight. I agree completely, Professor. What about rainwater harvesting tanks beneath the plaza? Placing them in the north basement rather than under the central atrium reduces foundation excavation expenses by eighteen thousand euros while simplifying pump maintenance. Let us revise the technical drawings before Friday's departmental critique.",
    scriptUz: "Elena, barqaror shahar markazi bo‘yicha taklifingiz murakkab termal muhandislikni namoyish etadi, ammo biz janubiy fasadni qayta ko‘rib chiqishimiz kerak. Yaltiroq oynabandlikning yetmish foizini qatlamli yog‘och panjaralar (louvred cross-laminated timber) bilan almashtirish orqali siz ichki tabiiy yorug‘likni yo‘qotmasdan sovutish talabini qariyb o‘ttiz foizga kamaytirishingiz mumkin. Men mutlaqo qo‘shilaman, professor. Maydon ostidagi yomg‘ir suvini yig‘ish idishlari haqida nima deysiz? Ularni markaziy atrium ostiga emas, balki shimoliy yerto‘laga joylashtirish poydevor qazish xarajatlarini o‘n sakkiz ming yevroga kamaytiradi va nasoslarga texnik xizmat ko‘rsatishni soddalashtiradi. Keling, juma kungi kafedra taqrizidan oldin texnik chizmalarni qayta ko‘rib chiqamiz.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What public facility is the subject of Elena's design proposal?",
        options: ["University laboratory", "Sustainable civic center", "Regional hospital", "Sports arena"],
        answer: "Sustainable civic center",
        explanation: "The professor refers to her 'sustainable civic center proposal'."
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "The professor suggests replacing ______ percent of the reflective glazing on the southern facade.",
        acceptedAnswers: ["70", "70%", "seventy", "seventy percent"],
        displayAnswer: "70",
        explanation: "The script specifies: 'By replacing seventy percent of the reflective glazing'."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What replacement material is recommended for the facade louvres?",
        options: ["Perforated aluminum", "Cross-laminated timber", "Reinforced concrete", "Recycled polymer"],
        answer: "Cross-laminated timber",
        explanation: "The professor suggests 'louvred cross-laminated timber'."
      },
      {
        id: 4,
        type: "fill-in-the-blank",
        question: "The timber louvres are expected to reduce cooling demands by nearly ______ percent.",
        acceptedAnswers: ["30", "30%", "thirty", "thirty percent"],
        displayAnswer: "30",
        explanation: "The script says: 'diminish cooling demands by nearly thirty percent'."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Where should the rainwater harvesting tanks be relocated?",
        options: ["Under central atrium", "North basement", "Rooftop terrace", "Behind parking garage"],
        answer: "North basement",
        explanation: "Elena suggests: 'Placing them in the north basement rather than under the central atrium'."
      },
      {
        id: 6,
        type: "short-answer",
        question: "How many euros are saved in excavation costs by moving the tanks?",
        acceptedAnswers: ["18000", "18,000", "18000 euros", "18,000 euros", "eighteen thousand", "eighteen thousand euros"],
        displayAnswer: "18,000 euros",
        explanation: "The dialogue states this 'reduces foundation excavation expenses by eighteen thousand euros'."
      },
      {
        id: 7,
        type: "true-false",
        question: "Relocating the water tanks will make pump maintenance more complicated.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The dialogue states it will be 'simplifying pump maintenance' (simpler, not more complicated)."
      },
      {
        id: 8,
        type: "short-answer",
        question: "On which day of the week will the departmental critique take place?",
        acceptedAnswers: ["friday", "on friday"],
        displayAnswer: "Friday",
        explanation: "The professor concludes: 'before Friday's departmental critique'."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PART 4: LECTURE OR EDUCATIONAL TALK (2 Exercises: B2, C1)
  // --------------------------------------------------------------------------
  {
    id: 7,
    part: 4,
    partName: "Lecture or Educational Talk",
    partCategory: "Part 4 • Lecture",
    level: "B2",
    levelName: "B2 Upper-Intermediate",
    title: "The Wonders of Ocean Bioluminescence",
    description: "A marine biology lecture exploring deep-sea light emission, luciferase enzyme reactions, and counter-illumination camouflage.",
    audioFile: "assets/audio/listening/ex_7.wav",
    durationSec: 36,
    script: "In the midnight ocean zone beyond two hundred metres depth, over seventy-five percent of marine organisms produce their own light through bioluminescence. This biochemical marvel occurs when the substrate luciferin oxidizes in the presence of the catalyst luciferase, releasing chemical energy almost entirely as cold visible light with zero thermal loss. Deep-sea lanternfish employ counter-illumination photophores along their ventral bellies, matching downwelling surface sunlight to mask their silhouettes from lurking predators below. Furthermore, oceanic bioluminescence inspired non-invasive medical tagging techniques now used in neurological cancer detection worldwide.",
    scriptUz: "Ikki yuz metr chuqurlikdan pastdagi tungi okean zonasida dengiz organizmlarining yetmish besh foizdan ortig‘i bioluminessensiya orqali o‘z nurini ishlab chiqaradi. Bu biokimyoviy mo‘jiza substrat lyusiferin katalizator lyusiferaza ishtirokida oksidlanganda sodir bo‘lib, kimyoviy energiyani deyarli to‘liq sovuq ko‘rinadigan yorug‘lik sifatida, hech qanday issiqlik yo‘qotishisiz chiqaradi. Chuqur dengiz fonus baliqlari (lanternfish) pastki qorinlarida kontr-yoritish fotoforlaridan foydalanib, pastdan poylayotgan yirtqichlardan o‘z siluetlarini yashirish uchun yuzadan tushayotgan quyosh nuriga moslashadi. Bundan tashqari, okean bioluminessensiyasi hozirda butun dunyo bo‘ylab nevrologik saratonni aniqlashda qo‘llaniladigan noinvaziv tibbiy belgilash texnikasiga ilhom berdi.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "At what ocean depth does the midnight zone begin?",
        options: ["Beyond 50 metres", "Beyond 100 metres", "Beyond 200 metres", "Beyond 500 metres"],
        answer: "Beyond 200 metres",
        explanation: "The lecturer begins: 'In the midnight ocean zone beyond two hundred metres depth'."
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "Over ______ percent of organisms in this zone produce bioluminescence.",
        acceptedAnswers: ["75", "75%", "seventy-five", "seventy five", "75 percent"],
        displayAnswer: "75",
        explanation: "The script says: 'over seventy-five percent of marine organisms produce their own light'."
      },
      {
        id: 3,
        type: "short-answer",
        question: "What enzyme catalyzes the oxidation of luciferin?",
        acceptedAnswers: ["luciferase", "the enzyme luciferase"],
        displayAnswer: "Luciferase",
        explanation: "The lecturer mentions: 'oxidizes in the presence of the catalyst luciferase'."
      },
      {
        id: 4,
        type: "true-false",
        question: "Bioluminescent light generates high thermal heat during chemical conversion.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Light is released 'almost entirely as cold visible light with zero thermal loss'."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which deep-sea fish uses counter-illumination photophores to conceal its silhouette?",
        options: ["Anglerfish", "Lanternfish", "Viperfish", "Hatchetfish"],
        answer: "Lanternfish",
        explanation: "The lecturer specifies: 'Deep-sea lanternfish employ counter-illumination photophores'."
      },
      {
        id: 6,
        type: "short-answer",
        question: "On which part of their body are lanternfish photophores situated?",
        acceptedAnswers: ["ventral bellies", "bellies", "belly", "ventral belly", "underbelly"],
        displayAnswer: "Ventral bellies",
        explanation: "The script states photophores are 'along their ventral bellies'."
      },
      {
        id: 7,
        type: "ordering",
        question: "Order the stages of bioluminescent light emission and application:",
        items: [
          "Substrate luciferin interacts with oxygen",
          "Catalyst luciferase accelerates biochemical reaction",
          "Energy transforms into cold visible light",
          "Scientists adapt luminescence for cancer cell tagging"
        ],
        correctOrder: [
          "Substrate luciferin interacts with oxygen",
          "Catalyst luciferase accelerates biochemical reaction",
          "Energy transforms into cold visible light",
          "Scientists adapt luminescence for cancer cell tagging"
        ],
        explanation: "Luciferin oxidizes -> catalyzed by luciferase -> produces cold light -> applied in medical tagging."
      },
      {
        id: 8,
        type: "true-false",
        question: "Bioluminescence inspired techniques used in neurological cancer detection.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The lecture concludes: 'inspired non-invasive medical tagging techniques now used in neurological cancer detection worldwide.'"
      }
    ]
  },
  {
    id: 8,
    part: 4,
    partName: "Lecture or Educational Talk",
    partCategory: "Part 4 • Lecture",
    level: "C1",
    levelName: "C1 Advanced",
    title: "Cognitive Benefits of Bilingualism in Adult Learning",
    description: "A neurocognitive lecture analyzing executive control, structural plasticity, and delayed neurodegenerative symptoms in bilingual brains.",
    audioFile: "assets/audio/listening/ex_8.wav",
    durationSec: 39,
    script: "Contemporary neuroimaging demonstrates that acquiring a second language beyond adolescence induces substantial structural reorganization within the dorsolateral prefrontal cortex. Because both language systems remain perpetually active, the brain must continuously recruit inhibitory control to suppress competing lexical representations. This perpetual cognitive mediation fortifies the frontoparietal executive network, translating into superior attentional task-switching resilience in aging adults. Longitudinal epidemiological research indicates this enhanced cognitive reserve can postpone clinical manifestations of neurodegenerative conditions such as Alzheimer's disease by approximately four to five years, regardless of socio-economic background.",
    scriptUz: "Zamonaviy neyrovizuallashtirish o‘smirlik davridan keyin ikkinchi tilni o‘rganish dorsolateral prefrontal po‘stloqda sezilarli tarkibiy qayta qurilishni keltirib chiqarishini ko‘rsatadi. Ikkala til tizimi ham doimiy ravishda faol bo‘lib qolganligi sababli, miya raqobatlashuvchi leksik tasavvurlarni bostirish uchun tormozlash (inhibitory control) nazoratini muntazam ravishda jalb qilishi kerak. Ushbu doimiy kognitiv vositachilik frontoparietal ijro etuvchi tarmoqni mustahkamlaydi va yoshi ulug‘ kattalarda vazifalarni almashtirishda yuqori diqqat barqarorligiga aylanadi. Uzluksiz epidemiologik tadqiqotlar shuni ko‘rsatadiki, bu yaxshilangan kognitiv zaxira ijtimoiy-iqtisodiy kelib chiqishidan qat’i nazar, Altsgeymer kasalligi kabi neyrodegenerativ holatlarning klinik alomatlarini taxminan to‘rt-besh yilga kechiktirishi mumkin.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which cortical region undergoes structural reorganization through adult bilingualism?",
        options: ["Occipital visual lobe", "Dorsolateral prefrontal cortex", "Primary auditory cortex", "Medial cerebellar hemisphere"],
        answer: "Dorsolateral prefrontal cortex",
        explanation: "The lecturer mentions: 'structural reorganization within the dorsolateral prefrontal cortex'."
      },
      {
        id: 2,
        type: "true-false",
        question: "When a bilingual speaks one language, the other language system shuts down completely.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The script states: 'both language systems remain perpetually active' (they do not shut down)."
      },
      {
        id: 3,
        type: "short-answer",
        question: "What cognitive mechanism suppresses competing word representations in the bilingual brain?",
        acceptedAnswers: ["inhibitory control", "inhibition", "inhibitory"],
        displayAnswer: "Inhibitory control",
        explanation: "The brain must 'continuously recruit inhibitory control to suppress competing lexical representations'."
      },
      {
        id: 4,
        type: "fill-in-the-blank",
        question: "Continuous cognitive mediation fortifies the ______ executive network.",
        acceptedAnswers: ["frontoparietal", "fronto-parietal", "frontoparietal executive network"],
        displayAnswer: "frontoparietal",
        explanation: "The text states: 'This perpetual cognitive mediation fortifies the frontoparietal executive network'."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "What behavioral cognitive advantage is demonstrated in older bilingual adults?",
        options: ["Photographic memory retention", "Attentional task-switching resilience", "Faster sensory acoustic reflexes", "Superior spatial navigation"],
        answer: "Attentional task-switching resilience",
        explanation: "The lecture links this to 'superior attentional task-switching resilience in aging adults'."
      },
      {
        id: 6,
        type: "short-answer",
        question: "Which specific neurodegenerative disease was named by the neuroscientist?",
        acceptedAnswers: ["alzheimer's disease", "alzheimer's", "alzheimers", "alzheimers disease"],
        displayAnswer: "Alzheimer's disease",
        explanation: "The script names: 'neurodegenerative conditions such as Alzheimer's disease'."
      },
      {
        id: 7,
        type: "fill-in-the-blank",
        question: "Bilingual cognitive reserve can postpone clinical dementia onset by ______ years.",
        acceptedAnswers: ["4 to 5", "4-5", "four to five", "four to five years", "4 to 5 years"],
        displayAnswer: "4 to 5",
        explanation: "The research indicates it can postpone symptoms 'by approximately four to five years'."
      },
      {
        id: 8,
        type: "true-false",
        question: "The delay of clinical symptoms applies regardless of a person's socio-economic background.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The lecture ends: 'by approximately four to five years, regardless of socio-economic background.'"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PART 5: OPINIONS AND ATTITUDES (2 Exercises: B2, C1)
  // --------------------------------------------------------------------------
  {
    id: 9,
    part: 5,
    partName: "Opinions and Attitudes",
    partCategory: "Part 5 • Opinions",
    level: "B2",
    levelName: "B2 Upper-Intermediate",
    title: "Remote Work vs Office Collaboration: Two Perspectives",
    description: "A project manager and a software team lead exchanging views on remote efficiency, spontaneous creativity, and hybrid balances.",
    audioFile: "assets/audio/listening/ex_9.wav",
    durationSec: 36,
    script: "I appreciate the flexibility of working from home, but I notice our design brainstorms lack spontaneous creative friction when everyone is behind a muted screen. I understand your concern, David, but my software development team has recorded a twenty percent increase in code delivery since eliminating the daily ninety-minute commute. The key is balance: requiring two designated core days on campus for strategic planning and cross-department workshops, while preserving three uninterrupted home days for deep technical execution. That hybrid compromise would prevent burnout while maintaining our company's collaborative culture.",
    scriptUz: "Men uydan ishlashning moslashuvchanligini qadrlayman, ammo hamma ovozi o‘chirilgan ekran ortida bo‘lganida, bizning dizayn aqliy hujumlarimizda spontan ijodiy fikr almashinuvi yetishmayotganini payqayapman. Xavotiringizni tushunaman, Devid, lekin mening dasturiy ta’minotni ishlab chiqish jamoam har kungi to‘qson daqiqalik yo‘l yurishni bekor qilgandan buyon kod yetkazib berishda yigirma foizlik o‘sishni qayd etdi. Asosiy kalit — muvozanatda: strategik rejalashtirish va bo‘limlararo seminarlar uchun haftasiga ikki kun ofisda bo‘lishni talab qilish, shu bilan birga chuqur texnik bajarish uchun uch kun uzluksiz uy kunlarini saqlab qolish. Ushbu gibrid murosaga kelish kompaniyamizning hamkorlik madaniyatini saqlagan holda xodimlarning toliqishining (burnout) oldini oladi.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What deficiency does David perceive in remote brainstorming sessions?",
        options: ["Poor video connection", "Lack of spontaneous creative friction", "Excessive meeting lengths", "Unfinished agendas"],
        answer: "Lack of spontaneous creative friction",
        explanation: "David says: 'I notice our design brainstorms lack spontaneous creative friction when everyone is behind a muted screen.'"
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "The software development team recorded a ______ percent rise in code delivery.",
        acceptedAnswers: ["20", "20%", "twenty", "twenty percent"],
        displayAnswer: "20",
        explanation: "The female colleague reports: 'recorded a twenty percent increase in code delivery'."
      },
      {
        id: 3,
        type: "fill-in-the-blank",
        question: "The remote work arrangement eliminated a daily commute of ______ minutes.",
        acceptedAnswers: ["90", "ninety", "90 minutes", "ninety minutes"],
        displayAnswer: "90",
        explanation: "She cites eliminating 'the daily ninety-minute commute'."
      },
      {
        id: 4,
        type: "matching",
        question: "Match each speaker to their core viewpoint:",
        pairs: [
          { item: "David", target: "Misses spontaneous in-person idea friction" },
          { item: "Female Colleague", target: "Emphasizes productivity & hybrid schedule" }
        ],
        options: [
          "Misses spontaneous in-person idea friction",
          "Emphasizes productivity & hybrid schedule"
        ],
        explanation: "David highlights lost in-person energy; the female colleague presents the 2-day/3-day hybrid schedule."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "How many weekly campus days are proposed under the hybrid framework?",
        options: ["One day", "Two days", "Three days", "Four days"],
        answer: "Two days",
        explanation: "The speaker proposes: 'requiring two designated core days on campus'."
      },
      {
        id: 6,
        type: "short-answer",
        question: "What specific collaborative activities are designated for campus days?",
        acceptedAnswers: ["strategic planning and workshops", "strategic planning", "workshops", "cross-department workshops"],
        displayAnswer: "Strategic planning and workshops",
        explanation: "Campus days are reserved for 'strategic planning and cross-department workshops'."
      },
      {
        id: 7,
        type: "fill-in-the-blank",
        question: "Employees would retain ______ uninterrupted home days for technical execution.",
        acceptedAnswers: ["3", "three", "3 days", "three days"],
        displayAnswer: "3",
        explanation: "The plan preserves 'three uninterrupted home days for deep technical execution'."
      },
      {
        id: 8,
        type: "true-false",
        question: "The speakers agree that this hybrid compromise helps protect employees from burnout.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The proposal states the hybrid compromise 'would prevent burnout while maintaining our company's collaborative culture.'"
      }
    ]
  },
  {
    id: 10,
    part: 5,
    partName: "Opinions and Attitudes",
    partCategory: "Part 5 • Opinions",
    level: "C1",
    levelName: "C1 Advanced",
    title: "Ethical Perspectives on Urban Rewilding Projects",
    description: "An urban planner and an environmental engineer debating the liabilities and hydrological merits of municipal dockland rewilding.",
    audioFile: "assets/audio/listening/ex_10.wav",
    durationSec: 38,
    script: "Transforming thirty hectares of industrial docklands into unmanaged wetland corridors sounds ecologically noble, but city planners face genuine safety and infrastructure liability concerns. Unregulated vegetation adjacent to light rail corridors accelerates root heave, elevating track maintenance expenditures by nearly forty percent. While engineering challenges are legitimate, empirical data from Sheffield demonstrates that bioswales and native sedge meadows absorb up to sixty percent of localized storm runoff, preventing catastrophic arterial flooding. If we integrate subsurface root barriers and sensor-monitored drainage culverts, we fulfill our ecological commitments without compromising transport reliability.",
    scriptUz: "O‘ttiz gektar sanoat doklarini boshqarilmaydigan botqoqlik koridorlariga aylantirish ekologik jihatdan olijanob tuyuladi, ammo shaharsozlar haqiqiy xavfsizlik va infratuzilma javobgarligi muammolariga duch kelishmoqda. Yengil temir yo‘l yo‘laklariga tutash tartibga solinmagan o‘simliklar ildiz ko‘tarilishini tezlashtiradi va temir yo‘lga texnik xizmat ko‘rsatish xarajatlarini deyarli qirq foizga oshiradi. Muhandislik muammolari o‘rinli bo‘lsa-da, Sheffilddan olingan empirik ma’lumotlar shuni ko‘rsatadiki, biosveylar va mahalliy qamishli o‘tloqlar mahalliy bo‘ron oqimining oltmish foizigacha qismini o‘ziga singdirib, xavfli shahar suv toshqinlarining oldini oladi. Agar biz yer osti ildiz to‘siqlari va sensorli drenaj quvurlarini birlashtirsak, transport ishonchliligiga putur yetkazmasdan ekologik majburiyatlarimizni bajaramiz.",
    questions: [
      {
        id: 1,
        type: "fill-in-the-blank",
        question: "The municipal project proposes rewilding ______ hectares of industrial docklands.",
        acceptedAnswers: ["30", "thirty", "30 hectares", "thirty hectares"],
        displayAnswer: "30",
        explanation: "The planner opens with: 'Transforming thirty hectares of industrial docklands'."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What physical track hazard does unregulated vegetation cause along rail corridors?",
        options: ["Soil liquefaction", "Root heave", "Electrical interference", "Overhead cable snapping"],
        answer: "Root heave",
        explanation: "The speaker warns that unregulated flora 'accelerates root heave'."
      },
      {
        id: 3,
        type: "fill-in-the-blank",
        question: "Root heave reportedly inflates rail maintenance costs by nearly ______ percent.",
        acceptedAnswers: ["40", "40%", "forty", "forty percent"],
        displayAnswer: "40",
        explanation: "The planner notes this elevates maintenance 'by nearly forty percent'."
      },
      {
        id: 4,
        type: "short-answer",
        question: "Which city provided empirical research confirming stormwater absorption?",
        acceptedAnswers: ["sheffield", "sheffield uk"],
        displayAnswer: "Sheffield",
        explanation: "The engineer points to: 'empirical data from Sheffield demonstrates'."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "How much localized storm runoff can native sedge meadows absorb?",
        options: ["Up to 30 percent", "Up to 45 percent", "Up to 60 percent", "Up to 85 percent"],
        answer: "Up to 60 percent",
        explanation: "The engineer states they 'absorb up to sixty percent of localized storm runoff'."
      },
      {
        id: 6,
        type: "short-answer",
        question: "What serious municipal hazard do bioswales prevent in urban centres?",
        acceptedAnswers: ["arterial flooding", "flooding", "floods", "catastrophic flooding", "urban flooding"],
        displayAnswer: "Arterial flooding",
        explanation: "The engineer emphasizes they prevent 'catastrophic arterial flooding'."
      },
      {
        id: 7,
        type: "matching",
        question: "Match each technical intervention to its intended engineering purpose:",
        pairs: [
          { item: "Subsurface root barriers", target: "Protects rail tracks from root heave" },
          { item: "Sensor-monitored culverts", target: "Regulates stormwater drainage flow" }
        ],
        options: [
          "Protects rail tracks from root heave",
          "Regulates stormwater drainage flow"
        ],
        explanation: "Root barriers prevent track damage; sensor culverts control drainage flow."
      },
      {
        id: 8,
        type: "true-false",
        question: "The engineer argues ecological goals can be reached without sacrificing transit reliability.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The conclusion states: 'we fulfill our ecological commitments without compromising transport reliability.'"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PART 6: SHORT STORY AND NARRATIVE (2 Exercises: A2, B1)
  // --------------------------------------------------------------------------
  {
    id: 11,
    part: 6,
    partName: "Short Story and Narrative",
    partCategory: "Part 6 • Narrative",
    level: "A2",
    levelName: "A2 Elementary",
    title: "The Unexpected Mountain Cabin Rescue",
    description: "A first-person narrative of two hikers caught in a sudden autumn snowstorm and finding safety at a forester's cabin.",
    audioFile: "assets/audio/listening/ex_11.wav",
    durationSec: 34,
    script: "Last October, my sister and I embarked on a three-hour hike through the Whispering Pines trail. Around four in the afternoon, dark clouds gathered and an unexpected autumn snowstorm covered all directional trail markers. Cold and exhausted, we noticed a faint yellow lantern shining through the spruce trees. It was an old wooden ranger cabin, occupied by a retired forester named Thomas. He immediately welcomed us inside, dried our wet coats by the stone hearth, and offered us hot herbal tea and warm oatmeal biscuits until morning.",
    scriptUz: "O‘tgan yilning oktabr oyida singlim va men Whispering Pines so‘qmog‘i bo‘ylab uch soatlik piyoda sayohatga chiqdik. Kunduzgi soat to‘rt atrofida qora bulutlar yig‘ildi va kutilmagan kuzgi qor bo‘roni barcha yo‘l ko‘rsatkichlarini qoplab oldi. Sovuqdan qaltirab va charchab, qoraqarag‘ay daraxtlari orasidan xira sariq fonar nuri porlayotganini payqadik. Bu Tomas ismli nafaqadagi o‘rmonchi yashaydigan qadimgi yog‘och qorovulxona edi. U darhol bizni ichkariga kutib oldi, ho‘l kiyimlarimizni tosh o‘choq yonida quritdi va tonggacha bizga issiq o‘simlik choyi hamda issiq suli pechenyelarini taklif qildi.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "In which month did the siblings embark on their mountain hike?",
        options: ["August", "September", "October", "November"],
        answer: "October",
        explanation: "The narrator begins: 'Last October, my sister and I embarked on a three-hour hike'."
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "Their intended hike was planned to last ______ hours.",
        acceptedAnswers: ["3", "three", "3 hours", "three hours"],
        displayAnswer: "3",
        explanation: "The text says: 'embarked on a three-hour hike'."
      },
      {
        id: 3,
        type: "short-answer",
        question: "What was the name of the trail they were following?",
        acceptedAnswers: ["whispering pines", "whispering pines trail", "the whispering pines trail"],
        displayAnswer: "Whispering Pines",
        explanation: "They were hiking 'through the Whispering Pines trail'."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "At what time did the weather turn severe?",
        options: ["2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"],
        answer: "4:00 PM",
        explanation: "The story states: 'Around four in the afternoon, dark clouds gathered'."
      },
      {
        id: 5,
        type: "true-false",
        question: "The sudden snowstorm obscured all directional trail markers.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The narrator notes the storm 'covered all directional trail markers'."
      },
      {
        id: 6,
        type: "fill-in-the-blank",
        question: "The lost hikers noticed a faint ______ lantern shining through the spruce trees.",
        acceptedAnswers: ["yellow", "faint yellow"],
        displayAnswer: "yellow",
        explanation: "The script says: 'we noticed a faint yellow lantern shining'."
      },
      {
        id: 7,
        type: "short-answer",
        question: "What was the name of the forester who sheltered them?",
        acceptedAnswers: ["thomas", "forester thomas"],
        displayAnswer: "Thomas",
        explanation: "The cabin was 'occupied by a retired forester named Thomas'."
      },
      {
        id: 8,
        type: "ordering",
        question: "Put the events of the hike into chronological order:",
        items: [
          "Started the hike along Whispering Pines",
          "Snowstorm obscured trail signs at 4 PM",
          "Spotted a yellow lantern light in the trees",
          "Warmed coats and drank herbal tea by the hearth"
        ],
        correctOrder: [
          "Started the hike along Whispering Pines",
          "Snowstorm obscured trail signs at 4 PM",
          "Spotted a yellow lantern light in the trees",
          "Warmed coats and drank herbal tea by the hearth"
        ],
        explanation: "They started hike -> blizzard hid markers -> spotted lantern -> forester sheltered them."
      }
    ]
  },
  {
    id: 12,
    part: 6,
    partName: "Short Story and Narrative",
    partCategory: "Part 6 • Narrative",
    level: "B1",
    levelName: "B1 Intermediate",
    title: "First Solo Exhibition in the Old Town Gallery",
    description: "An artist's personal recount of their opening night debut, initial fears, and an unexpected career-changing art sale.",
    audioFile: "assets/audio/listening/ex_12.wav",
    durationSec: 37,
    script: "Standing by the entrance of the cobbled gallery on St. Jude's Lane, my heart was racing as the clock struck seven on opening night. I had spent fourteen months painting twenty-two oil landscapes depicting coastal lighthouses. For the first forty minutes, guests sipped sparkling cider in near silence, and I feared nobody connected with my art. Then, an elderly marine architect from Gothenburg stood before my largest painting, Storm over the Outer Reef, for over ten minutes before purchasing it for twelve hundred euros. That unexpected breakthrough transformed my confidence and validated years of solitary creative struggle.",
    scriptUz: "Sent-Jud tor ko‘chasidagi tosh yotqizilgan galereyaga kiraverishda turganimda, ochilish kechasida soat yetti bo‘lishi bilan yuragim tez ura boshladi. Men qirg‘oq mayoqlarini tasvirlaydigan yigirma ikkita moybo‘yoqli peyzajni chizish uchun o‘n to‘rt oy vaqt sarflagan edim. Dastlabki qirq daqiqa davomida mehmonlar deyarli jimjitlikda gazlangan olma sharbatini (cider) ichishdi va men hech kim mening san’atimni tushunmadi deb qo‘rqdim. Keyin Gyoteburgdan kelgan keksa dengiz me’mori mening eng katta rasmim — 'Storm over the Outer Reef' oldida o‘n daqiqadan ko‘proq turdi va uni bir ming ikki yuz yevroga sotib oldi. Bu kutilmagan burilish mening ishonchimni o‘zgartirdi va yillar davomidagi ijodiy izlanishlarimni oqladi.",
    questions: [
      {
        id: 1,
        type: "short-answer",
        question: "On which lane was the art gallery situated?",
        acceptedAnswers: ["st jude's lane", "st. jude's lane", "st judes lane", "st. judes lane"],
        displayAnswer: "St. Jude's Lane",
        explanation: "The narrator mentions: 'the cobbled gallery on St. Jude's Lane'."
      },
      {
        id: 2,
        type: "fill-in-the-blank",
        question: "The artist spent ______ months painting the exhibition collection.",
        acceptedAnswers: ["14", "fourteen", "14 months", "fourteen months"],
        displayAnswer: "14",
        explanation: "The script says: 'I had spent fourteen months painting'."
      },
      {
        id: 3,
        type: "fill-in-the-blank",
        question: "The exhibition showcased ______ oil landscape paintings.",
        acceptedAnswers: ["22", "twenty-two", "twenty two", "22 paintings"],
        displayAnswer: "22",
        explanation: "The artist painted 'twenty-two oil landscapes'."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "What subject was depicted across the artist's landscapes?",
        options: ["Mountain peaks", "Coastal lighthouses", "Ancient bridges", "Autumn forests"],
        answer: "Coastal lighthouses",
        explanation: "The landscapes depicted 'coastal lighthouses'."
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "From which city did the buyer of the largest painting come?",
        options: ["Stockholm", "Gothenburg", "Oslo", "Copenhagen"],
        answer: "Gothenburg",
        explanation: "The buyer was 'an elderly marine architect from Gothenburg'."
      },
      {
        id: 6,
        type: "short-answer",
        question: "What was the title of the largest painting sold?",
        acceptedAnswers: ["storm over the outer reef", "'storm over the outer reef'"],
        displayAnswer: "Storm over the Outer Reef",
        explanation: "The text names the painting: 'Storm over the Outer Reef'."
      },
      {
        id: 7,
        type: "fill-in-the-blank",
        question: "The painting was purchased for ______ euros.",
        acceptedAnswers: ["1200", "1,200", "twelve hundred", "1200 euros", "1,200 euros"],
        displayAnswer: "1,200",
        explanation: "The buyer purchased it 'for twelve hundred euros' (€1,200)."
      },
      {
        id: 8,
        type: "true-false",
        question: "The unexpected sale transformed the artist's self-confidence.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The narrator reflects: 'That unexpected breakthrough transformed my confidence'."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.LISTENING_EXERCISES = LISTENING_EXERCISES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LISTENING_EXERCISES };
}
