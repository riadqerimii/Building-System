import AllProjects from "./AllProjects";
import ButtonFixed from "./ButtonFixed";
import projectsone from "./Img/Hero-3.jpg";

function Projects() {
  return (
    <section>
      <header className="projects">
        <img src={projectsone} alt="services" />
        <div className="text-projects-1">
          <h1>Projects</h1>
        </div>
      </header>
      <ButtonFixed />
      <AllProjects />
    </section>
  );
}

export default Projects;
