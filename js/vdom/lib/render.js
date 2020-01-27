function createTextNode(vNode) {
    return document.createTextNode(vNode);
}

// TODO：属性更新在这儿
function createElement(type, props) {
    let node = document.createElement(type)
    return node
}

function render(vNode, container) {
    if (typeof vNode === 'string' || typeof vNode === 'number') {
        let text = createTextNode(vNode)
        container.appendChild(text)
        return text
    }

    const {type, props, children} = vNode
    if (typeof type === 'string') {
        let node = createElement(type, props)
        if (children && children.length) {
            children.forEach(_ => {
                render(_, node)
            })
        }
        container&&container.appendChild(node)
        return node
    }
}

export default render
