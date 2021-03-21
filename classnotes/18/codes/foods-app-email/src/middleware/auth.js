function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/signin');
  }
}

function activeLocalSession(req, res, next) {
  res.locals.session = req.session;
  next();
}

module.exports = { isAuthenticated, activeLocalSession };
