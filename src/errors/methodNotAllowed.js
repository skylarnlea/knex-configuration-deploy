function methodNotAllowed(req, res, next){
  next({
    status: 405,
    message: `405: ${req.method} not allowed for ${req.originalUrl}`,
  });
}

module.exports = methodNotAllowed;