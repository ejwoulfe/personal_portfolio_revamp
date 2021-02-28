import React, { useState, useEffect } from 'react';
import './collapsed_links.scss';
import bars from '../../../assets/icons/svg/bars.svg';

function CollapsedLinks() {
    
    const [windowWidth, setWindowWith] = useState(window.innerWidth);
    const [menuVisibility, setMenuVisibility] = useState(false);


   useEffect(() => {

        window.addEventListener('resize', handleResize);
        window.addEventListener('click', detectClick)

        return () => {

            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', detectClick);

        }
    }, []);


    useEffect(() => {

        setWindowWith(window.innerWidth);

    }, [windowWidth]);

    let handleResize = () => {

        setWindowWith(window.innerWidth);
    }

    // The only situation we want the drop down to be visible is when the user clicks on the button.
    // So hide the menu on a click that isn't the drop down menu button.
    let detectClick = (event) => {

        if(event.target.id !== 'bars_menu'){
            setMenuVisibility(false)
        }  
    }

    function dropDownMenu() {

        return (

            <ul id="drop_down_menu">
                <li className="collapsed_nav_links" onClick={() => goToSection('skills')}>Skills</li>
                <li className="collapsed_nav_links" onClick={() => goToSection('projects')}>Projects</li>
                <li className="collapsed_nav_links" onClick={() => goToSection('about')}>About</li>
                <li className="collapsed_nav_links" onClick={() => goToSection('contact')}>Contact</li>
            </ul>

        );
    }

    function goToSection(section){

        if(section === 'contact'){
            
            window.scrollTo({top: document.getElementById(section).offsetTop, left: 0, behavior: 'smooth'});

        }else{

            window.scrollTo({top: document.getElementById(section).offsetTop - 100, left: 0, behavior: 'smooth'});
        }
    }
    

    return (

        <span id="bar_menu_container">
            <img id="bars_menu" onClick={() => { setMenuVisibility(menuVisibility => !menuVisibility) }} src={bars} alt="collapsed menu button"></img>
            {menuVisibility ? dropDownMenu() : null}
        </span>
        
    );
}

export default CollapsedLinks;