import React from 'react'
import ReactDom from 'react-dom'

const aP = <p>这是`p`</p>

// 栗子1
// ReactDom.render(
//     p,
//     document.getElementById('app')
// )
const aDiv = () => <div>这是`div`</div>
// 栗子2
// ReactDom.render(
//     aDiv(),
//     document.getElementById('app')
// )

const divWithChildren = (...children) => {
    const len = children.length
    return <div>
        一共有{len}个子组件
        {
            children.map((child, index) => {
                return <div>
                    <span>这是第{index + 1}个子组件:</span>
                    {child}
                </div>
            })
        }
    </div>
}
//
// ReactDom.render(
//     divWithChildren(
//         aP,
//         aDiv(),
//         <h1>h1</h1>
//     ),
//     document.getElementById('app')
// )

// 栗子3
class AComponent extends React.Component {
    render() {
        return <div>
            classComponent
        </div>
    }
}

ReactDom.render(
    <AComponent/>,
    document.getElementById('app')
)