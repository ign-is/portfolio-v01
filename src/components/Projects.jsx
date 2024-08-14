import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <section id="projects">
           {/* <h1>Projects</h1> */}
            <div className="container-blue">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;