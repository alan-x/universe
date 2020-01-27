
// 测试 LeactDom
// import LeactDom from "./core/LeactDom";
//
// LeactDom.render(`<p id="p">这是一个p</p>`, document.getElementById('app'))
// document.getElementById('p').addEventListener('click', () => {
//     LeactDom.render("<span>这是一个span</span>", document.getElementById('app'))
//
// })

// 测试组件
import LeactDom from "./core/LeactDom";
import ArticlePage from "./page/ArticlePage";

LeactDom.render(new ArticlePage(),document.getElementById('app'))



