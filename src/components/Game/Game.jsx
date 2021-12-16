import React from "react";
import "../Game/Game.css";
import Player from "../Player/Player";
import Main from "../Main/Main";

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
  renderPlayers() {
    return this.state.players.map((player) => {
      return (
        <Player id={player.id} key={player.id} currentScore={player.currentScore} globalScore={player.globalScore} />
      );
    });
  }
  render() {
    return (
      <div className="Game">
        <Main
          newGame={(data) => {
            console.log(data);
          }}
          diceRoll={(data) => {
            console.log(data);
          }}
          hold={(data) => {
            console.log(data);
          }}
        />
        <div style={{ display: "flex", gap: "1rem" }}>{this.renderPlayers()}</div>
      </div>
    );
  }
}

export default Game;
