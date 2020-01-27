import React from 'react'
import ReactDom from 'react-dom'


// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log('constructor', props)
//
//     }
//
//     componentWillMount() {
//         console.log('componentWillMount')
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
//
//     render() {
//         console.log('render')
//         return <p>{Date()}</p>
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
// }


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             date: Date()
//         }
//         setTimeout(() => {
//             this.setState({date: Date()})
//         }, 3000)
//     }
//
//     componentWillReceiveProps() {
//         console.log('componentWillReceiveProps')
//     }
//
//     shouldComponentUpdate() {
//         console.log('shouldComponentUpdate')
//         return true
//
//     }
//
//     render() {
//         console.log('render')
//         return <p>{this.state.date}</p>
//     }
//
//     componentWillUpdate() {
//         console.log('componentWillUpdate')
//
//     }
//
//     componentDidUpdate() {
//         console.log('componentDidUpdate')
//
//     }
//
// }


//
//
// class Content extends React.Component {
//     render(){
//         console.log('Content::render')
//         return <p>content</p>
//     }
//     componentWillUnmount() {
//         console.log('Content::componentWillUnmount')
//     }
// }
//
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             show: true
//         }
//         setTimeout(() => {
//             this.setState({show: false})
//         }, 3000)
//     }
//
//     render() {
//         console.log('App::render')
//
//         return (
//             this.state.show
//                 ? <Content/>
//                 : null
//         )
//     }
//
//
//
// }


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             show: true
//         }
//     }
//
//     render() {
//         return (
//             this.state.show
//                 ? <Content/>
//                 : null
//         )
//     }
//
// }

// class Content extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             content: props.content
//         }
//     }
//
//     componentWillReceiveProps(nextProps) {
//         this.setState({
//             content:nextProps.content
//         })
//     }
//
//     render() {
//         return this.state.content
//     }
// }
//
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             content: "1"
//         }
//         setTimeout(() => {
//             this.setState({
//                 content: 10
//             })
//         }, 1000)
//     }
//
//     render() {
//         return (
//             <Content content={this.state.content}/>
//         )
//     }
//
// }

//
// class A extends React.Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps.name === this.props.name ? true : false
//     }
//
//     render() {
//         console.log("A::render")
//         return "A"
//     }
// }
//
// class B extends React.Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps.name === this.props.name ? false : true
//     }
//
//     render() {
//         console.log("B::render")
//         return "A"
//     }
// }
//
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             num: 1,
//             name: 1
//         }
//         setTimeout(() => {
//             this.setState({
//                 num: 10
//             })
//         })
//     }
//
//     render() {
//         console.log("App::render")
//         return <div>
//             <A name={this.state.name}/>
//             <B name={this.state.name}/>
//             <div>
//                 {this.state.num}
//             </div>
//         </div>
//     }
// }

class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 1
        }
        this.interval=setInterval(() => {
            this.setState({
                num: ++this.state.num
            })
            console.log(this.state.num)
        }, 1000)
    }

    render() {
        return this.state.num
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
        setTimeout(() => {
            this.setState({
                show: false
            })
        },2000)
    }

    render() {
        return this.state.show
            ? <Content/>
            : null
    }

}

ReactDom
    .render(
        <App></App>,
        document
            .getElementById(
                'app'
            )
    )
