import React from 'react';
import './contact_form.scss';
import emailjs from 'emailjs-com';
import userID from '../../../util/emailjs_info';

function ContactForm() {

    async function sendEmail(event) {
        event.preventDefault();

        await emailjs.sendForm('gmail_id', 'template_aye077j', event.target, userID)
            .then((result) => {
                if (result.text === "OK") {
                    event.target.reset();
                }
            }, (error) => {
                alert("Error: " + error.text);
            });
        disableButton();

    }

    function disableButton() {
        document.getElementById('send_button').value = 'Sent!';
        for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
            document.getElementsByTagName('input')[i].disabled = true;
            document.getElementsByTagName('input')[i].style.backgroundColor = '#8888887c';
        }
        document.getElementsByTagName('textarea')[0].disabled = true;
        document.getElementsByTagName('textarea')[0].style.backgroundColor = '#8888887c';



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