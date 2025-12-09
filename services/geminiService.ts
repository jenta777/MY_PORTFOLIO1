import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini
// Note: In a real production app, ensure process.env.API_KEY is defined in your build environment.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const PORTFOLIO_CONTEXT = `
You are "Alex's Digital Twin", an AI assistant embedded in the portfolio website of Alex Morgan.
Alex is a Creative Frontend Engineer with 2.3 years of experience specializing in React, TypeScript, and UI/UX Design.

Key Information about Alex:
- Role: Frontend Engineer & UI/UX Designer
- Experience: 2.3 Years
- Tech Stack: React, TypeScript, Tailwind CSS, Node.js, Next.js, Figma, Framer Motion.
- Location: San Francisco, CA (Remote capable)
- Philosophy: "Bridging the gap between design and engineering with pixel-perfect code."
- Education: BS in Computer Science.
- Current Status: Open for freelance and full-time opportunities.
- Contact: alex.morgan@example.com

Your tone should be professional, enthusiastic, and concise. 
If asked about contact info, provide the email.
If asked about specific projects, mention that they are listed in the 'Projects' section of this site.
Always keep answers under 100 words unless asked for a detailed explanation.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode without an API key. In a full deployment, I would answer using the Gemini API!";
  }

  try {
    const model = ai.models;
    
    const response: GenerateContentResponse = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: PORTFOLIO_CONTEXT }] }, // System context as first user msg for simple context setting in single turn or stateless feel
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for fast chat response
      }
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to my brain. Please try again later.";
  }
};