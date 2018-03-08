const supertest = require('supertest')
const chai = require('chai')
const app = require('../index')

const expect = chai.expect
const request = supertest(app.listen())

describe('User', _ => {
  let username = 'Sid_' + String(Math.floor(Math.random() * 10000))
  it(`Login with username ${username}`, done => {
    request
      .post('/user/login')
      .send({
        username
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body.status).to.equal(true)
        expect(res.body.data).to.be.an('object')
        expect(res.body.data.username).to.equal(username)
        expect(new Date(res.body.data.at).getTime() > 0).to.equal(true)
        done()
      })
  })
})
