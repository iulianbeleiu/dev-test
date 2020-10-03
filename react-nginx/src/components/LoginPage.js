import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import API from '../api';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        API.get(`/mongo/works`)
        .then(res => {
            if (200 === res.status) {
                console.log('Mongo woks!');
                window.location = "/dashboard";
            }
        });
    }
    render() {
        return (
            <Router>
            <div className="LoginPage">
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>

            </div>
            </Router>
        );
    }
}

export default LoginPage;
