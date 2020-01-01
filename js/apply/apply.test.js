const apply= require('./apply')

describe('apply 测试', ()=>{
    test('this 指向指定对象', () => {
        const object = {
            name: 'object',
            getName: function () {
                return this.name
            }
        }
        const result = apply(object.getName, object)
        expect(result).toBe(object.name)
    })

    test('接受数组参数', () => {
        const object = {
            name: 'object',
            getName: function (age) {
                return {
                    name: this.name,
                    age
                }
            }
        }
        const result = apply(object.getName, object, [18])
        expect(result.name).toBe(object.name)
        expect(result.age).toBe(18)
    })
})
