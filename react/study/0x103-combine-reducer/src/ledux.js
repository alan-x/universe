class Ledux {
    static createStore(reduer) {
        return new Store(reduer)
    }

    static combineReducers(reducers) {
        return reducers
    }
}

class Store {
    constructor(reducer) {
        this.state = this.calculateState(reducer)
        this.callbacks = []
        this.reducer = reducer
    }

    subscribe(callback) {
        this.callbacks.push(callback)
    }

    getState() {
        return this.state
    }

    dispatch(action) {
        this.state = this.calculateState(this.reducer, action)
        this.callbacks.forEach(callback => callback())
    }

    /**
     * reducer 可能是一个经过 combineReducers 的对象
     * 所以需要判断 reducer 是否是一个对象
     * 如果是
     *  那说明这是一个复合的 reducer
     *  需要循环计算出每个 state
     *  并以对象的形式保存到 state
     * 如果不是对象并且是函数
     *  那说明这是一个单一的 reducer
     *  直接计算就行了
     *  然后保存到 state
     *
     * @param reducer 单一的 reducer 函数或者 combineReducers 之后的对象
     * @param action
     * @returns {*}
     */
    calculateState(reducer, action = {}) {
        if (typeof reducer === 'object') {
            return Object.keys(reducer).map((key) => {
                return {
                    [key]: reducer[key](undefined, action)
                }
            }).reduce((pre, current) => {
                return {...pre, ...current}
            })
        } else if (typeof reducer === 'function') {
            return reducer(undefined, action)
        }
    }
}

/**
 * 添加几个函数导出
 * 保持和 redux 一致的 api
 * 这样就可以不修改调用的函数了
 */
const createStore = Ledux.createStore
const combineReducers = Ledux.combineReducers
export {createStore, combineReducers}
export default Ledux