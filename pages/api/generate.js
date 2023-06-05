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

function generatePrompt(inputprompt, tone, reciever) {
  return `
  Tanslate the following text into professional, corporate language 
  using ${tone} Tone and the message to be addressed to ${reciever}.
  The translated text will be be sent in an email format, it is important to 
  mention the context of the issue and how you want it to be addressed. Do not include a
  subject line and specifically start your response with the word 'Dear'.
  \n
  ${inputprompt}`;
}

