import Aboutone from "./Img/Hero-1.jpg";

import History from "./History";
import OurPeople from "./OurPeople";
import Commpany from "../Commpany";

function About() {
  return (
    <section>
      {" "}
      <header className="about">
        <img src={Aboutone} alt="services" />
        <div className="text-about-1">
          <h1>About</h1>
        </div>
      </header>
      <History />
      <OurPeople />
      <Commpany />
    </section>
  );
}

export default About;
