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

// react
// // 组件
// class App extends React.Component {
//     constructor() {
//         super()
//         // 初始化 state
//         this.state = {
//             counter: 0
//         }
//         // 监听 store 变化, store 变化的时候更新 counter
//         this.unSub=store.subscribe(() => {
//             this.setState({
//                 counter: store.getState()
//             })
//         })
//     }
//     // 组件销毁的时候取消订阅
//     componentWillUnmount(){
//         this.unSub()
//     }
//
//     render() {
//         return <div>
//             <p>{this.state.counter}</p>
//             <button
//                 onClick={() => {
//                     store.dispatch(increment())
//                 }}>+
//             </button>
//             <button
//                 onClick={() => {
//                     store.dispatch(decrement())
//                 }}>-
//             </button>
//         </div>
//     }
// }
//
// ReactDom.render(
//     <App/>,
//     document.getElementById('app')
// )