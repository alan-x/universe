import Router from "./core/Router";
import DetailPage from "./page/DetailPage";
import ArticlePage from "./page/ArticlePage";
import LeactDom from "./core/LeactDom";

Router.register([
    {
        path: "/index",
        name: "主页",
        component: ArticlePage
    },
    {
        path: "/detail",
        name: "详情页",
        component: DetailPage
    }
], (data, route,match) => {
    if (route.path !== match) return
    LeactDom.render(new route.component(data), document.getElementById('app'))
})

