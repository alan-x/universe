const message = []
let index = 0
setInterval(() => {
    message.push(++index)
    console.log(`消息生成: ${index}`)
}, 500)

setInterval(() => {
    console.log(`消息消耗: ${message.shift()}`)
}, 1000)