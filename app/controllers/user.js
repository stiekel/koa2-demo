module.exports = {
  login (ctx, next) {
    ctx.body = {
      status: true,
      data: {
        username: ctx.request.body.username,
        at: new Date()
      }
    }
    next && next()
  }
}
