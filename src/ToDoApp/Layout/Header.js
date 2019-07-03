import React, { Component } from "react";

export class Header extends Component {
  styles = {
    textAlign: "center",
    background: "#000"
  };

  render() {
    return (
      <div style={this.styles}>
        <h3>ToDo App</h3>
      </div>
    );
  }
}

export default Header;
