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
                <li>Skills</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        );
    }


    return (
        <>
            <img id="bars_menu" onClick={() => { setMenuVisibility(menuVisibility => !menuVisibility) }} src={bars} alt="collapsed menu button"></img>
            {menuVisibility ? dropDownMenu() : null}
        </>
    );
}

export default CollapsedLinks;