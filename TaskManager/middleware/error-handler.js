const errorHandlerMiddleware = (err, req, res, next) => {
  console.log({ err });
  //   return res.status(500).json({ msg: "Something went wrong" });
  return res.status(500).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
