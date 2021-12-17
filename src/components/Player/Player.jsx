import React from "react";
import "../Player/Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.active };
  }

  render() {
    let bgColor = this.props.active ? "#FC997C" : "";
    let color = this.props.active ? "#396EB0" : "";
    let icon = this.props.active ? <i className="fas fa-dot-circle"></i> : <></>;
    return (
      <div className="player" style={{ backgroundColor: bgColor, color: color }}>
        <h1>
          PLAYER {this.props.id + 1} {icon}
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
