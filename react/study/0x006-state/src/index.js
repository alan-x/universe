import React from 'react'
import ReactDom from 'react-dom'

// class App extends React.Component {
//     constructor() {
//         super()
//     }
//
//     render() {
//         return <p>{this.props.date}</p>
//     }
// }
//
// let date = Date()
//
// setInterval(() => {
//     date = Date()
//     ReactDom.render(
//         <App date={date}></App>,
//         document.getElementById('app')
//     )
// }, 1000)


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            date: Date()
        }
        setInterval(() => {
            this.setState({
                date: Date()
            })
        }, 1000)
    }

    render() {
        return <p>{this.state.date}</p>
    }
}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)
