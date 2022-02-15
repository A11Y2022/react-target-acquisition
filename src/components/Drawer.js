import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Drawer = () => {
  return (
    <div className="appbar-drawer">
      <Nav
        className="justify-content-end flex-grow-1 pe-3"
        style={{ fontSize: "20px", alignItems: "center" }}
      >
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/report">
          Report
        </Nav.Link>
        <Nav.Link as={Link} to="/customize">
          Customize
        </Nav.Link>
        <Nav.Link as={Link} to="/test">
          Test
        </Nav.Link>
      </Nav>
    </div>
  );
};
