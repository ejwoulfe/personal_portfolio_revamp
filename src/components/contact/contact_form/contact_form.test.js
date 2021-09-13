
import { render, screen, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ContactForm from './contact_form';


test("renders the correct content", () => {
    render(<ContactForm />);
    const formElement = screen.getByTestId('contact-form');

    // Check if component is rendering onto the document.
    expect(formElement).toBeInTheDocument();

    // Check if the labels are displaying the correct text.
    expect(formElement.querySelectorAll('.form_label')[0]).toHaveTextContent('Name');
    expect(formElement.querySelectorAll('.form_label')[1]).toHaveTextContent('Email');
    expect(formElement.querySelectorAll('.form_label')[2]).toHaveTextContent('Message');

    // Check if button is displaying correctly
    expect(formElement.querySelector('#send_button')).toHaveValue('Send');



});