/**
 给定一种 pattern(模式) 和一个字符串 str ，判断 str 是否遵循相同的模式。

 这里的遵循指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应模式。

 示例1:

 输入: pattern = "abba", str = "dog cat cat dog"
 输出: true
 示例 2:

 输入:pattern = "abba", str = "dog cat cat fish"
 输出: false
 示例 3:

 输入: pattern = "aaaa", str = "dog cat cat dog"
 输出: false
 示例 4:

 输入: pattern = "abba", str = "dog dog dog dog"
 输出: false

 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let p2strMap = new Map()
    let str2pMap = new Map()
    str = str.split(' ')
    if (str.length === 1) str=str[0].split('')
    for (let i = 0; i < str.length; i++) {
        if (p2strMap.has(pattern[i])) {
            if (p2strMap.get(pattern[i]) !== str[i]) return false
        } else {
            if (str2pMap.has(str[i])) {
                return false
            } else {
                p2strMap.set(pattern[i], str[i])
                str2pMap.set(str[i], pattern[i])
            }
        }
    }
    return true
}

module.exports = wordPattern