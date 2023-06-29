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

app.post('/recipe', async (res, req) => {

  const prompt = req.body.prompt;

  //change this create image method
  const aiResponse = await openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024'
  })

  const image = aiResponse.data.data[0].url;
  res.send({ image });
});

app.listen(8080, () => console.log('Running on port https://localhost:8080'));