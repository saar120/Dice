import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.active };
  }
  isActive = () => {
    if (this.state.active) {
      return <h4>Active</h4>;
    }
  };

  render() {
    return (
      <div style={{ border: "1px solid black" }}>
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
