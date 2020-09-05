
import nextConnect from 'next-connect';
import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { query } from 'express-validator';

import TriviaTagRelation from '@models/TriviaTagRelation';
import Trivia from '@models/Trivia';
import dbConnect from '@middlewares/dbConnect';

const handler = nextConnect();

dbConnect();

validator.paginate = [
  query('page').isInt({ min: 1 }),
  query('id').isMongoId(),
];

handler.get(validator.paginate, ApiValidator, async(req, res) => {
  const tagId = req.query.id;

  const options = {
    page: req.query.page || 1,
    sort: { createdAt: -1 },
    limit: 10,
    populate: { path: 'trivia', model: Trivia },
  };

  try {
    const result = await TriviaTagRelation.paginate({ tag: tagId }, options);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});


export default handler;
