# 🏙️ CivicPulse AI — The Autonomous "AI Mayor"

CivicPulse AI is a next-generation civic management dashboard designed to bridge the gap between citizens and municipal authorities (like the BBMP). It leverages powerful Google AI (Gemini 2.0 Flash) to autonomously verify, classify, prioritize, and manage urban infrastructure issues (potholes, garbage, waterlogging, etc.).

---

## 🚀 The Tech Stack (Google-Powered)
- **AI Brain:** Google Gemini 2.0 Flash via `@google/genai` (Handles all reasoning, multimodal image analysis, and predictions).
- **Database:** Google Firebase Firestore (Real-time NoSQL cloud database for instant UI syncing).
- **Hosting / Deployment:** Google Firebase Hosting (Frontend) & Render (Node.js/Express Backend).
- **Frontend UI:** Vanilla JS, HTML5, CSS3, Chart.js (for Analytics), Leaflet Maps.

---

## 🌟 Detailed Features & Architecture

### 1. Multimodal AI Issue Verification (CivicLens)
- **What it does:** Citizens upload a photo of an issue (e.g., a pothole) and type a short description. The AI analyzes the photo and text *together* to verify if it's a real issue, extracts the severity, assigns it to a municipal department, and writes a professional summary.
- **Where it is located:** "All Reports" / "Report Issue" module. Backend: `/api/report` in `server.js`.
- **Tech Used Behind it:** Gemini 2.0 Flash (`generateContent`). We use a highly specific prompt with `responseMimeType: "application/json"` to force the AI to return structured data.
- **Why we built it:** To eliminate fake spam reports and automate the grueling manual triage process for government workers. 

### 2. AI Repair Blueprint (Deep Dive)
- **What it does:** Generates a real-time, highly detailed civil engineering repair plan for any reported issue. It outputs Root Cause Analysis, Estimated Cost (INR), Materials Needed, and a Step-by-Step execution plan.
- **Where it is located:** The purple **"🔍 Blueprint"** button on every ticket in the dashboard. Backend: `/api/blueprint` in `server.js`.
- **Tech Used Behind it:** Gemini 2.0 Flash with a system prompt roleplaying as a senior civil engineer.
- **Why we built it:** To not just report problems, but actively provide the municipal workers with the exact technical steps and budgets to fix them immediately.

### 3. Predictive Department Analytics (AI Insights)
- **What it does:** The AI ingests the entire city's live ticket database, analyzes the workload of all departments (Roads, SWM, Water), and predicts which department will become overwhelmed next week.
- **Where it is located:** Admin Dashboard -> **📈 Analytics** tab -> **🤖 Run AI Predictive Analysis** button. Backend: `/api/department-insights`.
- **Tech Used Behind it:** Firestore aggregation queries + Gemini 2.0 Flash. The backend counts the tickets, converts the stats into a JSON payload, and asks Gemini to act as a Municipal Strategist to generate predictive insights.
- **Why we built it:** To transition city governance from *reactive* (fixing things after they break) to *proactive* (allocating resources before a crisis happens).

### 4. Role-Based Access Control (RBAC)
- **What it does:** Separates the view into two distinct experiences. 
  - **Citizen View:** Can only see their *own* reported issues. Has access to the Gamification Leaderboard.
  - **Admin View:** Sees all city-wide issues, the Digital Twin Map, and Department Analytics.
- **Where it is located:** The "Switch Role / Logout" button at the bottom left. Powered by `window.currentUserRole` and `localStorage` in `demo.html`.
- **Why we built it:** To protect data privacy for citizens while giving absolute omniscient control to the government authorities.

### 5. Community Upvoting & Auto-Escalation
- **What it does:** Allows citizens to verify each other's reports. If a ticket receives 3 upvotes, the system automatically escalates the severity to `CRITICAL`.
- **Where it is located:** The **"👍 Verify & Resolve"** button on open tickets. Backend: `/api/upvote` in `server.js`.
- **Tech Used Behind it:** Firestore `FieldValue.increment(1)`.
- **Why we built it:** To democratize issue prioritization. If the community cares about a pothole, the system automatically forces the government to care about it too.

### 6. Voice Reporting (Multilingual)
- **What it does:** Allows citizens to speak their report instead of typing it. 
- **Where it is located:** The **🎙️ Mic icon** in the bottom right chat widget in `demo.html`.
- **Tech Used Behind it:** HTML5 Web Speech API (`SpeechRecognition`).
- **Why we built it:** To make civic reporting accessible to all demographics, including the elderly or visually impaired, without requiring them to type long descriptions.

### 7. Immutable Citizen Audit Trail
- **What it does:** Tracks the exact timeline of a ticket—from when the citizen reported it, to when the AI verified it, to when it was resolved.
- **Where it is located:** The **"📋 Audit Trail / Agentic Trace"** button on tickets.
- **Tech Used Behind it:** Arrays of timestamped logs stored in Firestore for each document.
- **Why we built it:** To enforce absolute transparency and combat municipal corruption. Citizens can hold officers accountable by seeing exactly how long a ticket has been sitting in the system.

### 8. Gamification & Civic Points Leaderboard
- **What it does:** Rewards citizens with XP points and digital badges for reporting real issues and verifying other people's reports.
- **Where it is located:** Citizen Dashboard view (Top metrics cards).
- **Tech Used Behind it:** Vanilla JS DOM manipulation tying into the user's report count in Firestore.
- **Why we built it:** To incentivize civic engagement. Making city improvement fun increases participation.

### 9. Digital Twin Map (Leaflet)
- **What it does:** Plots all reported issues visually on a city map.
- **Where it is located:** Admin Dashboard view.
- **Tech Used Behind it:** Leaflet.js (Open-source mapping fallback to prevent Google Maps API billing/crashing issues during the hackathon).
- **Why we built it:** A spatial view helps admins group repairs geographically (e.g., sending one truck to fix 5 potholes on the same street).

---

## 🛠️ How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Start the Backend:**
   ```bash
   node server.js
   ```
3. **Open the Frontend:**
   Just double-click `demo.html` in your browser (or use VS Code Live Server). Make sure you update the `fetch` endpoints in `demo.html` to point to `http://localhost:5000` if you want to test completely locally!
