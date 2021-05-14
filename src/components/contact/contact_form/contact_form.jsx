import React from 'react';
import './contact_form.scss';
import emailjs from 'emailjs-com';

function ContactForm() {


    // Retrieve all input field values, ignoring the send button, and put them into an array for validation.
    function getInputFieldValues(form) {

        let inputValuesArray = [];

        for (let i = 0; i < form.length; i++) {

            if (form[i].id !== "send_button") {

                inputValuesArray.push(form[i].value);

            }
        }

        return inputValuesArray;
    }

    // Function to validate the input fields.
    async function validateFields(event) {

        event.preventDefault();
        let formObject = event.target;
        let formFieldValues = await getInputFieldValues(formObject)

        // Check if each field isn't empty.
        for (let i = 0; i < formFieldValues.length; i++) {
            if (formFieldValues[i].length < 1) {

                alert("Please make sure all fields are filled.");
                return false;
            }
        }

        // Check if email is a valid email.
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formFieldValues[1]))) {

            alert("The email address entered is invalid.");

            return false;

        }

        // If all validations pass, we call the send email function.
        sendEmail(formObject);
    }



    // Function to send email to address using emailjs.
    async function sendEmail(form) {


        await emailjs.sendForm('gmail_id', 'template_aye077j', form, process.env.REACT_APP_USER_ID)
            .then((result) => {

                if (result.text === "OK") {
                    form.reset();

                }
            }, (error) => {

                alert("Error: " + error.text);
            });

        disableButton();

    }




    // Disable send button and input fields on successful message sent.
    function disableButton() {

        document.getElementById('send_button').value = 'Sent!';
        document.getElementById('send_button').style.border = 'none';
        document.getElementById('send_button').style.boxShadow = 'none';

        // Iterating through all the input fields.
        for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
            document.getElementsByTagName('input')[i].disabled = true;
            document.getElementsByTagName('input')[i].style.backgroundColor = '#8888887c';
        }
        // Disable the message text area.
        document.getElementsByTagName('textarea')[0].disabled = true;
        document.getElementsByTagName('textarea')[0].style.backgroundColor = '#8888887c';
    }


    return (

        <form className="contact_form" onSubmit={validateFields}>
            <label htmlFor="name_input" className="form_label">Name</label>
            <input id="name_input" className="form_field" type="text" name="name" />
            <label htmlFor="email_input" className="form_label">Email</label>
            <input id="email_input" className="form_field" type="email" name="email" />
            <label htmlFor="form_text_area" className="form_label">Message</label>
            <textarea className="form_field" id="form_text_area" name="message" />
            <input id="send_button" type="submit" value="Send" />
        </form>
    );

}
export default ContactForm;