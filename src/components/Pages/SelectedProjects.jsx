import { Card, Col, Container, Row } from "react-bootstrap";
import cardone from "./Img/Hero-1.jpg";
import cardtwo from "./Img/Hero-2.jpg";
import cardthree from "./Img/Hero-3.jpg";

function SelectedProjects() {
  return (
    <section className="bg-white pt-5">
      <Container className="py-5">
        <Row>
          <Col>
            <h4>SELECTED PROJECTS</h4>
          </Col>
          <Col className="text-end link-all">
            <a href="/projects">View All</a>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col sm={12} md={6} xl={4}>
            <Card className="rounded-0 border-0">
              <Card.Img
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
                src={cardone}
                className="rounded-0"
                alt="projects"
              />
              <Card.Body>
                <h3 className="text-center">CALLATER LODGE</h3>
                <div className="d-flex justify-content-center ">
                  <button className="btn-card btn btn-light rounded-0 ">
                    <a href="/">Resident</a>
                  </button>
                  <button className="btn-card btn btn-light rounded-0">
                    <a href="/">New Build</a>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Card className="rounded-0 border-0">
              <Card.Img
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
                src={cardtwo}
                className="rounded-0"
                alt="projects"
              />
              <Card.Body>
                <h3 className="text-center">CALLATER LODGE</h3>
                <div className="d-flex justify-content-center ">
                  <button className="btn-card btn btn-light rounded-0 ">
                    <a href="/">Resident</a>
                  </button>
                  <button className="btn-card btn btn-light rounded-0">
                    <a href="/">New Build</a>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Card className="rounded-0 border-0">
              <Card.Img
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
                src={cardthree}
                className="rounded-0"
                alt="projects"
              />
              <Card.Body>
                <h3 className="text-center">CALLATER LODGE</h3>
                <div className="d-flex justify-content-center ">
                  <button className="btn-card btn btn-light rounded-0 ">
                    <a href="/">Resident</a>
                  </button>
                  <button className="btn-card btn btn-light rounded-0">
                    <a href="/">Renovation</a>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SelectedProjects;
