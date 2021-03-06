const Router = require('koa-router')
const users = require('./users')

const routers = new Router()

routers.use('/user', users.routes(), users.allowedMethods())

module.exports = routers
