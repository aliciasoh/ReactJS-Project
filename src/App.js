import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles/main.scss";

class App extends React.Component {
  enterApp() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div className="App">
      <WelcomeHeader/>
        <CalculatorInput />
      </div>
    );
  }
}

class CalculatorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Calculate:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class WelcomeHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 class="welcome-header">Welcome to My Calculator</h1>
      </div>
    );
  }
}

export default hot(module)(App);