const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');
process.env.IBM_CREDENTIALS_FILE = './.env';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//these are the parameters that need to be passed to the watsonxAIService.generateText() function. 
const params = {
  input: 'How far is Paris from Bangalore?',
  modelId: 'ibm/granite-13b-chat-v2',
  projectId: '0babe918-b3ea-44b1-8c68-ac854b4f160e',
  parameters: {
    max_new_tokens: 100,
  },
};


// Create a new instance of the WatsonXAI service
const watsonxAIService = WatsonXAI.newInstance({
  version: '2024-05-31',
  serviceUrl: 'https://us-south.ml.cloud.ibm.com',
});


// Example of calling the WatsonXAI service to generate text with the specified constant parameters above
app.get('/api/message', async (req, res) => {
  try {
    const watsonResponse = await watsonxAIService.generateText(params);
    const generatedText = watsonResponse.result.results[0].generated_text;
    res.json({ message: generatedText });
  } catch (err) {
    console.error('Error generating text:', err);
    res.status(500).json({ error: 'Failed to generate text' });
  }
});


// The server has started running message
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});