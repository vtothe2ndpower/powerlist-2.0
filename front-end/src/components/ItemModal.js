import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class ItemModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      newTask: ''
    }

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newTask = { 
      task: this.state.newTask, 
      completed: false 
    };
    // Add todo via addItem action
    this.props.addTodo(newTask);
    // Close modal & reset local state
    this.toggle();
    this.setState({ newTask: '' });
    // Don't allow submission if form is empty!
  }

  render() {
    const date = new Date();
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}} 
          onClick={this.toggle}  
        >
          Add Critical Task
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add To Power List - {date.toDateString()}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="newTask"></Label>
                <Input 
                  type="text"
                  name="newTask" 
                  id="newTask"
                  placeholder="#100DaysOfCode: Study Programming for 1 Hour"
                  onChange={this.handleChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Add Critical Task</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps, { addTodo })(ItemModal);



//   render() {
//     return (
//       <form className="NewTodoForm" onSubmit={this.handleSubmit}>
//         <label htmlFor="newTask">New Critical Task: </label>
//         <input 
//           type="text"
//           name="newTask"
//           id="newTask"
//           value={this.state.newTask}
//           onChange={this.handleChange}
//         />
//         <button type="submit">Add</button>
//       </form>
//     )
//   }
// }
