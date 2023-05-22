const quiz = {
  topic: "Mathematic",
  level: "Beginner",
  totalQuestions: 15,
  perQuestionScore: 5,
  totalTime: 60,
  questions: [
    {
      question: "𝐸𝐾𝑈𝐾 (28; 20) toping.",
      choices: ["280", "4", "560", "140"],
      type: "easy",
      correctAnswer: "140",
    },
    {
      question: "52 ning natural bo‘luvchilar sonini toping.",
      choices: ["4", "5", "6", "7"],
      type: "easy",
      correctAnswer: "6",
    },
    {
      question:
        "𝑥 va 9 sonlari o‘zaro tub, 𝐸𝐾𝑈𝐾(𝑥; 9) + 𝐸𝐾𝑈𝐵(𝑥; 9) = 37 bo‘lsa, 𝑥 ni toping. ",
      choices: ["5", "4", "9", "36"],
      type: "easy",
      correctAnswer: "4",
    },
    {
      question:
        "3 aka-ukada 36 ta rangli qalam bor. Ikkinchi farzandda akasidan 4 ta kam, ukasidan 4 ta ko‘p rangli qalam bo‘lsa, katta akada nechta rangli qalam bor?",
      choices: ["15", "14", "16", "18"],
      type: "easy",
      correctAnswer: "16",
    },
    {
      question:
        " Agar to‘g‘ri burchakli koordinatalar sistemasida 𝐴(1; 0), 𝐵(−4; 0) va 𝐶(1; 4) nuqtalardan hosil bo‘lgan shaklning yuzini toping? ",
      choices: ["20", "10", "9", "8"],
      type: "medium",
      correctAnswer: "10",
    },
    {
      question:
        "Oiladagi hamma bolalar sport to‘garaklariga borishadi. Ularning 7 tasi shaxmat, 6 tasi voleybol, 5 tasi futbol, 4 tasi shaxmat va valeybol, 3 tasi voleybol va futbol, 2 tasi shaxmat futbol, 1 tasi esa uchala to‘garakka ham boradi. Bu oiladi necha tasi bola bor?",
      choices: ["10", "8", "12", "13"],
      type: "medium",
      correctAnswer: "10",
    },
    {
      question:
        "Agar to‘g‘ri burchakli uchburchakning bir burchagi 60° ga va shu burchakka yopishgan kateti 12 ga teng bo‘lsa, gipotenuza uzunligini toping.",
      choices: ["20", "10", "15", "24"],
      type: "medium",
      correctAnswer: "24",
    },
    {
      question:
        " Teploxod 96 𝑘𝑚 yo‘lni oqim bo‘yicha va oqimga qarshi suzdi, jami suzishda u 10 soat vaqt sarfladi. Agar oqimning tezligi 4 𝑘𝑚/ℎ bo‘lsa, teploxodning turg‘un suvdagi tezligini toping?",
      choices: ["24 km/h", "22 km/h", "20 km/h", "16 km/h"],
      type: "medium",
      correctAnswer: "20 km/h",
    },
    {
      question:
        "3𝑥 + 𝑦 + 12 = 0 to‘g‘ri chiziq va koordinata o‘qlari bilan chegaralangan uchburchakning yuzini aniqlang.",
      choices: ["24", "36", "48", "72"],
      type: "hard",
      correctAnswer: "24",
    },
    {
      question:
        "1 va 64 sonlari orasiga 5 ta shunday sonni joylashtiringki, ular bu sonlar bilan birgalikda geometrik progressiya tashkil etsin. Shu progressiyaning beshinchi hadini toping. ",
      choices: ["24", "32", "28", "16"],
      type: "hard",
      correctAnswer: "16",
    },
    {
      question:
        "Hadlari o‘sib boruvchi geometrik progressiyaning dastlabki uchta hadining yig‘indisi 91 ga teng. Agar shu progressiyaning birinchi hadiga 25 ni, ikkinchi hadiga 27 ni va uchinchi hadiga 1 qo‘shilsa, u holda arifmetik progressiya tashkil qiladadi. Berilgan geometrik progressiyaning to‘rtinchi hadini toping. ",
      choices: ["169", "182", "189", "144"],
      type: "hard",
      correctAnswer: "189",
    },
    {
      question:
        "Muntazam uchburchakli piramidaning balandligi 4 dm ga, asosining balandligi esa 4,5 dm ga teng. Piramidaning yon qirrasini toping.",
      choices: ["6 dm", "6.5 dm", "5 dm", "5.5 dm"],
      type: "hard",
      correctAnswer: "5",
    },
    {
      question: "11 soni 2 ga bo'linadimi?",
      choices: ["hech qachon", "ha", "11 son emas", "yo'q"],
      type: "easy",
      correctAnswer: "yo'q",
    },
    {
      question: "11*20=?",
      choices: ["220", "210", "1120", "320"],
      type: "easy",
      correctAnswer: "220",
    },
    {
      question:
        "Alexda 3 ta olma bor edi. U Johnga 5 ta olma berdi va o'zida qancha olma qoldi? ",
      choices: ["4", "3", "-2", "masala xato tuzilgan"],
      type: "easy",
      correctAnswer: "masala xato tuzilgan",
    },
    {
      question: "110/55=?",
      choices: ["4", "3", "1", "2"],
      type: "easy",
      correctAnswer: "2",
    },
    {
      question:
        "Agar 𝑥 ∙ 𝑦 = 540 va 𝐸𝐾𝑈𝐾(𝑥; 𝑦) = 90 bo‘lsa, 𝐸𝐾𝑈𝐵 (𝑥; 𝑦) ni toping",
      choices: ["5", "90", "18", "6"],
      type: "easy",
      correctAnswer: "6",
    },
    {
      question:
        "𝐸𝐾𝑈𝐾(𝑎; 𝑏) = 180 va 𝐸𝐾𝑈𝐵 (𝑎; 𝑏) = 18, 𝑎 va 𝑏 sonlar birbiriga bo‘linmaydi. Shu sonlarni toping. ",
      choices: ["18 va 180", "36 va 90", "36 va 48", "18 va 92"],
      type: "easy",
      correctAnswer: "36 va 90",
    },
    {
      question:
        "Nuqtalar o‘rniga to‘g‘ri javobni qo‘ying. Oddiy kasrga teskari kasrni topish uchun kasrning surat va maxrajini ..... yozish kerak. ",
      choices: ["ko‘paytirib", "bo'lib", "qo'shib", "o'rnini almashtirib"],
      type: "easy",
      correctAnswer: "o'rnini almashtirib",
    },
    {
      question: "630 va 81 ning umumiy bo‘luvchilari nechta? ",
      choices: ["5", "3", "4", "6"],
      type: "medium",
      correctAnswer: "3",
    },
  ],
};
export default quiz;
