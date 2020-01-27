function calculate(input) {
    let tokenStack = input.split('').reverse()
    let rpnStack = []
    let operationStack = []
    while (tokenStack.length) {
        let t = tokenStack.pop()
        if (t.match(/[0-9]/)) {
            rpnStack.push(t)
            continue
        }
        if (t.match(/[\+\-]/)) {
            while (operationStack.length) {
                rpnStack.push(operationStack.pop())
            }
            operationStack.push(t)
            continue
        }

        throw `error: unknow charactor: ${t}`
    }
    while (operationStack.length) {
        rpnStack.push(operationStack.pop())
    }
    rpnStack = rpnStack.reverse()
    let resultStack = []
    while (rpnStack.length) {
        let t = rpnStack.pop()+''
        if (t.match(/[0-9]/)) {
            resultStack.push(+t)
            continue
        }
        if (t === '+') {
            let num1 = resultStack.pop()
            let num2 = resultStack.pop()
            rpnStack.push(num2 + num1)
            continue
        }
        if (t === '-') {
            let num1 = resultStack.pop()
            let num2 = resultStack.pop()
            rpnStack.push(num2 - num1)
            continue
        }
    }


    return resultStack[0]
}