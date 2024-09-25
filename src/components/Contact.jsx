import React, { useRef, useState } from "react";
import Globe from "react-globe.gl";
import { FaBarcode } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const current = new Date();
// const day = current.toLocaleString('default', { day: 'long' });
const date = `${current.getFullYear()}`

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    // Service ID
    // service_cb6kofp

const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_cb6kofp',
            'template_zp6ln0m',
            {
                from_name: form.name,
                to_name: "Igna Dev",
                from_email: form.email,
                to_email: "igna.dev.contact01@gmail.com",
                message: form.message,
            },
            'mzWpkOwjkTJARrNlM'
        ).then(
            () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
            }
        );
    }

    // Gen random data
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        // color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
        // color: [['cyan', 'blue', 'blue', 'cyan'][Math.round(Math.random() * 3)], ['cyan', 'blue', 'cyan', 'cyan'][Math.round(Math.random() * 3)]]
        color: [['cyan', 'white', 'cyan', 'cyan'][Math.round(Math.random() * 3)], ['white', 'cyan', 'cyan', 'cyan'][Math.round(Math.random() * 3)]]
    }));

    return (
        <section id="contact">
            {/* <h1 className="contact-header">CONTACT</h1> */}
            <div className="form-container">

                <div className="shape-message">
                    <div className="shape-message-box-top"></div>
                    <div className="shape-message-box-middle"></div>
                    <div className="shape-message-box-bottom"></div>
                    <h3>LEAVE ME A MESSAGE</h3>
                </div>

                <div className="shape-top-right">
                    <div className="shape-top-top"></div>
                    <div className="shape-top-left"></div>
                    <div className="shape-top-right-line"></div>
                    <div className="left-line"></div>
                </div>

                <div className="left-bar">
                    <div className="triangle-left-top"></div>
                    <div className="triangle-left-bottom"></div>
                </div>
                <div className="right-bar">
                    <div className="triangle-right-top"></div>
                    <div className="triangle-right-bottom"></div>
                </div>

                <div className="shape-bottom-right">
                    <div className="shape-bottom-bottom"></div>
                    <div className="shape-bottom-bottom-right"></div>
                    <div className="shape-bottom-left"></div>
                    <div className="left-line-bottom"></div>
                    <FaBarcode className="barcode"/>
                    <FaBarcode className="barcode-two"/>
                </div>
                <p className="date-form">
                    {date}
                </p>

                {/* <h4>Fill out the form with your name and email.</h4>
                <h4>I will contact you shortly to arrage to talk.</h4> */}
                <form 
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name">
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="NAME"    
                        />
                    </label>
                    <label htmlFor="email">
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="EMAIL"    
                        />
                    </label>
                    <label htmlFor="message">
                        <textarea 
                            name="message" 
                            id="message"
                            rows={7}
                            cols={38}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="MESSAGE"    
                        >
                        </textarea>
                    </label>

                    <button
                        type="submit"
                        className="submit"
                    >
                        <span>
                            {loading ? "SENDING..." : "SEND"}
                        </span>
                    </button>
                </form>
            </div>
            
            <div className="world-background">
                <div className="world-container">
                    <Globe 
                        height={570}
                        width={570}
                        backgroundColor='rgba(0,0,0,0)'
                        //  backgroundColor='rgba(45, 48, 84, 0.4)'
                        backgroundImageOpacity={1}
                        showAtmosphere
                        showGraticules
                        //  globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-dark.jpg'
            
                        //  atmosphereColor='blue'
                        atmosphereColor='cyan'

                        atmosphereAltitude={0.10}
            
                        arcsData={arcsData}
                        arcColor={'color'}
                        arcDashLength={() => Math.random()}
                        arcDashGap={() => Math.random()}
                        arcDashAnimateTime={() => Math.random() * 4000 + 500}
                    />
                </div>
                <div className="top-background"></div>
                <div className="bottom-background"></div>
            </div>
        </section>
    )
}

export default Contact;