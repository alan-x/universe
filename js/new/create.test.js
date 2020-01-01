const create= require('./create')

describe('create 测试', ()=>{
    test('返回一个新对象', () => {
        const Func = function (name, age) {
            this.name = name
            this.age = age
        }
        const newObj = create(Func)
        expect(typeof newObj).toBe('object')
    })

    test('返回新对象的 this 指向自己', () => {
        const Func = function (name, age) {
            this.name = name
            this.age = age
        }
        const newObj = create(Func, 'name', 'age')
        expect(newObj.name).toBe('name')
        expect(newObj.age).toBe('age')
    })
})
