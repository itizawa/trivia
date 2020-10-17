
import nextConnect from 'next-connect';

import dbConnect from '@middlewares/dbConnect';
import AccessTokenParser from '@middlewares/AccessTokenParser';

const handler = nextConnect();

dbConnect();

handler.get(AccessTokenParser, async(req, res) => {
  try {
    return res.status(200).send({ user: req.user });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
