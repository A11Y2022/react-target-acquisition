import React from "react";
import { Offcanvas, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Drawer } from "./Drawer";

export const Appbar = () => {
  return (
    <div className="appbar">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            backdrop={false}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            style={{ width: "180px" }}
          >
            <Offcanvas.Header closeButton aria-label="Hide"></Offcanvas.Header>
            <Offcanvas.Body>
              <Drawer />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
