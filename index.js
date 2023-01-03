// 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

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "YOUR_ORG_ID",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log(response.data.choices[0].text)
}

callApi();