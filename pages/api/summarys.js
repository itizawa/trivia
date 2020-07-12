
import nextConnect from 'next-connect';
import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { body } from 'express-validator';

import Summary from '@models/Summary';
import dbConnect from '@middlewares/dbConnect';

const handler = nextConnect();

dbConnect();

validator.summary = [
  body('title').isString().isLength({ min: 1, max: 40 }).withMessage('タイトルは 40 文字以下です'),
  body('text').isString().isLength({ min: 5, max: 1000 }).withMessage('本文は 5文字以上、1000 文字以下です'),
];

handler.post(validator.summary, ApiValidator, async(req, res) => {
  const { title, text } = req.body;
  try {
    const summary = new Summary({ title, text });
    const createdSummary = await summary.save();
    return res.status(200).send({ createdSummary });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
