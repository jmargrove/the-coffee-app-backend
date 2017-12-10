const R = require('r-script')
const fs = require('fs')


exports.modelData = async (ctx, next) => {
  console.log(ctx.request.body)
  const out = await R("./../../the-coffee-app-Model/fullerCoffeeModel/RcoffeeModelNew2.R")
    .data(ctx.request.body)
    .callSync()
      console.log("Data returned from R:", out)
  ctx.response.body = await out;
}


exports.modelOptimized = async (ctx, next) => {
  console.log(ctx.request.body)
  const out = await R("./../../the-coffee-app-Model/fullerCoffeeModel/RcoffeeModelOptimize2.R")
    .data(ctx.request.body)
    .callSync()
      console.log("Data returned from R:", out)
  ctx.response.body = await out
}
