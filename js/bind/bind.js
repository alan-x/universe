/**
 * 模拟 bind
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
function bind(oldFunc, thisArg) {
    let args = [].slice.call(arguments,2)
    const newFunc = function () {
        const newArgs =args.concat([].slice.call(arguments))
        return oldFunc.apply(thisArg, newArgs)
    }
    return newFunc
}

module.exports = bind
