import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.addItem = this.addItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
    .then(res => res.json())
    .then(todos => this.setState({ todos }, () => console.log('Todos fetched...', todos)));
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
