import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DummyDataPage extends Component {
  render() {
    return (
      <div className="DummyDataPage">
        <h1>DummyDataPage</h1>
      </div>
    );
  }
}

DummyDataPage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(DummyDataPage);
