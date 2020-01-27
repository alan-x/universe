import React from 'react'
import ReactDom from 'react-dom'
import MyEvent from "./MyEvent";

// class Sub extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 0
//         }
//     }
//
//     componentWillReceiveProps(nextProps) {
//         this.setState({
//             num: nextProps.num
//         })
//     }
//
//     render() {
//         return <div>
//             <p>props.num:{this.props.num}</p>
//             <p>state.num:{this.state.num}</p>
//         </div>
//     }
// }
//
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 0
//         }
//         setInterval(() => {
//             this.setState({
//                 num: ++this.state.num
//             })
//         }, 1000)
//
//     }
//
//     render() {
//         return <Sub num={this.state.num}/>
//     }
// }


// class MyButton extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 0
//         }
//     }
//
//     handleOnClick() {
//         let num = ++this.state.num
//         this.setState({
//             num: num
//         })
//         this.props.onClick(num)
//     }
//
//     render() {
//         return <button onClick={() => this.handleOnClick()}>{this.props.text}</button>
//     }
// }
//
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 0
//         }
//     }
//
//     render() {
//         return <div>
//             <p>点击了 {this.state.num} 次</p>
//             <MyButton text='确认' onClick={(text) => this.handleOnClick(text)}/>
//         </div>
//     }
//
//     handleOnClick(num) {
//         this.setState({
//             num: num
//         })
//     }
// }

//
// class MyView extends React.Component {
//     render() {
//         return <p>点击了 {this.props.num} 次</p>
//     }
// }
//
// class MyButton extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 0
//         }
//     }
//
//     handleOnClick() {
//         let num = ++this.state.num
//         this.setState({
//             num: num
//         })
//         this.props.onClick(num)
//     }
//
//     render() {
//         return <button onClick={() => this.handleOnClick()}>{this.props.text}</button>
//     }
// }
//
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 0
//         }
//     }
//
//     render() {
//         return <div>
//             <MyView num={this.state.num}/>
//             <MyButton text='确认' onClick={(text) => this.handleOnClick(text)}/>
//         </div>
//     }
//
//     handleOnClick(num) {
//         this.setState({
//             num: num
//         })
//     }
// }

const EVENT_BUTTON_CLICK = 'EVENT_BUTTON_CLICK'

class MyView extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
        MyEvent.sub(EVENT_BUTTON_CLICK, (num) => {
            this.setState({
                num: num.num
            })
        })

    }

    render() {
        return <p>点击了 {this.state.num} 次</p>
    }
}

class MyButton extends React.Component {

    constructor() {
        super()
        this.state = {
            num: 0
        }
    }

    handleOnClick() {
        let num = ++this.state.num
        this.setState({
            num: num
        })
        MyEvent.pub(EVENT_BUTTON_CLICK, {num: num})
    }

    render() {
        return <button onClick={() => this.handleOnClick()}>{this.props.text}</button>
    }
}

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <MyView/>
            <MyButton text='确认'/>
        </div>
    }


}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)
