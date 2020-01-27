const parse = require('./../parse')


test('int', () => {
    expect(parse('int')).toEqual({"type": "int"})
})
test('string', () => {
    expect(parse('string')).toEqual({"type": "string"})
})
test('bool', () => {
    expect(parse('bool')).toEqual({"type": "bool"})
})
test('Array<int>', () => {
    expect(parse('Array<int>')).toEqual({"type": "Array", "typeArg": {"type": "int"}})
})
test('Array<Array<int>>', () => {
    expect(parse('Array<Array<int>>')).toEqual( {"type": "Array", "typeArg": {"type": "Array", "typeArg": {"type": "int"}}})
})
test('"Array<Array<Array<int>>>"', () => {
    expect(parse('Array<Array<Array<int>>>')).toEqual({"type": "Array", "typeArg": {"type": "Array", "typeArg": {"type": "Array", "typeArg": {"type": "int"}}}})
})
