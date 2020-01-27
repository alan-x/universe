import React from 'react'
import {STATE_TODO_COMPLETE, STATE_TODO_DELETE} from "../../service/TodoService";
import './TodoItem.css'

class TodoItem extends React.Component {
    render() {
        const {todo} = this.props
        return <div className='todo-item'>
            <p style={{padding: '5px'}}>{todo.content}</p>
            <div className="action">
                {
                    // 还没有有被删除 && 还没完成 才能做完成操作
                    todo.state !== STATE_TODO_DELETE && todo.state !== STATE_TODO_COMPLETE

                        ? <button className='btn btn-link' style={{padding: '5px'}}
                                  onClick={() => this.props.onComplete(todo)}>完成</button>
                        : null
                }
                {
                    // 还没被删除 && 还没完成 才能做更新操作
                    todo.state !== STATE_TODO_DELETE && todo.state !== STATE_TODO_COMPLETE
                        ? <button className='btn btn-link' style={{padding: '5px'}}
                                  onClick={() => this.props.onUpdate(todo)}>更新</button>
                        : null
                }
                {
                    // 还没被删除 才能被删除
                    todo.state !== STATE_TODO_DELETE
                        ? <button className='btn btn-link' style={{padding: '5px'}}
                                  onClick={() => this.props.onDelete(todo)}>删除</button>
                        : null
                }
                {
                    // 已经被删除 才能被恢复
                    todo.state === STATE_TODO_DELETE
                        ? <button className='btn btn-link' style={{padding: '5px'}}
                                  onClick={() => this.props.onRestore(todo)}>恢复</button>
                        : null
                }
            </div>
        </div>
    }
}

export default TodoItem