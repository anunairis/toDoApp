import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    textAlign: "center"
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
}

export default Header;