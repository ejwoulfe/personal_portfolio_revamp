import React from 'react';
import './contact.scss';
import email from '../../assets/icons/contact.svg';
import ContactForm from './contact_form/contact_form';

function Contact() {
    return (
        <div id="contact">
            <div className="header"> <h1 className="header_text">Contact</h1></div>
            <div id="contact_container">
                <div id="mail_image">
                    <img id="mail_icon" src={email} alt="mail_icon"></img>
                </div>
                <div id="contact_form">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    )
}

export default Contact;