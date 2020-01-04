function extends(oldFunc, thisArg) {
    let args = [].slice.call(arguments,2)
    const newFunc = function () {
        const newArgs =args.concat([].slice.call(arguments))
        return oldFunc.apply(thisArg, newArgs)
    }
    return newFunc
}

module.exports = extends
