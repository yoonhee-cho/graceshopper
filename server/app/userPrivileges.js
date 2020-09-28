module.exports = function isUserMiddleware(req, res, next) {
  const currentUser = Number(req.user.id)
  if (currentUser === Number(req.params.userId)) {
    next()
  } else {
    const error = new Error(
      'This user is not authorized to perform this action'
    )

    error.status = 401
    next(error)
    //   alert(error)
  }
}
