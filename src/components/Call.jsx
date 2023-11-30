import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Call() {
  return (
    <section>
      <Container>
        <Row className="py-3 m-auto justify-content-center">
          <Col md={6}>
            <div className="card rounded-0 border-0">
              <div className="card-body p-1 m-4 ">
                <p className="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, vel accusamus totam nobis ducimus repellat
                  laboriosam corporis, voluptate dignissimos itaque omnis quas.
                  Consectetur consequatur laudantium eos, aliquid eum nam id?
                </p>
                <Form>
                  <Form.Group className="mb-2 " controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      required
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder=" Email"
                      required
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Form.Group className="my-4" controlId="phone">
                    <Form.Control
                      type="tel"
                      placeholder=" Phone"
                      required
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Button
                    className=" text-center p-3 px-5 rounded-0 text-white mb-1 d-flex justify-content-center m-auto"
                    variant="secondary"
                    type="submit"
                  >
                    Send
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Call;
