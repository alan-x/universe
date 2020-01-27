function findNodeById(root, id) {
    if (root === null) return null
    if (root.id === id) return root
    if (!root.children || root.children.length === 0) return null
    for (let i = 0; i < root.children.length; i++) {
        let node = findNodeById(root.children[i], id)
        if (node !== null) return node
    }
    return null
}

module.exports = findNodeById
