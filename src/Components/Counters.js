import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 2 }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRest = this.handleRest.bind(this);
  }

  //   handleIncrement = counter => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     counters[index] = [...counter];
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  handleRest() {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  // Method To Delete
  handleDelete(counterId) {
    // console.log("handleDeleted Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleRest} className="btn btn-primary btn-sm m-2">
          Rest
        </div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete} //
            counter={counter}
          >
            {/* <h3>{counter.value}</h3>    ==> prop Children  */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
