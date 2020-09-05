
import nextConnect from 'next-connect';
import ApiValidator from '@middlewares/ApiValidator';
import { body } from 'express-validator';

import Trivia from '@models/Trivia';
import Tag from '@models/Tag';
import TriviaTagRelation from '@models/TriviaTagRelation';

import dbConnect from '@middlewares/dbConnect';
import AccessTokenParser from '@middlewares/AccessTokenParser';
import LoginRequired from '../../lib/middlewares/LoginRequired';

const handler = nextConnect();

dbConnect();

const validator = {
  summary: [
    body('forwardText').isString().isLength({ min: 1, max: 40 }).withMessage('前の文は 40 文字以下です'),
    body('backwardText').isString().isLength({ min: 1, max: 40 }).withMessage('後ろの文は 40 文字以下です'),
  ],
};

/**
 *
 * @param {Array} tags
 * @param {String} triviaId
 */
async function AssociateTagAndTrivia(tags, triviaId) {

  // retrieve id
  const findIdsPromise = tags.map(async(tagName) => {
    const result = await Tag.findOne({ name: tagName });
    if (result == null) {
      const tag = await Tag.create({ name: tagName });
      return tag._id;
    }
    return result._id;
  });

  const tagIds = await Promise.all(findIdsPromise);

  const associatePromise = tagIds.map((tagId) => {
    return {
      insertOne: {
        document: { trivia: triviaId, tag: tagId },
      },
    };
  });

  return TriviaTagRelation.bulkWrite(associatePromise);
}

handler.post(validator.summary, ApiValidator, AccessTokenParser, LoginRequired, async(req, res) => {
  const { forwardText, backwardText, tags } = req.body;
  const creator = req.user._id;

  try {
    const trivia = new Trivia({ forwardText, backwardText, creator });
    const createdTrivia = await trivia.save();

    await AssociateTagAndTrivia(tags, createdTrivia._id);

    return res.status(200).send({ createdTrivia });
  }
  catch (err) {
    return res.status(500).send({ success: false });
  }
});

export default handler;
