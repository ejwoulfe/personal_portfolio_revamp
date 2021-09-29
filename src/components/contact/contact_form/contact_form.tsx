import './contact_form.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { FormElement } from '../../../interfaces/form_elements';



function ContactForm() {

    const [formQuerySelector] = useState<string>(('.contact_form'));


    // Retrieve all input field values, and put them into an object for validation.
    function getInputFieldValues(event: React.FormEvent<FormElement>) {
        event.preventDefault();

        let inputValues = [
            event.currentTarget.elements.name.value,
            event.currentTarget.elements.email.value,
            event.currentTarget.elements.message.value
        ]

        validateFields(inputValues);
    }

    // Function to validate the input fields.
    function validateFields(inputValues: string[]): boolean {

        // // Check if each field isn't empty.
        for (let i = 0; i < inputValues.length; i++) {
            if (inputValues[i].length < 1) {

                alert("Please make sure all fields are filled.");
                return false;
            }
        }

        // Check if email is a valid email.
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputValues[1]))) {

            alert("The email address entered is invalid.");
            return false;

        }

        // If the input fields pass all validations then call the sendEmail function to send the information.
        sendEmail();
    }



    // Function to send email to address using emailjs.
    async function sendEmail() {

        await emailjs.sendForm('gmail_id', 'template_aye077j', formQuerySelector, process.env.REACT_APP_USER_ID)
            .then((result) => {

                if (result.text === "OK") {

                }
            }, (error) => {

                alert("Error: " + error.text);
            });

        disableButton();
    }

    // Disable send button and input fields on successful message sent.
    function disableButton() {

        (document.getElementById('send_button') as HTMLInputElement).value = 'Sent!';
        document.getElementById('send_button').style.border = 'none';
        document.getElementById('send_button').style.boxShadow = 'none';

        // Iterating through all the input fields.
        for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
            document.getElementsByTagName('input')[i].disabled = true;
            document.getElementsByTagName('input')[i].value = "";
            document.getElementsByTagName('input')[i].style.backgroundColor = '#8888887c';
        }
        // Disable the message text area.
        document.getElementsByTagName('textarea')[0].disabled = true;
        document.getElementsByTagName('textarea')[0].value = "";
    }


    return (

        <form data-testid="contact-form" className="contact_form" onSubmit={getInputFieldValues}>
            <label htmlFor="name_input" className="form_label">Name</label>
            <input id="name_input" className="form_field" type="text" name="name" />
            <label htmlFor="email_input" className="form_label">Email</label>
            <input id="email_input" className="form_field" type="email" name="email" />
            <label htmlFor="form_text_area" className="form_label">Message</label>
            <textarea id="form_text_area" className="form_field" maxLength={200} name="message" />
            <input id="send_button" type="submit" value="Send" />
        </form>
    );

}
export default ContactForm;