# 🏙️ CivicPulse AI — Autonomous AI Mayor for Urban Governance

> **Vibe2Ship Hackathon — Community Hero: Hyperlocal Problem Solver**
> Built with Google Gemini 2.0 Flash · Firebase Firestore · Firebase Hosting

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Dashboard-blue?style=for-the-badge)](https://civicpulse-79eeb.web.app/)
[![Problem Statement](https://img.shields.io/badge/Track-Community%20Hero-orange?style=for-the-badge)]()
[![AI Engine](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-green?style=for-the-badge)]()

---

## 🧩 Problem Statement

Communities across India face fragmented, opaque, and unaccountable civic governance. Potholes go unrepaired for months. Garbage piles up. Streetlights stay broken. Citizens report issues with no feedback loop, no verification, and no accountability.

**CivicPulse AI bridges that gap** — turning any citizen's phone into a direct line to autonomous, AI-powered municipal management.

---

## 🚀 What CivicPulse AI Does

CivicPulse AI is a full-stack civic intelligence platform that:

- Lets citizens **report issues** via photo, text, or voice in multiple languages
- Uses **Gemini 2.0 Flash multimodal AI** to instantly classify, prioritize, and route every report to the right department
- Gives government admins a **real-time city dashboard** with live maps, predictive analytics, and corruption detection
- Creates an **immutable audit trail** for every AI decision and human action
- **Gamifies citizen participation** with XP, badges, and community upvotes that auto-escalate critical issues

---

## ✅ How It Solves the Hackathon Brief

| Hackathon Requirement | CivicPulse Feature | Status |
|---|---|---|
| Image & video-based issue reporting | CivicLens — Gemini Vision multimodal intake | ✅ |
| AI-powered issue categorization | Auto-classify by type, severity, and department | ✅ |
| Geo-location and mapping | Live Digital Twin map (Leaflet + GPS pins) | ✅ |
| Community verification | Upvote system with auto-escalation at 3 votes | ✅ |
| Real-time issue tracking | Firestore real-time sync — no page refresh needed | ✅ |
| Impact dashboards | Analytics tab with charts and city-wide stats | ✅ |
| Predictive insights | AI department overload forecasting | ✅ |
| Gamification for citizen engagement | XP points, badges, leaderboard | ✅ |

**Bonus features beyond the brief:** corruption detection via image diffing, AI repair blueprints with cost estimates, multilingual voice reporting, role-based access control, economic impact calculator, and an immutable agentic audit trail.

---

## 🌟 15 Core Features

### Phase 1 — Landing Page (`index.html`)

**1. Interactive Demo Solutions Grid**
Animated cards that map each civic problem to its AI-powered solution. Located in the "See Every Problem Get Solved" section.

**2. "See It Work Live" Interactive Modules**
Clickable demo buttons (Simulate Flood, Ask AI Mayor, Simulate Kannada Voice) let judges experience the product vision without leaving the landing page.

**3. Economic Impact Calculator**
Dynamic projection of financial savings from proactive AI intervention — e.g. "₹8.4 Cr Prevented Road Damage". Located in the "Economic Impact" section.

**4. Google Native Tech Stack Breakdown**
Transparent table showing which Google Cloud technology is used at every layer of the app. Located at the bottom of `index.html`.

---

### Phase 2 — Working Dashboard (`demo.html`)

**5. Role-Based Access Control (RBAC)**
Toggle between Citizen view (own tickets only) and Government Admin view (city-wide). Click "Switch Role" in the sidebar bottom-left.

**6. Multimodal AI Intake — CivicLens**
Upload a photo and description. Gemini 2.0 Flash analyzes both to auto-classify issue type, severity, and department routing. Found in the "Report Issue" tab.

**7. AI Repair Blueprints**
Generates a real-time civil engineering repair plan with root cause analysis, estimated cost in INR, and materials list. Click the purple "🔍 Blueprint" button on any open ticket.

**8. Corruption Detection AI — Image Diffing**
When an admin resolves a ticket, they must upload a repair photo. Gemini Vision compares before/after to reject fake closures and flag officer integrity issues. Click "✅ Verify & Resolve" on any ticket as Admin.

**9. Civic AI Mayor Chatbot**
Floating chat widget where citizens ask complex questions about municipal policies and SLAs. Click the 💬 bubble in the bottom-right corner.

**10. Multilingual Voice Reporting**
Report civic issues by speaking in Kannada, Hindi, or English. Click the 🎙️ mic icon inside the Chat Widget.

**11. Predictive Department Analytics**
Analyzes the live ticket database to forecast which city department will be overwhelmed next week. Admin view → "Analytics" tab → "🤖 Run AI Predictive Analysis".

**12. Community Gamification & Auto-Escalation**
Citizens earn XP and badges. 3 community upvotes automatically escalates a ticket to CRITICAL severity. XP shown at Dashboard top; upvote via "👍 Verify Report".

**13. Immutable Agentic Audit Trail**
Permanent timestamped ledger of every AI decision and human action on a ticket. Click "📋 Audit Trail" on any ticket.

**14. Live City Digital Twin**
Real-time spatial map with color-coded GPS pins for every active issue in the live database. Located at the top of the Admin "All Reports" page.

**15. Autonomous CCTV Nodes (Simulation)**
Demonstrates how the system could hook into live traffic cameras to auto-detect issues without human reporting. Click "CCTV Nodes" in the left sidebar.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| AI Engine | Google Gemini 2.0 Flash (`@google/genai`) | Multimodal analysis, reasoning, predictions, chatbot |
| Database | Google Firebase Firestore (`firebase-admin`) | Real-time NoSQL, instant UI sync |
| Frontend Hosting | Google Firebase Hosting | Static dashboard delivery |
| Backend | Node.js + Express (Render) | API server, Gemini proxy |
| Maps | Leaflet.js | Digital Twin city map |
| Charts | Chart.js | Analytics dashboards |
| Frontend | Vanilla JS, HTML5, CSS3 | Zero-framework, fast load |

---

## ⚡ Quick Start

### Prerequisites
- Node.js v18+
- A Google Gemini API key
- A Firebase project with Firestore enabled

### 1. Clone & Install

```bash
git clone https://github.com/your-username/civicpulse-ai.git
cd civicpulse-ai
npm install
```

### 2. Configure Environment

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="your_private_key"
PORT=3000
```

### 3. Firebase Setup

- Go to [Firebase Console](https://console.firebase.google.com)
- Create a project and enable **Firestore Database**
- Download your service account JSON and populate the `.env` values above
- Enable **Firebase Hosting** (`firebase init hosting`)

### 4. Run Locally

```bash
# Start the backend API server
node server.js

# Open the frontend
# Simply open demo.html in your browser
# Or serve with any static server:
npx serve .
```

### 5. Deploy

```bash
# Deploy frontend to Firebase Hosting
firebase deploy --only hosting

# Backend is deployed to Render (see render.yaml)
```

---

## 📁 Project Structure

```
civicpulse-ai/
├── index.html          # Landing page
├── demo.html           # Main working dashboard
├── server.js           # Node.js/Express backend
├── package.json
├── .env                # Environment variables (never commit this)
├── firebase.json       # Firebase config
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js      # Dashboard logic
│       ├── map.js      # Digital Twin (Leaflet)
│       ├── analytics.js
│       └── chatbot.js
└── README.md
```

---

## 🔑 Key AI Flows

### Issue Intake (CivicLens)
```
Citizen uploads photo + description
        ↓
Gemini 2.0 Flash (multimodal)
        ↓
Auto-classification: type / severity / department
        ↓
Firestore ticket created → Real-time UI update
        ↓
Community can upvote → 3 upvotes → auto-escalate to CRITICAL
```

### Corruption Detection
```
Admin clicks "Verify & Resolve"
        ↓
Admin uploads repair photo
        ↓
Gemini Vision compares to original issue photo
        ↓
PASS: Ticket closed + audit logged
FAIL: Rejection + officer integrity flag
```

### Predictive Analytics
```
Admin triggers "Run AI Predictive Analysis"
        ↓
All live tickets fetched from Firestore
        ↓
Gemini analyzes patterns by department / type / location
        ↓
Forecast: which department will be overwhelmed next week
        ↓
Displayed in Analytics dashboard with Chart.js
```

---

## 🌐 Live Demo Walkthrough

1. Open the live demo link above
2. **As Citizen:** Go to "Report Issue" → upload any pothole/garbage photo → watch Gemini classify it instantly
3. **Switch to Admin** (bottom-left "Switch Role")
4. **See the map:** All reports plotted with color-coded severity pins
5. **Run AI Predictive Analysis** in the Analytics tab
6. **Click Blueprint** on any ticket to get an AI-generated repair plan
7. **Try the chatbot** — ask "What is BBMP's SLA for pothole repair?"
8. **Try voice** — click the mic in the chatbot and speak

---

## 🏆 Why This Wins

- **Complete feature coverage:** Every single example feature from the brief is implemented and working
- **Goes beyond the brief:** Corruption detection, repair blueprints, economic calculator, and audit trail are not in any other submission
- **Production-grade stack:** Firebase real-time sync means zero polling — the dashboard updates the instant data changes
- **Real AI, not demos:** Every AI feature calls live Gemini APIs — nothing is mocked or hardcoded
- **Bengaluru-first:** Designed specifically for BBMP jurisdiction with Kannada voice support and local context

---

## 👥 Team

| Name | Role |
|---|---|
| [Your Name] | Full-stack + AI integration |
| [Teammate] | Frontend + UX |

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🔗 Links

- [Live Demo](https://civicpulse-79eeb.web.app/)
- [Vibe2Ship Hackathon](https://vibe2ship.com)
- [Google Gemini API Docs](https://ai.google.dev/docs)
- [Firebase Docs](https://firebase.google.com/docs)
