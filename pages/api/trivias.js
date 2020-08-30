
import nextConnect from 'next-connect';
import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { body, query } from 'express-validator';

import Trivia from '@models/Trivia';
import dbConnect from '@middlewares/dbConnect';
import AccessTokenParser from '@middlewares/AccessTokenParser';
import LoginRequired from '../../lib/middlewares/LoginRequired';

const handler = nextConnect();

dbConnect();

validator.paginate = [
  query('page').isInt({ min: 1 }),
];

validator.summary = [
  body('forwardText').isString().isLength({ min: 1, max: 40 }).withMessage('前の文は 40 文字以下です'),
  body('backwardText').isString().isLength({ min: 1, max: 40 }).withMessage('後ろの文は 40 文字以下です'),
];

handler.post(validator.summary, ApiValidator, AccessTokenParser, LoginRequired, async(req, res) => {
  const { forwardText, backwardText } = req.body;
  const creator = req.user._id;

  try {
    const trivia = new Trivia({ forwardText, backwardText, creator });
    const createdTrivia = await trivia.save();
    return res.status(200).send({ createdTrivia });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
