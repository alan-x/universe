import {createStore} from 'redux'
import React from 'react'
import ReactDom from 'react-dom'

//reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case ACTION_INCREMENT:
            return state + 1
        case ACTION_DECREMENT:
            return state - 1
        default:
            return state
    }
}
// action
const ACTION_INCREMENT = 'INCREMENT'
const ACTION_DECREMENT = 'DECREMENT'
// action creator
const increment = () => ({
    type: ACTION_INCREMENT
})
const decrement = () => ({
    type: ACTION_DECREMENT
})

// store
const store = createStore(counter)

const connect = (WrappedComponent) => {
    return class Control extends React.Component {
        constructor() {
            super()
            this.state = {
                state: 0
            }
            this.unSub = store.subscribe(() => {
                this.setState({
                    state: store.getState()
                })
            })
        }

        componentWillUnmount() {
            this.unSub()
        }

        render() {
            return <WrappedComponent state={this.state.state}/>
        }


    }
}

class SubCom extends React.Component {
    render(){
        return <p>{this.props.state}</p>
    }
}
let ReduxSubCom=connect(SubCom)

// react 组件
class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <ReduxSubCom/>
            <button
                onClick={() => {
                    store.dispatch(increment())
                }}>+
            </button>
            <button
                onClick={() => {
                    store.dispatch(decrement())
                }}>-
            </button>
        </div>
    }
}

let ReduxApp = connect(App)
ReactDom.render(
    <ReduxApp/>,
    document.getElementById('app')
)