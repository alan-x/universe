let eventMap = {}

class MyEvent {

    /**
     * 发布一个事件并附带一份数据
     *
     * @param name 发布的事件名
     * @param data 附带的数据
     */
    static pub(name, data) {
        if (!eventMap.hasOwnProperty(name)) return
        let callbacks = eventMap[name]
        if (callbacks.length === 0) return
        callbacks.forEach((callback) => {
            callback(data)
        })


    }

    /**
     * 订阅一个事件并附带一个回调
     * 说明这个事件发生的时候所要做的事情
     *
     * @param name 订阅的事件名称
     * @param callback 回调
     * @returns {function(): *} 返回一个函数, 执行这个函数将会取消订阅
     */
    static sub(name, callback) {
        let callbacks = []
        if (eventMap.hasOwnProperty(name)) {
            callbacks = eventMap[name]
        }
        callbacks.push(callback)
        eventMap[name] = callbacks
        return () => callbacks.shift(callback)
    }

}

export default MyEvent