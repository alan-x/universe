function init(data) {
    return data || {
        data: 'start',
        next: null
    }
}

function insert(node, newNode, data) {
    while (node) {
        if (data && node.data === data) {
            if (node.next) {
                newNode.next = node.next
            }
            node.next = newNode
            return
        }
        if (!data && !node.next) {
            node.next = newNode
            return
        }
        node = node.next
    }

}

function delete_(node, data) {
    let parent = node
    node = node.next
    while (node) {
        if (node.data === data) {
            if (parent) {
                parent.next = node.next
                return
            } else {

                return
            }
        }
        parent = node
        node = node.next
    }
    throw `not found node by data: ${data}`
}

function main() {
    let node = init()
    insert(node, {data: 2, next: null})
    insert(node, {data: 3, next: null})
    insert(node, {data: 4, next: null}, 2)
    delete_(node, 2)
}
