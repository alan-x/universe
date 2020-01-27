/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    num1 = [...num1]
    num2 = [...num2]

    let overflow = 0,
        result = []
    for (let i = Math.max(num1.length, num2.length); i >=0; i--) {
        let n1 = num1.pop() || 0 // 取出一个数，防止其中一个数位数小，取出undefined，
        let n2 = num2.pop() || 0 // 取出另一个数，防止其中一个数位数小，取出undefined
        let temp = overflow + +n1 + +n2
        overflow = Math.floor(temp / 10) // 进位赋值
        result.push(temp % 10) // 结果赋值
    }
    result.push(overflow)
    return +result.reverse().join('')

};
module.exports = addStrings