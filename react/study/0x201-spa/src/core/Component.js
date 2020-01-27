/**
 * 这是组件根类
 * 所有的组件都继承这个根
 */
class Component {
    /**
     * 返回 dom 字符串
     */
    render() {
        return ''
    }

    /**
     * dom 挂载上去以后 执行该方法, 可以在这个方法上执行 dom 查询和事件绑定
     */
    componentDidMount() {

    }

}

export default Component