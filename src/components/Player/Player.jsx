import React from "react";
import "../Player/Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.active };
  }
  isActive = () => {
    if (this.props.active) {
      return <h4>Active</h4>;
    }
  };

  render() {
    return (
      <div className="player">
        <h1>PLAYER {this.props.id + 1}</h1>
        {this.isActive()}
        <h1>Total Score: {this.props.globalScore}</h1>
        <h1>current Score: {this.props.currentScore}</h1>
      </div>
    );
  }
}

Player.defaultProps = {
  active: false,
};

export default Player;
