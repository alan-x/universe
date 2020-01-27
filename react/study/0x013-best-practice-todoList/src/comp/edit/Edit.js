import React from 'react'

class Edit extends React.Component {
    constructor() {
        super()
        this.state = {
            content: '',
            todo: {
                content: ''
            }
        }
    }

    /**
     * 在点击更新的时候
     * 覆盖默认的`content`和`todo`
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            content: nextProps.todo.content || '',
            todo: nextProps.todo || {content: ''}
        })
    }

    render() {
        const {content} = this.state
        return <div className='card'>
            <div className='card-body '>
                <input className='form-control' type="text" value={content} onChange={(e) => {
                    this.setState({content: e.target.value})
                }}/>
                <button className='btn btn-link' onClick={() => this.handleSaveClick()}>保存</button>
            </div>
        </div>
    }

    /**
     * 点击保存的时候
     * 将`content`和`todo`合并
     * 变成一个完整的新的`todo`回去
     *
     */
    handleSaveClick() {
        this.props.onClick && this.props.onClick({...this.state.todo, content: this.state.content})
        this.setState({
            content: '',
            todo: {
                content: ''
            }
        })
    }
}

export default Edit