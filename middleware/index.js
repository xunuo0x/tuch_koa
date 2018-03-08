const bodyParser = require('koa-bodyparser')
const miSend = require('./mi-send/index')

module.exports = (app) => {
  app.use(bodyParser())
  app.use(miSend())
}
