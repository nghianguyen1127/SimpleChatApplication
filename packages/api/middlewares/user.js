exports.createUserValidator = (req, res, next) => {
  req.check("email", "Email is required.").notEmpty();
  req.check("password", "Password is required.").notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError,
    });
  }
  next();
};
