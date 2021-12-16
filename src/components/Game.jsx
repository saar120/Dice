import React from "react";
import Player from "./Player";
import Main from "./Main";

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
  render() {
    return (
      <div>
        <Main />
        <div style={{ display: "flex", gap: "1rem" }}>
          <Player
            id={this.state.players[0].id}
            currentScore={this.state.players[0].currentScore}
            globalScore={this.state.players[0].globalScore}
          />
          <Player
            id={this.state.players[1].id}
            currentScore={this.state.players[1].currentScore}
            globalScore={this.state.players[1].globalScore}
          />
        </div>
      </div>
    );
  }
}

export default Game;
