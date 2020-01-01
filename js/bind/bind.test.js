const bind = require('./bind')

describe('bind 测试', ()=>{
    test('必须返回一个新的函数', () => {
        const object = {
            name: 'object',
            getName: function () {
                return this.name
            }
        }
        const oldFunc = object.getName
        const newFunc = bind(oldFunc, object)
        expect(typeof newFunc).toBe('function')
    })

    test('新函数的 this 指向第一个参数', () => {
        const object = {
            name: 'object',
            getName: function () {
                return this.name
            }
        }
        const oldFunc = object.getName
        const newFunc = bind(oldFunc, object)
        expect(newFunc()).toBe(object.name)
    })

    test('后续参数作为函数调用的参数', () => {
        const object = {
            name: 'object',
            getName: function (age) {
                return {name: this.name, age}
            }
        }
        const oldFunc = object.getName
        const newFunc = bind(oldFunc, object, 11)
        expect(newFunc()).toEqual({
            name: object.name,
            age: 11
        })
    })

    test('新函数调用的时候可以传入参数', () => {
        const object = {
            name: 'object',
            getName: function (age, height) {
                return {name: this.name, age, height}
            }
        }
        const oldFunc = object.getName
        const newFunc = bind(oldFunc, object, 11)
        expect(newFunc(180)).toEqual({
            name: object.name,
            age: 11,
            height: 180
        })
    })
})
