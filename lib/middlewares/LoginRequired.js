async function LoginRequired(req, res, next) {
  const user = req.user || null;
  if (user == null) {
    return res.status(401).send({ success: false });
  }

  return next();
}

export default LoginRequired;
