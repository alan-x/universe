/**
 * 使用 js 模拟 new 操作
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
 *
 */
function create(ctor) {
    var newObj = Object.create(ctor.prototype);
    var returnObj = ctor.apply(newObj, [].slice.call(arguments, 1))
    return typeof returnObj === 'object' ? returnObj : newObj
}

module.exports = create
