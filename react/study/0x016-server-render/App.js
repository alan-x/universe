const React = require('react')

class App extends React.Component {
    render() {
        try {
            let {name} = window.__INIT_DATA
            return React.createElement('div', {}, name)
        } catch (e) {
            return React.createElement('div', {}, "")

        }
    }
}

module.exports = App