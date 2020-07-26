import Session from '@models/Session';
import User from '@models/User';

async function SetUserData(req, res, next) {
  const accessToken = req.query.accessToken || req.body.accessToken || null;
  if (accessToken == null) {
    return next();
  }

  try {
    const session = await Session.findOne({ accessToken }).populate({ path: 'userId', model: User });
    req.user = session.userId;
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return next();
}

export default SetUserData;
