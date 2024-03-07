import React, { useState } from 'react';
import axios from 'axios';

import "./index.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/contact', formData);
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return(
        <div id='contact'>
            <div className='app-cont'>
                <div className='contact-cont'>
                    <h1 className="contact-head">CONTACT</h1>
                    <div className="contact-col-1">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        

                    </div>
                </div>
            </div>
        </div>

    )

}



export default Contact