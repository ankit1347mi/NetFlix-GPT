import OpenAI from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
console.log(apiKey);

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
