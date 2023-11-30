import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import projectimg1 from "./Img/Card 1.jpg";
import projectimg2 from "./Img/Card 3.jpg";
import projectimg3 from "./Img/Haulage.jpg";

import Disscus from "./Disscus";
import Footer from "./Footer";
// import projectimg2 from "./Img/Card 3.jpg";
// import projectimg3 from "./Img/Hero-1.jpg";

function AllProjects() {
  const [display, setDisplay] = useState(1);

  function showTab(id) {
    setDisplay(id);
  }

  return (
    <section>
      <Container className="p-5">
        <Row className=" p-5 text-center my-items">
          <Col className="tab-1" md={3} sm={12} onClick={() => showTab(1)}>
            ALL
          </Col>
          <Col className="tab-2" md={3} sm={12} onClick={() => showTab(2)}>
            COMMERCIAL
          </Col>
          <Col className="tab-3" md={3} sm={12} onClick={() => showTab(3)}>
            RESIDENTIAL
          </Col>
          <Col className="tab-4" md={3} sm={12} onClick={() => showTab(4)}>
            NEW BUILD
          </Col>
        </Row>
        <div className={display == 1 ? "show" : "hide"}>
          <Row>
            <Col sm={12} md={6} xl={4}>
              <Card className="rounded-0 border-0">
                <Card.Img
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src={projectimg3}
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
                  src={projectimg2}
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
                  src={projectimg3}
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
                  src={projectimg1}
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
                  src={projectimg3}
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
                      <a href="/">New </a>
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
                  src={projectimg2}
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
                      <a href="/"> Build</a>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className={display == 2 ? "show" : "hide"}>
          <Row>
            <Col sm={12} md={6} xl={4}>
              <Card className="rounded-0 border-0">
                <Card.Img
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src={projectimg2}
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
                  src={projectimg3}
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
                  src={projectimg1}
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
          </Row>
        </div>
        <div className={display == 3 ? "show" : "hide"}>
          {" "}
          <Row>
            <Col sm={12} md={6} xl={4}>
              <Card className="rounded-0 border-0">
                <Card.Img
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src={projectimg3}
                  className="rounded-0"
                  alt="projects"
                />
                <Card.Body>
                  <h3 className="text-center">CALLATER </h3>
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
                  src={projectimg1}
                  className="rounded-0"
                  alt="projects"
                />
                <Card.Body>
                  <h3 className="text-center"> LODGE</h3>
                  <div className="d-flex justify-content-center ">
                    <button className="btn-card btn btn-light rounded-0 ">
                      <a href="/">Resident</a>
                    </button>
                    <button className="btn-card btn btn-light rounded-0">
                      <a href="/">New (text)</a>
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
                  src={projectimg2}
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
                  src={projectimg3}
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
          </Row>
        </div>
        <div className={display == 4 ? "show" : "hide"}>
          {" "}
          <Row>
            <Col sm={12} md={6} xl={4}>
              <Card className="rounded-0 border-0">
                <Card.Img
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src={projectimg3}
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
                  src={projectimg1}
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
          </Row>
        </div>
      </Container>
      <Disscus />
      <Footer />
    </section>
  );
}

export default AllProjects;
