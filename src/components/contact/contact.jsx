import React from 'react';
import './contact.scss';
import ContactForm from './contact_form/contact_form';
import arrowUp from '../../assets/icons/arrow-up.svg';

function Contact() {

    function toTopOfPage() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (

        <div id="contact">
            <div className="header"> <h1 className="header_text">Contact</h1></div>
            <div id="contact_container">
                <div id="contact_form">
                    <ContactForm></ContactForm>
                </div>
                <div id="back_to_top_container">
                    <button id="to_top_button" onClick={() => toTopOfPage()}><img src={arrowUp} alt="button that naviagtes to the top of the page."></img></button>
                    <p>Back to Top</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;