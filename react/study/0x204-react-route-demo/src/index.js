// 简单使用
// import React from 'react'
// import ReactDom from 'react-dom'
// import {BrowserRouter, Switch, Route, Link, withRouter} from 'react-router-dom'

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <Link to='/index'>首页</Link>
//                     <Link to='/article'>文章</Link>
//                     <Link to='/mine'>我的</Link>
//                 </div>
//                 <hr/>
//                 <Switch>
//                     <Route path='/index' component={() => ({render: () => <p>首页</p>})}></Route>
//                     <Route path='/article' component={() => ({render: () => <p>文章</p>})}></Route>
//                     <Route path='/mine' component={() => ({render: () => <p>我的</p>})}></Route>
//                 </Switch>
//             </div>
//         )
//     }
// }


// 带导航效果
// import React from 'react'
// import ReactDom from 'react-dom'
// import {BrowserRouter, Switch, Route, NavLink, withRouter} from 'react-router-dom'
// import './App.css'
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <NavLink  to='/index' activeStyle={{ color:'#eeeeee'}} >首页</NavLink>
//                     <NavLink to='/article'  activeClassName='active'>文章</NavLink>
//                     <NavLink to='/mine'  activeStyle={{ color:'#eeeeee'}} isActive={(match,location)=>location.pathname==='/mine'}>我的</NavLink>
//
//                 </div>
//                 <hr/>
//                 <Switch>
//                     <Route path='/index' component={() => ({render: () => <p>首页</p>})}></Route>
//                     <Route path='/article' component={() => ({render: () => <p>文章</p>})}></Route>
//                     <Route path='/mine' component={() => ({render: () => <p>我的</p>})}></Route>
//                 </Switch>
//             </div>
//         )
//     }
// }
//
// let MyApp = withRouter(App)
//
// ReactDom.render(
//     <BrowserRouter>
//         <MyApp/>
//     </BrowserRouter>,
//     document.getElementById('app')
// )


// 重定向
// import React from 'react'
// import ReactDom from 'react-dom'
// import {BrowserRouter, Switch, Route, NavLink, Redirect, withRouter} from 'react-router-dom'
//
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <NavLink to='/index'>首页</NavLink>
//                     <NavLink to='/article'>文章</NavLink>
//                     <NavLink to='/mine'>我的</NavLink>
//                 </div>
//                 <hr/>
//                 <Switch>
//                     <Route path='/index' component={() => ({render: () => <p>首页</p>})}></Route>
//                     <Route path='/article' component={() => ({render: () => <p>文章</p>})}></Route>
//                     <Route path='/mine' component={() => ({render: () => <p>我的</p>})}></Route>
//                     <Redirect from="/" to="/index"/>
//                 </Switch>
//             </div>
//         )
//     }
// }
//
// let MyApp = withRouter(App)
//
// ReactDom.render(
//     <BrowserRouter>
//         <MyApp/>
//     </BrowserRouter>,
//     document.getElementById('app')
// )

// 没找到
// import React from 'react'
// import ReactDom from 'react-dom'
// import {BrowserRouter, Switch, Route, NavLink, withRouter} from 'react-router-dom'
//
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <NavLink to='/index'>首页</NavLink>
//                     <NavLink to='/article'>文章</NavLink>
//                     <NavLink to='/mine'>我的</NavLink>
//                 </div>
//                 <hr/>
//                 <Switch>
//                     <Route path='/index' component={() => ({render: () => <p>首页</p>})}></Route>
//                     <Route path='/article' component={() => ({render: () => <p>文章</p>})}></Route>
//                     <Route path='/mine' component={() => ({render: () => <p>我的</p>})}></Route>
//                     <Route component={() => ({render: () => <p>未找到这个页面</p>})}/>
//                 </Switch>
//             </div>
//         )
//     }
// }
//
// let MyApp = withRouter(App)
//
// ReactDom.render(
//     <BrowserRouter>
//         <MyApp/>
//     </BrowserRouter>,
//     document.getElementById('app')
// )


// url 传参
// import React from 'react'
// import ReactDom from 'react-dom'
// import {BrowserRouter, Switch, Route, NavLink, withRouter} from 'react-router-dom'
//
// class Article extends React.Component{
//     render(){
//         return(<p>{this.props.match.params.id}</p>)
//     }
// }
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <NavLink to='/index'>首页</NavLink>
//                     <NavLink to='/article/1'>文章1</NavLink>
//                     <NavLink to='/article/2'>文章2</NavLink>
//                     <NavLink to='/mine'>我的</NavLink>
//                 </div>
//                 <hr/>
//                 <Switch>
//                     <Route path='/index' component={() => ({render: () => <p>首页</p>})}></Route>
//                     <Route path='/article/:id' component={Article}></Route>
//                     <Route path='/mine' component={() => ({render: () => <p>我的</p>})}></Route>
//                 </Switch>
//             </div>
//         )
//     }
// }
//
// let MyApp = withRouter(App)
//
// ReactDom.render(
//     <BrowserRouter>
//         <MyApp/>
//     </BrowserRouter>,
//     document.getElementById('app')
// )

// 手动跳转并传参
// import React from 'react'
// import ReactDom from 'react-dom'
// import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom'
//
// class Article extends React.Component{
//     render(){
//         console.log(this)
//         return(<p>文章 id:{this.props.location.state.id}</p>)
//     }
// }
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <button className='btn btn-primary' onClick={()=>{this.props.history.push('/article',{id:1})}}>文章1</button>
//                     <button className='btn btn-primary'  onClick={()=>{this.props.history.push('/article',{id:2})}}>文章2</button>
//
//                 </div>
//                 <hr/>
//                 <Switch>
//                     <Route path='/article' component={Article}></Route>
//                 </Switch>
//             </div>
//         )
//     }
// }
//
// let MyApp = withRouter(App)
//
// ReactDom.render(
//     <BrowserRouter>
//         <MyApp/>
//     </BrowserRouter>,
//     document.getElementById('app')
// )


// 何时使用 Switch
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom'

class Article extends React.Component {
    render() {
        console.log(this)
        return (<p>文章 id:{this.props.location.state.id}</p>)
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/article' component={() => <p>article</p>}></Route>
                    <Route path='/article/1' component={() => <p>:name</p>}></Route>
                </Switch>
            </div>
        )
    }
}

let MyApp = withRouter(App)

ReactDom.render(
    <BrowserRouter>
        <MyApp/>
    </BrowserRouter>,
    document.getElementById('app')
)