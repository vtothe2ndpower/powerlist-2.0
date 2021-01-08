import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class LoginModal extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      email: '',
      password: '',
      msg: null
    }

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if(error !== prevProps.error) {
      // Check for register error
      if(error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if(this.state.modal) {
      if(isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle() {
    // Clear errors
    // this.props.clearErrors();
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

    const { email, password } = this.state;

    const user = {
      email, 
      password
    };

    // Attempt to login
    this.props.login(user);


    // We don't want to close the modal if error - we want to display error
    // Close modal & reset local state
    // this.toggle();
    // this.setState({ name: '', email: '', password: '' });
    // Don't allow submission if form is empty!
  }

  render() {
    return(
      <div>
        <NavLink onClick={this.toggle} href="#">
          Login
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Login
          </ModalHeader>
          <ModalBody>
            { 
            this.state.msg ? 
              <Alert color="danger">{this.state.msg}</Alert> : 
              null
            }
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="email">E-Mail</Label>
                <Input 
                  type="email"
                  name="email" 
                  id="email"
                  placeholder=" E-Mail"
                  className="mb-3"
                  onChange={this.handleChange}
                />
                <Label for="password">Password</Label>
                <Input 
                  type="password"
                  name="password" 
                  id="password"
                  placeholder=" Password"
                  className="mb-3"
                  onChange={this.handleChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Login</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);