
import nextConnect from 'next-connect';
import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { body } from 'express-validator';

import Trivia from '@models/Trivia';
import dbConnect from '@middlewares/dbConnect';

const handler = nextConnect();

dbConnect();

validator.summary = [
  body('forwardText').isString().isLength({ min: 1, max: 40 }).withMessage('タイトルは 40 文字以下です'),
  body('backwardText').isString().isLength({ min: 1, max: 40 }).withMessage('タイトルは 40 文字以下です'),
  body('userName').isString().isLength({ min: 1, max: 40 }).withMessage('タイトルは 40 文字以下です'),
];

handler.post(validator.summary, ApiValidator, async(req, res) => {
  const { forwardText, backwardText, userName } = req.body;
  try {
    const trivia = new Trivia({ forwardText, backwardText, userName });
    const createdTrivia = await trivia.save();
    return res.status(200).send({ createdTrivia });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
