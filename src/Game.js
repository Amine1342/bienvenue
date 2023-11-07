import React, { Component } from "react";

class Result extends Component {
  state = {
    name: "Sangoku",
    winner: true,
  };

  render() {
    return this.state.winner ? (
      <h1 className="text-success mt-3">Beau travail {this.state.name}</h1>
    ) : (
      <h1 className="text-danger mt-3">Dommage !!!</h1>
    );
  }
}
export default Result;
