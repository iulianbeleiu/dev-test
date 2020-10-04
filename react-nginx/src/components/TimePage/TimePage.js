import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TimePage extends Component {
  render() {
    return (
      <div className="TimePage">
        <h1>TimePage</h1>
      </div>
    );
  }
}

TimePage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(TimePage);
