import {createStore, combineReducers} from './ledux'

const ACTION_NUM1_INCREMENT = 'ACTION_NUM1_INCREMENT'
const ACTION_NUM2_INCREMENT = 'ACTION_NUM2_INCREMENT'
const num1 = (state = 0, action) => {
    switch (action.type) {
        case ACTION_NUM1_INCREMENT: {
            return ++state
        }
        default: {
            return state
        }
    }
}

const num2 = (state = 0, action) => {
    switch ((action.type)) {
        case ACTION_NUM2_INCREMENT: {
            return ++state
        }
        default: {
            return state
        }
    }
}
const reducer = combineReducers({
    num1: num1,
    num2: num2
})
let store = createStore(reducer)


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: ACTION_NUM1_INCREMENT})
store.dispatch({type: ACTION_NUM2_INCREMENT})

