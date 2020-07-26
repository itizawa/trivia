
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

handler.get(validator.paginate, ApiValidator, async(req, res) => {
  const options = {
    page: req.query.page || 1,
    limit: 10,
  };

  try {
    const trivias = await Trivia.paginate({}, options);
    const { docs } = trivias;
    return res.status(200).send({ docs });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

handler.post(validator.summary, ApiValidator, AccessTokenParser, LoginRequired, async(req, res) => {
  const { forwardText, backwardText } = req.body;
  const creatorId = req.user._id;

  try {
    const trivia = new Trivia({ forwardText, backwardText, creatorId });
    const createdTrivia = await trivia.save();
    return res.status(200).send({ createdTrivia });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
