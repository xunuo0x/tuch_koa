const router = require('koa-router')()

const LoginController = require('./controller/login')

module.exports = (app) => {
  router.post('/login', LoginController.index)

  app.use(router.routes())
    .use(router.allowedMethods())
}
