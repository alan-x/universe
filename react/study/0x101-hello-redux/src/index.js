// import MyEvent from '../../0x012-component-communication/src/MyEvent'
//
// let num = 1
// const EVENT_INCREMENT = 'EVENT_INCREMENT'
//
// let unSub = MyEvent.sub(EVENT_INCREMENT, (data) => {
//     console.log(data)
// })
//
// num += 1
// MyEvent.pub(EVENT_INCREMENT, {num: num})
//
// num += 1
// MyEvent.pub(EVENT_INCREMENT, {num: num})
//
// unSub()
//
// num += 1
// MyEvent.pub(EVENT_INCREMENT, {num: num})
// num += 1
// MyEvent.pub(EVENT_INCREMENT, {num: num})
// console.log({num})



//
// import {createStore} from 'redux'
//
// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }
//
// let store = createStore(counter)
//
// store.subscribe(() =>
//     console.log(store.getState())
// )
//
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'DECREMENT'})



import Ledux from "./ledux";

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
let store=Ledux.createStore(counter)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})