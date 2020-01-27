import Url from 'url-parse'

class Router {
    static routes = {}

    /**
     * 初始化路径
     * 添加 hashchange 事件, 在 hash 发生变化的时候, 跳转到相应的页面
     * 同时根据访问的地址初始化第一次访问的页面
     *
     */
    static init() {
        Object.values(this.routes).forEach(route => {
            route.callback(this.queryStringToParam(), this.routes['/' + this.getPath()].route,'/'+this.getPath())
        })

        window.addEventListener('hashchange', () => {
            Object.values(this.routes).forEach(route => {
                route.callback(this.queryStringToParam(), this.routes['/' + this.getPath()].route,'/'+this.getPath())
            })
        })

    }

    /**
     * 如果是数组
     * 就遍历数组并转化成 {"/index":{route:{...},callback:()=>{....}}} 形式
     * 并执行 init 方法
     * 如果是对象
     * 就转化成 {"/index":{route:{...},callback:()=>{....}}} 形式
     * 并和原来的 this.route 合并
     * 注意: 如果用对象形式必须手动执行 init 方法
     * 最终 this.route 形式为
     * [
     *  {"/index":{route:{...},callback:()=>{....}}}
     *  {"/detail":{route:{...},callback:()=>{....}}}
     * ]
     * @param routes
     * @param callback
     */
    static register(routes, callback) {
        if (Array.isArray(routes)) {
            this.routes = routes.map(route => {
                return {
                    [route.path]: {
                        route: route,
                        callback: callback
                    }
                }
            }).reduce((r1, r2) => {
                return {...r1, ...r2}
            })
            this.init()
        }
        this.routes = {
            ...this.routes,
            ...{
                [routes.path]: {
                    route: routes,
                    callback: callback
                }
            }
        }
    }

    /**
     * 跳转到某个路由
     * 其实只是简单的改变 hash
     * 触发 hashonchange 函数
     *
     * @param path
     * @param data
     */
    static push(path, data) {
        window.location.hash = this.combineHash(path, data)
    }

    /**
     * 获取路径
     * 比如 #detail => /detail
     * @returns {string|string}
     */
    static getPath() {
        let url = new Url(window.location.href)
        return url.hash.replace('#', '').split('?')[0] || '/'
    }

    /**
     * 将 queryString 转化成 参数对象
     * 比如 ?articleId=1 => {articleId: 1}
     * @returns {*}
     */
    static queryStringToParam() {
        let url = new Url(window.location.href)
        let hashAndParam = url.hash.replace('#', '')
        let arr = hashAndParam.split('?')
        if (arr.length === 1) return {}
        return arr[1].split('&').map(p => {
            return p.split('=').reduce((a, b) => ({[a]: b}))
        })[0]
    }

    /**
     * 将参数变成 queryString
     * 比如 {articleId:1} => ?articleId=1
     * @param params
     * @returns {string}
     */
    static paramToQueryString(params = {}) {
        let result = ''
        Object.keys(params).length && Object.keys(params).forEach(key => {
            if (result.length !== 0) {
                result += '&'
            }
            result += key + '=' + params[key]
        })
        return result
    }

    /**
     * 组合地址和数据
     * 比如 detail,{articleId:1} => detail?articleId=1
     * @param path
     * @param data
     * @returns {*}
     */
    static combineHash(path, data = {}) {
        if (!Object.keys(data).length) return path.replace('/', '')
        return (path + '?' + this.paramToQueryString(data)).replace('/', '')
    }
}

export default Router
