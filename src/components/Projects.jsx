import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <section id="projects">
           <h1>Projects</h1>
            <div className="container-blue">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} image={project.image} />
                ))}
            </div>
        </section>
    )
}

export default Projects;