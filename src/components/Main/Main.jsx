import React from "react";
import "../Main/Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isWaiting: true };
    this.dices = [
      { class: "dice1" },
      { class: "dice2" },
      { class: "dice3" },
      { class: "dice4" },
      { class: "dice5" },
      { class: "dice6" },
      { class: "waiting-dice" },
    ];
  }
  renderDices = () => {
    const { dices } = this.props;
    const isEqual = dices[0] === dices[1] && dices[0] !== null ? "equal" : "";
    return dices.map((dice, i) => {
      return <div key={Math.random()} className={this.determineDice(dice) + " dice " + isEqual}></div>;
    });
  };
  determineDice = (dice) => {
    if (dice !== null) {
      return this.dices[dice].class;
    }
    return this.dices[6].class;
  };

  render() {
    return (
      <div className="Main">
        <button className="button" onClick={() => this.props.newGame("New Game")}>
          New Game
        </button>
        <div className="dices">{this.renderDices()}</div>
        <button
          className="button"
          onClick={() => {
            this.props.diceRoll();
            this.setState({ isWaiting: true });
          }}>
          Roll Dice
        </button>
        <button className="button" onClick={() => this.props.hold()}>
          Hold
        </button>
        <p>
          Points to win
          <br />
          <br />
          {this.props.targetPoints}
        </p>
      </div>
    );
  }
}

export default Main;
