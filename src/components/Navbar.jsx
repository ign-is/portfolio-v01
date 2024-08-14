
const Navbar = ({navSection, setNavSection}) => {

    let background = '';
    let borderColor = '';
    let color = '';

    if (navSection === 'home') {
        background = 'yellow';
        borderColor = 'yellow-border';
        color = 'yellow-text';
    } else if (navSection === 'projects') {
        background = 'red';
        borderColor = 'red-border';
        color = 'red-text';
    } else {
        background = 'turquoise';
        borderColor = 'turquoise-border';
        color = 'turquoise-text';
    }

    return (
        <nav>
            <ul>
                <li 
                    onClick={() => setNavSection('home')}
                    className={`${navSection == 'home' ? borderColor : ''}`}    
                >
                    <a 
                        href="#home"
                        className={`${navSection == 'home' ? color : ''} nav-link`} 
                    >
                        Home
                    </a>
                    <div className={`inner-nav-box ${navSection == 'home' ? background : ''}`}></div>
                </li>
                <li 
                    onClick={() => setNavSection('projects')}
                    className={`${navSection == 'projects' ? borderColor : ''}`}    
                >
                    <a 
                        href="#projects"
                        className={`${navSection == 'projects' ? color : ''} nav-link`} 
                    >
                        Projects
                    </a>
                    <div className={`inner-nav-box ${navSection == 'projects' ? background : ''}`}></div>
                </li>
                <li 
                    onClick={() => setNavSection('contact')}
                    className={`${navSection == 'contact' ? borderColor : ''}`}    
                >
                    <a 
                        href="#contact"
                        className={`${navSection == 'contact' ? color : ''} nav-link`} 
                    >
                        Contact
                    </a>
                    <div className={`inner-nav-box ${navSection == 'contact' ? background : ''}`}></div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;