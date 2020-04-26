import React from 'react';
import Square from './Square';
import './App.css';

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        colors: [
            "white", "white", "white", "white"
        ],
        buttonstate =[{button1:{visible:false}}]
      }
    }
    // this.blackOrWhite = this.blackOrWhite.bind(this)
    // this.purple = this.purple.bind(this)
    // this.blueLeft = this.blueLeft.bind(this)
    // this.blueRight = this.blueRight.bind(this)
    // this.random5 = this.random5.bind(this)
    // this.random6 = this.random6.bind(this)
    // this.random7 = this.random7.bind(this)
    // this.random8 = this.random8.bind(this)

  blackOrWhite = ()=> {
      if (this.state.colors[0] === "white") {
          this.setState({colors: ["black", "black", "black", "black"]});
          this.state.buttonstate[0].visible = true;
          return;
      } 
      if (this.state.colors[0] != "white") {
        this.setState({colors: ["white", "white", "white", "white"]});
        document.querySelector("#b2").style.visibility = "visible"
        }
      }


//   purple = () => {
//     setState({colors: ["purple", "purple", this.state.colors[2], state.colors[3]]});
//     document.querySelector("#b3").style.visibility = "visible";
//     document.querySelector("#b4").style.visibility = "visible"
//    }
// blueLeft() {
//   this.setState({colors: [this.state.colors[0], this.state.colors[1], "blue", this.state.colors[3]]});
//   document.querySelector("#b5").style.visibility = "visible";
//   document.querySelector("#b6").style.visibility = "visible";
//   document.querySelector("#b7").style.visibility = "visible";
//   document.querySelector("#b8").style.visibility = "visible"
// }
// blueRight() {
//   this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "blue"]});
//   document.querySelector("#b5").style.visibility = "visible";
//   document.querySelector("#b6").style.visibility = "visible";
//   document.querySelector("#b7").style.visibility = "visible";
//   document.querySelector("#b8").style.visibility = "visible"
// }
// random5() {
//   let randomColor = Math.random()
//   if (randomColor <= 0.1) {
//     this.setState({colors: ["green", this.state.colors[1], this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor > 0.1 && randomColor < 0.4) {
//     this.setState({colors: ["red", this.state.colors[1], this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor >= 0.4 && randomColor < 0.6) {
//     this.setState({colors: ["yellow", this.state.colors[1], this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor >= 0.6 && randomColor < 0.8) {
//     this.setState({colors: ["orange", this.state.colors[1], this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor >= 0.8) {
//     this.setState({colors: ["gray", this.state.colors[1], this.state.colors[2], this.state.colors[3]]})
//   }
// }
// random6() {
//   let randomColor = Math.random()
//   if (randomColor <= 0.1) {
//     this.setState({colors: [this.state.colors[0], "green", this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor > 0.1 && randomColor < 0.4) {
//     this.setState({colors: [this.state.colors[0], "red", this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor >= 0.4 && randomColor < 0.6) {
//     this.setState({colors: [this.state.colors[0], "yellow", this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor >= 0.6 && randomColor < 0.8) {
//     this.setState({colors: [this.state.colors[0], "orange", this.state.colors[2], this.state.colors[3]]})
//   } else if (randomColor >= 0.8) {
//     this.setState({colors: [this.state.colors[0], "gray", this.state.colors[2], this.state.colors[3]]})
//   }
// }
// random7() {
//   let randomColor = Math.random()
//   if (randomColor <= 0.1) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], "green", this.state.colors[3]]})
//   } else if (randomColor > 0.1 && randomColor < 0.4) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], "red", this.state.colors[3]]})
//   } else if (randomColor >= 0.4 && randomColor < 0.6) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], "yellow", this.state.colors[3]]})
//   } else if (randomColor >= 0.6 && randomColor < 0.8) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], "orange", this.state.colors[3]]})
//   } else if (randomColor >= 0.8) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], "gray", this.state.colors[3]]})
//   }
// }
// random8() {
//   let randomColor = Math.random()
//   if (randomColor <= 0.1) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "green"]})
//   } else if (randomColor > 0.1 && randomColor < 0.4) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "red"]})
//   } else if (randomColor >= 0.4 && randomColor < 0.6) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "yellow"]})
//   } else if (randomColor >= 0.6 && randomColor < 0.8) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "orange"]})
//   } else if (randomColor >= 0.8) {
//     this.setState({colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "gray"]})
//   }
// }


  render(){
  return (
    <div>
      <div className="gridContainer">
        <Square color={this.state.colors[0]}/>
        <Square color={this.state.colors[1]}/>
      </div>
      <div className="gridContainer">
        <Square color={this.state.colors[2]}/>
        <Square color={this.state.colors[3]}/>
      </div>
      <div className="gridContainer">
        <button 
            id="b1" 
            className="button" 
            onClick={this.blackOrWhite} 
            style={{visibility:  this.state.buttonstate[0].visible}}>
            Small Time DJ
        </button>
        <button id="b2" className="button" onClick={this.purple}>Party DJ</button>
        <button id="b3" className="button" onClick={this.blueLeft}>Professional DJ Left</button>
        <button id="b4" className="button" onClick={this.blueRight}>Professional DJ Right</button>
      </div>
      <div className="gridContainer">
        <button id="b5" className="button" onClick={this.random5}>Big Time DJ 1</button>
        <button id="b6" className="button" onClick={this.random6}>Big Time DJ 2</button>
        <button id="b7" className="button" onClick={this.random7}>Big Time DJ 3</button>
        <button id="b8" className="button" onClick={this.random8}>Big Time DJ 4</button>
      </div>
    </div>
  )
  }
}

export default App;
