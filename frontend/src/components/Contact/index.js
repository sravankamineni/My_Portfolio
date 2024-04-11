import React, { useState } from 'react';
import axios from 'axios';

import "./index.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const[successMsg,setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name !== "" && formData.email !== "" && formData.message!=="") {
            axios.post('http://localhost:3002/', {
                Name: formData.name,
                Email: formData.email,
                Message: formData.message
            })
                .then((res) => {
                    console.log(res)
                    if (res.status === 200) {
                        setSuccessMsg(res.data.message)
                    }
                    setTimeout(() => {
                        setSuccessMsg("")
                    }, 4000)
                })
                .catch(err => console.log(err))

            setFormData({
                name: '',
                email: '',
                message: ''

            })
            
        }

        else{
            setErrorMsg("Details Required*")
            setTimeout(() => {
                setErrorMsg("")
            }, 4000)
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
                            <button type="submit">Send</button>
                            <p className='success-msg'>{successMsg}</p>
                            <p className='error-msg'>{errorMsg}</p>
                        </form>
                        

                    </div>
                </div>
            </div>
        </div>

    )

}



export default Contact