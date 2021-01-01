import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>The Power List</h1>
        <h2>A Simple React Todo List Application</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
