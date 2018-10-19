import React from 'react'

class History extends React.Component{

    render(){
        const history = this.props.history;
        return(
            <div>
            <h1>Recent History</h1>
            <ol>
            {history.map((eqn, index)=>{
                return(
                    <li className='HistoryItem' onClick={this.props.onClick}>f(x) = {eqn}</li>
             );
            })}
            </ol>
            </div>
        )
    }
}



export default History;
