import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: 'Software Engineering: Code for 4 Hours', id: uuid(), completed: false },
        { task: 'E-Commerce: Work on Business for 2 Hours', id: uuid(), completed: false },
        { task: 'Financials: Study Crypto/Investing/Personal Finance for 1 Hour', id: uuid(), completed: false },
        { task: 'Freelance Developer: Apply to Jobs/Gigs for 1 Hour', id: uuid(), completed: false },
        { task: 'Aesthetics: Max Hype - Chest/Arms Workout', id: uuid(), completed: false },
        { task: 'Martial Arts: Attend BJJ Fundamentals', id: uuid, completed: false },
        { task: 'Language Learning: Study Japanese for 1 Hour', id: uuid, completed: false },
        { task: 'Other: Read 10 Pages of Personal Development Book', id: uuid, completed: false }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(item => {
      if(item.id === id) {
        return { ...item, task: updatedTask }
      }
      return item;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(item => {
      if(item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoList">
        <h1>The Power List <span>A Simple React Todo List Application</span></h1>
        {todos.map((item, index) => (
          <Todo 
            key={item.id}
            id={item.id}
            task={item.task} 
            completed={item.completed}
            num={index}
            updateItem={this.update}
            toggleTodo={this.toggleCompletion}
            handleClick={() => this.handleClick(item.id)}
          />
        ))}
        <NewTodoForm addItem={this.addItem} />
      </div>
    )
  }
}

export default TodoList;
