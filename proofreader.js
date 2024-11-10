export default {
    async fetch(request, env) {
        const body = await request.json();
        let chat = {
            messages: [
                {
                    role: 'system', content: `As a newspaper editor, your task is to review user-provided text and fix grammar, spelling corrections and improve clarity. Follow these guidelines:
          1. Correct misspelled words to their proper spelling.
          2. Correct any grammatical errors.
          3. Rephrase and improve the clarity of the text.
          4. Preserve all new line characters.
          5. The input text may range from a single word to multiple paragraphs. Apply the same rules regardless of length.
          6. Return only the corrected text, without any additional comments or explanations.
          
          IMPORTANT: Return only the corrected text.` },
                { role: 'user', content: body["text"] }
            ]
        };
        var response = await env.AI.run('@cf/meta/llama-3.1-70b-instruct', chat);
        return Response.json(response);
    }
};