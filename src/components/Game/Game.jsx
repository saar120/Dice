import React from "react";
import "../Game/Game.css";
import Player from "../Player/Player";
import Main from "../Main/Main";

function randomNum(num) {
  return Math.floor(Math.random() * (num + 1));
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointsToWin: 30,
      dices: [null, null],
      playerTurn: 0,
      winner: false,
      players: [
        { id: 0, currentScore: 0, globalScore: 0 },
        { id: 1, currentScore: 0, globalScore: 0 },
      ],
    };
  }
  renderPlayers = () => {
    return this.state.players.map((player) => {
      return (
        <Player id={player.id} key={player.id} currentScore={player.currentScore} globalScore={player.globalScore} />
      );
    });
  };
  handleDiceRoll = () => {
    for (let i = 0; i < 2; i++) {
      this.setState((prevState) => {
        return (prevState.dices[i] = randomNum(5));
      });
    }
  };
  render() {
    return (
      <div className="Game">
        <h1>text</h1>
        <Main
          newGame={(data) => {
            console.log(data);
          }}
          diceRoll={() => {
            this.handleDiceRoll();
          }}
          hold={(data) => {
            console.log(data);
          }}
          dices={this.state.dices}
        />
        <div style={{ display: "flex", gap: "1rem" }}>{this.renderPlayers()}</div>
      </div>
    );
  }
}

export default Game;
