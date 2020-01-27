import h from "../lib/h";
import diff from "../lib/diff";

test('REPLACE', () => {
    expect(diff(h('div', {}), h('p', {}, '222'))).toEqual({
        "type": "REPLACE",
        "value": {"children": ["222"], "props": {}, "type": "p"}
    })
})
test('CREACTE', () => {
    expect(diff(undefined, h('div', {}))).toEqual({
        "type": "CREATE",
        "value": {"children": [], "props": {}, "type": "div"}
    })
})

test('REMOVE', () => {
    expect(diff(h('div', {}), undefined)).toEqual({"type": "REMOVE"})
})

test('UPDATE', () => {
    expect(
        diff(
            h('div', {}, [
                h('p', {}, '12312')
            ]),
            h('div', {})
        )
    ).toEqual({"children": [{"type": "REMOVE"}], "type": "UPDATE"})
})
