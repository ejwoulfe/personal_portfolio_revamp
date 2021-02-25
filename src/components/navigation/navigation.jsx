import React, { useEffect, useState } from 'react';
import './navigation.scss';
import githubWhite from '../../assets/icons/svg/github-white.svg';
import resume from '../../assets/icons/svg/resume.svg';
import CollapsedLinks from './navigation_links/collapsed_links';
import ExpandedLinks from './navigation_links/expanded_links';

function Navigation() {

    const [windowWidth, setWindowWith] = useState(window.innerWidth);


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


    function openTabToGithub() {
        window.open("https://github.com/ejwoulfe");
    }
    function downloadResumePDF() {

    }


    return (
        <div id="navigation">
            <div id="icons">
                <span id="logo">
                    <h1 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>EJW4</h1>
                </span>
                <span id="resume_icon">
                    <img src={resume} alt="pdf file of my resume"></img>
                </span>
                <span id="github_icon">
                    <img src={githubWhite} onClick={() => openTabToGithub()} alt="link to my github"></img>
                </span>

            </div>
            {(windowWidth < 750) ? <CollapsedLinks></CollapsedLinks> : <ExpandedLinks></ExpandedLinks>}
        </div >
    )
}
export default Navigation;