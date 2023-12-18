import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Data } from "../Data";
import Footer from "./Footer";
import Disscus from "./Disscus";

function AllProjects() {
  const [display, setDisplay] = useState("All");

  function showTab(category) {
    setDisplay(category);
  }

  const categoryData = Data[display] || {};
  const items = Object.values(categoryData);

  return (
    <section>
      <Container className="p-5">
        <Row className="p-5 text-center my-items">
          <Col
            className={`tab-1 ${display === "All" ? "active-link" : ""}`}
            md={3}
            sm={12}
            onClick={() => showTab("All")}
          >
            ALL
          </Col>
          <Col
            className={`tab-2 ${display === "Jobs" ? "active-link" : ""}`}
            md={3}
            sm={12}
            onClick={() => showTab("Jobs")}
          >
            JOB
          </Col>
          <Col
            className={`tab-3 ${display === "Project" ? "active-link" : ""}`}
            md={3}
            sm={12}
            onClick={() => showTab("Project")}
          >
            PROJECT
          </Col>
          <Col
            className={`tab-4 ${display === "New" ? "active-link" : ""}`}
            md={3}
            sm={12}
            onClick={() => showTab("New")}
          >
            New
          </Col>
        </Row>

        <Row>
          {items.map((item, index) => (
            <Col key={index} xl={4} md={6} sm={12}>
              <Card className="rounded-0 border-0 allCard">
                <Card.Img
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src={item.image}
                  loading="lazy"
                  className="rounded-0"
                  alt={item.name}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <h3 className="text-center">{item.name}</h3>
                  <p className="text-center">{item.Job}</p>
                  <div className="d-flex justify-content-center ">
                    <button className="btn-card btn btn-light rounded-0">
                      <a href={item.linkOne}>Resident</a>
                    </button>
                    <button className="btn-card btn btn-light rounded-0">
                      <a href={item.linkTwo}>New Build</a>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Disscus />
      <Footer />
    </section>
  );
}

export default AllProjects;
