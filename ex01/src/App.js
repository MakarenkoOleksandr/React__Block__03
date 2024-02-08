import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "no data provided!",
    };
  }

  handleInput = (event) => {
    this.setState({
      userData: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
        <h1>{this.state.userData}</h1>
      </div>
    );
  }
}

export default App;
