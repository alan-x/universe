/**
 字符串相乘
 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

 示例 1:

 输入: num1 = "2", num2 = "3"
 输出: "6"
 示例 2:

 输入: num1 = "123", num2 = "456"
 输出: "56088"
 说明：

 num1 和 num2 的长度小于110。
 num1 和 num2 只包含数字 0-9。
 num1 和 num2 均不以零开头，除非是数字 0 本身。
 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * @param num1
 * @param num2
 */
function multiply(num1, num2) {
    let result = []
    num1 = [...num1].reverse()
    num2 = [...num2].reverse()
    for (let i = 0; i < num2.length; i++) {
        result[i] = result[i] || []
        let overflow = 0
        for (let j = 0; j < num1.length; j++) {
            let r = +num2[i] * +num1[j] + overflow

            overflow = Math.floor(r/10)
            r = r %10
            result[i].push(r)
        }
        if (overflow >0) {
            result[i].push(overflow)
        }
    }
    let max = 0
    for (let i = 0; i < result.length; i++) {
        let j = i
        result[i]='0'.repeat(j).split('').concat(result[i])
        if (result[i].length > max) {
            max = result[i].length
        }
    }
    let newResult = []
    let overflow = 0
    for (let i = 0; i < max; i++) {
        let temp = 0
        result.forEach(r => {
            temp += +r[i] || 0
        })
        temp += overflow
        overflow=Math.floor(temp/10)
        temp=temp%10
        newResult.push(temp)
    }
    if(overflow){
        newResult.push(overflow)
    }

    return newResult.reverse().join('').replace(/^0+/,'')||'0'
}

module.exports = multiply