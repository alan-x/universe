const groupByTest = require('./../groupBy')


let students = [
    {name: '张三', score: 84},
    {name: '李四', score: 58},
    {name: '王五', score: 99},
    {name: '赵六', score: 69}
];
test('normal', () => {
    expect(groupByTest(students)).toEqual({"A": [{"name": "张三", "score": 84}, {"name": "王五", "score": 99}], "B": [{"name": "赵六", "score": 69}], "C": [{"name": "李四", "score": 58}]})
})
