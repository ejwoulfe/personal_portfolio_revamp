import React from 'react';
import './to_top_button.scss';
import upArrow from '../../assets/icons/svg/arrow-up.svg';


function ToTopButton() {

    function toTheTopOfPage() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    window.onscroll = () => { scrollFunction() };

    function scrollFunction() {

        let topButton = document.getElementById("to_top_button");

        // Load the button at Y-axis 850+.
        if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }


    return (
        <button onClick={() => toTheTopOfPage()} id="to_top_button" title="Go to the top of the page">
            <img src={upArrow} alt="Up arrow"></img>
        </button>
    );
}

export default ToTopButton;