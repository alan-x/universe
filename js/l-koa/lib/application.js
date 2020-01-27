const http = require('http')
var url = require('url');

const middlewareList = []

function compose(middleware) {
    if (middleware.length === 1) {
        return (context = {}, next = () => {
        }) => new Promise(async (resolve, reject) => {
            try {
                await  middleware[0](context, next)
                resolve()
            } catch (e) {
                reject()
            }
        })
    }
    return middleware.reduce((m1, m2) => {
        return (context = {}, next = async () => {
        }) => new Promise(async (resolve, reject) => {
            try {
                await m1(context, async () => await m2(context, next))
                resolve()
            } catch (e) {
                reject()
            }
        })
    })
}

function use(middleware) {
    middlewareList.push(middleware)
}

let routes = {}

function start(port) {
    http.createServer(async (req, res) => {
        let context = {req, res}
        var pathname = url.parse(req.url).pathname
        let middlewares = routes[pathname] && routes[pathname][req.method] || middlewareList
        try {
            await compose(middlewares)(context)
        } catch (e) {
            res.end('error')
        }
    }).listen(port)
}

let methods = http.METHODS.map(m => ({
    [m.toLowerCase()]: (path, ...middlwares) => {
        if (!routes[path]) {
            routes[path] = {}
        }
        if (!routes[path][m]) {
            routes[path][m] = []
        }
        let resultMiddlewares = middlewareList
        middlwares.forEach(m => {
            if (Array.isArray(m)) {
                resultMiddlewares = [...resultMiddlewares, ...m]
            } else {
                resultMiddlewares = [...resultMiddlewares, m]
            }
        })
        routes[path][m] = resultMiddlewares
    }
})).reduce((m1, m2) => ({...m1, ...m2}))

function app() {
    return {
        use,
        start,
        ...methods
    }
}

module.exports = app