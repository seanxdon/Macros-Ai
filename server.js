import * as dotenv from 'dotenv';
dotenv.config();

import { Configuration,OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});

const openai = new OpenAIApi(configuration);

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/recipe', async (req, res) => {

  const prompt = req.body.prompt

  //change this create image method
  const aiResponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: prompt }],
  })

  const aiRecipe = aiResponse.data.choices[0].message.content;
  res.send({ aiRecipe });
});

app.listen(8080, () => console.log('Running on port https://localhost:8080/recipe'));