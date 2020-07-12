const { validationResult } = require('express-validator');

class ApiValidator {

  constructor() {
    return (req, res, next) => {
      const errObjArray = validationResult(req);
      if (errObjArray.isEmpty()) {
        return next();
      }

      const errs = errObjArray.array().map((err) => {
        const message = `${err.location}.${err.param}: ${err.value} - ${err.msg}`;
        return { message };
      });

      return res.status(400).json(errs);
    };
  }

}

module.exports = new ApiValidator();
