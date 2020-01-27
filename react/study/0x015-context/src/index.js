import ReactDom from 'react-dom'
import React from 'react'

const ThemeContext = React.createContext('theme');

class ThemedButton extends React.Component {

    render() {
        return <ThemeContext.Consumer>
            {
                (value) => <div>{value}</div>
            }
        </ThemeContext.Consumer>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark'
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <ThemedButton/>
                <button onClick={() => this.handleChangeTheme()} className='btn btn-primary'> 修改主题</button>
            </ThemeContext.Provider>
        );
    }

    handleChangeTheme() {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

ReactDom.render(
    <App theme='dark'/>,
    document.getElementById('app')
)