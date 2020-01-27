const findNodeById = require('./../findNodeById')

let tree = {
    id: '1',
    label: 'first',
    children: [
        {
            id: '2',
            label: 'second'
        },
        {
            id: '3',
            label: 'third',
            children: [
                {
                    id: '4',
                    label: 'fourth'
                },
                {
                    id: '5',
                    label: 'fifth'
                }
            ]
        }
    ]
}
test('1', () => {
    expect(findNodeById(tree, '1')).toEqual({"children": [{"id": "2", "label": "second"}, {"children": [{"id": "4", "label": "fourth"}, {"id": "5", "label": "fifth"}], "id": "3", "label": "third"}], "id": "1", "label": "first"})
})
test('2', () => {
    expect(findNodeById(tree, '2')).toEqual({"id": "2", "label": "second"})
})
test('3', () => {
    expect(findNodeById(tree, '3')).toEqual({"children": [{"id": "4", "label": "fourth"}, {"id": "5", "label": "fifth"}], "id": "3", "label": "third"})
})
test('4', () => {
    expect(findNodeById(tree, '4')).toEqual({"id": "4", "label": "fourth"})
})
test('5', () => {
    expect(findNodeById(tree, '5')).toEqual({"id": "5", "label": "fifth"})
})
test('6 null', () => {
    expect(findNodeById(tree, '6')).toEqual(null)
})
