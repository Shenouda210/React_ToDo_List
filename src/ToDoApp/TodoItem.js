import React, { Component } from "react";
import PropType from "prop-types";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      width: "50%",
      margin: "auto",
      marginTop: "10px",
      boxShadow: "1px .5"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnDelete}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.PropType = {
  todo: PropType.object.isRequired
};

const btnDelete = {
  background: "#ff0000",
  color: "#fff",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
