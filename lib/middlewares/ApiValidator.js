const { validationResult } = require('express-validator');

class ApiValidator {

  constructor() {
    return (req, res, next) => {
      const errObjArray = validationResult(req);
      if (errObjArray.isEmpty()) {
        return next();
      }
      const errors = errObjArray.array().map((err) => {
        const message = `${err.msg}`;
        return { message };
      });
      return res.status(400).json({ errors });
    };
  }

}

module.exports = new ApiValidator();
