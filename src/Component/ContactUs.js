import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5ms94j1', 'template_5pzifh2', form.current, '6OEWiEfmaYDHo3GoU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="card-container">
            <div className="card-container text-center w-50 shadow border  rounded mt-1">
                <div className="form">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label><br/>
                        <input type="text" name="user_name" /><br/>
                        <label>Email</label><br/>
                        <input type="email" name="user_email" /><br/>
                        <label>Message</label><br/>
                        <textarea name="message" /><br/>
                        <input className="btn btn-primary" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};
    export default ContactUs;