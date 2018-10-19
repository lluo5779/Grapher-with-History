import React from 'react'

class EquationInput extends React.Component{

    render(){
        return(
            <div className='myform'>
            <form onSubmit={this.props.onSubmit} >
            <span>f(x) = </span> 
            <input name='currentInput' type='text' placeholder='Type equation here.' value = {this.props.values.equation} onChange={this.props.onChange} />
            <label>x-axis ranges from: 
            <input name='xFr' type='text' value = {this.props.values.xFr} onChange={this.props.onChange} size='3'/>
            to 
            <input name='xTo' type='text' value = {this.props.values.xTo} onChange={this.props.onChange} size='3'/>
            </label>
            <button type="submit"><span>Plot</span></button>
            </form>
            </div>
        );
    }
}

export default EquationInput;