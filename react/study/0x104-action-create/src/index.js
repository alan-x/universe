import {createStore} from 'redux'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        default:
            return state
    }
}

let store = createStore(counter)

store.subscribe(() => {
    console.log(store.getState())
})

const ACTION_INCREMENT = 'INCREMENT'

const increment = () => {
    return {
        type: ACTION_INCREMENT
    }
}
store.dispatch(increment())

// const increment = (step) => {
//     return {
//         type: ACTION_INCREMENT,
//         step:step
//     }
// }
//
// store.dispatch(increment(5))


