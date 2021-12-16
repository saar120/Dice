import React from "react";
import "../Main/Main.css";

class Main extends React.Component {
  renderDices = () => {
    return this.props.dices.map((dice, i) => {
      return (
        <div key={i} className="dice">
          <h1>{dice === null ? "holder" : dice + 1}</h1>
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
            this.props.diceRoll();
          }}>
          Roll Dice
        </button>
        <button onClick={() => this.props.hold("Please Hold")}>Hold</button>
        <p>Points to win {this.props.targetPoints}</p>
      </div>
    );
  }
}

export default Main;
