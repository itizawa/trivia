
import nextConnect from 'next-connect';
import validator from 'validator';
import ApiValidator from '@middlewares/ApiValidator';
import { query } from 'express-validator';

import Tag from '@models/Tag';
import dbConnect from '@middlewares/dbConnect';

const handler = nextConnect();

dbConnect();

validator.paginate = [
  query('id').isMongoId(),
];

handler.get(validator.paginate, ApiValidator, async(req, res) => {
  const { id } = req.query;

  try {
    const tag = await Tag.findOne({ _id: id });

    return res.status(200).send({ tag });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});


export default handler;
