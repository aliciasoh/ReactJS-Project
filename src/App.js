import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles/main.scss";
import CalculatorInput from './components/CalculatorInput/CalculatorInput';
import WelcomeHeader from './components/WelcomeHeader/WelcomeHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
      <WelcomeHeader/>
        <CalculatorInput/>
      </div>
    );
  }
}


export default hot(module)(App);