import React from 'react';
import './contact.scss';
import ContactForm from './contact_form/contact_form';

function Contact() {
    return (

        <div id="contact">
            <div className="header"> <h1 className="header_text">Contact</h1></div>
            <div id="form_container">

                <ContactForm></ContactForm>

            </div>
        </div>
    )
}

export default Contact;