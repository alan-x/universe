function init() {
    return []
}

function push(stack, data) {
    stack.push(data)
    return stack
}

function pop(stack) {
    return stack.pop()
}

function main() {
    let stack = init()
    stack = push(stack, 1)
    stack = push(stack, 2)
    stack = push(stack, 3)
    pop(stack)
    pop(stack)
    pop(stack)
}

main()