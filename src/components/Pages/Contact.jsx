import Call from "../Call";
import contactone from "./Img/Hero-1.jpg";
import Map from "./Map";
import Footer from "./Footer";
import ButtonFixed from "./ButtonFixed";
function Contact() {
  return (
    <section>
      <header className="about">
        <img src={contactone} alt="services" />
        <div className="text-about-text">
          <h1>
            GET IN TOUCH
            <br />
            WITH US ABOUT
            <br />
            YOUR NEXT PROJECT
          </h1>
        </div>
      </header>
      <ButtonFixed />
      <Map />
      <Call />
      <Footer />
    </section>
  );
}

export default Contact;
