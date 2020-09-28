module.exports = function isAdminMiddleware(req, res, next) {
  const currentUser = req.user
  if (currentUser && currentUser.isAdmin) {
    next()
  } else {
    const error = new Error('Nope')
    error.status = 401
    next(error)
  }
}
