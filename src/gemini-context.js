export const generateQuote = (subject) => {
	const text = subject ?? "2026"
    return {
        contents: [{
            parts: [{
                text: `Provide a unique inspiring quote for ${subject} and return them in JSON object. JSON object must include subject, title, quote and image url for the subject. Do not include any text outside of the JSON object.`
            }]
        }]
    }
}