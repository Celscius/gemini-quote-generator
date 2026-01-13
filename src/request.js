/**
 * request handler
 * @param {object} geminiConfig - The model URL and api key to access gemini api
 * @param {object} context - context for gemini api that used for send request (method, body, headers, etc.)
 * @return {object} 
 */
export async function request(geminiConfig, context) {
  const { API_KEY, geminiModel } = geminiConfig;
  if (!API_KEY) { throw new Error('api key config is not exist')}
  if (!context) { throw new Error('context for gemini not exist')}

  const geminiFlash_2_5 = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=`
  const model = geminiModel ?? geminiFlash_2_5
  
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(context)
  };

  try {
    const response = await fetch(`${model}${API_KEY}`, config);
    
    if (response.status === 400) {
        console.log(response)
        throw new Error("Invalid API key. Check your api key in : https://aistudio.google.com/api-keys.");
    }

    if (response.status === 429) {
        console.log(response)
        throw new Error('you hit your quota limit, try again later or next day.');
    }

    if (response.status === 503) {
        console.log(response)
        throw new Error('gemini server handling way too many request on the server, try again later');
    }

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(errorBody.message || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Extract the text content
    const rawText = data.candidates[0].content.parts[0].text;
    
    // Clean JSON from noise
    const cleanJson = rawText.replace(/```json|```/g, "").trim();
    const quoteObj = JSON.parse(cleanJson);
    
    return quoteObj;

  } catch (error) {
    console.log(error)
    throw error; 
  }
}

