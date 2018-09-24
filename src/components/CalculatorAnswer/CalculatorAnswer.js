import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../../styles/main.scss";


class CalculatorAnswer extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="answer-div">
          <label>Final Answer: {this.props.answerReceived}</label>
      </div>
    );
  }
}

export default CalculatorAnswer;
