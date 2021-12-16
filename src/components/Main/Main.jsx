import React from "react";
import "../Main/Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Main">
        <button onClick={() => this.props.newGame("New Game")}>New Game</button>
        <button onClick={() => this.props.diceRoll("Hi I rolled the dice")}>Roll Dice</button>
        <button onClick={() => this.props.hold("Please Hold")}>Hold</button>
      </div>
    );
  }
}

export default Main;
