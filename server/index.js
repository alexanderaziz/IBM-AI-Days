const { WatsonXAI } = require("@ibm-cloud/watsonx-ai");

process.env.IBM_CREDENTIALS_FILE = "./.env";
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const base_messages = [
  {
    role: "system",
    content: "You are a story teller. You will tell a story based on the following prompt: 'I am a 20-year-old living in an apartment on the ground floor. There is a category 5 hurricane approaching in two days. I need to prepare for the hurricane and make the right choices if the power goes out or my apartment is flooded.' Based on this prompt, generate a scenario and allow me to input my next action. Based on this action, generate what happens next until I need to make another choice. The outcomes should reward me for following advice from trusted government agencies such as the CDC or National Weather Service on what to do in a hurricane. If my responses are humanly impossible, let me know and tell me to pick another choice. The story ends when the hurricane has passed. Now, ask me for my game character's name and if I want to start the game, then start when I input my name",

  },
  {
    role: "assistant",
    content:
      "Welcome to the Rainfall Preparation Generative AI game! In this game, you will be immersed in a world where you will have to prepare for a upcoming category 5 hurricane. I will present you a scenario and let you choose your actions. Together, we will build a story about preparing for the storm and making the right choices. Try to follow advice from trusted agencies like the National Weather Service",
  },
];

let messages = [...base_messages];




//these are the parameters that need to be passed to the watsonxAIService.generateText() function.
const params = {
  modelId: "meta-llama/llama-3-8b-instruct",
  projectId: "0babe918-b3ea-44b1-8c68-ac854b4f160e",
  maxTokens: 1000,
};

// Create a new instance of the WatsonXAI service
const watsonxAIService = WatsonXAI.newInstance({
  version: "2024-05-31",
  serviceUrl: "https://us-south.ml.cloud.ibm.com",
});


app.post("/api/prompt", async (req, res) => {
  messages.push(
    {
      role: "user",
      content: [
        {
          type: "text",
          text: req.body.text,
        },
      ],
    });

  watsonxAIService
    .textChat({ messages, ...params })
    .then(async ({ result }) => {
      res.json({ message: result.choices?.[0].message.content });
      messages.push(
        {
          role: "assistant",
          content: result.choices?.[0].message.content,
        });
    })
    .catch((err) => {
      console.error("Error generating text:", err);
      res.status(500).json({ error: "Failed to generate text" });
      console.log(messages);
    });


});

app.get("/api/history", async (req, res) => {
  try{
    res.json({history: messages})
  }catch (err){
    console.log(err);
    res.status(200).json(err);
  }
})

app.delete("/api/history", async (req, res) => {
  try {
    messages = [...base_messages];
    res.json({ message: "History cleared successfully" });
  } catch (err) {
    console.error("Error clearing history:", err);
    res.status(500).json({ error: "Failed to clear history" });
  }
});

// The server has started running message
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
