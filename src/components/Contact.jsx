import React, { useRef, useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);
        console.log(form)

    }

    return (
        <section id="contact">
            <h1 className="contact-header">CONTACT</h1>
            <div className="form-container">
                <div className="shape-top-right">
                    <div className="shape-top-top"></div>
                    <div className="shape-top-left"></div>
                    <div className="shape-top-right-line"></div>
                </div>
                <div className="left-bar">
                    <div className="triangle-left-top"></div>
                    <div className="triangle-left-bottom"></div>
                </div>
                <div className="right-bar">
                    <div className="triangle-right-top"></div>
                    <div className="triangle-right-bottom"></div>
                </div>
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
                    <label htmlFor="name">
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
                            placeholder="LEAVE A MESSAGE"    
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
        </section>
    )
}

export default Contact;