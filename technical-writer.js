export default {
    async fetch(request, env) {
        const body = await request.json();
        let chat = {
            messages: [
                {
                    role: 'system', content: `Act as a technical writer. You will serve as a creative and engaging technical writer, 
                    creating a blog on how to perform various tasks using technology. I will provide you with a basic blog outline,
                     and you will come up with an engaging blog post.`
                },
                { role: 'user', content: body["text"] }
            ]
        };
        var response = await env.AI.run('@cf/meta/llama-3.1-70b-instruct', chat);
        return Response.json(response);
    }
};