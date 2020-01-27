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

const connect = (mapStateToProps, mapDispatchToProps) => {

    return (WrappedComponent) => class Control extends React.Component {
        constructor() {
            super()
            // 第一次初始化
            let props = mapStateToProps(store.getState())
            let actions = mapDispatchToProps(store.dispatch)
            this.state = {
                props: {...props,...actions}
            }

            this.unSub = store.subscribe(() => {
                // 变化的时候再次计算
                let props = mapStateToProps(store.getState())
                let actions = mapDispatchToProps(store.dispatch)
                this.setState({
                    props: {...props,...actions}
                })
            })
        }

        componentWillUnmount() {
            this.unSub()
        }

        render() {
            return <WrappedComponent {...this.state.props}/>
        }
    }
}

// react 组件
class App extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        const {counter,increment,decrement}=this.props
        return <div>
            <p>{counter}</p>
            <button
                onClick={increment}>+
            </button>
            <button
                onClick={decrement}>-
            </button>
        </div>
    }
}

let ReduxApp = connect(
    (state) => {
        return {
            counter: state.counter
        }
    },
    (dispatch) => {
        return {
            increment: () => dispatch(increment()),
            decrement: () => dispatch(decrement()),
        }
    }
)(App)

ReactDom.render(
    <ReduxApp/>,
    document.getElementById('app')
)