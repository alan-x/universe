function parse(input) {
    input = [...input].reverse()
    return _parse(input)
}

function _parse(inputStack) {
    let type=''
    let typeArg
    while (inputStack.length) {
        let token = inputStack.pop()
        if (token.match(/[a-zA-z]/)) {
            type = token
            while (inputStack.length) {
                token = inputStack.pop()
                if (token.match(/[a-zA-z]/)) {
                    type += token
                    continue
                }
                break
            }

        }
        if (token.match(/</)) {
            typeArg = _parse(inputStack)
            continue
        }
        if (token.match(/>/)) {
            return typeArg?{type, typeArg}:{type}
        }
    }
    return typeArg?{type, typeArg}:{type}
}

module.exports = parse
