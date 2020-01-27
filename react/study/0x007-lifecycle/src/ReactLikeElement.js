class ReactLikeElement {
    constructor(type, props) {
        let component = new type(props)
        component.props = props
        this.ref = component.render()
        this.component = component
    }

}

export default ReactLikeElement