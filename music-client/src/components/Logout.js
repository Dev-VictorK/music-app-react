import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { client } from "../Client";

class Logout extends Component {

    constructor(props) {
        super(props);
        client.logout();
    }

    render() {
        console.log("Logout called.");
        return (
            <Navigate to="/login" />
        );
    }
}

export default Logout;