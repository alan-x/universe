import LPromise from './promise'

describe('promise 测试', () => {
    test('resolve', async () => {
        const result = await new LPromise((resolve, reject) => resolve(1))
        expect(result).toBe(1)
    })
    test('reject', async () => {
        try {
            const result = await new LPromise((resolve, reject) => reject(1))
        } catch (e) {
            expect(e).toBe(1)
        }
    })
    test('then', async ()=>{
        const promise = new LPromise((resolve)=>{
            resolve(1)
        })
        expect(typeof promise.then).toBe('function')
    })
})
