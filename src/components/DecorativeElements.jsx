
const DecorativeElements = ({ navSection }) => {
   
    let background = '';
    if (navSection === 'home') {
        background = 'yellow';
    } else if (navSection === 'projects') {
        background = 'red';
    } else {
        background = 'turquoise'
    }
    
    return (
        <>
            <div className="bar bar-right"></div>
            <div className="bar bar-bottom"></div>
            <div className="bar bar-top-right"></div>
            <div className="bar bar-top-left"></div>

            <div className={`box box-top-left ${background}`} ></div>
            <div className={`box box-top-right ${background}`} ></div>
            <div className={`box box-bottom-left ${background}`} ></div>
            <div className={`box box-bottom-right ${background}`} ></div>
        </>
    )
}

export default DecorativeElements;