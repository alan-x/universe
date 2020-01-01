const call= require('./call')

describe('call 测试', ()=>{
    test('返回一个新对象', () => {
        const object = {
            name: 'object',
            getName: function () {
                return this.name
            }
        }
        const result = call(object.getName, object)
        expect(result).toBe(object.name)
    })

    test('接受参数', () => {
        const object = {
            name: 'object',
            getName: function (age) {
                return {
                    name: this.name,
                    age
                }
            }
        }
        const result = call(object.getName, object, 18)
        expect(result.name).toBe(object.name)
        expect(result.age).toBe(18)
    })
})
