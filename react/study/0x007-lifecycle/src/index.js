// class Component {
//
//     constructor(props) {
//         this.props = props
//         this.state = {}
//     }
//
//     componentWillMount() {
//
//     }
//
//     componentDidMount() {
//
//     }
//
//     componentWillReceiveProps(nextProps) {
//
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//
//     }
//
//     componentDidUpdate() {
//
//     }
//
//     render() {
//
//     }
//
//     componentWillUnmount() {
//
//     }
//
//     setState(updater, callback) {
//
//     }
//
// }
//
//
// class Framwork {
//     static mount(component, container) {
//         let com = new component.component(component.props)
//         com.props = component.props
//         com.componentWillMount()
//         com.ref = com.render()
//         container.append(com.ref)
//         com.componentDidMount()
//         com.parent = container
//         return com
//
//     }
//
//     static update(component, nextProps) {
//         component.componentWillReceiveProps(nextProps)
//         component.ref.remove()
//         component.props = {...component.props, ...nextProps}
//         component.ref = component.render()
//         component.parent.append(com.ref)
//         component.componentDidUpdate()
//     }
//
//     static unmount(component) {
//         component.componentWillUnmount()
//         component.ref.remove()
//     }
// }
//
// class MyComponent.js extends Component {
//     componentWillMount() {
//         console.log('componentWillMount')
//     }
//
//     constructor(props) {
//         super()
//     }
//
//     render() {
//         return document.createTextNode("hello " + this.props.name)
//     }
// }
//
// let com = Framwork.mount(
//     {
//         component: MyComponent.js,
//         props: {
//             name: "react"
//         }
//     },
//     document.getElementById('app')
// )
//
// Framwork.update(com, {
//     name: "framwork"
// })
// Framwork.unmount(com)


import ReactLikeDom from "./ReactLikeDom";
import ReactLike from "./ReactLike";
import Component from "./Component";
import ReactLikeElement from "./ReactLikeElement";

class App extends Component {
    constructor() {
        super()
        console.log("constructor")
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        let div = document.createElement('div')
        div.append("hello " + this.props.name)

        return div
    }
}


/*
 * ReactLikeDom.render 可以将一个`ReactLikeElement`挂载到容器上
 * 而 ReactLike.createElement 正好可以创建一个`ReactLikeElement`
 * 在 ReactLike.createElement 中会构造一个 App 实例
 * 然后将 props 传递给该 App 实例
 * 然后调用 App.render
 * 这时候 render 中便可以访问 props 中的属性了
 * 接着将 App.render 返回的 dom 保存在 ref 变量中
 * ReactLikeDom.render 其实是把 ref 中的 dom 挂载到 容器上
 */

ReactLikeDom.render(
    ReactLike.createElement(App, {name: "reactLike"}, null),
    document.getElementById('app')
)