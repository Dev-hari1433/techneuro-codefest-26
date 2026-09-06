<div align="center">

# ⚡ TechNeuro Codefest'26
### *Code the future. Master the mind.*

**Official National-Level College Symposium & Hackathon Platform**  
*Organized by the **TechNeuro Club**, Department of Computer Science with Artificial Intelligence*

---

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Google Sheets](https://img.shields.io/badge/Google_Sheets-Real--Time_Sync-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)](https://sheets.google.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**Explore Live Website**](https://github.com/Dev-hari1433/techneuro-codefest-26) • [**Rulebooks & Guidelines**](#-competitive-arenas) • [**Student Convener Helpline**](#-symposium-coordinators)

</div>

---

## 🌟 Executive Overview

**TechNeuro Codefest'26** is an award-winning, editorial-grade digital platform engineered for a prestigious collegiate symposium. Combining luxury Havenly aesthetics (rich obsidian mocha, warm oat cream, copper amber, and electric cyber cyan) with spring-physics micro-interactions, the platform delivers an immersive registration and exploration experience for thousands of student competitors.

Under the hood, the platform features a **fault-tolerant, real-time dual-engine backend pipeline**: every registration submitted on the frontend is instantly written to a **Supabase PostgreSQL** database and concurrently streamed to a **Google Sheet** via an asynchronous server-to-server database trigger (`pg_net`).

---

## 🏛️ System Architecture

```
                                  [ STUDENT CLIENT ]
                     (Mobile / Tablet / Desktop Browser on Vercel)
                                          │
                                          │ HTTPS (Vite + React 18)
                                          ▼
                         ┌─────────────────────────────────┐
                         │      TechNeuro Codefest'26      │
                         │    Frontend UI & Roster Modal   │
                         └─────────────────────────────────┘
                                          │
                                          │ PostgREST RESTful API
                                          ▼
                         ┌─────────────────────────────────┐
                         │        Supabase Cloud           │
                         │   PostgreSQL 17 Database Engine │
                         │   • Row-Level Security (RLS)    │
                         │   • public.registrations table  │
                         └─────────────────────────────────┘
                                          │
                                          │ AFTER INSERT Trigger
                                          │ (pg_net Async HTTP POST)
                                          ▼
                         ┌─────────────────────────────────┐
                         │    Google Apps Script Engine    │
                         │    (Zero-Dependency Web App)    │
                         └─────────────────────────────────┘
                                          │
                                          │ SpreadsheetApp API
                                          ▼
                         ┌─────────────────────────────────┐
                         │      Google Sheets Roster       │
                         │   • IST Timestamp Formatting    │
                         │   • Plain-Text Phone Retention  │
                         │   • Instant Coordinator Access  │
                         └─────────────────────────────────┘
```

---

## 🎯 Competitive Arenas

The symposium features **5 high-intensity arenas** spanning cutting-edge technical disciplines and creative crafts:

| # | Arena Name | Category | Team Format | Description & Deliverables |
| :-: | :--- | :---: | :---: | :--- |
| **01** | **AI Avengers** | `Technical` | 👥 2 Members | **Flagship 3-Round Battle:** Objective AI trivia, multimodal cognitive puzzles, and mystery logic tasks. **100% Zero-Elimination Guarantee** — all squads play all rounds! |
| **02** | **Prompt to Product** | `Technical` | 👥 2 Members | **Live AI Product Hackathon:** 60-minute sprint to architect, prompt, and deploy a functioning digital prototype with verified AI prompt logs and a 2-minute elevator pitch. |
| **03** | **Technical Mehndi** | `Technical` | 👤 1 Member *(Solo)* | **Hardware & Cyber Fusion:** Intricate free-hand henna art incorporating logic gates, processor microarchitectures, neural nodes, and binary code streams on skin. |
| **04** | **Cooking Without Fire** | `Non-Technical` | 👥 2 Members | **Zero-Heat Gourmet Craft:** Prepare and present 2 unique gourmet culinary dishes in 90 minutes using raw ingredients with zero thermal appliances. |
| **05** | **Treasure Hunt** | `Non-Technical` | 👥 2 Members | **Campus-Wide Cognitive Chase:** Multi-stage cryptographic clues, geospatial navigation, and department-wide clue elimination without elimination rounds. |

---

## ✨ Key Features & Engineering Highlights

* 🎨 **Editorial Havenly Design System**: Warm mocha `#1A120B` and obsidian gradients paired with tactile off-white `#FAF7F2` surfaces, Syne geometric headlines, and Plus Jakarta Sans body typography.
* 🧭 **Curved Radial Chronometer Arc**: Bespoke SVG clock-face dial with 85 precision-calibrated radiating ticks, concentric guidelines, jewel pips, and Roman numeral indicators crowning fanned event cards.
* 🔒 **Rigid Curved Fan Physics**: Cards strictly retain their fanned rotation angle (`-16°` to `+16°`) during all hover, touch, and tap interactions without ever flattening into a horizontal line.
* 📱 **WhatsApp Community Dispatch**: Dedicated deep links for each arena to funnel confirmed participants into verified WhatsApp group channels.
* 📄 **In-App Rulebook Reader**: Built-in modal PDF viewer and one-click direct download mechanism for official college circulars.
* ⚡ **Zero Fake Contact Guarantee**: Only valid student convener credentials displayed across all channels (`Ganesh Kumar • 6369230106`).
* 📊 **Automated Google Sheets Sync**:
  * Indian Standard Time (`Asia/Kolkata`) auto-timestamping.
  * Formats phone numbers as plain-text strings (`'@'`) to prevent leading zeros from stripping.
  * Concurrency lock protection (`LockService`) against race conditions during burst registrations.

---

## 🛠️ Technology Stack

* **Frontend Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
* **Styling & Design Tokens:** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
* **Animation & Spring Physics:** [Framer Motion 11](https://www.framer.com/motion/)
* **Iconography:** [Lucide React](https://lucide.dev/)
* **Celebratory Effects:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
* **Backend as a Service:** [Supabase](https://supabase.com/) (PostgreSQL 17, Row Level Security, `pg_net` HTTP worker)
* **Spreadsheet Engine:** [Google Apps Script](https://developers.google.com/apps-script)
* **Deployment & Edge CDN:** [Vercel](https://vercel.com/)

---

## 📁 Repository Structure

```tree
techneuro-codefest-26/
├── public/
│   ├── images/
│   │   └── technical-mehndi.jpg        # Local high-res authentic henna imagery
│   ├── AI AVENGERS Rule book-1.pdf     # Official competition rulebooks
│   ├── Prompt to product RULE BOOK.pdf
│   ├── mehndi 4.pdf
│   ├── Cooking without fire rules.pdf
│   └── Treasure_Hunt_Rules.pdf
├── src/
│   ├── components/
│   │   ├── ArenaMatchmaker.jsx         # Interactive skill match matrix
│   │   ├── AutoScrollMarquee.jsx       # Infinite continuous dual-track ticker
│   │   ├── ContactSection.jsx          # Luxury convener card with WhatsApp button
│   │   ├── EventDrawer.jsx             # Sliding side drawer with round details
│   │   ├── EventGrid.jsx               # Filterable Technical vs Non-Tech grid
│   │   ├── FAQSection.jsx              # Expandable accordion FAQs
│   │   ├── Footer.jsx                  # Department branding footer
│   │   ├── Hero.jsx                    # Editorial hero with cyber lighting
│   │   ├── Navbar.jsx                  # Glassmorphic floating navigation
│   │   ├── RadialEventArc.jsx          # SVG chronometer clock-arc gallery
│   │   ├── RegistrationModal.jsx       # Clean cream modal with Supabase sync
│   │   ├── RulebookDownloadModal.jsx   # Rulebook download manager
│   │   └── TopBanner.jsx               # Ticker announcement bar
│   ├── data/
│   │   └── eventsData.js               # Central symposium schema & contacts
│   ├── lib/
│   │   └── supabase.js                 # Supabase client initialization
│   ├── App.jsx                         # Main symposium layout & state
│   ├── index.css                       # Global styles & custom animations
│   └── main.jsx                        # React root entrypoint
├── .env                                # Supabase & Google Sheets webhook keys
├── .gitignore                          # Standard gitignore
├── tailwind.config.js                  # Custom Havenly color extensions
├── vite.config.js                      # Vite bundler configuration
└── package.json                        # Project metadata & dependencies
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
* Node.js **18.x** or higher
* npm **9.x** or higher

### Installation & Run
```bash
# 1. Clone the repository
git clone https://github.com/Dev-hari1433/techneuro-codefest-26.git

# 2. Navigate to project root
cd techneuro-codefest-26

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will be accessible at `http://localhost:3000/`.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase Project Credentials
VITE_SUPABASE_URL=https://qaptpmkbupwivynkyvzc.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Google Apps Script Web App Deployment URL
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbyYVojQh6KksnfVxMI45b6Bo2pyQcGf7zmDRaR8I_pD7akf5-1QpCbXznaF7UWnoeGd5w/exec
```

---

## 🗄️ Database Schema & Triggers

To reproduce the Supabase schema in a new environment:

```sql
CREATE TABLE public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    event_name TEXT NOT NULL,
    team_name TEXT DEFAULT '',
    p1_name TEXT NOT NULL,
    p1_reg_no TEXT NOT NULL,
    p1_dept TEXT NOT NULL,
    p1_year TEXT NOT NULL,
    p1_section TEXT NOT NULL,
    p1_phone TEXT NOT NULL,
    p1_email TEXT NOT NULL,
    p2_name TEXT DEFAULT '',
    p2_reg_no TEXT DEFAULT '',
    p2_dept TEXT DEFAULT '',
    p2_year TEXT DEFAULT '',
    p2_section TEXT DEFAULT '',
    p2_phone TEXT DEFAULT '',
    p2_email TEXT DEFAULT ''
);

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON public.registrations FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow anon select" ON public.registrations FOR SELECT TO anon USING (true);
```

---

## 📞 Symposium Coordinators

* **Host Department:** Department of Computer Science with Artificial Intelligence
* **Organizer Club:** TechNeuro Club
* **Student Convener:** **Ganesh Kumar** (Dept of CS & AI)
* **Direct Helpline / WhatsApp:** `+91 6369230106`
* **Venue:** CS & AI Innovation Block & Central Auditorium

---

<div align="center">
  <sub>Crafted with precision for <strong>TechNeuro Codefest'26</strong>. All rights reserved.</sub>
</div>
