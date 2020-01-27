import {h} from "../dist/bundle";


test('normal', () => {
    expect(h('p', {}, 2312)).toEqual({"children": [2312], "props": {}, "type": "p"})
})

test('for', () => {
    expect(h('p', {}, [
        h('p', {}, '1'),
        h('p', {}, '2'),
        h('p', {}, '3')
    ])).toEqual({
        "children": [{"children": ["1"], "props": {}, "type": "p"}, {
            "children": ["2"],
            "props": {},
            "type": "p"
        }, {"children": ["3"], "props": {}, "type": "p"}], "props": {}, "type": "p"
    })
})
