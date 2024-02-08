import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "no data provided!",
    };
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
        <h1>{this.state.input}</h1>
      </div>
    );
  }
}

export default App;
