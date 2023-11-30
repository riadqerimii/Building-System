import { Col, Container, Row } from "react-bootstrap";

import histroyimg from "./Img/Haulage.jpg";

function History() {
  return (
    <section>
      <Container className="pt-5 ">
        <h1 className="text-center people">Our History</h1>
        <Row className="p-5">
          <Col md={6}>
            <h5>
              In 2019, a notable contracting company marked a significant
              milestone, <br />
              commemorating its 30th year in the industry. Over the span of
              three
              <br />
              decades characterized by success, this business has evolved into a
              <br />
              flourishing entity. Boasting a workforce comprised of numerous
              highly skilled
              <br /> industry professionals,
              <br /> it has solidified its position as a prominent player in the
              field.
            </h5>
            <p>
              Captivated by the rich heritage of historical buildings that
              abound
              <br />
              in the Royal burgh of Deeside, an enduring fascination has driven
              an <br />
              <br />
              individuals journey. Combined with a keen interest in the modern{" "}
              <br />
              advancements of todays construction world, this dual passion has{" "}
              <br />
              been the catalyst for growth and diversification.
            </p>
            <p>
              <br />
              This unwavering appreciation for the historical gems of Deeside
              has <br />
              not only shaped principles but has also inspired a commitment to
              preserving and <br />
              contributing to the architectural legacy of the region. The
              synergy
            </p>
          </Col>
          <Col md={6}>
            <img
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
              }}
              src={histroyimg}
              alt="history"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default History;
