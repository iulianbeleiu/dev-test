import React, { Component } from "react";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <LoginForm />
      </div>
    );
  }
}

LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(LoginPage);
