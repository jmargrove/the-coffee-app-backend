const Router = require('koa-router')
const router = new Router()
const controler = require('./controler.js')

router.post('/model-data', controler.modelData)
router.post('/optimize', controler.modelOptimized)


module.exports = router
