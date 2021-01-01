import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { task, num, handleClick } = this.props;
    return (
      <div>
        <span>{num+1}. {task} </span> 
        <button onClick={handleClick}>X</button>
      </div>
    )
  }
}

export default Todo;