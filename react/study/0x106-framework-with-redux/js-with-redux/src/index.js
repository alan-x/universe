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

// 初始化一些 dom 变量
let counterP = document.getElementById('counter')
let incrementBtn = document.getElementById('incrementBtn')
let decrementBtn = document.getElementById('decrementBtn')

// 监听变化, 在 store 变化的时候修改计数器显示
store.subscribe(() => {
    counterP.innerText = store.getState()
})
// 添加点击事件, 当+被点击的时候修改 state
incrementBtn.onclick = () => {
    store.dispatch(increment())
}
// 添加点击事件, 当-被点击的时候修改 state
decrementBtn.onclick = () => {
    store.dispatch(decrement())
}
