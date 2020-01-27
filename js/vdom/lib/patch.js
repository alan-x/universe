import render from "./render";

let patch = (element, patches, parent) => {
    const {type, value} = patches
    switch (type) {
        case 'CREATE': {
            render(value, parent)
            break
        }
        case 'UPDATE': {
            for (let i = 0; i < Math.max(element.childNodes.length, patches.children.length); i++) {
                patch(element.childNodes[i], patches.children[i], element)
            }
            break
        }
        case 'DELETE': {
            element && element.remove()
            break
        }
        case 'REPLACE': {
            parent.replaceChild(render(patches.value), element)
            break
        }
    }
}

export default patch
