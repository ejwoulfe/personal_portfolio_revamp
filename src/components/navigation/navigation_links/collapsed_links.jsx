import React, { useState, useEffect } from 'react';
import './collapsed_links.scss';
import bars from '../../../assets/icons/svg/bars.svg';

function CollapsedLinks() {
    const [windowWidth, setWindowWith] = useState(window.innerWidth);
    const [menuVisibility, setMenuVisibility] = useState(false);



    let handleResize = () => {

        setWindowWith(window.innerWidth);
    }


    useEffect(() => {

        window.addEventListener('resize', handleResize);

        return () => {

            window.removeEventListener('resize', handleResize);
        }
    }, []);


    useEffect(() => {

        setWindowWith(window.innerWidth);

    }, [windowWidth]);


    function dropDownMenu() {

        return (
            <ul id="drop_down_menu">
                <li onClick={() => window.scrollTo({ top: document.getElementById('skills').offsetTop - 100, left: 0, behavior: 'smooth' })}>Skills</li>
                <li onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop - 100, left: 0, behavior: 'smooth' })}>Projects</li>
                <li onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop - 100, left: 0, behavior: 'smooth' })}>About</li>
                <li onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, left: 0, behavior: 'smooth' })}>Contact</li>
            </ul>
        );
    }


    return (
        <span id="bar_menu_container">
            <img id="bars_menu" onClick={() => { setMenuVisibility(menuVisibility => !menuVisibility) }} src={bars} alt="collapsed menu button"></img>
            {menuVisibility ? dropDownMenu() : null}
        </span>
    );
}

export default CollapsedLinks;