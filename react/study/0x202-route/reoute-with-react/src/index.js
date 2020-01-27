import React from 'react'
import ReactDom from 'react-dom'
import Router from "./core/Router";
import ArticleService from "./services/ArticleService";

class ArticlePage extends React.Component {
    constructor(props) {
        super()
    }

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
        const {title, summary, detail} = ArticleService.getById(this.props.articleId)
        return <div>
            <h3>{title}</h3>
            <p>{summary}</p>
            <hr/>
            <p>{detail}</p>
            <button className='btn btn-success' onClick={() => this.handleClick()}>返回</button>
        </div>
    }

    handleClick() {
        Router.push('/index')
    }
}


class RouterApp extends React.Component {
    componentDidMount(){
        Router.init()
    }
    render() {
        return {...this.props.children}
    }

}

class Route extends React.Component {
    constructor(props) {
        super()
        this.state={
            path:props.path,
            match:'',
            data:{}
        }
    }

    componentDidMount() {
        Router.register({
            path: this.props.path
        }, (data, route) => {
            this.setState({
                match:route.path,
                data:data
            })
        })

    }

    render() {
        let Component = this.props.component
        if (this.state.path===this.state.match){
            return <Component {...this.state.data}/>
        }
        return null
    }
}


class App extends React.Component {
    render() {
        return (<div>
            <Route path="/index" component={ArticlePage}/>
            <Route path="/detail" component={DetailPage}/>
        </div>)
    }
}


ReactDom.render(
    <RouterApp>
        <App/>
    </RouterApp>,
    document.getElementById('app')
)


