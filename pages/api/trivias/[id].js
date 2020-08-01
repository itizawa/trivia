
import nextConnect from 'next-connect';

import dbConnect from '@middlewares/dbConnect';

import Trivia from '@models/Trivia';

const handler = nextConnect();

dbConnect();

handler.get(async(req, res) => {
  const { id } = req.query;

  try {
    const trivia = await Trivia.findOne({ _id: id });
    return res.status(200).send({ trivia });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});


export default handler;
