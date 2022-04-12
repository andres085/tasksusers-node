function errorsMiddleware(err, req, res, next) {
  console.error('Error in errors middleware:\n', err.stack);
  res.status(err.code || 500).send({ success: false, message: err.message });
}

module.exports = errorsMiddleware;