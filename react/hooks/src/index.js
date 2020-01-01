import React from 'react';
import ReactDOM from 'react-dom';
import UseStateDemo from "./UseStateDemo";
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            num:0
        }
    }
    render() {
        const {num} =this.state
        return (
            <div>
                <button onClick={()=>this.setState({num: 1+num})}>{num}</button>
                <UseStateDemo/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));

