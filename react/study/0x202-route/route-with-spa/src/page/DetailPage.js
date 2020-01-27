import ArticleService from "../services/ArticleService";
import Component from "../core/Component";
import Router from "../core/Router";

class DetailPage extends Component {
    constructor(props) {
        super()
        this.article = ArticleService.getById(props.articleId)
    }

    render() {
        const {title, summary, detail} = this.article
        return `<div>
            <h3>${title}</h3>
            <p>${summary}</p>
            <hr>
            <p>${detail}</p>
            <button id="back" type="button" class="btn btn-success">返回</button>
        </div>`
    }


    componentDidMount() {
        document.getElementById('back').addEventListener('click', () => {
            Router.push('/index')
        })
    }
}

export default DetailPage
