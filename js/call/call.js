module.exports = function (func, context) {
    var args = []
    for (var i = 2; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }
    const fn = Date.now()
    context[fn] = func
    var result = eval('context['+fn+'](' + args + ')');
    delete context[fn]
    return result
}
