module.exports = {
  login (ctx, next) {
    ctx.body = {
      status: true,
      data: {
        username: 'Sid',
        at: new Date()
      }
    }
    next && next()
  }
}
