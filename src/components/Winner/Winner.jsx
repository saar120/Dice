import React from "react";
import "../Winner/Winner.css";

class Winner extends React.Component {
  render() {
    return (
      <div className="Winner">
        <h1>Player {this.props.winner} Won !</h1>
      </div>
    );
  }
}

export default Winner;
