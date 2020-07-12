
import nextConnect from 'next-connect';
import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { body } from 'express-validator';

import Summary from '@models/Summary';
import dbConnect from '@middlewares/dbConnect';

const handler = nextConnect();

dbConnect();

validator.summary = [
  body('title').isString().isLength({ min: 1, max: 40 }).withMessage('hoge'),
  body('text').isString().isLength({ min: 5, max: 1000 }).withMessage('hoge'),
];

handler.post(validator.summary, ApiValidator, async(req, res) => {
  const { title, text } = req.body;
  try {
    const newPost = new Summary({
      title,
      text,
    });
    await newPost.save();
    return res.status(200).send({});
  }
  catch (err) {
    console.log(err);
    return res.status(400).send({ success: false });
  }
});

export default handler;
