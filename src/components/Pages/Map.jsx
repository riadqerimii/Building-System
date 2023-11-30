import map1 from "./Img/map.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
function Map() {
  return (
    <section>
      <Container className="bg-dark" fluid>
        <Row className="pt-5">
          <Col md={12} xl={8} className="london p-5">
            <img src={map1} alt="london" />
          </Col>
          <Col md={12} xl={4} className="text-white py-5 my-4">
            <span>
              If you would like to discuss your next construction project or for{" "}
              <br />
              future employment queries, please do not hesitate to complete the{" "}
              <br />
              md form (below) or send us an email at example@example.com
            </span>
            <br />
            <br />
            <span>
              For all Timber Systems enquiries <br /> please contact
              example@example.com
            </span>
            <br />
            <br />
            <span>FIND US</span>
            <br />
            <div className="pt-2">
              <a className="contact-links" href="www.google.com">
                Baker Street <br /> str.example <br />
                AB1234 , BA1123
              </a>
            </div>

            <br />
            <Button variant="outline-success" className="p-2 my-3 rounded-0">
              FIND US IN GOOGLE
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Map;
