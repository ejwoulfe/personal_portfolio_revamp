import React from 'react';
import './navigation.scss';
import githubWhite from '../../assets/icons/svg/github-white.svg';
import resume from '../../assets/icons/svg/resume.svg';

function Navigation() {


    function goToGithub() {
        window.open("https://github.com/ejwoulfe");
    }
    function navigateToProjects() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }
    function navigateToSkills() {
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    }
    function navigateToAbout() {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });

    }
    function navigateToContact() {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

    }
    return (
        <div id="navigation">
            <div id="icons">
                <span id="logo">
                    <h1>EJW4</h1>
                </span>
                <span id="resume_icon">
                    <img src={resume} alt="pdf file of my resume"></img>
                    {/* <h5>Resume</h5> */}
                </span>
                <span id="github_icon">
                    <img src={githubWhite} onClick={() => goToGithub()} alt="link to my github"></img>
                    {/* <h5>Github</h5> */}
                </span>

            </div>
            <ul id="nav_list">
                <li className="nav_links" onClick={() => navigateToSkills()} >Skills</li>
                <li className="nav_links" onClick={() => navigateToProjects()} >Projects</li>
                <li className="nav_links" onClick={() => navigateToAbout()}>About</li>
                <li className="nav_links" onClick={() => navigateToContact()}>Contact</li>
            </ul>
        </div>
    )
}
export default Navigation;