
import nextConnect from 'next-connect';

import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { body } from 'express-validator';

import dbConnect from '@middlewares/dbConnect';
import AccessTokenParser from '@middlewares/AccessTokenParser';
import LoginRequired from '@middlewares/LoginRequired';

import TriviaAdmirationRelation from '@models/TriviaAdmirationRelation';

const handler = nextConnect();

dbConnect();

validator.update = [
  body('count').isInt({ min: 1, max: 20 }),
];

handler.put(AccessTokenParser, LoginRequired, validator.update, ApiValidator, async(req, res) => {
  const { id } = req.query;
  const userId = req.user._id;
  const { count } = req.body;

  try {
    const data = await TriviaAdmirationRelation.updateOne({ user: userId, trivia: id }, { $set: { count } }, { upsert: true });
    return res.status(200).send({ data });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
