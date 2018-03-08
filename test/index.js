const supertest = require('supertest')
const chai = require('chai')
const app = require('../index')

const expect = chai.expect
const request = supertest(app.listen())

describe('User', _ => {
  it('Login', done => {
    request
      .post('/user/login')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body.status).to.equal(true)
        expect(res.body.data).to.be.an('object')
        expect(res.body.data.username).to.be.an('string')
        expect(res.body.data.at).to.be.an('string')
        done()
      })
  })
})
