import React from 'react'
import ReactDOM from 'react-dom';


class History extends React.Component{

    componentWillUpdate(){
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollDown = (node.scrollTop + node.clientHeight + 300) >= node.scrollHeight;
        
    }
    
    componentDidUpdate(){
        if (this.shouldScrollDown){
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }
        
    render(){
        const history = this.props.history;
        return(
            <div className='History'>
                <div className='History-text'><b>Recent Equations: </b>
                <div>Click to move items from history to equation bar!</div>
            </div>
                <div className='History-list'>
                    <ol>
                    {history.map((eqn, index)=>{

                        return(
                            <li className='History-item fade-in' 
                            key={index} 
                            onClick={this.props.onClick}>f(x) = {eqn}
                            </li>
                        );
                    })}
                    </ol>
                </div>
            </div>
        )
    }
}



export default History;
