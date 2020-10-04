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
      <tr key={item._id}>
        <td>{item.count}</td>
        <td>{item._id}</td>
      </tr>
    ));
    const time = this.props.time;
    return (
      <div className="TimePage">
        <main className="content">
          <h1 className="text-center my-5">Aggregation time</h1>
          <div className="row ">
            <div className="col-md-8 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <p>
                  Aggregation Took:{" "}
                  <span className="font-weight-bold">{time}ms</span>
                </p>
                <div className="">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Number of persons</th>
                        <th scope="col">Age</th>
                      </tr>
                    </thead>
                    <tbody>{aggregateItems}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
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
