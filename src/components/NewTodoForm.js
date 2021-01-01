import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newTask = { task: this.state.newTask, id: uuid(), completed: false };
    this.props.addItem(newTask);
    this.setState({ newTask: '' });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="newTask">New Critical Task: </label>
        <input 
          type="text"
          name="newTask"
          id="newTask"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default NewTodoForm;