import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/time">Time</Link>
        <Link to="/dummy/data">Dummy</Link>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(DashboardPage);
