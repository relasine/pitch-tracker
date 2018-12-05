const classes = [
  {
    teacher: "Simpson",
    period: 1,
    subject: "band",
    grade: 6
  },
  {
    teacher: "Simpson",
    period: 2,
    subject: "band",
    grade: 7
  },
  {
    teacher: "Simpson",
    period: 3,
    subject: "band",
    grade: 8
  },
  {
    teacher: "Simpson",
    period: 4,
    subject: "orchestra",
    grade: 6
  },
  {
    teacher: "Simpson",
    period: 6,
    subject: "orchestra",
    grade: 5
  },
  {
    teacher: "Simpson",
    period: 7,
    subject: "orchestra",
    grade: 6
  }
];

const students = [
  {
    last_name: "Bruce",
    first_name: "Alex",
    instrument: "bass clarinet",
    class_id: 1,
    scores: [{ clef: "bass", score: 20 }],
    achievements: [
      {
        bass: [
          "level one - complete",
          "level one - perfect",
          "level two - complete"
        ]
      }
    ]
  },
  {
    last_name: "Ela",
    first_name: "Alex",
    instrument: "clarinet",
    class_id: 1,
    scores: [{ clef: "treble", score: 30 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ]
      }
    ]
  },
  {
    last_name: "Reu Singer",
    first_name: "Allison",
    instrument: "alto sax",
    class_id: 1,
    scores: [{ clef: "treble", score: 25 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete"
        ]
      }
    ]
  },
  {
    last_name: "Bailey",
    first_name: "Ashton",
    instrument: "trumpet",
    class_id: 1,
    scores: [{ clef: "treble", score: 30 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ]
      }
    ]
  },
  {
    last_name: "Hayek",
    first_name: "Ben",
    instrument: "flute",
    class_id: 2,
    scores: [{ clef: "treble", score: 30 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ]
      }
    ]
  },
  {
    last_name: "Hoepner",
    first_name: "Casey",
    instrument: "trombone",
    class_id: 1,
    scores: [{ clef: "bass", score: 30 }],
    achievements: [
      {
        bass: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect",
          "level three - complete"
        ]
      }
    ]
  },
  {
    last_name: "Chateau",
    first_name: "Chris",
    instrument: "tuba",
    class_id: 2,
    scores: [{ clef: "bass", score: 30 }, { clef: "treble", score: 20 }],
    achievements: [
      {
        bass: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ],
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete"
        ]
      }
    ]
  },
  {
    last_name: "Lynam",
    first_name: "Christie",
    instrument: "flute",
    class_id: 2,
    scores: [{ clef: "treble", score: 44 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect",
          "level three - complete",
          "level three - prefect"
        ]
      }
    ]
  },
  {
    last_name: "Hart",
    first_name: "Cole",
    instrument: "tenor sax",
    class_id: 3,
    scores: [{ clef: "treble", score: 34 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect",
          "level three - complete"
        ]
      }
    ]
  },
  {
    last_name: "Haynes",
    first_name: "Courtney",
    instrument: "baritone",
    class_id: 3,
    scores: [{ clef: "bass", score: 25 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete"
        ]
      }
    ]
  },
  {
    last_name: "Weissman",
    first_name: "Aaron",
    instrument: "trombone",
    class_id: 4,
    scores: [{ clef: "bass", score: 36 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ]
      }
    ]
  },
  {
    last_name: "Kayyali",
    first_name: "Ahmad",
    instrument: "alto sax",
    class_id: 4,
    scores: [{ clef: "treble", score: 40 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect",
          "level three - complete"
        ]
      }
    ]
  },
  {
    last_name: "Holt",
    first_name: "Amy",
    instrument: "baritone sax",
    class_id: 4,
    scores: [{ clef: "treble", score: 28 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ]
      }
    ]
  },
  {
    last_name: "Munro",
    first_name: "Graham",
    instrument: "trumpet",
    class_id: 5,
    scores: [{ clef: "treble", score: 45 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect",
          "level three - complete",
          "level three - perfect"
        ]
      }
    ]
  },
  {
    last_name: "Washington",
    first_name: "Cierra",
    class_id: 5,
    instrument: "clarinet",

    scores: [{ clef: "treble", score: 40 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect",
          "level three - complete"
        ]
      }
    ]
  },
  {
    last_name: "Price",
    first_name: "Cody",
    instrument: "baritone",
    class_id: 5,
    scores: [{ clef: "bass", score: 24 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete"
        ]
      }
    ]
  },
  {
    last_name: "Whitaker",
    first_name: "David",
    instrument: "flute",
    class_id: 5,
    scores: [{ clef: "treble", score: 30 }, { clef: "bass", score: 10 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ],
        bass: ["level one - complete"]
      }
    ]
  },
  {
    last_name: "Hancles",
    first_name: "Derek",
    instrument: "horn",
    class_id: 6,
    scores: [{ clef: "treble", score: 30 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect"
        ]
      }
    ]
  },
  {
    last_name: "Bott",
    first_name: "Drake",
    instrument: "tuba",
    class_id: 6,
    scores: [{ clef: "bass", score: 25 }],
    achievements: [
      {
        bass: [
          "level one - complete",
          "level one - perfect",
          "level two - complete"
        ]
      }
    ]
  },
  {
    last_name: "Levenson",
    first_name: "Freddie",
    instrument: "flute",
    class_id: 1,
    scores: [{ clef: "treble", score: 38 }],
    achievements: [
      {
        treble: [
          "level one - complete",
          "level one - perfect",
          "level two - complete",
          "level two - perfect",
          "level three - complete"
        ]
      }
    ]
  }
];
