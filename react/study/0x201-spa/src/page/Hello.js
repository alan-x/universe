import Component from "../core/Component";

class Hello extends Component {

    render() {
        return `<p id='hello'>hello</p>`
    }

    componentDidMount() {
        document.getElementById('hello').addEventListener('click', () => {
            alert('hello')
        })
    }
}

export default Hello