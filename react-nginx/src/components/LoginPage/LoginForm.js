import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login } from "../../actions/loginAction";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
    };

    this.props.login(user);
  }
  render() {
    return (
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>
          <h3>Log In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { login })(LoginForm);
