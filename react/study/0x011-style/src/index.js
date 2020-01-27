import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
// class App extends React.Component {
//     render() {
//         return <div style={{
//             background: 'red'
//         }}>
//             <p>hello react</p>
//         </div>
//     }
// }


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             background: 'red'
//         }
//     }
//
//     render() {
//         return <div style={this.state}>
//             <p>hello react</p>
//         </div>
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//     }
//     createStyle(){
//         return{
//             background: 'red'
//         }
//     }
//
//     render() {
//         return <div style={this.createStyle()}>
//             <p>hello react</p>
//         </div>
//     }
// }

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <p>hello react</p>
        </div>
    }
}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)
