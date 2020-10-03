
import nextConnect from 'next-connect';
import ApiValidator from '@middlewares/ApiValidator';
import { query } from 'express-validator';

import dbConnect from '@middlewares/dbConnect';
import AccessTokenParser from '@middlewares/AccessTokenParser';
import LoginRequired from '@middlewares/LoginRequired';

import Trivia from '@models/Trivia';
import TriviaTagRelation from '@models/TriviaTagRelation';
import TriviaAdmirationRelation from '@models/TriviaAdmirationRelation';
import User from '@models/User';

const handler = nextConnect();

dbConnect();

const validator = {
  get: [
    query('id').isMongoId(),
  ],
  delete: [
    query('id').isMongoId(),
  ],
};

handler.get(validator.get, ApiValidator, async(req, res) => {
  const { id } = req.query;

  try {
    const trivia = await Trivia.findOne({ _id: id }).populate({ path: 'creator', model: User });
    return res.status(200).send({ trivia });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

handler.delete(validator.delete, ApiValidator, AccessTokenParser, LoginRequired, async(req, res) => {
  const { id } = req.query;
  const { _id: userId } = req.user;

  try {
    await Promise.all([
      Trivia.findOneAndDelete({ _id: id, creator: userId }),
      TriviaTagRelation.deleteMany({ trivia: id }),
      TriviaAdmirationRelation.deleteMany({ trivia: id }),
    ]);
    return res.status(200).send({});
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});


export default handler;
