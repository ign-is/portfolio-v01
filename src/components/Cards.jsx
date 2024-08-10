import { RiNextjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

{/* <TbBrandTypescript /> */}

const Cards = () => {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-box card-top-left"></div>
                <div className="card-box card-top-right"></div>
                <div className="card-box card-bottom-left"></div>
                <div className="card-box card-bottom-right"></div>
                <div className="inner-card">
                    <div className="inner-card-box inner-card-top-left"></div>
                    <div className="inner-card-box inner-card-top-right"></div>
                    <div className="inner-card-box inner-card-bottom-left"></div>
                    <div className="inner-card-box inner-card-bottom-right"></div>
                    <RiHtml5Line />
                <h4>HTML</h4>
                </div>
            </div>

            <div className="card">
                <div className="card-box card-top-left"></div>
                <div className="card-box card-top-right"></div>
                <div className="card-box card-bottom-left"></div>
                <div className="card-box card-bottom-right"></div>
                <div className="inner-card">
                    <div className="inner-card-box inner-card-top-left"></div>
                    <div className="inner-card-box inner-card-top-right"></div>
                    <div className="inner-card-box inner-card-bottom-left"></div>
                    <div className="inner-card-box inner-card-bottom-right"></div>
                    <RiCss3Fill />
                    <h4>CSS</h4>
                </div>
            </div>

            <div className="card">
                <div className="card-box card-top-left"></div>
                <div className="card-box card-top-right"></div>
                <div className="card-box card-bottom-left"></div>
                <div className="card-box card-bottom-right"></div>
                <div className="inner-card">
                    <div className="inner-card-box inner-card-top-left"></div>
                    <div className="inner-card-box inner-card-top-right"></div>
                    <div className="inner-card-box inner-card-bottom-left"></div>
                    <div className="inner-card-box inner-card-bottom-right"></div>
                    <RiJavascriptLine />
                    <h4>JavaScript</h4>
                </div>
            </div>

            <div className="card">
                <div className="card-box card-top-left"></div>
                <div className="card-box card-top-right"></div>
                <div className="card-box card-bottom-left"></div>
                <div className="card-box card-bottom-right"></div>
                <div className="inner-card">
                    <div className="inner-card-box inner-card-top-left"></div>
                    <div className="inner-card-box inner-card-top-right"></div>
                    <div className="inner-card-box inner-card-bottom-left"></div>
                    <div className="inner-card-box inner-card-bottom-right"></div>
                    <RiReactjsLine />
                    <h4>React</h4>
                </div>
            </div>

            <div className="card">
                <div className="card-box card-top-left"></div>
                <div className="card-box card-top-right"></div>
                <div className="card-box card-bottom-left"></div>
                <div className="card-box card-bottom-right"></div>
                <div className="inner-card">
                    <div className="inner-card-box inner-card-top-left"></div>
                    <div className="inner-card-box inner-card-top-right"></div>
                    <div className="inner-card-box inner-card-bottom-left"></div>
                    <div className="inner-card-box inner-card-bottom-right"></div>
                    <RiNextjsLine />
                <h4>Next.js</h4>
                </div>
            </div>

            <div className="card">
                <div className="card-box card-top-left"></div>
                <div className="card-box card-top-right"></div>
                <div className="card-box card-bottom-left"></div>
                <div className="card-box card-bottom-right"></div>
                <div className="inner-card">
                    <div className="inner-card-box inner-card-top-left"></div>
                    <div className="inner-card-box inner-card-top-right"></div>
                    <div className="inner-card-box inner-card-bottom-left"></div>
                    <div className="inner-card-box inner-card-bottom-right"></div>
                    <RiTailwindCssFill />
                    <h4>Tailwind</h4>
                </div>
            </div>
        </div>
    )
}

export default Cards;