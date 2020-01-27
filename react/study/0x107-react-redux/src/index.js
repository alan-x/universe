import {createStore} from 'redux'
import React from 'react'
import ReactDom from 'react-dom'
import {Provider, connect} from 'react-redux'
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


// react 组件
class App extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        const {counter, increment, decrement} = this.props
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
    <Provider store={store}>
        <ReduxApp/>
    </Provider>,
    document.getElementById('app')
)