import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getPlanSuggestion(userData, retries = 3, delay = 1000) {
  const prompt = `
    Analyze the following healthcare data for a user and their dependents. Based on their claims history, recommend whether they should upgrade, downgrade, or keep their current "Health Shield Gold Plan." Provide a clear explanation for the recommendation.

    User Data: ${JSON.stringify(userData, null, 2)}

    Recommendation:
  `;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);

    if (error.status === 429 && retries > 0) {
      console.warn(`Retrying in ${delay / 1000} seconds due to 429 error...`);
      await new Promise(res => setTimeout(res, delay));
      return getPlanSuggestion(userData, retries - 1, delay * 2); // Exponential backoff
    }

    return "Could not generate a recommendation at this time.";
  }
}