import React, { Component } from 'react';

import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      tasks: [
        { _id: 1, text: 'This is task 1' },
        { _id: 2, text: 'This is task 2' },
        { _id: 3, text: 'This is task 3' },
      ],
    };
  }

  getTasks() {
    return this.state.tasks;
  }

  renderTasks() {
    return this.getTasks().map(task => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default App;
