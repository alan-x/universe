// 2. 实现一个模板渲染函数 render，它可以将模板字符串和数据解析成一个字符串。
// 函数原型: function render(str, data) {}
//
// 示例如下
// 输入：
// var str = "Name is: {{name}}, age is: {{age}}.";
// var data = {
//     name: 'Xiao Ming',
//     age: 21
// };
//
// 输出：
//
// Name is: Xiao Ming, age is: 21.

// 实现1：正则
// 实现2：字符串解析
function render(str, data) {
    str = [...str].reverse()

    let result = ''
    let value = ''

    while (str.length) {
        let token = str.pop()
        switch (token) {
            case '{': {
                while (str.length) {
                    token = str.pop()
                    let isEnd = false
                    if (token === '{') {
                        while (str.length) {
                            token = str.pop()
                            if (token === '}') {

                                result += data[value]
                                value = ''
                                isEnd = true
                                break
                            } else {
                                value += token
                            }
                        }
                    } else {
                        result += '{'
                        result += token
                    }
                    if (isEnd) break
                }
                break
            }
            case '}': {
                break
            }
            default: {
                result += token
            }
        }
    }
    return result
}

var str = "Name is: {{name}}, age is: {{age}}.";
var data = {
    name: 'Xiao Ming',
    age: 21
};
console.log(render(str, data))
