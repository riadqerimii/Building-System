import { Col, Container, Row } from "react-bootstrap";

import construction1 from "./Img/Construction 1.jpg";
import construction2 from "./Img/Construction 2.jpg";
import haulage from "./Img/Haulage.jpg";
import timber from "./Img/Timber Work.jpg";

function Cards() {
  return (
    <section className="py-5 bg-dark">
      <Container fluid className="py-5 p-0 m-0">
        <Row className="p-0 py-5 m-0">
          <Col sm={12} md={6} xl={3} className="card-1 p-0 m-0">
            <img
              className="card-img-1"
              src={construction1}
              alt="construction"
            />
            <div className="card-text">
              <h1>Construction</h1>
              <button className="card-btn  rounded-0 ">
                <a href="/" className="text-dark">
                  Learn More
                </a>
              </button>
            </div>
          </Col>
          <Col sm={12} md={6} xl={3} className="card-2 p-0 m-0">
            <img
              className="card-img-2"
              src={construction2}
              alt="construction"
            />
            <div className="card-text-2">
              <h1>Timber System</h1>
              <button className=" card-btn rounded-0 ">
                <a href="/" className="text-dark">
                  Learn More
                </a>
              </button>
            </div>
          </Col>
          <Col sm={12} md={6} xl={3} className="card-3 p-0 m-0">
            <img className="card-img-3" src={haulage} alt="construction" />
            <div className="card-text-3">
              <h1>Haulage</h1>
              <button className="card-btn   rounded-0 ">
                <a href="/" className="text-dark">
                  Learn More
                </a>
              </button>
            </div>
          </Col>
          <Col sm={12} md={6} xl={3} className="card-4 p-0 m-0">
            <img className="card-img-4" src={timber} alt="construction" />
            <div className="card-text-4">
              <h1>Timber System</h1>
              <button className="card-btn   rounded-0">
                <a href="/" className="text-dark">
                  Learn More
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cards;
