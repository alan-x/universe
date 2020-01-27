import ReactLikeElement from "./ReactLikeElement";

class ReactLike {
    static createElement(type, props) {
        let reactLikeElement = new ReactLikeElement(type, props)

        return reactLikeElement
    }
}

export default ReactLike