export const SYMPOSIUM_INFO = {
  title: "TechNeuro Codefest'26",
  club: "TechNeuro Club",
  tagline: "Code the future. Master the mind.",
  organizer: "TechNeuro Club",
  department: "Department of Computer Science with Artificial Intelligence",
  date: "October 14, 2026",
  time: "09:00 AM – 05:00 PM IST",
  venue: "DRBCCC Hindu College, Pattabiram",
  regDeadline: "October 12, 2026 • 11:59 PM IST",
  departmentCap: "Strictly 1 Team per Department across all events",
  convenerName: "Ganesh Kumar",
  convenerRole: "President (CSAI)",
  contactPhone: "6369230106",
  contactWhatsapp: "https://wa.me/916369230106?text=Hi%20Ganesh%20Kumar%2C%20I%20have%20a%20query%20regarding%20TechNeuro%20Codefest%2726",
};

export const DEPARTMENTS_LIST = [
  "Computer Science",
  "Computer Science with Data Science",
  "Computer Science with Artificial Intelligence",
  "Computer Application",
  "Statistics",
  "Visual Communication",
  "Physics",
  "Chemistry",
  "Electronics with Artificial Intelligence",
];

export const EVENTS_DATA = [
  {
    id: "ai-avengers",
    category: "Technical",
    title: "AI Avengers",
    shortTitle: "AI Avengers",
    tagline: "Assemble your intellect across trivia, logic, and mystery.",
    badge: "Flagship Technical",
    teamSize: "2 members per team",
    teamCap: "1 team per dept (2 members)",
    duration: "2 Hours 30 Minutes",
    accentColor: "#00F5FF", // Electric Cyan
    glowClass: "group-hover:border-cyan-400/60 shadow-cyan-950/40",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    pdfFilename: "AI AVENGERS Rule book-1.pdf",
    whatsappLink: "https://chat.whatsapp.com/Bw6x5jIIGkrE4Rhrif1hHw?s=sh&p=a&mlu=0",
    summary:
      "3 high-intensity rounds testing core AI trivia, visual reasoning puzzles, and hands-on mystery tasks without elimination.",
    keyHighlight: "Strictly NO eliminations across rounds — all teams play all 3 rounds!",
    strictRule:
      "Mobile phones can be brought into the venue, but any usage during the active competition triggers immediate disqualification.",
    rounds: [
      {
        roundNumber: "Round 1",
        name: "Mind Masters (Quiz)",
        duration: "30 Mins",
        format: "30 questions on foundational Artificial Intelligence, Machine Learning, and Computer Science concepts.",
        details: "Rapid-fire written/digital objective round assessing algorithmic breadth and conceptual clarity."
      },
      {
        roundNumber: "Round 2",
        name: "Brain Storm",
        duration: "1 Hour (60 Mins)",
        format: "30 questions structured across 6 cognitive modules:",
        details: [
          "Linked Puzzle / Connection (7 Questions)",
          "Find the Difference (4 Questions)",
          "Find Logo Name (4 Questions)",
          "Recall Rush (5 Questions)",
          "Find the Person (5 Questions)",
          "Real or Fake AI Media (5 Questions)"
        ]
      },
      {
        roundNumber: "Round 3",
        name: "Mystery Round (Do the Task)",
        duration: "1 Hour (60 Mins)",
        format: "Hands-on challenge revealed on the spot.",
        details: "Teams must apply logical deduction, collaborative problem-solving, and practical AI/CS execution to complete the task within 60 minutes."
      }
    ],
    evaluation: [
      "Aggregate score across all 3 rounds determines the winning department.",
      "Time taken in Round 3 serves as the primary tie-breaker.",
      "Judges' decisions on disputed interpretations are final."
    ],
    coordinators: [
      { name: "Ganesh Kumar", role: "President (CSAI)", contact: "6369230106" }
    ]
  },
  {
    id: "prompt-to-product",
    category: "Technical",
    title: "Prompt to Product",
    shortTitle: "Prompt to Product",
    tagline: "Think. Prompt. Build. Impact.",
    badge: "AI Product Hack",
    teamSize: "2 members per team",
    teamCap: "1 team per dept (2 members)",
    duration: "1 Hour (60 Mins)",
    accentColor: "#00F5FF", // Electric Cyan
    glowClass: "group-hover:border-cyan-400/60 shadow-cyan-950/40",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    pdfFilename: "Prompt to product RULE BOOK.pdf",
    whatsappLink: "https://chat.whatsapp.com/HUG4eTM8r2z17FrBrJLVMG",
    summary:
      "Turn an unannounced real-world social problem into a working low-code/AI-powered website in 60 minutes.",
    keyHighlight: "Theme announced live at event start with exactly 60 minutes on the clock.",
    strictRule:
      "Teams MUST meticulously document every single AI prompt used and submit a Microsoft Word (.doc/.docx) prompt log along with their live URL.",
    rounds: [
      {
        roundNumber: "Phase 1",
        name: "Live Theme Reveal & Ideation",
        duration: "10 Mins",
        format: "Live prompt unveiling focused on a pressing real-world social or sustainability cause.",
        details: "Formulate solution architecture and select Low-Code/No-Code stack + AI models (ChatGPT, Claude, v0, Bolt, Lovable, Cursor, Webflow, etc.)."
      },
      {
        roundNumber: "Phase 2",
        name: "Sprint Build & Iteration",
        duration: "40 Mins",
        format: "Rapid UI/UX generation, logic synthesis, and AI prompt engineering.",
        details: "Document prompt iterations, refined prompts, and system prompts in your designated Word log file."
      },
      {
        roundNumber: "Phase 3",
        name: "Deployment & Log Submission",
        duration: "10 Mins",
        format: "Host live web application and upload both the URL and .docx prompt log to jury portal.",
        details: "Late submissions beyond 60 minutes will face severe deduction or disqualification."
      }
    ],
    evaluation: [
      "Innovation & Creativity (25%)",
      "Functional Completeness & Bug-Free Flow (25%)",
      "UI/UX Polish & Visual Design (20%)",
      "Effective Prompt Engineering & Depth of AI Log (20%)",
      "Final 2-minute elevator pitch to the jury panel (10%)"
    ],
    coordinators: [
      { name: "Ganesh Kumar", role: "President (CSAI)", contact: "6369230106" }
    ]
  },
  {
    id: "technical-mehndi",
    category: "Technical",
    title: "Technical Mehndi",
    shortTitle: "Tech Mehndi",
    tagline: "Where traditional henna art fuses with circuits, AI, and computing iconography.",
    badge: "Creative Tech Fusion",
    teamSize: "1 member per team (Solo)",
    teamCap: "1 participant per dept (Solo)",
    duration: "1 Hour 15 Minutes (75 Mins)",
    accentColor: "#00F5FF", // Electric Cyan
    glowClass: "group-hover:border-cyan-400/60 shadow-cyan-950/40",
    // Authentic high-resolution close-up henna hand art with intricate lines
    image: "/images/technical-mehndi.jpg",
    pdfFilename: "mehndi 4.pdf",
    whatsappLink: "https://chat.whatsapp.com/I2WgRSDNcD05SCTP2cOC5P",
    summary:
      "Integrate AI circuitry, logic gates, and tech iconography into traditional henna art with precision and creativity.",
    keyHighlight: "Mandatory College ID; strictly 1 member per team (1 team per department).",
    strictRule:
      "Strictly NO ready-made/sticker designs, stencils, tracing, or pre-drawn pencil marks. No phone references during drawing. Black henna with PPD is strictly prohibited.",
    rounds: [
      {
        roundNumber: "Preparation",
        name: "Inspection & Setup",
        duration: "15 Mins prior",
        format: "Jury verification of blank canvas skin and approved natural henna cones.",
        details: "Participants bring their own cones and safety-approved materials."
      },
      {
        roundNumber: "Main Stage",
        name: "Live Mehndi Illustration",
        duration: "1 Hour 15 Mins",
        format: "Live free-hand application blending cybernetic aesthetics with traditional patterns.",
        details: "Incorporate integrated circuit tracks, processor architectures, neural nodes, and binary code streams."
      },
      {
        roundNumber: "Jury Walk",
        name: "Design Defense & Evaluation",
        duration: "15 Mins",
        format: "Explanation of the computing concept depicted in the henna art.",
        details: "Judges review precision, line weight, creative fusion, and neatness."
      }
    ],
    evaluation: [
      "Creativity & Integration of CS/AI Themes (35%)",
      "Intricacy, Fine Line Work & Symmetry (30%)",
      "Originality & Free-hand Craftsmanship (20%)",
      "Clarity of Concept Explanation to Judges (15%)"
    ],
    coordinators: [
      { name: "Ganesh Kumar", role: "President (CSAI)", contact: "6369230106" }
    ]
  },
  {
    id: "cooking-without-fire",
    category: "Non-Technical",
    title: "Cooking Without Fire",
    shortTitle: "No-Fire Cooking",
    tagline: "Culinary innovation unleashed with zero heat and pure craft.",
    badge: "Culinary Arts",
    teamSize: "2 members per team",
    teamCap: "1 team per dept (2 members)",
    duration: "90 Minutes Total",
    accentColor: "#F59E0B", // Amber Orange
    glowClass: "group-hover:border-amber-400/60 shadow-amber-950/40",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
    pdfFilename: "Cooking without fire rules.pdf",
    whatsappLink: "https://chat.whatsapp.com/H9b0rHSqhUYCMldMc4Iwpf",
    summary:
      "Prepare and present 2 gourmet dishes using raw, ready-to-eat ingredients with zero flame, heat, or prior chopping.",
    keyHighlight: "Deliverable: Prepare and present exactly 2 unique dishes within the 90-minute window.",
    strictRule:
      "Zero heating appliances. Ingredients must NOT be pre-cooked, pre-cut, chopped, diced, sliced, or peeled beforehand. All prep begins only after official start signal!",
    rounds: [
      {
        roundNumber: "Phase 1",
        name: "Workstation Check & Verification",
        duration: "10 Mins prior",
        format: "Inspection of raw, unpeeled, uncut ingredients and brought cutlery.",
        details: "Teams bring all cutting boards, knives, mixing bowls, and display platters."
      },
      {
        roundNumber: "Phase 2",
        name: "Culinary Assembly & Plating",
        duration: "90 Mins",
        format: "Simultaneous preparation of Dish 1 (e.g. Savory Appetizer/Salad/Cold Fusion) and Dish 2 (e.g. Dessert/Beverage/Parfait).",
        details: "Active workspace hygiene and zero heat enforcement monitored continuously."
      },
      {
        roundNumber: "Phase 3",
        name: "Tasting & Nutrition Defense",
        duration: "20 Mins",
        format: "Presentation of both dishes with explanation of flavor profile, nutritional value, and technique.",
        details: "Judges sample and score on taste, texture, and aesthetic garnish."
      }
    ],
    evaluation: [
      "Taste, Flavor Balance & Palatability (35%)",
      "Aesthetic Presentation & Plating Artistry (25%)",
      "Nutritional Value & Thoughtful Ingredient Choice (20%)",
      "Hygiene, Cleanliness of Station & Waste Management (20%)"
    ],
    coordinators: [
      { name: "Ganesh Kumar", role: "President (CSAI)", contact: "6369230106" }
    ]
  },
  {
    id: "treasure-hunt",
    category: "Non-Technical",
    title: "Treasure Hunt",
    shortTitle: "Treasure Hunt",
    tagline: "Crack clues, hunt relics, and race against the clock.",
    badge: "Tactical Mystery",
    teamSize: "2 members per team",
    teamCap: "1 team per dept (2 members)",
    duration: "1 Hour 15 Minutes (75 Mins)",
    accentColor: "#F59E0B", // Amber Orange
    glowClass: "group-hover:border-amber-400/60 shadow-amber-950/40",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80",
    pdfFilename: "Treasure_Hunt_Rules.pdf",
    whatsappLink: "https://chat.whatsapp.com/GEjoPCTSMd0IbF97SjAiiY",
    summary:
      "Decode 20 clues, collect all items across campus, and return all objects simultaneously before time expires.",
    keyHighlight: "Teams receive 1 A4 sheet containing 20 cryptic clues across the campus.",
    strictRule:
      "Teams must NOT return after each found object! You must gather and bring all items simultaneously to the base when finished before the 75-minute buzzer.",
    rounds: [
      {
        roundNumber: "Briefing",
        name: "Clue Sheet Handout",
        duration: "5 Mins prior",
        format: "Envelopes handed out at Base Camp containing 20 riddles and campus boundary guidelines.",
        details: "Both team members must stay together throughout the hunt."
      },
      {
        roundNumber: "The Hunt",
        name: "Decryption & Retrieval",
        duration: "75 Mins",
        format: "Decipher cryptic clues, cross-verify locations, find and physically carry artifacts.",
        details: "Manage weight, speed, and time. Ensure safe handling of all retrieved objects."
      },
      {
        roundNumber: "Tie-Breaker",
        name: "Special Mystery Round (If Tied)",
        duration: "15 Mins",
        format: "Instant on-the-spot tie-breaker challenge conducted if top teams retrieve equal valid items.",
        details: "Only triggered in event of exact item count tie."
      }
    ],
    evaluation: [
      "Total number of authentic, verified items presented at Base Camp.",
      "Timestamp of team return (within the 75-minute limit).",
      "Zero tolerance for damage to campus property or off-limit zone violations.",
      "Winner is the squad with the highest number of valid items returned."
    ],
    coordinators: [
      { name: "Ganesh Kumar", role: "President (CSAI)", contact: "6369230106" }
    ]
  }
];

export const SYMPOSIUM_STATS = [
  { value: "5", label: "Flagship Events", sublabel: "3 Technical & 2 Non-Technical" },
  { value: "1–2", label: "Members per Team", sublabel: "1 Team / Dept Strict Cap" },
  { value: "75–150m", label: "Round Durations", sublabel: "Zero Elimination Guarantee" },
  { value: "1", label: "Department Champion", sublabel: "Rolling Trophy & Cash Rewards" },
];

export const MARQUEE_ITEMS = [
  "TechNeuro Codefest'26",
  "Department of Computer Science with Artificial Intelligence",
  "AI Avengers (3 Rounds • No Elimination)",
  "Prompt to Product (60m AI Product Hack)",
  "Technical Mehndi (1 Member • Circuits & Henna)",
  "Cooking Without Fire (90m • Zero Heat)",
  "Treasure Hunt (20 Cryptic Clues)",
  "Official President: Ganesh Kumar (6369230106)",
  "Department Championship Rolling Trophy",
  "Strictly 1 Team per Department",
  "Live Microsoft Word Prompt Log Submission",
  "Instant WhatsApp Community Updates",
];

export const FAQ_LIST = [
  {
    question: "How many teams can participate from each department?",
    answer: "Each academic department is strictly allowed 1 team per event. For AI Avengers, Prompt to Product, Cooking Without Fire, and Treasure Hunt, the team consists of 2 members. For Technical Mehndi, the team consists of strictly 1 member (solo participant)."
  },
  {
    question: "Can the same students participate in multiple events?",
    answer: "Due to overlapping event schedules in morning and afternoon sessions, we strongly recommend departments field distinct squads for each event to maximize their chances of winning the overall Department Championship Trophy."
  },
  {
    question: "Is there any elimination across rounds in AI Avengers?",
    answer: "No! There is strictly NO elimination across rounds in AI Avengers. Every single participating department plays all three rounds (Mind Masters, Brain Storm, and the Mystery Round). The cumulative score determines the final podium."
  },
  {
    question: "What is the mandatory submission format for Prompt to Product?",
    answer: "Teams must submit both the deployed working website link AND a comprehensive Microsoft Word document (.doc or .docx) detailing every AI prompt, platform used, and iteration strategy. Teams without prompt logs will be disqualified."
  },
  {
    question: "What ingredients are allowed for Cooking Without Fire?",
    answer: "Only ready-to-use, non-cooking ingredients are permitted. Strictly NO heating, induction, microwave, or electrical cooking appliances. Crucially, ingredients must NOT be pre-chopped, peeled, diced, or pre-cooked beforehand; all prep must take place on the workstation after the start buzzer."
  },
  {
    question: "Who is the official coordinator to contact for queries?",
    answer: "The official President is Ganesh Kumar (Department of Computer Science with Artificial Intelligence). You can reach him directly on WhatsApp or call at 6369230106."
  }
];
