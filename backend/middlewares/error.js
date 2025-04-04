const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode && Number.isInteger(err.statusCode)
    ? err.statusCode
    : 500;

  const message = err.message || "Internal Server Error";

  res.locals.errorMessage = message;

  res.status(statusCode).json({
    code: statusCode,
    message,
  });
};

module.exports = {
  errorHandler,
};
