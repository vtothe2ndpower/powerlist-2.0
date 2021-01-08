import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/todoActions';
import PropTypes from 'prop-types';

import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  static propTypes = {
    getTodos: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }
  constructor(props) {
    super(props);

    // this.state = {
    //   todos: []
    // };
    // this.addItem = this.addItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  // componentDidMount() {
  //   fetch('/api/todos')
  //   .then(res => res.json())
  //   .then(todos => this.setState({ todos }, () => console.log('Todos fetched...', todos)));
  // }

  componentDidMount() {
    this.props.getTodos();
  }

  // addItem(item) {
  //   this.setState(curState => ({
  //     todos: [...curState.todos, item]
  //   }));
  // }

  handleClick(id) {
    // Remove task from state
    // this.setState({
    //   todos: this.state.todos.filter(item => item.id !== id)
    // });
    this.props.deleteTodo(id);
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
    // const { todos } = this.state;
    const { todos } = this.props.todo;
    return (
      <div className="TodoList">
        <h1>The Power List <span>A Full-Stack MERN Application</span></h1>
        {todos.slice().reverse().map((item, index) => (
          <Todo 
            key={item._id}
            id={item._id}
            task={item.task} 
            completed={item.completed}
            num={index}
            auth={this.props.isAuthenticated}
            updateItem={this.update}
            toggleTodo={this.toggleCompletion}
            handleClick={() => this.handleClick(item._id)}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoList);

// Video 4:
// Add Reactstrap Code
// Add CSS for transitions

// I want it added backwards

// User React Router so it goes in to some welcome page if you're not logged in!