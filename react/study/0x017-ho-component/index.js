import React from 'react'
import ReactDom from 'react-dom'

const withTheme = (OriginComponent) => {
    return class WrappedComponent extends React.Component {
        render() {
            return (
                <OriginComponent theme={'dark'}/>
            );
        }
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                App theme: {this.props.theme}
            </div>
        );
    }
}

let ThemeApp = withTheme(App)


ReactDom.render(
    <ThemeApp/>,
    document.getElementById('app'))