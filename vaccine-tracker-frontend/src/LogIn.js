import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import styled from "styled-components";
import './FormEntryMod.css';
import { Route, Redirect } from 'react-router-dom';
import { render } from "@testing-library/react";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: "",
            password: "",
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleSubmit(e) {
        if (this.state.auth === "MGH2118" && this.state.password === "password") {
            let loggedIn = true;
            <Route exact path="/LogIn">
                {loggedIn ? <Redirect to="/FormEntry" /> : <LogIn />}
            </Route>
        }
        else {
            alert("We could not find your credentials. Make sure you are a registered vaccine distribution center.");
        }
        e.preventDefault();
    }

    handleAuth(e) {
        this.setState({ auth: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect exact to={'/FormEntry'} />
            )
        }
        else {
            return (
                <div className="form-entry">
                    <div>
                        <h1>Vaccine Administrator Log In</h1>
                    </div>
                    <div className="styled-form-wrapper">
                        <form className="styled-form" onSubmit={this.handleSubmit}>
                            <label>
                                {" "}
              Authentication ID:{" "}
                                <input
                                    className="search-box"
                                    value={this.state.auth}
                                    onChange={this.handleAuth}
                                />
                            </label>
                            <label>
                                {" "}
              Password:{" "}
                                <input
                                    className="search-box"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </label>
                            <Route exact path="/LogIn">
                                <button onClick={() => {
                                    this.state.auth === "MGH2118" && this.state.password === "password" ?
                                        this.setState({ redirect: true })
                                        : <LogIn />
                                }} >Log In</button>

                            </Route>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default LogIn;
