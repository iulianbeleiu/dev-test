import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoginPage from "../LoginPage/LoginForm";
import DashboardPage from "../DashboardPage/DashboardPage";

class HomePage extends Component {
  render() {
    if (this.props.user.user.email) {
      return (
        <div>
          <DashboardPage />
        </div>
      );
    }
    return (
      <div className="HomePage">
        <LoginPage />
      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(HomePage);
