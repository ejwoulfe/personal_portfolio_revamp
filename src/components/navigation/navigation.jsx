import React, { useEffect, useState } from 'react';
import './navigation.scss';
import githubWhite from '../../assets/icons/svg/github-white.svg';
import resume from '../../assets/icons/svg/resume.svg';

function Navigation() {
    const [yPosition, setYPosition] = useState(window.scrollY);

    function handleYPosition() {

        setYPosition(window.pageYOffset)
    }

    useEffect(() => {

        window.addEventListener('scroll', handleYPosition)
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
        let skillsContainer = document.getElementById('skills');
        let projectsContainer = document.getElementById('projects');
        let aboutContainer = document.getElementById('about');
        let contactContainer = document.getElementById('contact');
        if (yPosition > 30) {
            navBar.style.borderBottom = '1px solid #d73953';
        } else {
            navBar.style.borderBottom = 'none';
        }

        // Underline skills section at y threshold.
        if (yPosition > skillsContainer.offsetTop - 101 && yPosition < projectsContainer.offsetTop - 101) {
            navSkills.style.color = '#d73953';
        } else {
            navSkills.style.color = '#FFFFFF';
        }

        // Underline projects section at y threshold.
        if (yPosition > projectsContainer.offsetTop - 101 && yPosition < aboutContainer.offsetTop - 101) {
            navProjects.style.color = '#d73953';
        } else {
            navProjects.style.color = '#FFFFFF';
        }

        // Underline about me section at y threshold.
        if (yPosition > aboutContainer.offsetTop - 101 && yPosition < contactContainer.offsetTop - 301) {
            navAbout.style.color = '#d73953';
        } else {
            navAbout.style.color = '#FFFFFF';
        }

        // Underline contact section at y threshold.
        if (yPosition > contactContainer.offsetTop - 300 && yPosition <= document.body.scrollHeight) {
            navContact.style.color = '#d73953';
        } else {
            navContact.style.color = '#FFFFFF';
        }


    }, [yPosition])


    function openTabToGithub() {
        window.open("https://github.com/ejwoulfe");
    }
    function downloadResumePDF() {

    }


    return (
        <div id="navigation">
            <div id="icons">
                <span id="logo">
                    <h1>EJW4</h1>
                </span>
                <span id="resume_icon">
                    <img src={resume} alt="pdf file of my resume"></img>
                </span>
                <span id="github_icon">
                    <img src={githubWhite} onClick={() => openTabToGithub()} alt="link to my github"></img>
                </span>

            </div>
            <ul id="nav_list">
                <li className="nav_links" id="nav_skills" onClick={() => window.scrollTo({ top: document.getElementById('skills').offsetTop - 100, left: 0, behavior: 'smooth' })} >Skills</li>
                <li className="nav_links" id="nav_projects" onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop - 100, left: 0, behavior: 'smooth' })} >Projects</li>
                <li className="nav_links" id="nav_about" onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop - 100, left: 0, behavior: 'smooth' })}>About</li>
                <li className="nav_links" id="nav_contact" onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, left: 0, behavior: 'smooth' })}>Contact</li>
            </ul>
        </div >
    )
}
export default Navigation;