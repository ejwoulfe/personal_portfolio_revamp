import {
    render,
    screen,
    cleanup
} from '@testing-library/react';
import ContactForm from './contact_form';

afterEach(cleanup);


test("renders the correct content", () => {
    render( < ContactForm / > );
    const formElement = screen.getByTestId('contact-form');


    // Check if send button is enabled.
    expect(screen.getByRole('button', {
        name: 'Send'
    })).toBeEnabled();

});