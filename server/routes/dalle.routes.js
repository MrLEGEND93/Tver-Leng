import express from 'express';
import * as dotenv from 'dotenv';
import OpenAIApi from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAIApi(process.env.OPENAI_API_KEY);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      model: 'dall-e-2',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data[0].b64_json;
    // console.log(response.data[0]);

    res.status(200).json({ photo: image });
    // res.status(200).json({ message: `Prompt: ${prompt} Image: ${image}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;