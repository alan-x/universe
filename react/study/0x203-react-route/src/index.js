
// import createHistory from 'history/createBrowserHistory'
// const history = createHistory()
//
// // 监听 location 的变化
// const unlisten = history.listen((location, action) => {
//     // location is an object like window.location
//     console.log(action, location.pathname, location.state)
// })
// // 修改 location
// history.push("/home", { some: "state" })
// // 取消监听
// unlisten()



// import React from 'react'
// import ReactDom from 'react-dom'
// import {Router, Route, Switch, withRouter} from 'react-router'
// import {BrowserRouter, Link} from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'

// const history = createHistory()

// class App extends React.Component{
//     render(){
//         console.log(this)
//         return(
//             <div>
//                 <div>
//                     <button className="btn btn-primary" onClick={()=>{this.props.history.push('/index')}}>首页</button>
//                     <button className="btn btn-primary" onClick={()=>{this.props.history.push('/article')}}>文章</button>
//                     <button className="btn btn-primary" onClick={()=>{this.props.history.push('/mine')}}>我的</button>
//                 </div>
//                 <hr/>
//                 <Switch>
//                     <Route path='/index' component={()=>({render:()=><p>首页</p>})}></Route>
//                     <Route path='/article' component={()=>({render:()=><p>文章</p>})}></Route>
//                     <Route path='/mine' component={()=>({render:()=><p>我的</p>})}></Route>
//                 </Switch>
//             </div>
//         )
//     }
// }
//
// let MyApp=withRouter(App)
//
// ReactDom.render(
//     <Router history={history}>
//         <MyApp/>
//     </Router>,
//     document.getElementById('app')
// )







import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Switch, Route, Link, withRouter} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/index'>首页</Link>
                    <Link to='/article'>文章</Link>
                    <Link to='/mine'>我的</Link>
                </div>
                <hr/>
                <Switch>
                    <Route path='/index' component={() => ({render: () => <p>首页</p>})}></Route>
                    <Route path='/article' component={() => ({render: () => <p>文章</p>})}></Route>
                    <Route path='/mine' component={() => ({render: () => <p>我的</p>})}></Route>
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