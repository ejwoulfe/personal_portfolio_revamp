import React from 'react';
import './navigation.scss';

function Navigation() {

    function navigateToProjects() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }
    function navigateToAbout() {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });

    }
    function navigateToContact() {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

    }
    return (
        <div id="navigation">
            <ul id="nav_list">
                <li className="nav_links" onClick={() => navigateToProjects()} >Projects</li>
                <li className="nav_links" onClick={() => navigateToAbout()}>About</li>
                <li className="nav_links" onClick={() => navigateToContact()}>Contact</li>
            </ul>
        </div>
    )
}
export default Navigation;