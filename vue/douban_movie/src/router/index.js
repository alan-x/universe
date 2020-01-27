import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../page/main/MainPage.vue'
import IndexPage from '../page/main/index/IndexPage.vue'
import HotPage from '../page/main/hot/HotPage.vue'
import SearchPage from '../page/main/search/SearchPage.vue'
import MinePage from '../page/main/mine/MinePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'index',
          name: 'IndexPage',
          component: IndexPage

        },
        {
          path: 'hot',
          name: 'HotPage',
          component: HotPage

        },
        {
          path: 'search',
          name: 'SearchPage',
          component: SearchPage

        },
        {
          path: 'mine',
          name: 'MinePage',
          component: MinePage

        }
      ]
    }
  ]
})
