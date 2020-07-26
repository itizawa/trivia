
async function SetUserData(req, res, next) {
  const accessToken = req.query.accessToken || req.body.accessToken || null;
  if (accessToken == null) {
    return next();
  }

  console.log(accessToken);


  return next();
}

export default SetUserData;
