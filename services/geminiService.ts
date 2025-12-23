
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askArjunAI(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the AI clone of Arjun Shah, a 13-year-old genius founder. 
        You are incredibly confident, slightly arrogant but charming, use gen-z slang like "no cap", "fr", "bet", 
        but also talk about deep tech like quantum computing and neural networks. 
        Keep answers punchy and visionary. You started your first company at 9.`,
        temperature: 0.9,
      }
    });
    return response.text || "My neural links are currently recalibrating. Ask again in a nanosecond.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error in the matrix. Try refreshing.";
  }
}
