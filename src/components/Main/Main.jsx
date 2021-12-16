import React from "react";
import "../Main/Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  renderDices = () => {
    return this.props.dices.map((dice, i) => {
      return (
        <div key={i} className="dice">
          <h1>{dice === null ? "holder" : dice}</h1>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="Main">
        <button onClick={() => this.props.newGame("New Game")}>New Game</button>
        <div className="dices">{this.renderDices()}</div>
        <button
          onClick={() => {
            console.log("clicks");
            this.props.diceRoll();
          }}>
          Roll Dice
        </button>
        <button onClick={() => this.props.hold("Please Hold")}>Hold</button>
      </div>
    );
  }
}

export default Main;
