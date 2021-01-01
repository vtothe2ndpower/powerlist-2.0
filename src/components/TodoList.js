import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: 'Chest/Arms Workout', id: uuid() },
        { task: 'Attend BJJ Fundamentals', id: uuid() },
        { task: 'Work on Business for 2 Hours', id: uuid() },
        { task: 'Code for 4 Hours', id: uuid() },
        { task: 'Study Personal Finance for 1 Hour', id: uuid() }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addItem(item) {
    this.setState(curState => ({
      todos: [...curState.todos, item]
    }));
  }

  handleClick(id) {
    // Remove task from state
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <NewTodoForm addItem={this.addItem} />
        {todos.map((item, index) => (
          <Todo 
            key={item.id}
            id={item.id}
            task={item.task} 
            num={index}
            handleClick={() => this.handleClick(item.id)}
          />
        ))}
      </div>
    )
  }
}

export default TodoList;
