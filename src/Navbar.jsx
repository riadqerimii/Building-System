// CustomNavbar.jsx
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
function CustomNavbar() {
  return (
    <Navbar className="background p-5" expand="lg">
      <Container className="container">
        <Navbar.Brand className="icon" href="/">
          GM
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-white bg-toggler "
          aria-controls="responsive-navbar-nav nav-w"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className=" nav-toggler">
          <div className="contacts justify-content-around d-flex p-2">
            <CiInstagram className="contacts" size={32} />
            <CiFacebook className="contacts" size={32} />
            <CiLinkedin className="contacts" size={32} />
          </div>

          <Nav className="ms-auto nav-items ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Row className=" buttons-nav d-flex m-0 p-0 ">
            <Col es={6} className="p-0 w-100">
              <button className="buttons-nav  border w-100 btn btn-dark rounded-0">
                <BiMessage size={20} />
              </button>
            </Col>
            <Col es={6} className="p-0 w-100">
              <button className="buttons-nav border btn  w-100 btn-dark  rounded-0">
                <FiPhone size={20} />
              </button>
            </Col>
            <div className="p-0 ">
              <button className="  project-btn  rounded-0 ">
                Start Project
              </button>
            </div>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
