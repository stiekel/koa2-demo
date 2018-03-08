const Koa = require('koa')
const Bodyparser = require('koa-bodyparser')
const routers = require('./app/routes/')
const Config = require('./config/')

const app = new Koa()

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(Config.port)
module.exports = app
