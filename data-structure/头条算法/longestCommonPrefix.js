/**
 最长公共前缀
 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"
 示例 2:

 输入: ["dog","racecar","car"]
 输出: ""
 解释: 输入不存在公共前缀。
 说明:

 所有输入只包含小写字母 a-z 。

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return ''
    if (strs.length === 1) return strs[0]
    let maxLen = 0
    strs.forEach(s => {
        if (s.length > maxLen) {
            maxLen = s.length
        }
    })
    let prefix = ''
    let tempPrefix = ''
    for (let i = 0; i < maxLen; i++) {
        tempPrefix = strs[0][i] || ''
        let match = true
        for (let j = 1; j < strs.length; j++) {
            console.log({j:strs[j],tempPrefix,prefix})
            if (strs[j][i] !== tempPrefix) {
                match = false
                break
            }
        }
        if (match) {
            prefix += tempPrefix
        } else {
            return prefix
        }
    }
    return prefix
};

module.exports = longestCommonPrefix