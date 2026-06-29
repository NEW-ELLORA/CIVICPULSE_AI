# 🏙️ CivicPulse AI — The Autonomous "AI Mayor"

CivicPulse AI is a next-generation civic management dashboard designed to bridge the gap between citizens and municipal authorities (like the BBMP). It leverages powerful Google AI (Gemini 2.0 Flash) to autonomously verify, classify, prioritize, and manage urban infrastructure issues (potholes, garbage, waterlogging, etc.).

---

## 🚀 The Tech Stack (Google-Powered)
- **AI Engine:** **Google Gemini 2.0 Flash** via `@google/genai` (Handles all reasoning, multimodal image analysis, and analytics predictions).
- **Database:** **Google Firebase Firestore** (`firebase-admin`). Real-time NoSQL cloud database for instant UI syncing without refreshing the page.
- **Hosting / Deployment:** **Google Firebase Hosting** (for the frontend dashboard) & **Render** (Node.js/Express backend API).
- **Frontend UI:** Vanilla JS, HTML5, CSS3, Chart.js (for Analytics), Leaflet Maps (for the Digital Twin).

---

## 🌟 Exhaustive Feature & UI Breakdown

Below is a meticulous breakdown of every single feature, menu item, and mechanism inside the CivicPulse AI Dashboard.

### 👥 1. Citizen & Admin Interconnection (Role-Based Access Control)
- **What it does:** The application dynamically switches between a Citizen's perspective and a Government Admin's perspective. When a Citizen reports an issue, the Admin instantly sees it on their global dashboard.
- **Where it is located:** The **"Switch Role / Logout"** button at the bottom-left corner of the sidebar.
- **Tech Used Behind it:** `window.currentUserRole` in JavaScript, persisted in browser `localStorage`.
- **Why we built it:** To protect the privacy of citizens reporting issues while giving complete omniscient control to municipal workers.

### 📊 2. Dashboard (Main Landing)
- **What it does:** The home screen provides high-level metric cards (Total Reports, Critical Issues, Open Tickets, Average Priority Score). For citizens, it also displays their **Gamification Leaderboard** (XP points and badges for reporting issues).
- **Where it is located:** **"Dashboard"** tab on the left sidebar.
- **Why we built it:** To give users an instant pulse check on their civic contributions.

### 📁 3. My Reports / All Reports
- **What it does:** This is the core ticket feed. Citizens only see their own tickets, while Admins see a live feed of all tickets across the city.
- **Where it is located:** **"All Reports"** (or **"My Reports"**) tab on the left sidebar.
- **Why we built it:** To provide a central hub for tracking civic issues. Includes the **"Report Issue"** button where users upload photos for the Multimodal AI to verify.

### 🏛️ 4. Civic AI Mayor (Interactive Chat)
- **What it does:** A specialized AI agent loaded with city governance policies. You can ask it questions about infrastructure policy and it will answer based on municipal guidelines.
- **Where it is located:** On the main landing page (`index.html`) under the **"Civic AI Mayor"** section, click the **"🏛️ Ask AI Mayor"** button.
- **Why we built it:** To democratize information. Instead of digging through 100-page PDF government documents, citizens can just ask the AI Mayor why a certain road is taking so long to fix.

### 💬 5. Chat Session (Multilingual Voice Reporting)
- **What it does:** Allows a citizen to report an issue just by speaking into their device in their native language (e.g., Kannada, Hindi, English). The system instantly converts the speech to text.
- **Where it is located:** The floating **💬 Chat Widget** in the bottom right corner of the dashboard screen. Inside the chat window, click the **🎙️ Mic Icon** next to the send button.
- **Why we built it:** To bridge the digital divide for elderly citizens or those who cannot type long descriptions on smartphones.

### 📷 6. CCTV Nodes (Auto-Detection)
- **What it does:** A simulated feed of city-wide CCTV cameras. It demonstrates how CivicPulse AI can hook into live traffic cameras to automatically detect potholes and garbage dumping without a human ever reporting it.
- **Where it is located:** **"CCTV Nodes"** tab on the left sidebar.
- **Why we built it:** To prove that our pipeline is capable of fully autonomous edge-detection in a smart-city ecosystem.

### 📈 7. Analytics (Predictive AI Insights)
- **What it does:** The AI analyzes the city's entire live database of tickets to calculate the workload of all departments (Roads, SWM, Water). It predicts which department will become overwhelmed next week.
- **Where it is located:** Log in as **Admin**. Click the **"📈 Analytics"** tab on the left sidebar. Click the large purple **"🤖 Run AI Predictive Analysis"** button at the top right.
- **Why we built it:** To transition city governance from *reactive* (fixing things after they break) to *proactive* (allocating resources before a crisis happens).

### 👮 8. Officers Tab
- **What it does:** Displays a leaderboard of municipal officers, ranking them by their resolution speed, SLA compliance, and integrity score.
- **Where it is located:** **"Officers"** tab on the left sidebar.
- **Why we built it:** To inject accountability into the government workflow.

### 🚔 9. Corruption Detection AI
- **What it does:** An AI layer that detects anomalies in officer behavior. By using Gemini Vision to diff before/after resolution photos, it can automatically detect if an officer is faking a ticket closure. It calculates an Integrity Risk Score per officer.
- **Where it is located:** On the main landing page (`index.html`) under the **"Corruption Detection AI"** section, click the **"🚔 Simulate Fake Closure"** button.
- **Why we built it:** To combat systemic corruption where government workers mark jobs as 'resolved' without actually fixing the problem.

### 🔍 10. AI Repair Blueprint
- **What it does:** Generates a real-time, highly detailed civil engineering repair plan for a specific ticket. It outputs a Root Cause Analysis, an Estimated Cost (in INR ₹), Required Materials, and a Step-by-Step execution plan.
- **Where it is located:** The purple **"🔍 Blueprint"** button on every single ticket inside the Dashboard.
- **Why we built it:** To transition the app from just being an "issue tracker" to an "actionable solution generator." It tells municipal workers exactly *how* to fix the problem and *what* it will cost.

### 🧠 11. Agentic Trace (Immutable Audit Trail)
- **What it does:** Tracks the exact, unchangeable timeline of a ticket. It shows precisely when the citizen reported it, when the AI verified it, and exactly how long it has been sitting open.
- **Where it is located:** The **"🤖 Agentic Trace"** (or Audit Trail) button located on the top right of every ticket card.
- **Why we built it:** To enforce absolute transparency and combat municipal corruption.

### 🌊 12. Simulate Flood (Disaster Mode)
- **What it does:** A stress-test button that instantly floods the database with dozens of critical waterlogging tickets. This proves that our AI pipeline can handle mass-scale crisis events without crashing.
- **Where it is located:** Found on the main marketing landing page (`index.html`) under the "Disaster Mode" section, click the **"🌊 Simulate Flood Trigger"** button.
- **Why we built it:** To prove system reliability during monsoons and disasters.

### 🤖 13. The 5-Agent Pipeline
- **What it does:** The core intelligence backbone of the app. It consists of 5 distinct AI personas working in tandem:
  1. **Intake Agent:** Parses the citizen's photo and text.
  2. **Triage Agent:** Determines severity (Low/Medium/High/Critical).
  3. **Routing Agent:** Assigns the ticket to the correct department (e.g., Public Works).
  4. **Engineering Agent:** Generates the AI Repair Blueprint.
  5. **Strategy Agent:** Generates the Predictive Analytics report for the Mayor.
- **Where it is located:** Running invisibly in the Node.js backend (`server.js`), powered by Gemini 2.0 Flash.

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
