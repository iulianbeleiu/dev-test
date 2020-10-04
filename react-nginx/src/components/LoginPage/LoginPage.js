import React, { Component } from "react";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <main className="content">
          <h1 className="text-center my-5">Log In</h1>
          <div className="row ">
            <div className="col-md-8 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </main>
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
