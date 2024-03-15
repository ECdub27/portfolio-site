import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';


const ContactForm = () => {
 const form = useRef();

    const sendEmail =(e) =>{
        e.preventDefault();
    }

    emailjs.sendForm('service_vtsq4ae','template_gb7nefs', form.current, {
        publicKey: 'Hn5eUyliW-q9VSNSb',
    }).then(() => {
        console.log("Success!");
    }, (error) => {
        console.log('failed...', error.text);
    });


    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );

};


export default ContactForm;