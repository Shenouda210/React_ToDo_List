import React, { Component } from "react";

class Counter extends Component {
  state = {
    //Contains Any Data Will Be Used
    value: this.props.counter.value
  };
  render() {
    // console.log(this.props.counter.id);

    return (
      <div>
        {/* {this.props.children} */}
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCounter()}
        </span>
        {/* Button Increment */}
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          {" "}
          Increment <span className="badge badge-primary" />
        </button>
        {/* Button Delete */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCounter() {
    // return this.state.count === 0 ? "Zero" : this.state.count;
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  styles = {
    fontSize: 20,
    fontWight: "bold"
  };

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tag.length === 0) return <p>There Are No Tags!</p>;
    return (
      <ul>
        {this.state.tag.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
