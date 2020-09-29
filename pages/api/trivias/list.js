
import nextConnect from 'next-connect';
import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { query } from 'express-validator';

import Trivia from '@models/Trivia';
import User from '@models/User';
import dbConnect from '@middlewares/dbConnect';

const handler = nextConnect();

dbConnect();

validator.paginate = [
  query('page').isInt({ min: 1 }),
];

handler.get(validator.paginate, ApiValidator, async(req, res) => {
  const options = {
    page: req.query.page || 1,
    sort: { createdAt: -1 },
    limit: 4,
    populate: { path: 'creator', model: User },
  };

  try {
    const trivias = await Trivia.paginate({}, options);
    return res.status(200).send(trivias);
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});


export default handler;
