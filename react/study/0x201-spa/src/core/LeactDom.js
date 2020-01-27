class LeactDom {

    static render(child, parent) {
        if (typeof child === 'object') {
            parent.innerHTML = child.render()
            child.componentDidMount()
        } else {
            parent.innerHTML = child
        }
    }
}

export default LeactDom