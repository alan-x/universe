import * as vDom from './../dist/bundle'

let oldNode = <div>
    <div>
        <p>321</p>
    </div>
</div>
let root = document.getElementById('app')
let node = vDom.render(oldNode, root)
let newNode = <div>
    <p>1233</p>
</div>
let patches = vDom.diff(oldNode, newNode)
console.log(patches)
setTimeout(() => {
    vDom.patch(node, patches, root)
}, 3000)
