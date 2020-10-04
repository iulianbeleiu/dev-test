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
      <tr key={person._id}>
        <td>{person.name}</td>
        <td>{person.age}</td>
      </tr>
    ));
    return (
      <div className="DummyDataPage">
        <main className="content">
          <h1 className="text-center my-5">Dummy data created</h1>
          <div className="row ">
            <div className="col-md-8 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Person</th>
                        <th scope="col">Age</th>
                      </tr>
                    </thead>
                    <tbody>{personItems}</tbody>
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

DummyDataPage.propTypes = {
  createDummyData: PropTypes.func.isRequired,
  persons: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  persons: state.persons.items,
});

export default connect(mapStateToProps, { createDummyData })(DummyDataPage);
