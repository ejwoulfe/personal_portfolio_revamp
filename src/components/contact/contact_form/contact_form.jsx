import React from 'react';
import './contact_form.scss';
import emailjs from 'emailjs-com';
import userID from '../../../util/emailjs_info';

function ContactForm() {

    async function sendEmail(event) {

        event.preventDefault();

        let fieldsArray = [event.target[0].value.trim(), event.target[1].value.trim(), event.target[2].value.trim()];
        let validFields = await checkFields(fieldsArray);

        if (validFields === true) {
            await emailjs.sendForm('gmail_id', 'template_aye077j', event.target, userID)
                .then((result) => {

                    if (result.text === "OK") {
                        event.target.reset();

                    }
                }, (error) => {

                    alert("Error: " + error.text);
                });

            disableButton();

        } else if (typeof validFields === 'string') {

            alert(validFields);
        }

    }

    // Function to return true if text fields are valid, returns a string with an error message if not.
    function checkFields(formFields) {

        let errorMessage = "";

        // Check if each field isn't empty.
        for (let i = 0; i < formFields.length; i++) {
            if (formFields[i].length < 1) {
                errorMessage = "Please make sure all fields are filled."
                return errorMessage;
            }
        }

        // Check if email is a valid email.
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formFields[1]))) {

            errorMessage = "The email adress entered is invalid."
            return errorMessage;
        }

        return true;
    }

    // Disable send button on successful message sent.
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

        <form className="contact_form" onSubmit={sendEmail}>
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