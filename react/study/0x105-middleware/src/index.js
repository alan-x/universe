import {createStore, applyMiddleware} from 'redux'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        default:
            return state
    }
}

//
// let store = createStore(counter)
//
// store.subscribe(() => {
//     // console.log(store.getState())
// })

const ACTION_INCREMENT = 'INCREMENT'

const increment = () => {
    return {
        type: ACTION_INCREMENT
    }
}
// const action = increment()

// 猪才会这么做
// console.log('action', action.type)
// store.dispatch(action)
// console.log('next state', store.getState())
//
// console.log('action', action.type)
// store.dispatch(action)
// console.log('next state', store.getState())
//
// console.log('action', action.type)
// store.dispatch(action)
// console.log('next state', store.getState())

// 封装函数
// const dispatch = (store, action) => {
//     console.log('action', action.type)
//     store.dispatch(action)
//     console.log('next state', store.getState())
// }
//
// dispatch(store, action)

// hack
// const storeDispatch=store.dispatch
// store.dispatch= (action) => {
//     console.log('action', action.type)
//     storeDispatch(action)
//     console.log('next state', store.getState())
// }
// store.dispatch(action)

// 多个中间件
// const before = (store) => {
//     const storeDispatch = store.dispatch
//     const dispatch=(action) => {
//         console.log('before', action.type,store.getState())
//         storeDispatch(action)
//     }
//     store.dispatch = dispatch
// }
//
// const after = (store) => {
//     const storeDispatch = store.dispatch
//     const dispatch = (action) => {
//         storeDispatch(action)
//         console.log('after',action.type,store.getState())
//     }
//     store.dispatch=dispatch
// }
// before(store)
// after(store)
// store.dispatch(increment())

// 隐藏hack


// const before = (store) => {
//     const storeDispatch = store.dispatch
//     return (action) => {
//         console.log('before', action.type, store.getState())
//         storeDispatch(action)
//     }
// }
//
// const after = (store) => {
//     const storeDispatch = store.dispatch
//     return (action) => {
//         storeDispatch(action)
//         console.log('after', action.type, store.getState())
//     }
// }
//
// const applyMiddleware = (store, ...middlewares) => {
//     middlewares.reverse()
//     middlewares.forEach(middleware => {
//         store.dispatch = middleware(store)
//     })
// }
//
// applyMiddleware(store, before, after)
//
// store.dispatch(increment())

// 不使用 hack
// const before = (store) => {
//     return (storeDispatch) => {
//         return (action) => {
//             console.log('before', action.type, store.getState())
//             storeDispatch(action)
//         }
//     }
// }
// 优化写法
// const before = store => storeDispatch => action => {
//     console.log('before', action.type, store.getState())
//     return storeDispatch(action)
// }
// const after = store => storeDispatch => action => {
//     let result = storeDispatch(action)
//     console.log('after', action.type, store.getState())
//     return result
// }
//
// const applyMiddleware = (store, ...middlewares) => {
//     middlewares.reverse()
//     let storeDispatch = store.dispatch
//     middlewares.forEach(middleware => {
//         storeDispatch = middleware(store)(storeDispatch)
//     })
//     // store.dispatch = storeDispatch
//     return {...store, ...{dispatch: storeDispatch}}
// }
//
// store = applyMiddleware(store, before, after)
//
// store.dispatch(increment())

// redux applyMiddleware
// const before = store => storeDispatch => action => {
//     console.log('before', action.type, store.getState())
//     return storeDispatch(action)
// }
// const after = store => storeDispatch => action => {
//     let result = storeDispatch(action)
//     console.log('after', action.type, store.getState())
//     return result
// }
// let store = createStore(counter, applyMiddleware(before, after))
// store.dispatch(increment())

// async action
// const before = store => storeDispatch => action => {
//     console.log('before', action.type, store.getState())
//     return storeDispatch(action)
// }
// const after = store => storeDispatch => action => {
//     let result = storeDispatch(action)
//     console.log('after', action.type, store.getState())
//     return result
// }
// const asyncAction=()=>{
//     return (dispatch)=>{
//         setInterval(()=>{
//             dispatch(increment())
//         },1000)
//     }
// }
// const asyncMiddleware = store => storeDispatch => action => {
//     if (typeof action === "function") {
//         return action(storeDispatch)
//     } else {
//         return storeDispatch(action)
//     }
// }
// store = createStore(counter, applyMiddleware(asyncMiddleware,before,after))
// store.dispatch(asyncAction())


// async middleware

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const store = createStore(
    counter,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        createLogger()
    )
)
store.dispatch(increment())