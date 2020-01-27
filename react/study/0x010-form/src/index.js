import React from 'react'
import ReactDom from 'react-dom'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            sex: '',
            content: '',
            formData: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            formData: `name=${this.state.name}&sex=${this.state.sex}&content=${this.state.content}`
        })
    }

    render() {
        return <div>
            <h1>填写表单</h1>
            <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                    <label htmlFor="">
                        姓名:
                        <input type="text"
                               value={this.state.name}
                               onChange={(event) => this.setState({name: event.target.value})}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        性别:
                        <select name="sex" id="" value={this.state.sex}
                                onChange={(event) => this.setState({sex: event.target.value})}>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        简介:
                        <textarea name="" id="" cols="30" rows="10" value={this.state.content}
                                  onChange={(event) => this.setState({content: event.target.value})}>
                    </textarea>
                    </label>
                </div>
                <button type='submit'>提交</button>
            </form>
            <div>
                <hr/>
                <h1>预览</h1>
                <div>
                    姓名:{this.state.name}
                </div>
                <div>
                    性别:{this.state.sex}
                </div>
                <div>
                    简介:{this.state.content}
                </div>
            </div>
            <div>
                <hr/>
                <h1>表单提交</h1>
                <p>{this.state.formData}</p>
            </div>

        </div>
    }
}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)
