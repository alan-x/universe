import ReactDom from 'react-dom'
import React from 'react'

// class Td extends React.Component {
//     render() {
//         return (<React.Fragment>
//             <td>1</td>
//             <td>2</td>
//         </React.Fragment>)
//     }
// }
//
// class Table extends React.Component {
//     render() {
//         return <table>
//             <tr>
//                 <Td/>
//             </tr>
//         </table>
//     }
// }

class Tr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extend: false
        }
    }

    render() {
        const {extend} = this.state
        const {data} = this.props
        return (
            <>
                <tr>
                    <td onClick={() => this.handleExtend()}>
                        <button className='btn btn-primary'>{extend ? '展开' : '收起'}</button>
                    </td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                </tr>
                {
                    extend ? <tr>
                        <td colSpan='3'>{data.detail}</td>
                    </tr> : null
                }
            </>
        );
    }

    handleExtend() {
        this.setState({
            extend: !this.state.extend
        })
    }
}

class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                {
                    name: '张三',
                    age: '11',
                    detail: '我很开心'
                },
                {
                    name: '李四',
                    age: '22',
                    detail: '我也很开心'
                },
                {
                    name: '王五',
                    age: '33',
                    detail: '我比张三和李四更开心'
                }
            ]
        }
    }

    render() {
        const {users} = this.state
        return (
            <table className='table'>
                {
                    users.map((u, i) => <Tr data={u} key={i}/>)
                }
            </table>
        );
    }
}

ReactDom.render(
    <Table/>,
    document.getElementById('app')
)