import { Button, Col, Container, Row } from "react-bootstrap";
import servicesone from "./Img/Hero-1.jpg";
import servicesCard from "./Img/Card 1.jpg";
import servicesimg1 from "./Img/Card 3.jpg";
import serviceimg2 from "./Img/Hero-2.jpg";
import Disscus from "./Disscus";
import Footer from "./Footer";

function Services() {
  return (
    <section className="section-services">
      <header className="services">
        <img src={servicesone} alt="services" />
        <div className="text-services-1">
          <h1>Services</h1>
        </div>
      </header>
      <Container className="py-5">
        <Row className="pt-5">
          <Col md={6} sm={12} className="s-card-1 p-0">
            <img src={servicesCard} alt="card" />
          </Col>
          <Col
            md={6}
            sm={12}
            className="p-5  p-0 justify-content-center bg-white"
          >
            <h1 className="py-4">CONSTRUCTION</h1>
            <h5 className="py-5">
              Building your dream home is a truly exciting prospect, but it can
              also be daunting. With extensive experience under our belt, we
              know a thing or two about the process.
            </h5>
            <Button variant="outline-dark rounded-0" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col
            md={6}
            sm={12}
            className="p-5  p-0 justify-content-center bg-white"
          >
            <h1 className="py-4">TIMBER SYSTEMS</h1>
            <h5 className="py-5">
              Make the best of your budget. At Gordon Mitchell Contractors we
              work with our clients - and architects - to design and build
              bespoke timber frames for supply across the UK.
            </h5>
            <Button variant="outline-dark rounded-0" size="lg">
              Learn More
            </Button>
          </Col>
          <Col md={6} sm={12} className="s-card-1 p-0">
            <img src={servicesimg1} alt="card" />
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={6} sm={12} className="s-card-1 p-0">
            <img src={servicesCard} alt="card" />
          </Col>
          <Col
            md={6}
            sm={12}
            className="p-5  p-0 justify-content-center bg-white"
          >
            <h1 className="py-4">PLANT HIRE</h1>
            <h5 className="py-5">
              Building your dream home is a truly exciting prospect, but it can
              also be daunting. With extensive experience under our belt, we
              know a thing or two about the process.
            </h5>
            <Button variant="outline-dark rounded-0" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col
            md={6}
            sm={12}
            className="p-5  p-0 justify-content-center bg-white"
          >
            <h1 className="py-4">HAULAGE</h1>
            <h5 className="py-5">
              Haulage is about so much more than sitting behind a wheel; it’s
              about knowing how to navigate the land to ensure that shipments
              are delivered safely and on time.
            </h5>
            <Button variant="outline-dark rounded-0" size="lg">
              Learn More
            </Button>
          </Col>
          <Col md={6} sm={12} className="s-card-1 p-0">
            <img src={serviceimg2} alt="card" />
          </Col>
        </Row>
      </Container>
      <Disscus />
      <Footer />
    </section>
  );
}

export default Services;
