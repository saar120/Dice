import React from "react";
import "../Game/Game.css";
import Player from "../Player/Player";
import Main from "../Main/Main";
import Winner from "../Winner/Winner";

function randomNum(num) {
  return Math.floor(Math.random() * (num + 1));
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointsToWin: 100,
      dices: [null, null],
      winner: "",
      players: [
        { id: 0, currentScore: 0, globalScore: 0, active: true },
        { id: 1, currentScore: 0, globalScore: 0, active: false },
      ],
    };
  }
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
  newGameHandler = () => {
    this.resetGame();
  };
  resetGame = () => {
    this.setState({
      dices: [null, null],
      winner: "",
      players: [
        { id: 0, currentScore: 0, globalScore: 0, active: true },
        { id: 1, currentScore: 0, globalScore: 0, active: false },
      ],
    });
  };

  handleDiceRoll = () => {
    const newDices = this.state.dices.map(() => {
      return randomNum(5);
    });
    this.setState({ dices: newDices }, () => {
      this.updateCurrentScore();
    });
    this.playSound();
  };
  playSound = () => {
    const diceSound = new Audio("./audio/0004526.mp3");
    diceSound.autoplay = true;
    diceSound.play();
  };
  updateCurrentScore = () => {
    const { players, dices } = this.state;
    players.forEach((player, i) => {
      if (player.active) {
        const dicesSum = dices.reduce((a, b) => a + b, 0) + 2;
        if (dices[0] === dices[1] && dices[0] != null) {
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
    const { players, pointsToWin } = this.state;
    const winner = players.find((player) => player.globalScore >= pointsToWin);
    if (winner) {
      this.setState({ winner: winner.id + 1 });
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
          newGame={() => {
            this.newGameHandler();
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
        {this.state.winner && <Winner winner={this.state.winner} />}
      </div>
    );
  }
}

export default Game;
