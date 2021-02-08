import React from 'react';
import './navigation.scss';

function Navigation() {
    return (
        <div id="navigation">

            <ul id="nav_list">
                <li className="nav_links">Projects</li>
                <li className="nav_links">About</li>
                <li className="nav_links">Contact</li>
            </ul>
        </div>
    )
}
export default Navigation;