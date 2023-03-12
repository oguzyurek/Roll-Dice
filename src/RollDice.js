import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.roll = this.roll.bind(this);
    this.state = {
      dice1: "one",
      dice2: "two",
    };
  }
  roll() {
    const newDice1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDice2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ dice1: newDice1, dice2: newDice2 });
    console.log(`Dice 1 is:${newDice1}`);
    console.log(`Dice 2 is:${newDice2}`);
  }
  render() {
    return (
      <div>
        <Dice face={this.state.dice1} />
        <Dice face={this.state.dice2} />

        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
