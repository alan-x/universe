function init() {
    return []
}

function enQueue(queue, data) {
    queue.push(data)
}

function deQueue(queue) {
    queue.shift()
}

function main() {
    let queue = init()
    enQueue(queue, 1)
    enQueue(queue, 2)
    enQueue(queue, 3)
    deQueue(queue)
    deQueue(queue)
    deQueue(queue)
}

main()


