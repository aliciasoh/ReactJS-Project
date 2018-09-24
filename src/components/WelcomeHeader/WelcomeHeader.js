import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../../styles/main.scss";

class WelcomeHeader extends React.Component {
    render() {
      return (
        <div>
          <h1 className="welcome-header">Welcome to My Calculator</h1>
        </div>
      );
    }
  }

  export default WelcomeHeader;
