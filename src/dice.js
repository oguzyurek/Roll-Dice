import React, { Component } from "react";

class Dice extends Component {
  render() {
    let cls = `dice fas fa-dice-${this.props.face}`;
    return (
      <div>
        <i class={this.props.rolling ? `rolling ${cls}` : `${cls}`}></i>
      </div>
    );
  }
}

export default Dice;
