const Koa = require('koa')
const Router = require('koa-router')

// 实例化 Koa
const app = new Koa()
const router = new Router()

// 路由
router.get('/', async ctx => {
    ctx.body = { msg: 'Koa Interface' }
})

// 配置路由
app.use(router.routes()).use(router.allowedMethods())

// 定义端口号
const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log(`server started on ${port}`)
})

