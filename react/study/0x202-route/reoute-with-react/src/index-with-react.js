import React from 'react'
import ReactDom from 'react-dom'
import Router from "./core/Router";
import ArticleService from "./services/ArticleService";

class ArticlePage extends React.Component {

    render() {
        return <div>
            <h3>文章列表</h3>
            <hr/>
            {
                ArticleService.getAll().map((article, index) => {
                    return <div key={index} onClick={() => this.handleClick(article)}>
                        <h5>{article.title}</h5>
                        <p>{article.summary}</p>
                        <hr/>
                    </div>
                })
            }
        </div>

    }

    handleClick(article) {
        Router.push('/detail', {articleId: article.id})
    }
}

class DetailPage extends React.Component {
    render() {
        const {title, summary, detail} = ArticleService.getById(this.props.data.articleId)
        return <div>
            <h3>{title}</h3>
            <p>{summary}</p>
            <hr/>
            <p>{detail}</p>
            <button className='btn btn-success'  onClick={() => this.handleClick()}>返回</button>
        </div>
    }

    handleClick() {
        Router.push('/index')
    }
}

const routes = [
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
];


Router.register(routes, (data, route) => {
    let Component = route.component
    ReactDom.render(
        <Component {...{data, route}}/>,
        document.getElementById("app")
    )
})


