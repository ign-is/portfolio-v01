import { RiGithubLine } from "react-icons/ri";
import { RiLinksLine } from "react-icons/ri";

const ProjectCard = ({ image }) => {
    return (
        <div className="project">
            <div className="project-image">
                <div 
                    className="image"
                    style={{ backgroundImage: `url(${image})`}}
                ></div>
            </div>
            <div className="info">
                <h3>Project Name</h3>
                <div className="technologies">
                    <div className="react">React</div>
                    <div className="next-js">Next.js</div>
                    <div className="tailwind">Tailwind</div>
                </div>
                <p>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quisquam saepe expedita doloremque magnam enim dolore dolorum</p>
                <div className="code-web">
                    <div className="code btn"><span><RiGithubLine /> code</span></div>
                    <div className="live btn"><span><RiLinksLine /> preview</span></div>                
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;