import { Card, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cardone from "./Img/Owner.jpg";
import cardtwo from "./Img/Desginer.jpg";
import cardthree from "./Img/Manager.jpg";
import cardfour from "./Img/accountat.jpg";

function OurPeople() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="text-center py-5">
      <Container className="people">
        <h5 className="text-center">Our People</h5>
        <Row>
          <p className="people-h4">
            People are at the heart of Contractors – both the people who have
            <br />
            with building their homes, and our highly dedicated and
            <br />
            entrusted us skilled team who are turning their vision into reality.
          </p>
        </Row>
      </Container>
      <Container className="py-5">
        <Carousel responsive={responsive} className="shadow">
          <div>
            <Card className="rounded-0 border-2 ">
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
                <h5 className="text-center ">Jacob</h5>
                <div className="d-flex justify-content-center ">
                  <h3>Owner</h3>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="rounded-0 border-2">
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
                <h5 className="text-center">Andy</h5>
                <div className="d-flex justify-content-center ">
                  <h3>Design Technician</h3>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="rounded-0 border-2">
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
                <h3 className="text-center">Olivia</h3>
                <div className="d-flex justify-content-center ">
                  <h5>Accounts</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="rounded-0 border-2">
              <Card.Img
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
                src={cardfour}
                className="rounded-0"
                alt="projects"
              />
              <Card.Body>
                <h3 className="text-center">Sophia</h3>
                <div className="d-flex justify-content-center ">
                  <h5>Commercial Manager</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="rounded-0 border-2">
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
                <h3 className="text-center">Sophia</h3>
                <div className="d-flex justify-content-center ">
                  <h5>Commercial Manager</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="rounded-0 border-2">
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
                <h3 className="text-center">Sophia</h3>
                <div className="d-flex justify-content-center ">
                  <h5>Commercial Manager</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
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
                <h3 className="text-center">Emily</h3>
                <div className="d-flex justify-content-center ">
                  <h5>Contract Manager</h5>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Carousel>
      </Container>
    </section>
  );
}

export default OurPeople;
