
const articles = [
    {
        id: 1,
        title: "Redux入门0x101: 简介及`redux`简单实现",
        summary: "简介及`redux`简单实现",
        detail: "详情1"
    },
    {
        id: 2,
        title: "Redux入门0x102: redux 栗子之 counter",
        summary: "redux 栗子之 counter",
        detail: "详情2"
    },
    {
        id: 3,
        title: "Redux入门0x103: 拆分多个 reducer",
        summary: "拆分多个 reducer",
        detail: "详情3"
    },
    {
        id: 4,
        title: "Redux入门0x104: Action Creators",
        summary: "Action Creators",
        detail: "详情4"
    },
    {
        id: 5,
        title: "Redux入门0x105: redux 中间件",
        summary: "redux 中间件",
        detail: "详情5"
    },

]

class ArticleService {

    static getAll() {
        return articles
    }

    static getById(id) {
        return articles.find((article) => {
            return id == article.id
        })
    }
}

export default ArticleService