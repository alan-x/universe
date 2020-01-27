/**
 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

 请注意，你可以假定字符串里不包括任何不可打印的字符。

 示例:

 输入: "Hello, my name is John"
 输出: 5
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    s = [...s].reverse()
    let value = ''
    let resultList = []
    while (s.length) {
        let token = s.pop()
        if (/[A-Za-z]/.test(token)) {
            value += token
        } else {
           if (value != '') {
               resultList.push(value)
               value = ''
           }
        }
    }
    if (value !== '') {
        resultList.push(value)
    }
    console.log(resultList)
    return resultList.length
};
module.exports=countSegments