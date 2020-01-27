import React from 'react'
import ReactDom from 'react-dom'


// const App = () => {
//     return <p>hello</p>
// }
// ReactDom.render(
//     App(),
//     document.getElementById('app')
// )


// const App = (name) => {
//     return <p>hello {name}</p>
// }
// ReactDom.render(
//     App("world"),
//     document.getElementById('app')
// )

//
// const Article = (title, content) => {
//     return <div>
//         <h1>{title}</h1>
//         <p>{content}</p>
//     </div>
// }
// ReactDom.render(
//     Article("送方外上人","孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。"),
//     document.getElementById('app')
// )

// const App = (props) => {
//     return <p>hello {props.name}</p>
// }
// ReactDom.render(
//     <App name="world"></App>,
//     document.getElementById('app')
// )

// class App extends React.Component {
//     render() {
//         console.log(this)
//         return <p>hello {this.props.name}</p>
//     }
// }
//
// ReactDom.render(
//     <App name="world"></App>,
//     document.getElementById('app')
// )

class App extends React.Component {
    render() {
        console.log(this)
        return <p>hello {this.props.name}</p>
    }
}

ReactDom.render(
    <App name={Date()}></App>,
    document.getElementById('app')
)