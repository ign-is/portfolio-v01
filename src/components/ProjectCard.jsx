import { RiGithubLine } from "react-icons/ri";
import { RiLinksLine } from "react-icons/ri";
import Tech from "./Tech";

const ProjectCard = ({ project }) => {
    return (
        <div className="project">
            <div className="project-image">
                <div 
                    className="image"
                    style={{ backgroundImage: `url(${project.image})`}}
                ></div>
            </div>
            <div className="info">
                <h3>{project.title}</h3>
                <div className="technologies">
                    {project.technologies.map((tech, index) => (
                        <Tech key={index} tech={tech} />
                    ))}
                </div>
                <p className="description">{project.description}</p>
                <div className="code-web">
                    {/* <div className="code btn"><span><RiGithubLine /> code</span></div>
                    <div className="live btn"><span><RiLinksLine /> preview</span></div>                 */}
                    <a className="code btn" target="_blank" href={project.github}><span><RiGithubLine /> code</span></a>
                    <a className="live btn" target="_blank" href={project.demo}><span><RiLinksLine /> live demo</span></a>    
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;