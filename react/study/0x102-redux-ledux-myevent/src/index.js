import {createStore} from 'redux'
import Ledux from "../../0x101-hello-redux/src/ledux";
import MyEvent from "../../0x012-component-communication/src/MyEvent";
//
// // 声明两个 action
const ACTION_NUM_INCREMENT = 'ACTION_NUM_INCREMENT'
const ACTION_NUM_DECREMENT = 'ACTION_NUM_DECREMENT'

// 声明一个 reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case ACTION_NUM_INCREMENT: {
            return ++state
        }
        case ACTION_NUM_DECREMENT: {
            return --state
        }
        default : {
            return state
        }
    }
}
//redux
// let store = createStore(counter)
//ledux
let store = Ledux.createStore(counter)

// 设置监听, 当 reducer 发生改变的时候获取新的 counter, 并更新界面
store.subscribe(() => {
    document.getElementById('counter').innerText = store.getState()
})


// 绑定事件
document.getElementById('btnAdd').addEventListener('click', () => {
    store.dispatch({type: ACTION_NUM_INCREMENT})
})
document.getElementById('btnSub').addEventListener('click', () => {
    store.dispatch({type: ACTION_NUM_DECREMENT})
})



// MyEvent 实现
// let counter = 0
// MyEvent.sub(ACTION_NUM_INCREMENT, () => {
//     document.getElementById('counter').innerText = counter
// })
// MyEvent.sub(ACTION_NUM_DECREMENT, () => {
//     document.getElementById('counter').innerText = counter
// })
// // 绑定事件
// document.getElementById('btnAdd').addEventListener('click', () => {
//     ++counter
//     MyEvent.pub(ACTION_NUM_INCREMENT)
// })
// document.getElementById('btnSub').addEventListener('click', () => {
//     --counter
//     MyEvent.pub(ACTION_NUM_DECREMENT)
// })




