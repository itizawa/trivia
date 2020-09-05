
import nextConnect from 'next-connect';

import ApiValidator from '@middlewares/ApiValidator';
import { query } from 'express-validator';

import dbConnect from '@middlewares/dbConnect';

import TriviaTagRelation from '@models/TriviaTagRelation';

const handler = nextConnect();

dbConnect();

const validator = {
  get: [
    query('id').isMongoId(),
  ],
};

handler.get(validator.get, ApiValidator, async(req, res) => {
  const triviaId = req.query.id;

  try {
    const tags = await TriviaTagRelation.find({ trivia: triviaId });
    return res.status(200).send({ tags });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
