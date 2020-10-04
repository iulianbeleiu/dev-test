import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDummyData } from "../../actions/dummyDataActions";

class TimePage extends Component {
  componentWillMount() {
    this.props.fetchDummyData();
  }
  render() {
    const aggregateItems = this.props.aggregate.map((item) => (
      <div key={item._id}>
        <p>
          A number of {item.count} persons have age {item._id}
        </p>
      </div>
    ));

    const time = this.props.time;
    return (
      <div className="TimePage">
        <h1>TimePage</h1>
        Aggregation Took: {time}ms
        {aggregateItems}
      </div>
    );
  }
}

TimePage.propTypes = {
  fetchDummyData: PropTypes.func.isRequired,
  aggregate: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  aggregate: state.persons.aggregate,
  time: state.persons.time,
});

export default connect(mapStateToProps, { fetchDummyData })(TimePage);
