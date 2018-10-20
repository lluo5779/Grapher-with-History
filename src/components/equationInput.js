import React from 'react'

class EquationInput extends React.Component{

    render(){
        return(
            <div className='Equation-form'>
            <form onSubmit={this.props.onSubmit} >
            <div className='Equation-bar'>
            <label for='equation_bar'> <b>f(x) = </b>
            <input name='currentInput' type='text' className='Equation-input' placeholder='Type your equation here!' value = {this.props.values.equation} onChange={this.props.onChange} /> 
            </label> 
            </div>
            
            <div className='Equation-range'>
            <label><b>x-axis ranges from: </b> 
            <input name='xFr' type='text' value = {this.props.values.xFr} onChange={this.props.onChange} size={this.props.windowWidth*0.01}
            placeholder='-10' />
            <b> to: </b> 
            <input name='xTo' type='text' value = {this.props.values.xTo} onChange={this.props.onChange} size={this.props.windowWidth*0.01}
            placeholder='10'/>
            </label>
            </div>
            
            <button type="submit"><span>Plot</span></button>
            </form>
            </div>
        );
    }
}

export default EquationInput;