import React from 'react'
import ReactDom from 'react-dom'

// function handleClick(event) {
//     console.log('handleClick', event, this.state.name)
// }
//
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: 1
//         }
//     }
//
//     render() {
//         return <button onClick={handleClick}>
//             按钮
//         </button>
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: 1
//         }
//     }
//
//     handleClick  (event) {
//         console.log('handleClick', event, this.state.name)
//     }
//
//     render() {
//         return <button onClick={(event)=>this.handleClick(event)}>
//             按钮
//         </button>
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: 1
//         }
//     }
//
//     handleClick = (event) => {
//         console.log('handleClick', event, this.state.name)
//     }
//
//     render() {
//         return <button onClick={this.handleClick}>
//             按钮
//         </button>
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 1
//         }
//     }
//
//     handleClick(event) {
//         this.setState({
//             num: ++this.state.num
//         })
//     }
//
//     render() {
//         return <div>
//             <button onClick={() => this.handleClick()}>
//                 按钮
//             </button>
//             <p>{this.state.num}</p>
//         </div>
//     }
// }


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            tab: 1
        }
    }

    handleClick(tab) {
        this.setState({
            tab: tab
        })
    }

    render() {
        return <div>
            <button onClick={() => this.handleClick(1)}>
                tab1
            </button>
            <button onClick={() => this.handleClick(2)}>
                tab2
            </button>
            {
                this.state.tab === 1
                    ? <div>tab1</div>
                    : <div>tab2</div>
            }
        </div>
    }
}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)
