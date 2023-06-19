import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const inputprompt = req.body.prompt || '';
  const tone = req.body.tone || '';
  const reciever = req.body.reciever || '';
  
  if (inputprompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a prompt",
      }
    });
    return;
  } 

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(inputprompt, tone, reciever),
      temperature: 0.6,
      max_tokens: 200
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(inputprompt, tone, receiver) {
  return `
As an AI language model developed by OpenAI known as EmailTextTransformer GPT, your role is to transform the input prompt into a professional, corporate language. The transformed text should:

1. Use a ${tone} Tone.
2. Be addressed to ${receiver}.
3. Be presented in an email format (excluding the subject line).
4. Start with the word 'Dear'.
5. Mention the context of the issue.
6. Explain how you want the issue to be addressed.

Now, please translate the following text in the same manner:
Text """${inputprompt} """`;
}

