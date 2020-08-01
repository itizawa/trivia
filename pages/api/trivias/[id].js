
import nextConnect from 'next-connect';

import dbConnect from '@middlewares/dbConnect';

import Trivia from '@models/Trivia';
import User from '@models/User';

const handler = nextConnect();

dbConnect();

handler.get(async(req, res) => {
  const { id } = req.query;

  try {
    const trivia = await Trivia.findOne({ _id: id }).populate({ path: 'creator', model: User });
    return res.status(200).send({ trivia });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});


export default handler;
