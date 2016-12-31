import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// Task component - represents a single todo item
class Task extends Component {

  static propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: PropTypes.object.isRequired,
  };

  render() {
    return (
      <li>
        <RaisedButton label={this.props.task.text} />
      </li>
    );
  }
}

export default Task;
