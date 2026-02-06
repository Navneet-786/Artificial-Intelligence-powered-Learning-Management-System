import { GoogleGenAI } from "@google/genai";

export async function generateCourse({ topic, courseType, difficultyLevel }) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const model = "gemini-3-flash-preview";

  const prompt = `
You are an API.
Return ONLY valid JSON.
DO NOT include markdown.
DO NOT include explanations.
DO NOT include backticks.

Schema:
{
  "course_info": {},
  "chapters": []
}

Topic: ${topic}
Course Type: ${courseType}
Difficulty: ${difficultyLevel}
`;
  const result = await ai.models.generateContent({
    model,
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  //  IMPORTANT: Clean text
  const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No text returned from Gemini");
  }
  console.log(text);
  const data = JSON.parse(text);
  console.log("ai res: ", data);
  return data;
}
