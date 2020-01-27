import React from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext('1')

const Child = ()=>{
    return (
        <MyContext.Consumer >
            {
                value=>{
                    debugger
                    return value
                }
            }
        </MyContext.Consumer>
    )
}

class  Middle extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return <div>
            <Child/>
        </div>
    }
}

class Parent extends React.Component {
    state = {
        value: 1
    }
    render() {
        return (
            <MyContext.Provider value={this.state.value}>
                <Child/>
                <button onClick={()=>this.setState({value: this.state.value+1})}>{ this.state.value}</button>
            </MyContext.Provider>
        )
    }
}

ReactDOM.render(<Parent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
