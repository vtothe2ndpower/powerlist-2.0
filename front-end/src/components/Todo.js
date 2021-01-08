import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    // Take Update and Pass to Parent
    this.props.updateItem(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  }

  handleChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    const { task, num, completed, handleClick } = this.props;
    let result;
    if(this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input 
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <span>{num+1}. <span className={completed ? 'completed Todo-task' : 'Todo-task'} onClick={this.handleToggle}>{task}</span> </span> 
          {
            this.props.auth ? 
          <div className="Todo-buttons">
          <button onClick={this.toggleForm}><i className="fas fa-pen" /></button>
          <button onClick={handleClick}><i className="fas fa-trash" /></button>
          </div>
          : null
          }
        </div>
      );
    }
    return result;
  }
}

export default Todo;

// Make Unclickable if not authorized/logged in