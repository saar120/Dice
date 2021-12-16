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
      winner: false,
      players: [
        { id: 0, currentScore: 0, globalScore: 0, active: true },
        { id: 1, currentScore: 0, globalScore: 0, active: false },
      ],
    };
  }
  renderPlayers = () => {
    return this.state.players.map((player) => {
      return (
        <Player
          id={player.id}
          key={player.id}
          currentScore={player.currentScore}
          globalScore={player.globalScore}
          active={player.active}
        />
      );
    });
  };
  renderPlayer = (id) => {
    const { players } = this.state;
    return (
      <Player
        id={players[id].id}
        key={players[id].id}
        currentScore={players[id].currentScore}
        globalScore={players[id].globalScore}
        active={players[id].active}
      />
    );
  };

  handleDiceRoll = () => {
    const newDices = this.state.dices.map(() => {
      return randomNum(5);
    });
    this.setState({ dices: newDices }, () => {
      this.updateCurrentScore();
    });
  };

  updateCurrentScore = () => {
    const { players, dices } = this.state;
    players.forEach((player, i) => {
      if (player.active) {
        const dicesSum = dices.reduce((a, b) => a + b, 0) + 2;
        if (dicesSum / 2 === dices[0] + 1 && dices[0] != null) {
          console.log("FUCK");
          this.setState((prevState) => {
            return (prevState.players[i].currentScore = 0);
          });
          this.changePlayersTurn();
          return;
        }
        this.setState((prevState) => {
          return (prevState.players[i].currentScore += dicesSum);
        });
      }
    });
  };
  handleHold = () => {
    this.updateGlobalScore();
    this.changePlayersTurn();
  };

  checkForWinner = () => {
    if (
      this.state.players[0].globalScore >= this.state.pointsToWin ||
      this.state.players[1].globalScore >= this.state.pointsToWin
    ) {
      this.setState({ winner: true });
    }
  };
  updateGlobalScore = () => {
    const { players } = this.state;
    players.forEach((player, i) => {
      if (player.active) {
        this.setState(
          (prevState) => {
            return (prevState.players[i].globalScore += player.currentScore);
          },
          () => this.checkForWinner()
        );
        this.setState((prevState) => {
          return (prevState.players[i].currentScore = 0);
        });
      }
    });
  };
  changePlayersTurn = () => {
    for (let i = 0; i < 2; i++) {
      this.setState((prevState) => {
        return (prevState.players[i].active = !prevState.players[i].active);
      });
    }
  };

  render() {
    return (
      <div className="Game">
        {this.renderPlayer(0)}
        <Main
          newGame={(data) => {
            console.log(data);
          }}
          diceRoll={() => {
            this.handleDiceRoll();
          }}
          hold={() => {
            this.handleHold();
          }}
          dices={this.state.dices}
          targetPoints={this.state.pointsToWin}
        />
        {this.renderPlayer(1)}
        {this.state.winner && <h1>winner</h1>}
      </div>
    );
  }
}

export default Game;
