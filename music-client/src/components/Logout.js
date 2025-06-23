import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { client } from "../Client";
import Login from "./Login";

class Logout extends Component {
    constructor(props) {
        super(props);
        client.logout();
    }
    render() {
        return (
            <Navigate to="/login" />
        );
    }
}

export default Logout;