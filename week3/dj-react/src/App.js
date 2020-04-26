import React from 'react';
import Square from './Square';
import './App.css';
import './index.css';

const DEFAULT_COLOR ="white";

class App extends React.Component {
 constructor() {
   super()
    this.state = 
        {
          square1: {color:DEFAULT_COLOR}, //state for the first square
          square2: {color:DEFAULT_COLOR}, //state for the second square
          square3: {color:DEFAULT_COLOR}, //state for the third square
          square4: {color:DEFAULT_COLOR}, //state for the fourth square
          button1: {visibility: "visible"},
          button2: {visibility: "hidden"},
          button3: {visibility: "hidden"},
          button4: {visibility: "hidden"},
          button5: {visibility: "hidden"},
          button6: {visibility: "hidden"},
          button7: {visibility: "hidden"},
          button8: {visibility: "hidden"}
        };
      }
  //event handlers
  onChangeColorEvent = (event) => {
    //debugger
      const currentSquare = 'square'+event.target.id;
      this.setState((previousState) => {
          return { ...previousState, [currentSquare]: {color:this.getRandomColor()}};
    });
  }

  blue = (event) => {
      const currentSquare = 'square'+event.target.id;
      return (
      this.setState({[currentSquare]: {color: "blue"}}),
      this.setState({button5: {visibility: "visible"}}),
      this.setState({button6: {visibility: "visible"}}),
      this.setState({button7: {visibility: "visible"}}),
      this.setState({button8: {visibility: "visible"}}))
  }


  blackOrWhite = ()=> {
    if (this.state.square1.color === "white") {
      return (
        this.setState({square1: {color: "black"}}),
        this.setState({square2: {color: "black"}}),
        this.setState({square3: {color: "black"}}),
        this.setState({square4: {color: "black"}}),
        this.setState({button2: {visibility: "visible"}})
      )
    } 
    if (this.state.square1.color !== "white") {
      return (
        this.setState({square1: {color: "white"}}),
        this.setState({square2: {color: "white"}}),
        this.setState({square3: {color: "white"}}),
        this.setState({square4: {color: "white"}}),
        this.setState({button2: {visibility: "visible"}})
      )
    } 
  }

    purple = () => {
      return (
        this.setState({square1: {color: "purple"}}),
        this.setState({square2: {color: "purple"}}),
        this.setState({button3: {visibility: "visible"}}),
        this.setState({button4: {visibility: "visible"}})
      )      
    }

  getRandomColor = () => {
    //debugger
    let randomColor = Math.random()
    if (randomColor <= 0.1) {
        return "green";
    }
    if (randomColor > 0.1 && randomColor < 0.4) {
      return "red";
    }
    if (randomColor >= 0.4 && randomColor < 0.6) {
      return "yellow";
    }
    if (randomColor >= 0.6 && randomColor < 0.8) {
      return "orange";
    } 
    if (randomColor >= 0.8) {
      return "gray";
    }
  }

  render(){
    return (
      <div>
        <div className="gridContainer">
            <Square color={this.state.square1.color}/>
            <Square color={this.state.square2.color}/>
        </div>
        <div className="gridContainer">
            <Square color={this.state.square3.color}/>
            <Square color={this.state.square4.color}/>     
        </div>
        <div className="gridContainer">
          <button id="1" 
            className="button" 
            style={this.state.button1} 
            onClick={this.blackOrWhite}>
              Small Time DJ
          </button>       
          <button id="2" 
            className="button" 
            style={this.state.button2} 
            onClick={this.purple}>
              Party DJ
          </button>         
          <button id="3" 
            className="button" 
            style={this.state.button3} 
            onClick={this.blue}>
              Professional DJ Left
          </button>
          <button id="4" 
            className="button" 
            style={this.state.button4} 
            onClick={this.blue}>
              Professional DJ Right
          </button>
        </div>
        <div className="gridContainer">
          <button id="1" 
            className="button" 
            style={this.state.button5}
            onClick={this.onChangeColorEvent}>
              Big Time DJ 1
          </button>
          <button id="2" 
            className="button" 
            style={this.state.button6} 
            onClick={this.onChangeColorEvent}>
              Big Time DJ 2
          </button>
          <button id="3" 
            className="button" 
            style={this.state.button7} 
            onClick={this.onChangeColorEvent}>
              Big Time DJ 3
          </button>
          <button id="4" 
            className="button" 
            style={this.state.button8} 
            onClick={this.onChangeColorEvent}>
              Big Time DJ 4
          </button>
        </div>
      </div>
    )
    }
  }

export default App
