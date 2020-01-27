import React from 'react'
import PropTypes from 'prop-types';


class MyComponent extends React.Component {
    render() {
        console.log(this)
        return '' + this.props.name
    }

}

MyComponent.propTypes = {
    name: PropTypes.string
}


class App extends React.Component {
    render() {
        return <MyComponent name={{}}/>
    }
}

export default App