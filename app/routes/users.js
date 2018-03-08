const Router = require('koa-router')
const User = require('../controllers/user')

const users = new Router()

users.post('/login', User.login)

module.exports = users
