import React from 'react';
import './to_top_button.scss';
import upArrow from '../../assets/icons/svg/arrow-up.svg';


function ToTopButton() {

    function toTheTopOfPage() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        let topButton = document.getElementById("to_top_button");
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
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