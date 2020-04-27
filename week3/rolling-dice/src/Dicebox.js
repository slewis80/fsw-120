import React from "react";

class Dicebox extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
        }
    }

    randomNumber = () => {
        let number = Math.floor(Math.random() * 6 + 1);
        return (number)
    }

    rollTheDice = () => {
        return (
            this.setState({num1: this.randomNumber()}),
            this.setState({num2: this.randomNumber()}),
            this.setState({num3: this.randomNumber()}),
            this.setState({num4: this.randomNumber()}),
            this.setState({num5: this.randomNumber()})
        )
    }

    render() {
        return (
            <div className="dicebox">
                <h2><span className="label">First Die: </span>
                    <span className="dice">{this.state.num1}</span>
                </h2>
                <h2><span className="label">Second Die: </span>
                    <span className="dice">{this.state.num2}</span>
                </h2>
                <h2><span className="label">Third Die: </span>
                    <span className="dice">{this.state.num3}</span>
                </h2>
                <h2><span className="label">Fourth Die: </span>
                    <span className="dice">{this.state.num4}</span>
                </h2>
                <h2><span className="label">Fifth Die: </span>
                    <span className="dice">{this.state.num5}</span>
                </h2>
                <button id="button" onClick={this.rollTheDice}>Roll The Dice</button>
            </div>
        )
    }
}

export default Dicebox;