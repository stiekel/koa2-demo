const Koa = require('koa')
const Bodyparser = require('koa-bodyparser')
const routers = require('./app/routes/')
const Config = require('./config/')

if (process.env.npm_package_scripts_test !== undefined) {
  process.env.NODE_ENV = 'test'
}

const app = new Koa()
app.use(Bodyparser())
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(Config.port)
module.exports = app
