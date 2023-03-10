import React, { Component } from "react";

class Dice extends Component {
  render() {
    let cls = `dice fas fa-dice-${this.props.face}`;
    return (
      <div>
        <i class={cls}></i>
      </div>
    );
  }
}

export default Dice;
