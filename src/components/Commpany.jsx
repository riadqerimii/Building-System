import { Col, Container, Row } from "react-bootstrap";
import worker from "../components/Pages/Img/Timber Work.jpg";
import Footer from "./Pages/Footer";
import Disscus from "./Pages/Disscus";

function Commpany() {
  return (
    <section className="bg-dark pt-5 ">
      <Container fluid className="pt-5">
        <Row className="pt-5">
          <Col sm={6} xs={12} className="text-worker p-5 ">
            <h1>OUR HERITAGE IS BUILDING YOUR FUTURE</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              animi nesciunt quasi, quaerat ex deleniti laborum, voluptates
              minima aliquam laboriosam illum! Facere sint reprehenderit
              recusandae tenetur dolorum ex assumenda deserunt! We undertake
              projects of all shapes and sizes - each and every one
              <br />
              of which is treated with the same core values that <br />
              characterise our company
              <br /> - honesty, integrity, professional advice and quality
              craftmanship. We undertake projects of all shapes and sizes - each
              and every one
              <br />
              of which is treated with the same core values that <br />
              characterise our company
              <br /> - honesty, integrity, professional advice and quality
              craftmanship.
            </h5>
          </Col>
          <Col sm={6} xs={12} className="img-worker text-end p-0 ">
            <img src={worker} alt="worker" />
          </Col>
        </Row>
      </Container>
      <Disscus />

      <Footer />
    </section>
  );
}

export default Commpany;
