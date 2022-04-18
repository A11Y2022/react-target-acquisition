import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Drawer({ handleClose }) {
  return (
    <div className="appbar-drawer">
      <Nav
        className="justify-content-end flex-grow-1 pe-3"
        style={{ fontSize: "20px", alignItems: "center" }}
      >
        <Nav.Link as={Link} to="/" onClick={handleClose}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/report" onClick={handleClose}>
          Report
        </Nav.Link>
        <Nav.Link as={Link} to="/customize" onClick={handleClose}>
          Customize
        </Nav.Link>
        <Nav.Link as={Link} to="/test" onClick={handleClose}>
          Test
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Drawer;
