const todoList =[]
export const STATE_TODO_NORMAL = 'STATE_TODO_NORMAL'
export const STATE_TODO_COMPLETE = 'STATE_TODO_COMPLETE'
export const STATE_TODO_DELETE = 'STATE_TODO_DELETE'

class TodoService {


    /**
     * 获取对应状态的`todo`数据
     * 如果不传`state`
     * 则返回所有未被删除的todo
     * 返回的时候使用`...`展开符
     * 防止数据引用
     *
     * @param state
     * @returns {*[]}
     */
    static getByState(state = null) {
        if (state === null || state === '') {
            return [...this.getAllExceptDeleted()]
        }

        return [...todoList.filter((todo) => {
            return todo.state === state
        })]
    }

    /**
     * 获取所有未被删除的`todo`
     * @returns {*[]}
     */
    static getAllExceptDeleted() {
        return [...todoList.filter((todo) => {
            return todo.state !== STATE_TODO_DELETE
        })]
    }

    /**
     * 添加或者更新一条`todo`
     * 如果`todo`没有`id`
     *      就是创建
     *      给他`id``state``created_at`默认属性
     *      然后推入数组
     * 如果有
     *      就是更新
     *      更新一下`updated_at`
     *      然后找到原本那条数据替换
     *
     * @param todo
     */
    static push(todo) {
        if (!todo.hasOwnProperty('id')) {
            todo.id = todoList.length
            todo.state = STATE_TODO_NORMAL
            todo.created_at = Date.now()
            todoList.push(todo)
        } else {
            todo.updated_at = Date.now()
            this.update(todo)
        }
    }

    static delete(todo) {
        todo.state = STATE_TODO_DELETE
        todo.delete_at = Date.now()
        this.update(todo)
    }

    static restore(todo) {
        todo.state = STATE_TODO_NORMAL
        todo.delete_at = null
        this.update(todo)
    }

    static complete(todo) {
        todo.state = STATE_TODO_COMPLETE
        todo.updated_at = Date.now()
        this.update(todo)
    }

    static update(todo) {
        let index = todoList.findIndex(t => t.id == todo.id)
        todoList[index] = todo
    }
}

export default TodoService