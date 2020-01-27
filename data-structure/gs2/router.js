let router = {}

function registerHandler(method, url, handlerName) {
    router[url] || (router[url] = {})
    router[url][method] || (router[url][method] = handlerName)
}

function findHandler(method, url) {
    return (router[url] && router[url][method]) || ''
}

module.exports = {
    registerHandler,
    findHandler
}
