# 🏙️ CivicPulse AI — The Autonomous "AI Mayor"

CivicPulse AI is a next-generation civic management dashboard designed to bridge the gap between citizens and municipal authorities (like the BBMP). It leverages powerful Google AI (Gemini 2.0 Flash) to autonomously verify, classify, prioritize, and manage urban infrastructure issues (potholes, garbage, waterlogging, etc.).

---

## 🚀 The Tech Stack (Google-Powered)
- **AI Engine:** **Google Gemini 2.0 Flash** via `@google/genai` (Handles all reasoning, multimodal image analysis, and analytics predictions).
- **Database:** **Google Firebase Firestore** (`firebase-admin`). Real-time NoSQL cloud database for instant UI syncing without refreshing the page.
- **Hosting / Deployment:** **Google Firebase Hosting** (for the frontend dashboard) & **Render** (Node.js/Express backend API).
- **Frontend UI:** Vanilla JS, HTML5, CSS3, Chart.js (for Analytics), Leaflet Maps (for the Digital Twin).

---

## 🌟 Exhaustive Feature Breakdown

Below is a meticulous breakdown of every single feature, button, and mechanism inside the CivicPulse AI Dashboard.

### 1. Role-Based Access Control (RBAC) System
- **What it does:** The application dynamically switches between a Citizen's perspective and a Government Admin's perspective. Citizens can only see their own tickets, while Admins see the entire city's data.
- **Where it is located:** The **"Switch Role / Logout"** button at the bottom-left corner of the sidebar.
- **Tech Used Behind it:** `window.currentUserRole` in JavaScript, persisted in browser `localStorage`. The frontend filters the ticket feed dynamically based on the role.
- **Why we built it:** To protect the privacy of citizens reporting issues while giving complete omniscient control to municipal workers.

### 2. Gamification & Civic Points Leaderboard
- **What it does:** Gamifies civic engagement by rewarding citizens with XP points and Badges for participating in city maintenance.
- **Where it is located:** The top row of metric cards when logged in as a **Citizen**. It displays XP (e.g., "1,450 XP"), the user's Badge (e.g., "Silver Contributor"), and their Rank in the ward.
- **Tech Used Behind it:** DOM manipulation that calculates XP based on the number of tickets the user has successfully submitted to Firestore.
- **Why we built it:** To incentivize civic engagement. If fixing the city feels like a rewarding game, citizens will actively participate rather than feeling apathetic.

### 3. Voice Reporting (Multilingual Speech-to-Text)
- **What it does:** Allows a citizen to report an issue just by speaking into their device in their native language (e.g., Kannada, Hindi, English). The system instantly converts the speech to text and fills out the report description.
- **Where it is located:** The floating **💬 Chat Widget** in the bottom right corner of the screen. Inside the chat window, click the **🎙️ Mic Icon** next to the send button.
- **Tech Used Behind it:** HTML5 Web Speech API (`SpeechRecognition`).
- **Why we built it:** To bridge the digital divide. Elderly citizens or those who cannot type long descriptions on smartphones can simply speak to report a broken street light.

### 4. Multimodal AI Issue Verification (CivicLens)
- **What it does:** When a user uploads a photo of an issue and types a description, the AI analyzes *both* the photo and text simultaneously. It verifies if it's a real issue, extracts the severity (Low/Medium/High/Critical), assigns it to the correct department (e.g., "Public Works"), and writes a professional summary.
- **Where it is located:** The **"Report Issue"** form (accessible via the main menu). Click the upload area to add an image, write a description, and click **"Submit to AI Pipeline"**.
- **Tech Used Behind it:** Google Gemini 2.0 Flash (`generateContent`). The backend sends the Base64 image and text to Gemini with a highly specific system prompt using `responseMimeType: "application/json"`.
- **Why we built it:** To eliminate fake/spam reports (like someone uploading a picture of a cat instead of a pothole) and to automate the manual triage process that slows down government response times.

### 5. AI Repair Blueprint (Deep Dive)
- **What it does:** Generates a real-time, highly detailed civil engineering repair plan for a specific ticket. It outputs a Root Cause Analysis, an Estimated Cost (in INR ₹), Required Materials, and a Step-by-Step execution plan.
- **Where it is located:** The purple **"🔍 Blueprint"** button on every single ticket in the "All Reports" / "My Reports" feed.
- **Tech Used Behind it:** Google Gemini 2.0 Flash. The backend (`/api/blueprint`) sends the ticket details to Gemini and asks it to roleplay as a senior Civil Engineer.
- **Why we built it:** To transition the app from just being an "issue tracker" to an "actionable solution generator." It tells municipal workers exactly *how* to fix the problem and *what* it will cost.

### 6. Predictive Department Analytics (AI Insights)
- **What it does:** The AI analyzes the city's entire live database of tickets to calculate the workload of all departments (Roads, SWM, Water). It then predicts which department will become overwhelmed next week and suggests proactive strategies.
- **Where it is located:** Log in as **Admin**. Click the **"📈 Analytics"** tab on the left sidebar. Click the large purple **"🤖 Run AI Predictive Analysis"** button at the top right of the screen.
- **Tech Used Behind it:** Firestore aggregation queries + Google Gemini 2.0 Flash (`/api/department-insights`). The backend counts the tickets by department, converts it to JSON, and asks Gemini to act as a Municipal Strategist to generate predictive HTML insights.
- **Why we built it:** To transition city governance from *reactive* (fixing things after they break) to *proactive* (allocating resources before a crisis happens).

### 7. Immutable Citizen Audit Trail
- **What it does:** Tracks the exact, unchangeable timeline of a ticket. It shows precisely when the citizen reported it, when the AI verified it, and exactly how long it has been sitting open.
- **Where it is located:** The **"📋 Audit Trail"** (or Agentic Trace) button located on the top right of every ticket card.
- **Tech Used Behind it:** Timestamped arrays stored directly inside the Firestore NoSQL document for each ticket.
- **Why we built it:** To enforce absolute transparency and combat municipal corruption. Citizens can hold officers accountable by proving how long a ticket has been ignored.

### 8. Community Upvoting & Auto-Escalation
- **What it does:** Allows other citizens to verify and upvote an existing report. If a single ticket receives **3 upvotes**, the system automatically forces the severity to `CRITICAL` and flags it for immediate government attention.
- **Where it is located:** The **"👍 Verify & Resolve"** button located at the bottom of an open ticket (visible when a user views a ticket).
- **Tech Used Behind it:** Firebase Firestore `FieldValue.increment(1)`. The backend (`/api/upvote`) increments the counter and automatically updates the `severity` field to 'critical' if the threshold is met.
- **Why we built it:** To democratize issue prioritization. If the community cares about a specific pothole, the system automatically forces the government to care about it too, without human intervention.

### 9. Digital Twin Map
- **What it does:** Plots all reported issues visually on a city map using GPS coordinates.
- **Where it is located:** The top of the **Admin Dashboard** view (above the ticket feed).
- **Tech Used Behind it:** Leaflet.js (An open-source mapping engine used as a reliable fallback to prevent Google Maps API billing/crashing issues during a live hackathon presentation).
- **Why we built it:** A spatial view helps admins group repairs geographically (e.g., sending one truck to fix 5 potholes on the exact same street rather than making 5 separate trips).

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
