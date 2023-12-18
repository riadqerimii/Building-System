import { Container, Carousel } from "react-bootstrap";
import firsthero from "./Img/Hero-1.jpg";
import secondhero from "./Img/Hero-2.jpg";
import thirdhero from "./Img/Hero-3.jpg";

import { FaPlayCircle } from "react-icons/fa";
import "../../App.css";
import Us from "./Us";
import Cards from "./Cards";
import SelectedProjects from "./SelectedProjects";
import Disscus from "./Disscus";
import Footer from "./Footer";
import ButtonFixed from "./ButtonFixed";
function Home() {
  return (
    <section className="home">
      <Container fluid className="cont">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img className="images" src={firsthero} alt="Construction" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="images" src={secondhero} alt="Job" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="images" src={thirdhero} alt="Workplace" />
          </Carousel.Item>
        </Carousel>
        <Container className="cont-2">
          <div className="hero-text">
            <h6 className="text-hero-5">
              TIMBER SYSTEMS SPECIALISTS & CONTRACTORS
            </h6>
            <h1 className="text-hero-1   pt-5">
              BUILDING CONTRACTOR
              <br /> & TIMBER SYSTEMS SPECIALISTS
            </h1>
            <a className="music" href="https://www.youtube.com/">
              <FaPlayCircle size={60} />
              <span className="span-music">Who we are</span>
            </a>
          </div>
        </Container>
      </Container>
      <Us />
      <Cards />
      <ButtonFixed />
      <SelectedProjects />
      <Disscus />
      <Footer />
    </section>
  );
}

export default Home;
