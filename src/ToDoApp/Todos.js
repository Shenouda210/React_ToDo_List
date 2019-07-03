import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropType from "prop-types";

export default class Todos extends Component {
  render() {
    return this.props.Todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
        addTodo={this.props.addTodo}
      />
    ));
  }
}

Todos.PropType = {
  todos: PropType.array.isRequired
};
