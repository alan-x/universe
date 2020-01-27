function diff(oldNode, newNode) {
    // 如果旧的节点不存在，说明是创建一个新的节点
    if (!oldNode) {
        return {
            type: 'CREATE',
            value: newNode
        }
    }
    // 如果新的节点存在，说明是删除一个节点
    if (!newNode) {
        return {
            type: 'REMOVE',
        }
    }
    // 如果新的节点类型和旧的节点类型不相同，说明要替换掉这个节点
    if (oldNode.type !== newNode.type) {
        return {
            type: 'REPLACE',
            value: newNode,
        }
    }
    // 如果新旧节点相同，则就要更新这个节点的自节点
    // TODO：属性更新也要在这儿
    if (oldNode.type === newNode.type) {
        let patch = {
            type: 'UPDATE',
            children: []
        }
        for (let i = 0; i < Math.max(oldNode.children.length, newNode.children.length); i++) {
            patch.children.push(diff(oldNode.children[i], newNode.children[i]))
        }
        return patch
    }
}

export default diff
