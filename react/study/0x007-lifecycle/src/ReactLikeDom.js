class ReactLikeDom {
    static render(reactLikeElement, container) {
        reactLikeElement.component.componentWillMount()
        container.append(reactLikeElement.ref)
        reactLikeElement.component.componentDidMount()
    }

}

export default ReactLikeDom