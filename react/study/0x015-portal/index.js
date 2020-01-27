import React from 'react'
import ReactDom from 'react-dom'

const DialogContainer={position:'absolute',left:'0',top:'0',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)'}
const DialogContent={backgroundColor:'#ffffff',marginTop:'200px',width:'200px',marginLeft:'auto',marginRight:'auto',padding:'10px'}
class Dialog extends React.Component {
    render() {
        return (
            <div style={DialogContainer}>
                <div style={DialogContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class DateDialog extends React.Component{
    render() {
        return (
            <Dialog>
                <p className='text-center'>请选择时间</p>
                <input type="date" className='form-control'/>
                <div className='text-center mt-2'>
                    <button className='btn btn-primary'>确认</button>
                    <button  className='btn btn-danger'>取消</button>
                </div>
            </Dialog>
        );
    }
}

class App extends React.Component {
    render() {
        return <div>
            <DateDialog>

            </DateDialog>
        </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('app'))