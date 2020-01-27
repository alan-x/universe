const loa = require('./../lib/application')
let app = loa()
app.use(async (context, next) => {
    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         console.log('here')
    //         resolve()
    //     }, 3000)
    // })
    throw 'err'
    await next()

})
app.get('/', [async (c, n) => {
    await n()
}], async (context) => {
    console.log('here---')
    context.res.end('hehe')
})
app.start(3000)