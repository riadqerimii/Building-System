import { Col, Container, Row } from "react-bootstrap";

import worker from "./Img/Worker.jpg";

function Us() {
  return (
    <section className="bg-dark pt-5 ">
      <Container fluid className="pt-5">
        <Row className="pt-5">
          <Col sm={6} xs={12} className="text-worker  ">
            <span>EST. 1989</span>
            <h1>OUR HERITAGE IS BUILDING YOUR FUTURE</h1>
            <h5>
              We undertake projects of all shapes and sizes - each and every one
              <br />
              of which is treated with the same core values that <br />
              characterise our company
              <br /> - honesty, integrity, professional advice and quality
              craftmanship.
            </h5>
            <Col>
              <button className="btn-about ">About Us</button>
            </Col>
          </Col>
          <Col sm={6} xs={12} className="img-worker text-end p-0 ">
            <img src={worker} alt="worker" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Us;
