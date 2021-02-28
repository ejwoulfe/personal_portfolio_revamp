import React, { useState, useEffect } from 'react';
import './expanded_links.scss';

function ExpandedLinks() {

    const [yPosition, setYPosition] = useState(window.scrollY);
    let handleYPosition = () => {

        setYPosition(window.pageYOffset);
    }
    useEffect(() => {

        window.addEventListener('scroll', handleYPosition);

        return () => {

            window.removeEventListener('scroll', handleYPosition);

        }
    }, [])

    useEffect(() => {
        // Variables for the navigation section links
        let navBar = document.getElementById('navigation');
        let navSkills = document.getElementById('nav_skills');
        let navProjects = document.getElementById('nav_projects');
        let navAbout = document.getElementById('nav_about');
        let navContact = document.getElementById('nav_contact');

        // Variables for section containers
        let topOfSkills = document.getElementById('skills').offsetTop;
        let topOfProjects = document.getElementById('projects').offsetTop;
        let topOfAbout = document.getElementById('about').offsetTop;
        let topOfContact = document.getElementById('contact').offsetTop;

        if (yPosition > 30) {
            navBar.style.borderBottom = '1px solid #d73953';
        } else {
            navBar.style.borderBottom = 'none';
        }

        // Underline skills section at y threshold.
        if (yPosition > topOfSkills - 101 && yPosition < topOfProjects - 101) {
            navSkills.style.color = '#d73953';
        } else {
            navSkills.style.color = '#FFFFFF';
        }

        // Underline projects section at y threshold.
        if (yPosition > topOfProjects - 101 && yPosition < topOfAbout - 101) {
            navProjects.style.color = '#d73953';
        } else {
            navProjects.style.color = '#FFFFFF';
        }

        // Underline about me section at y threshold.
        if (yPosition > topOfAbout - 101 && yPosition < topOfContact - 301) {
            navAbout.style.color = '#d73953';
        } else {
            navAbout.style.color = '#FFFFFF';
        }

        // Underline contact section at y threshold.
        if (yPosition > topOfContact - 300 && yPosition <= document.body.scrollHeight) {
            navContact.style.color = '#d73953';
        } else {
            navContact.style.color = '#FFFFFF';
        }

    }, [yPosition]);

    
    function goToSection(section){
        if(section === 'contact'){

        window.scrollTo({top: document.getElementById(section).offsetTop, left: 0, behavior: 'smooth'});
        }else{

        window.scrollTo({top: document.getElementById(section).offsetTop - 100, left: 0, behavior: 'smooth'});
        }
    }

    return (
        <ul id="nav_list">
            <li className="nav_links" id="nav_skills" onClick={() => goToSection('skills')} >Skills</li>
            <li className="nav_links" id="nav_projects" onClick={() => goToSection('projects')} >Projects</li>
            <li className="nav_links" id="nav_about" onClick={() => goToSection('about')}>About</li>
            <li className="nav_links" id="nav_contact" onClick={() => goToSection('contact')}>Contact</li>
        </ul>
    );
}

export default ExpandedLinks;