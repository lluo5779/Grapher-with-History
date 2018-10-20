import React from 'react'

class EquationInput extends React.Component{

    render(){
        return(
            <div className='Equation-form'>
                <form onSubmit={this.props.onSubmit}>
                    <div className='Equation-bar'>
                        <label> <b>f(x) = </b>
                        <input 
                            name='currentInput' 
                            type='text' 
                            className='Equation-input' 
                            placeholder='Type your equation here!' 
                            value = {this.props.values.equation} 
                            onChange={this.props.onChange} 
                        /> 
                        </label> 
                    </div>
            
                    <div className='Equation-range'>
                        <label><b>x-axis ranges from: </b> 
                        <input 
                            name='xFr' 
                            type='text' 
                            value = {this.props.values.xFr} 
                            onChange={this.props.onChange} 
                            placeholder='-10' 
                        />

                        <b> to: </b>

                        <input 
                            name='xTo' 
                            type='text' 
                            value = {this.props.values.xTo} 
                            onChange={this.props.onChange} 
                            size={this.props.windowWidth*0.001}
                            placeholder='10'
                        />
                        </label>
                    </div>
                            
                    <div>
                        <a href='http://mathjs.org/docs/reference/functions.html' target="_blank" rel='noopener noreferrer'><span className='Ref-text'> Click here for a list of valid function syntax. </span>
                        </a>
                    </div>

                    <button type="submit"><span>Plot</span></button>
                </form>
            </div>
        );
    }
}

export default EquationInput;