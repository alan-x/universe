import React from 'react'
import ReactDom from 'react-dom'


let App = ({children}) => <div>{children}</div>
let Topbar = () => <div>这是标题栏</div>
let Navbar = () => <div>这是导航栏</div>
let Content = ({children}) => <div>{children}</div>

ReactDom.render(
    <App>
       函数组件
    </App>,
    document.getElementById('app'))