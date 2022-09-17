const { CustomApiError } = require('../errors/custom-errors');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log({ err });
  return res.status(500).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
