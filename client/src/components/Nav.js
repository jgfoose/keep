import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Sidenav from "./Sidenav";

class NavHeader extends Component {
  renderHelper() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Nav.Link href="/auth/google">Login</Nav.Link>;
      default:
        return (
          <>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Sidenav />
            </Navbar.Collapse>
            <Nav.Link href="/api/logout">Logout</Nav.Link>
          </>
        );
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="xxl" variant="light">
        <Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          React Keep
        </Navbar.Brand>

        {this.renderHelper()}
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavHeader);
