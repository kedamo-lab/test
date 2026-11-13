const QUESTIONS = [
  {
    "question": "My name ___ Anna.",
    "options": [
      "be",
      "am",
      "is",
      "are"
    ],
    "answer": 2,
    "level": "A1"
  },
  {
    "question": "I ___ from Spain.",
    "options": [
      "am",
      "be",
      "are",
      "is"
    ],
    "answer": 0,
    "level": "A1"
  },
  {
    "question": "She ___ a teacher.",
    "options": [
      "are",
      "be",
      "is",
      "am"
    ],
    "answer": 2,
    "level": "A1"
  },
  {
    "question": "There are three ___ on the table.",
    "options": [
      "book",
      "bookes",
      "book's",
      "books"
    ],
    "answer": 3,
    "level": "A1"
  },
  {
    "question": "There ___ two cats in the garden.",
    "options": [
      "is",
      "be",
      "am",
      "are"
    ],
    "answer": 3,
    "level": "A1"
  },
  {
    "question": "We ___ coffee every morning.",
    "options": [
      "drinking",
      "drinks",
      "is drink",
      "drink"
    ],
    "answer": 3,
    "level": "A1"
  },
  {
    "question": "He ___ to work by bus every day.",
    "options": [
      "gone",
      "goes",
      "going",
      "go"
    ],
    "answer": 1,
    "level": "A1"
  },
  {
    "question": "___ she like music?",
    "options": [
      "Is",
      "Do",
      "Does",
      "Are"
    ],
    "answer": 2,
    "level": "A1"
  },
  {
    "question": "I have two ___.",
    "options": [
      "brother",
      "brother's",
      "brothers'",
      "brothers"
    ],
    "answer": 3,
    "level": "A1"
  },
  {
    "question": "‘Can you swim?’ ‘Yes, I ___.’",
    "options": [
      "have",
      "can",
      "do",
      "am"
    ],
    "answer": 1,
    "level": "A1"
  },
  {
    "question": "Yesterday, we ___ to the park.",
    "options": [
      "going",
      "go",
      "gone",
      "went"
    ],
    "answer": 3,
    "level": "A2"
  },
  {
    "question": "Look! The children ___ in the garden right now.",
    "options": [
      "plays",
      "play",
      "are playing",
      "played"
    ],
    "answer": 2,
    "level": "A2"
  },
  {
    "question": "The meeting starts ___ 8 o’clock.",
    "options": [
      "at",
      "on",
      "in",
      "for"
    ],
    "answer": 0,
    "level": "A2"
  },
  {
    "question": "My sister is ___ than me.",
    "options": [
      "tall",
      "taller",
      "more tall",
      "tallest"
    ],
    "answer": 1,
    "level": "A2"
  },
  {
    "question": "This is ___ river in the country.",
    "options": [
      "long",
      "the longer",
      "longer",
      "the longest"
    ],
    "answer": 3,
    "level": "A2"
  },
  {
    "question": "How ___ water do you drink every day?",
    "options": [
      "often",
      "much",
      "few",
      "many"
    ],
    "answer": 1,
    "level": "A2"
  },
  {
    "question": "There isn’t ___ milk in the fridge.",
    "options": [
      "many",
      "any",
      "some",
      "a"
    ],
    "answer": 1,
    "level": "A2"
  },
  {
    "question": "They ___ at home when I called last night.",
    "options": [
      "was",
      "is",
      "were",
      "are"
    ],
    "answer": 2,
    "level": "A2"
  },
  {
    "question": "We bought our plane tickets yesterday. We ___ to Italy next month.",
    "options": [
      "will travelled",
      "are going to travel",
      "travels",
      "travelled"
    ],
    "answer": 1,
    "level": "A2"
  },
  {
    "question": "She ___ eats meat; she’s a vegetarian.",
    "options": [
      "usually",
      "always",
      "never",
      "often"
    ],
    "answer": 2,
    "level": "A2"
  },
  {
    "question": "___ you ever visited London?",
    "options": [
      "Have",
      "Are",
      "Did",
      "Do"
    ],
    "answer": 0,
    "level": "B1"
  },
  {
    "question": "I ___ dinner when the phone rang.",
    "options": [
      "am cooking",
      "cook",
      "was cooking",
      "have cooked"
    ],
    "answer": 2,
    "level": "B1"
  },
  {
    "question": "She has lived here ___ 2020.",
    "options": [
      "during",
      "from",
      "since",
      "for"
    ],
    "answer": 2,
    "level": "B1"
  },
  {
    "question": "If it rains tomorrow, we ___ at home.",
    "options": [
      "stayed",
      "would stay",
      "will stay",
      "would have stayed"
    ],
    "answer": 2,
    "level": "B1"
  },
  {
    "question": "He is old ___ to drive a car.",
    "options": [
      "enough",
      "very",
      "so",
      "too"
    ],
    "answer": 0,
    "level": "B1"
  },
  {
    "question": "If I ___ you, I'd apologise.",
    "options": [
      "am",
      "have been",
      "were",
      "will be"
    ],
    "answer": 2,
    "level": "B1"
  },
  {
    "question": "I have never ___ sushi before.",
    "options": [
      "eating",
      "eat",
      "eaten",
      "ate"
    ],
    "answer": 2,
    "level": "B1"
  },
  {
    "question": "She asked me where I ___ my jacket.",
    "options": [
      "had bought",
      "buy",
      "have buy",
      "was buy"
    ],
    "answer": 0,
    "level": "B1"
  },
  {
    "question": "The book ___ by millions of people every year.",
    "options": [
      "reads",
      "has read",
      "is reading",
      "is read"
    ],
    "answer": 3,
    "level": "B1"
  },
  {
    "question": "If I had more time, I ___ another language.",
    "options": [
      "would learn",
      "had learned",
      "will learn",
      "learned"
    ],
    "answer": 0,
    "level": "B1"
  },
  {
    "question": "You ___ wear a seat belt; it's required by law.",
    "options": [
      "might",
      "would",
      "could",
      "must"
    ],
    "answer": 3,
    "level": "B1"
  },
  {
    "question": "This is the woman ___ helped me find my keys.",
    "options": [
      "where",
      "who",
      "whose",
      "which"
    ],
    "answer": 1,
    "level": "B1"
  },
  {
    "question": "I'm looking forward to ___ you next week.",
    "options": [
      "see",
      "seeing",
      "have seen",
      "saw"
    ],
    "answer": 1,
    "level": "B1"
  },
  {
    "question": "By the time we arrived, the film ___.",
    "options": [
      "had already started",
      "already starts",
      "has already started",
      "was already start"
    ],
    "answer": 0,
    "level": "B2"
  },
  {
    "question": "She managed to solve the problem ___ having very little time.",
    "options": [
      "despite",
      "although",
      "unless",
      "because"
    ],
    "answer": 0,
    "level": "B2"
  },
  {
    "question": "If you had told me earlier, I ___ you.",
    "options": [
      "help",
      "would have helped",
      "will help",
      "would help"
    ],
    "answer": 1,
    "level": "B2"
  },
  {
    "question": "He denied ___ the confidential document.",
    "options": [
      "to sharing",
      "to share",
      "share",
      "sharing"
    ],
    "answer": 3,
    "level": "B2"
  },
  {
    "question": "The meeting has been put ___ until next Monday.",
    "options": [
      "off",
      "out",
      "up",
      "through"
    ],
    "answer": 0,
    "level": "B2"
  },
  {
    "question": "I wish I ___ so much money on things I didn't need last month.",
    "options": [
      "hadn't spent",
      "don't spend",
      "haven't spent",
      "wouldn't spend"
    ],
    "answer": 0,
    "level": "B2"
  },
  {
    "question": "You ___ have seen Clara at the office yesterday; she was abroad all week.",
    "options": [
      "might",
      "must",
      "should",
      "can't"
    ],
    "answer": 3,
    "level": "B2"
  },
  {
    "question": "We need to ___ a decision before the end of the day.",
    "options": [
      "make",
      "take up",
      "do",
      "bring"
    ],
    "answer": 0,
    "level": "B2"
  },
  {
    "question": "Not until the lights went out ___ that the building was empty.",
    "options": [
      "I did realise",
      "I realised",
      "did I realise",
      "realised I"
    ],
    "answer": 2,
    "level": "C1"
  },
  {
    "question": "Had they left earlier, they ___ the train.",
    "options": [
      "would have caught",
      "will catch",
      "would catch",
      "caught"
    ],
    "answer": 0,
    "level": "C1"
  },
  {
    "question": "The proposal was rejected on the ___ that it was too expensive.",
    "options": [
      "motives",
      "causes",
      "reasons",
      "grounds"
    ],
    "answer": 3,
    "level": "C1"
  },
  {
    "question": "The committee recommended that the report ___ revised before publication.",
    "options": [
      "is",
      "will be",
      "was",
      "be"
    ],
    "answer": 3,
    "level": "C1"
  },
  {
    "question": "Rarely ___ such a compelling argument in a short essay.",
    "options": [
      "I have read",
      "have I read",
      "I read have",
      "did I have read"
    ],
    "answer": 1,
    "level": "C1"
  },
  {
    "question": "The evidence is inconclusive, so any firm conclusion would be ___.",
    "options": [
      "inevitable",
      "premature",
      "conclusive",
      "warranted"
    ],
    "answer": 1,
    "level": "C1"
  },
  {
    "question": "Were it not for her quick response, the situation ___ much worse now.",
    "options": [
      "will be",
      "would be",
      "had been",
      "is"
    ],
    "answer": 1,
    "level": "C2"
  },
  {
    "question": "The speaker's remarks were deliberately ___: they could be interpreted in several ways.",
    "options": [
      "unequivocal",
      "unambiguous",
      "equivocal",
      "explicit"
    ],
    "answer": 2,
    "level": "C2"
  },
  {
    "question": "The rules do not ___ late applications: they explicitly allow them in exceptional cases.",
    "options": [
      "entail",
      "substantiate",
      "preclude",
      "corroborate"
    ],
    "answer": 2,
    "level": "C2"
  }
];
