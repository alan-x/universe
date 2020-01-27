import React from 'react'
import ReactDom from 'react-dom'


// 栗子1
// ReactDom.render(
//     React.createElement(
//         "h1",
//         null,
//         "Hello, world!"
//     ),
//     document.getElementById('app')
// );

// 栗子二
// ReactDom.render(
//     React.createElement(
//         "div",
//         null,
//         React.createElement(
//             "h1",
//             null,
//             "送方外上人 / 送上人"
//         ),
//         React.createElement(
//             "p",
//             null,
//             "孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。"
//         )
//     ),
//     document.getElementById('app')
// )
// ;

// 栗子三
ReactDom.render(
    <div>
        <h1>送方外上人 / 送上人</h1>
        <p>孤云将野鹤，岂向人间住。莫买沃洲山，时人已知处。</p>
    </div>,
    document.getElementById('app')
)
;