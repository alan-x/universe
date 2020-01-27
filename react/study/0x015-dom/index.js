import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log('componentDidMount',this.myRef)
    }

    render() {
        return <div ref= {(e)=>this.myRef=e}>
            Dom
        </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('app'))