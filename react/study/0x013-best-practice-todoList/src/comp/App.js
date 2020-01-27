import React from 'react'
import Edit from "./edit/Edit";
import TodoList from "./todo/TodoList";
import TodoService, {STATE_TODO_COMPLETE, STATE_TODO_NORMAL} from "../service/TodoService";
import FilterList from "./filter/FilterList";
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        // 初始化几个 todo 做案例
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        arr.forEach(value => {
            TodoService.push({
                content: '这是一个todo' + value,
            })
        })
        this.state = {
            filter: '',
            todo: {content: ''},
            todoList: TodoService.getByState()
        }


    }

    render() {
        const {todoList, filter, todo} = this.state
        return <div className='container mt-3'>
            <Edit todo={todo} onClick={(todo) => this.handleEditSave(todo)}></Edit>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-title'>
                        <FilterList now={filter} onClick={(filter) => this.handleFilter(filter)}/>
                    </div>
                    <TodoList todoList={todoList}
                              onComplete={(todo) => this.onComplete(todo)}
                              onUpdate={(todo) => this.onUpdate(todo)}
                              onDelete={(todo) => this.onDelete(todo)}
                              onRestore={(todo) => this.onRestore(todo)}
                    />
                </div>

            </div>
        </div>
    }

    /**
     * 处理编辑事件
     * 创建或者更新
     *
     * @param todo
     */
    handleEditSave(todo) {
        TodoService.push(todo)
        this.setState({
            filter: '',
            todo: {content: ''},
            todoList: TodoService.getByState('')
        })
    }

    /**
     * 点击完成按钮
     *
     * @param todo
     */
    onComplete(todo) {
        TodoService.complete(todo)
        this.setState({
            todoList: TodoService.getByState(this.state.filter)
        })
    }

    /**
     * 点击更新按钮
     *
     * @param todo
     */
    onUpdate(todo) {
        this.setState({
            todo: todo
        })
    }

    /**
     * 删除按钮事件
     *
     * @param todo
     */
    onDelete(todo) {
        TodoService.delete(todo)
        this.setState({
            todoList: TodoService.getByState(this.state.filter)
        })
    }

    /**
     * 恢复按钮事件
     *
     * @param todo
     */
    onRestore(todo) {
        TodoService.restore(todo)
        this.setState({
            todoList: TodoService.getByState(this.state.filter)
        })
    }

    /**
     * 过滤点击事件
     *
     * @param filter
     */
    handleFilter(filter) {
        this.setState({
            filter: filter,
            todoList: TodoService.getByState(filter)
        })
    }
}

export default App