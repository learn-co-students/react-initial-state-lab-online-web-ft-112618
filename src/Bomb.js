import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  // increment = () => {
  //
  //   this.setState({
  //     secondsLeft: this.state.initialCount + 1
  //   })
  //
  // }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }

}
