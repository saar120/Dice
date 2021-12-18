import React from "react";
import "../Player/Player.css";

class Player extends React.Component {
  state = { playerName: this.props.id + 1 };
  activeStyle = () => {
    if (this.props.active) {
      return { bgColor: "#FC997C", color: "#396EB0", icon: <i className="fas fa-dot-circle"></i> };
    }
    return { bgColor: "", color: "", icon: "" };
  };

  render() {
    const { bgColor, color, icon } = this.activeStyle();
    return (
      <div className="player" style={{ backgroundColor: bgColor, color: color }}>
        <h1>
          PLAYER {this.state.playerName} {icon}
        </h1>
        <h1>
          Total Score:
          <br />
          <br />
          <span>{this.props.globalScore}</span>
        </h1>
        <h1>
          current Score:
          <br />
          <br />
          <span>{this.props.currentScore}</span>
        </h1>
      </div>
    );
  }
}

Player.defaultProps = {
  active: false,
};

export default Player;
