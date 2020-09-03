
import nextConnect from 'next-connect';

import ApiValidator from '@middlewares/ApiValidator';
import { body, query } from 'express-validator';

import dbConnect from '@middlewares/dbConnect';
import AccessTokenParser from '@middlewares/AccessTokenParser';
import LoginRequired from '@middlewares/LoginRequired';

import TriviaAdmirationRelation from '@models/TriviaAdmirationRelation';

const handler = nextConnect();

dbConnect();

const validator = {
  get: [
    query('id').isMongoId(),
  ],
  put: [
    query('id').isMongoId(),
    body('count').isInt({ min: 1, max: 20 }),
  ],
};

handler.get(AccessTokenParser, LoginRequired, validator.get, ApiValidator, async(req, res) => {
  const { id } = req.query;
  const userId = req.user?._id;

  try {
    const admiration = await TriviaAdmirationRelation.findOne({ user: userId, trivia: id });
    return res.status(200).send({ admiration });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

handler.put(AccessTokenParser, LoginRequired, validator.put, ApiValidator, async(req, res) => {
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
