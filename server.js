const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini SDK with the API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/report', async (req, res) => {
  try {
    const { category, severity, description, language } = req.body;

    const prompt = `You are the "Reporter Agent" in the CivicPulse AI pipeline. 
Your job is to analyze a citizen's civic complaint and output structured JSON data to route the ticket to the right department.
Here are the inputs from the citizen:
- Category Selected: ${category}
- Severity Selected: ${severity}
- Language: ${language}
- Description: "${description}"

Based on the description, assess the true severity, calculate a priority score out of 100, and assign the appropriate ward/department.

Return ONLY a valid JSON object matching this structure:
{
  "extracted_category": "...",
  "assessed_severity": "low/medium/high/critical",
  "confidence_score": 0.0 to 1.0,
  "priority_score": 0 to 100,
  "ward_department": "...",
  "assigned_officer_mock": "...",
  "summary": "Brief 1-sentence summary"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const aiOutput = JSON.parse(response.text);
    res.json(aiOutput);

  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to process AI request" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`CivicPulse AI backend running on http://localhost:${PORT}`);
});
