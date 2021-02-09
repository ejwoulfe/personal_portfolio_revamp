import React from 'react';
import './contact_form.scss';
import emailjs from 'emailjs-com';
import userID from '../../../util/emailjs_info';

function ContactForm() {

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('gmail_id', 'template_aye077j', event.target, userID)
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    disableButton();
                    event.target.reset();
                }
            }, (error) => {
                alert("Error: " + error.text);
            });

    }

    function disableButton() {
        document.getElementById('send_button').id = 'send_button_disabled';
        document.getElementById('send_button_disabled').value = 'Sent!';

    }

    return (

        <form className="contact-form" onSubmit={sendEmail}>
            <label className="form_label">Name</label>
            <input className="form_field" type="text" name="name" />
            <label className="form_label">Email</label>
            <input className="form_field" type="email" name="email" />
            <label className="form_label">Message</label>
            <textarea className="form_field" id="form_text_area" name="message" />
            <input id="send_button" type="submit" value="Send" />
        </form>
    );

}
export default ContactForm;