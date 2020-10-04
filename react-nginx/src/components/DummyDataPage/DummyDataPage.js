import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createDummyData } from "../../actions/dummyDataActions";

class DummyDataPage extends Component {
  componentWillMount() {
    this.props.createDummyData();
  }
  render() {
    const personItems = this.props.persons.map((person) => (
      <div key={person._id}>
        <p>
          Person {person.name} has age {person.age}
        </p>
      </div>
    ));
    return (
      <div className="DummyDataPage">
        <h1>DummyDataPage</h1>
        {personItems}
      </div>
    );
  }
}

DummyDataPage.propTypes = {
  createDummyData: PropTypes.func.isRequired,
  persons: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  persons: state.persons.items,
});

export default connect(mapStateToProps, { createDummyData })(DummyDataPage);
