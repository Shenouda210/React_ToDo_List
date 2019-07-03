import React, { Component } from "react";
import Todos from "./ToDoApp/Todos";
import Header from "./ToDoApp/Layout/Header";
import AddTodo from "./ToDoApp/AddTodo";
import uuid from "uuid";

export default class App extends Component {
  state = {
    Todos: [
      { id: uuid.v4(), title: "task 1", completed: false },
      { id: uuid.v4(), title: "Task 2", completed: false },
      { id: uuid.v4(), title: "Task 3", completed: true },
      { id: uuid.v4(), title: "Task 4", completed: false }
    ]
  };

  // Toggle Complete
  markComplete = id => {
    this.setState({
      Todos: this.state.Todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  // Delete To DO
  delTodo = id => {
    this.setState({
      Todos: [...this.state.Todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ Todos: [...this.state.Todos, newTodo] });
  };

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          Todos={this.state.Todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}
