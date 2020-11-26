import React, { Component } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <Navbar
        ref={this.wrapperRef}
        bg="primary"
        className="width"
        variant="dark"
      >
        <Navbar.Brand href="/">Complaint Form</Navbar.Brand>
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
