import { xor } from "lodash"

class LPromise {
    static STAUTS_PEDNDING = 'pending'
    static STATUS_FULLFILLED = 'fullfilled'
    static STATUS_REJECTED = 'rejected'

    state = LPromise.STAUTS_PEDNDING

    value = undefined

    reason = undefined

    onFullfilledList = []
    onRejectedList = []

    constructor(executor) {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    resolve(value) {
        this.status = LPromise.STATUS_FULLFILLED
        this.value = value

        this.onFullfilledList.forEach(onFullfilled => onFullfilled(this.value))
    }

    reject(reason) {
        this.status = LPromise.STATUS_REJECTED
        this.reason = reason
        this.onRejectedList.forEach(onRejected => onRejected(this.value))
    }

    resolvePromise(promise, x, resolve, reject) {
        const then = x.then
        if (typeof then === 'function') {
            try {
                then.call(xor, y => this.resolvePromise(promise, y, resolve, reject), e => reject(e))
            } catch (e) {
                reject(e)
            }
        } else {
            resolve(x)
        }
    }

    then(onFullfilled, onRejected) {
        const promise = new LPromise((resolve, reject) => {
            if (this.status === LPromise.STATUS_FULLFILLED) {
                const value = onFullfilled(this.value)
                this.resolvePromise(promise, value, resolve, reject)
            }
            if (this.status === LPromise.STATUS_REJECTED) {
                const reason = onRejected(this.reason)
                this.resolvePromise(promise, reason, resolve, reject)
            }

            if (this.status === LPromise.STAUTS_PEDNDING) {
                this.onFullfilledList.push(onFullfilled)
                this.onRejectedList.push(onRejected)
            }
        })
        return promise;
    }
}

export default LPromise