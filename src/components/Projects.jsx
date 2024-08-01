import dragon1 from '../assets/dragon-1.jpg'
const Projects = () => {
    return (
        <section id="projects">
           <h1>Projects</h1>
           {/* <div className="project">

           </div> */}
            <div className="container-blue">
                <div className="project">
                    <div className="project-image">
                        <img src={dragon1} alt="" />
                        {/* <div className="text">
                            <p>bank landing page</p>
                        </div> */}
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
                            <div className="code">github code</div>
                            <div className="live">Live web</div>                
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;