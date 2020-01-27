import ArticleService from "../services/ArticleService";
import DetailPage from "./DetailPage";
import LeactDom from "../core/LeactDom";

class ArticlePage {
    render() {
        let articlesListString = ArticleService.getAll()
            .map(article => {
                return `<div class="article" data-id="${article.id}">
                <h5>${article.title}</h5>
                <p>${article.summary}</p>
                <hr>
            </div>`
            })
            .reduce((article1, article2) => {
                return article1 + article2
            })
        let articleListContrinerString = `<div>
            <h3>文章列表</h3>
            <hr>
            <div>
            ${articlesListString}
            </div>
        </div>`

        return articleListContrinerString
    }

    componentDidMount() {
        let articles = document.getElementsByClassName('article')
        ;[].forEach.call(articles, article => {
                article.addEventListener('click', () => {
                    LeactDom.render(new DetailPage({articleId: article.getAttribute('data-id')}), document.getElementById('app'))
                })
            }
        )

    }

}

export default ArticlePage