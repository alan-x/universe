module.exports = function (func, context, args) {
    const fn = Date.now()
    context[fn] = func
    var result = eval('context['+fn+'](' + args + ')');
    delete context[fn]
    return result
}
