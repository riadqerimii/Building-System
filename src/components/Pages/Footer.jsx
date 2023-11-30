import { Button, Col, Container, Row } from "react-bootstrap";
import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <section className="bg-dark footer-texts text-white pt-5">
      <Container className="py-5 footer-media">
        <Row>
          <Col sm={12} md={4} xl={3} className="text-center">
            <h1>GM</h1>
          </Col>
          <Col sm={6} md={4} xl={2} className="text-center">
            <a href="/">Home</a>
            <br />
            <a href="/">About</a>
            <br />

            <a href="/">Contact</a>
          </Col>
          <Col sm={6} md={4} xl={2} className="text-center">
            <a href="/">Project</a>
            <br />
            <a href="/">Services</a>
          </Col>
          <Col sm={6} md={4} xl={3} className="text-center">
            <a href="/">Terms</a>
            <br />
            <a href="/">Privacy</a>
          </Col>
          <Col sm={6} md={4} xl={2} className="text-center">
            <Button className="btn btn-secondary rounded-0">
              START PROJECT
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h6>
              <p>&copy; 2023 GM. All rights reserved.</p>
            </h6>
          </Col>
          <Col className="text-end">
            <CiInstagram className="text-white" size={32} />
            <CiFacebook className="text-white" size={32} />
            <CiLinkedin className="text-white" size={32} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
