const LoginService = require('../service/login')
module.exports = {
  index: async(ctx, next) => {
    let {
      name,
      pwd
    } = ctx.request.body
    let data = await LoginService.login(name, pwd)
    ctx.send(data)
  }
}
