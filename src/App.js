import React, { Component } from 'react';
import './App.css';
import EquationInput from './components/equationInput'
import History from './components/history'
/*
import GraphDisplayer from './components/graphDisplayer' 
*/


import * as math from 'mathjs'

import Plot from 'react-plotly.js';




const initialPacket = {
    x: [1,2,3,4,5],
    y: [2,4,6,8,10],
    type: 'scatter',
    mode: 'lines+points',
    marker: {color: 'red'},                
}

class App extends Component {

    constructor(props){
        super(props)

        this.state={
            currentInput: '',
            xFr: '',
            xTo: '',
            currentXFr: 0,
            currentXTo: 6,
            currentPacket: initialPacket,
            currentSubmission: '2*x',
            history:[]
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.returnValueToBar = this.returnValueToBar.bind(this);
    }


    componentWillMount(){
        this.updateDimensions();

        alert(this.state.windowWidth)
    }

    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
        alert(this.state.windowWidth)
    }


    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }


    updateDimensions(){
        this.setState({ 
            windowWidth: window.innerWidth, 
            windowHeight: window.innerHeight,
        })
    }


    changeHandler(e) {
        e.preventDefault()

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submitHandler(e){
        e.preventDefault()

        var xFr = (this.state.xFr==='') ? -10: this.state.xFr;
        var xTo = (this.state.xTo==='') ? 10: this.state.xTo;

        var dataPacket = this.prepareDataForPlotly(xFr, xTo)

        this.setState({
            currentSubmission: this.state.currentInput,
            currentXFr: xFr,
            currentXTo: xTo,
            xFr: '',
            xTo: '',
            history: [...this.state.history, this.state.currentInput],
        })
    }

    prepareDataForPlotly(xFr=-100, xTo=100, dx=0.01, type='scatter', mode='lines+points', markerColor='red') {
        try {
            const expression = this.state.currentInput;
            const expr = math.compile(expression)

            // evaluate the expression repeatedly for different values of x
            const xValues = math.range(xFr, xTo, dx).toArray()
            const yValues = xValues.map(function (x) {
                return expr.eval({x: x})
            })

            // render the plot using plotly
            var dataPacket = {
                x: xValues,
                y: yValues,
                type: type,
                mode: mode,
                marker: {color: markerColor},                
            }
            /*alert(JSON.stringify(dataPacket))*/


            this.setState({
                currentPacket: dataPacket,
            })
        }
        catch (err) {
            alert(err)
        }
    }
    
    returnValueToBar(e){
        let currentInput = e.target.innerHTML
        this.setState({
            currentInput: currentInput.slice(7,),
        })
    }

    render() {

        return (
            <div className="App">

            <EquationInput values={{equation:this.state.currentInput, xFr:this.state.xFr, xTo: this.state.xTo}} 
            onChange={this.changeHandler} 
            onSubmit={this.submitHandler} />

            <Plot className='graph' data={[this.state.currentPacket]} 
            layout={{
            width: this.state.windowWidth, 
            title: 'f(x) = '+this.state.currentSubmission, 
            xaxis: {range: [this.state.currentXFr,  this.state.currentXTo]},
            }} />
            
            <History history={this.state.history} onClick={this.returnValueToBar} />


            </div>
        );
    }
}

export default App;
