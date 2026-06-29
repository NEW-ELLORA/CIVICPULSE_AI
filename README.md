# 🏙️ CivicPulse AI — The Autonomous "AI Mayor"

CivicPulse AI is a next-generation civic management dashboard designed to bridge the gap between citizens and municipal authorities (like the BBMP). It leverages powerful Google AI (Gemini 2.0 Flash) to autonomously verify, classify, prioritize, and manage urban infrastructure issues (potholes, garbage, waterlogging, etc.).

---

## 🚀 The Tech Stack (Google-Powered)
- **AI Engine:** **Google Gemini 2.0 Flash** via `@google/genai` (Handles all reasoning, multimodal image analysis, and analytics predictions).
- **Database:** **Google Firebase Firestore** (`firebase-admin`). Real-time NoSQL cloud database for instant UI syncing without refreshing the page.
- **Hosting / Deployment:** **Google Firebase Hosting** (for the frontend dashboard) & **Render** (Node.js/Express backend API).
- **Frontend UI:** Vanilla JS, HTML5, CSS3, Chart.js (for Analytics), Leaflet Maps (for the Digital Twin).

---

## 🌟 The 15 Core Features (Exhaustive Breakdown)

Below is a meticulous breakdown of all 15 features present across the entire website, including exactly where to find them and the tech behind them.

### 🌍 Phase 1: The Landing Page Experience (`index.html`)

**1. Interactive Demo Solutions Grid**
- **What it is:** Beautifully animated cards that explain the core problems with civic governance and exactly how your AI solves them.
- **Where it is:** Scroll down on `index.html` to the "See Every Problem Get Solved" section.

**2. "See It Work Live" Interactive Modules**
- **What it is:** Allows judges to click interactive demo buttons to understand your future vision without leaving the landing page.
- **Where it is:** Found on the landing page solutions grid (Buttons like: "Simulate Flood", "Ask AI Mayor", "Simulate Kannada Voice").

**3. Economic Impact Calculator**
- **What it is:** A dynamic section showing the projected financial savings for the city based on proactive AI intervention (e.g., "₹8.4 Cr Prevented Road Damage").
- **Where it is:** Scroll down to the "Economic Impact" section on `index.html`.

**4. Google Native Tech Stack Breakdown**
- **What it is:** A transparent table explaining exactly which Google Cloud technologies you used at every layer of the app.
- **Where it is:** At the very bottom of `index.html` in the "Tech Stack" section.

---

### 💻 Phase 2: The Working Dashboard (`demo.html`)

**5. Role-Based Access Control (RBAC)**
- **What it does:** Instantly toggles the UI between a Citizen's perspective (only their own tickets) and a Government Admin's perspective (city-wide overview).
- **Where it is located:** Click the **"Switch Role"** button at the bottom left of the sidebar.

**6. Multimodal AI Intake (CivicLens)**
- **What it does:** Users upload an image and description. Gemini 2.0 Flash automatically analyzes the image and text to classify the issue, assign severity, and route it to the correct department.
- **Where it is located:** The **"Report Issue"** tab.

**7. AI Repair Blueprints**
- **What it does:** Generates a real-time Civil Engineering repair plan with Root Cause Analysis, Estimated Costs (INR), and Materials Needed.
- **Where it is located:** Click the purple **"🔍 Blueprint"** button on any open ticket.

**8. Corruption Detection AI (Image Diffing)**
- **What it does:** When an Admin tries to resolve a ticket, they must upload a repair photo. Gemini Vision analyzes the photo to reject fake repairs and flag officer integrity.
- **Where it is located:** Click the green **"✅ Verify & Resolve"** button on a ticket as an Admin and upload a photo.

**9. Civic AI Mayor (Live Chatbot)**
- **What it does:** A floating chat widget where citizens can ask the AI complex questions about Bengaluru's municipal policies and SLAs.
- **Where it is located:** Click the floating **💬 chat bubble** in the bottom right corner of the screen.

**10. Multilingual Voice Reporting**
- **What it does:** Allows citizens to report a civic issue just by speaking into their device.
- **Where it is located:** Inside the Chat Widget, click the **🎙️ Mic** icon.

**11. Predictive Department Analytics**
- **What it does:** Analyzes the city's live database of tickets to predict which city department will be overwhelmed next week.
- **Where it is located:** In the Admin view, go to the **"Analytics"** tab and click **"🤖 Run AI Predictive Analysis"**.

**12. Community Gamification & Auto-Escalation**
- **What it does:** Citizens earn XP Points and Badges. If a ticket receives 3 community upvotes, the system automatically escalates it to "CRITICAL" severity.
- **Where it is located:** XP points are at the top of the **Dashboard**. Upvotes are done via the **"👍 Verify Report"** button on tickets.

**13. Immutable Agentic Trace (Audit Trail)**
- **What it does:** Provides a permanent, timestamped ledger of every AI decision and human action taken on a specific ticket.
- **Where it is located:** Click the **"📋 Audit Trail"** button on any ticket.

**14. Live City Digital Twin (Leaflet Map)**
- **What it does:** A real-time spatial map dropping color-coded GPS pins across the city for every active issue in the live database.
- **Where it is located:** At the top of the **"All Reports"** (Admin) page.

**15. Autonomous CCTV Nodes (Simulation)**
- **What it does:** A dedicated tab showing how the system could theoretically hook into live traffic cameras to auto-detect issues without human reporting.
- **Where it is located:** Click the **"CCTV Nodes"** tab in the left sidebar.

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
   Just double-click `demo.html` in your browser.
