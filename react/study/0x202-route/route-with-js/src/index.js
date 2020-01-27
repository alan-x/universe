import Router from "./core/Router";

Router.register([
    {
        path: "/index",
        name: "主页",
        component: (props) => {
            return document.createTextNode(`这是${props.route.name}`)
        }
    },
    {
        path: "/detail",
        name: "详情页",
        component: (props) => {
            return document.createTextNode(`这是${props.route.name}`)
        }
    }
], (data, route, match) => {
    if (route.path === match) {
        let app = document.getElementById('app')
        app.childNodes.forEach(c => c.remove())
        app.appendChild(new route.component({data,route,match}))
    }
})

Router.push('/index')

setTimeout(()=>{
    Router.push('/detail')
},3000)
