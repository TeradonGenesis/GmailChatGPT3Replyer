const fetch = require("node-fetch");
const API_ENDPOINT = 'https://api.openai.com/v1/completions';
const API_KEY = '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';

async function generateResponse(prompt) {
    const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: prompt,
            model: 'text-davinci-003',
            max_tokens: 2048,
            temperature: 0.7,
        })
    });

    const resp = await response.json();
    if(resp.choices && resp.choices.length > 0){
        console.log(resp.choices[0].text);
        return resp.choices[0].text;
    }else{
        throw new Error('Failed to generate code');
    }
}

export default generateResponse;
