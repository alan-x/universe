import {createStore} from 'redux'
import React from 'react'
import ReactDom from 'react-dom'

//reducer
const counter = (state = {counter: 0, num: 0}, action) => {
    switch (action.type) {
        case ACTION_INCREMENT:
            return {...state, ...{counter: ++state.counter}}
        case ACTION_DECREMENT:
            return {...state, ...{counter: --state.counter}}
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

const connect = (mapStateToProps) => {
    return (WrappedComponent) => class Control extends React.Component {
        constructor() {
            super()
            this.state = {
                state: mapStateToProps(store.getState()
            }
            this.unSub = store.subscribe(() => {
                let state = mapStateToProps(store.getState())
                this.setState({
                    state: state
                })
            })
        }
        componentWillUnmount() {
            this.unSub()
        }
        render() {
            return <WrappedComponent {...this.state.state}/>
        }
    }
}

// react 组件
class App extends React.Component {
    constructor() {
        super()
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    render() {
        return <div>
            <p>{this.props.counter}</p>
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

let ReduxApp = connect((state) => {
    return {
        counter: state.counter
    }
})(App)

ReactDom.render(
    <ReduxApp/>,
    document.getElementById('app')
)