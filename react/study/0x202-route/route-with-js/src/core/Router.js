
class Router {
    static routes = {}

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
     * 本质是遍历所有路由并执行 callback
     *
     * @param path
     * @param data
     */
    static push(path, data) {
        Object.values(this.routes).forEach(route => {
            route.callback(data, this.routes[ path].route, path)
        })
    }

}

export default Router
