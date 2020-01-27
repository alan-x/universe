import React from 'react'
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [...props.todoList].reverse() || []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todoList: [...nextProps.todoList].reverse() || []
        })
    }

    render() {
        const {todoList} = this.state
        return <div >
                {
                    todoList.map((todo, index) => {
                        return <TodoItem
                            todo={todo} key={index}
                            onComplete={this.props.onComplete}
                            onUpdate={this.props.onUpdate}
                            onDelete={this.props.onDelete}
                            onRestore={this.props.onRestore}
                        />
                    })
                }
        </div>
    }
}

export default TodoList