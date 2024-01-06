import { Button, Container } from "react-bootstrap";

function Disscus() {
  return (
    <section className="bg-disc py-5    ">
      <Container className="py-5 text-center">
        <h1 className="py-5 text-white">READY TO DISCUSS YOUR NEXT PROJECT?</h1>

        <a className="btn btn-danger rounded-0 p-3" href="/contact">
          GET IN TOUCH
        </a>
      </Container>
    </section>
  );
}

export default Disscus;
