import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DashboardPage extends Component {
  render() {
    return (
      <main className="content">
        <h1 className="text-center my-5">Dashboard</h1>
        <div className="row ">
          <div className="col-md-8 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <Link to="/dummy/data" className="btn btn-primary btn-block">
                  Create Dummy Data
                </Link>
              </div>
              <hr></hr>
              <div className="">
                <Link to="/time" className="btn btn-primary btn-block">
                  Aggregation Time
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
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
