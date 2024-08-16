import { CARDS } from "../constants"

const Card = ({textColor, boxShadow, textShadow, icon, techName}) => {
    return (
        <div className={`card`}>
            <div className="card-box card-top-left"></div>
            <div className="card-box card-top-right"></div>
            <div className="card-box card-bottom-left"></div>
            <div className="card-box card-bottom-right"></div>
            <div className={`inner-card ${textColor} ${boxShadow}`}>
                <div className={`inner-card-box inner-card-top-left ${boxShadow}`}></div>
                <div className={`inner-card-box inner-card-top-right ${boxShadow}`}></div>
                <div className={`inner-card-box inner-card-bottom-left ${boxShadow}`}></div>
                <div className={`inner-card-box inner-card-bottom-right ${boxShadow}`}></div>
                {icon}
                <h4 className={`${textColor} ${textShadow}`}>{techName}</h4>
            </div>
        </div>
    )
}
 
const Cards = () => {
    return (
        <div className="cards">
            {CARDS.map((card, index) => (
                <Card 
                    key={index} 
                    icon={card.icon} 
                    techName={card.techName} 
                    textColor={card.textColor}
                    textShadow={card.textShadow}
                    boxShadow={card.boxShadow}

                />
            ))}
        </div>
    )
}

export default Cards;