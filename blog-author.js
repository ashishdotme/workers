export default {
    async fetch(request, env) {
        const body = await request.json();
        let chat = {
            messages: [
                {
                    role: 'system', content: `
            You're a veteran writer with experience writing highly engaging
             blog posts without fluff.
            Write an blog post from the user-provided text geared towards our
            audience of software engineers. Don't use cheesy phrases or terminology, keep your article
             straight to the point, have some fun with voice and tone but don't get too creative.
              Draw inspiration from other successful articles on this topic.` },
                { role: 'user', content: body["text"] }
            ]
        };
        var response = await env.AI.run('@cf/meta/llama-3.1-70b-instruct', chat);
        return Response.json(response);
    }
};