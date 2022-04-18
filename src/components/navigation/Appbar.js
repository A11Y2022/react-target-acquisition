import { useState } from "react";
import { Offcanvas, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Drawer from "./Drawer";

function Appbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="appbar">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            show={show}
            backdrop={false}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            style={{ width: "180px" }}
          >
            <Offcanvas.Header
              closeButton
              aria-label="Hide"
              onClick={handleClose}
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Drawer handleClose={handleClose} />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbar;
