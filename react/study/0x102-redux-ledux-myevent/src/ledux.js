class Ledux {
    static createStore(reduer) {
        return new Store(reduer)
    }
}

class Store {
    constructor(reducer) {
        this.state = reducer(null, {})
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
        this.state = this.reducer(this.state, action)
        this.callbacks.forEach(callback => callback())
    }

}

export default Ledux