import { useEffect, useState } from "react";
import "./navigation.scss";
import githubWhite from "../../assets/icons/svg/github-white.svg";
import resume from "../../assets/icons/svg/resume.svg";
import resumePDF from "../../assets/resume/Edmond_Woulfe_Resume.pdf";
import CollapsedLinks from "./navigation_links/collapsed_links";
import ExpandedLinks from "./navigation_links/expanded_links";

function Navigation() {
  const [windowWidth, setWindowWith] = useState<number>(window.innerWidth);

  let handleResize = () => {
    setWindowWith(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWith(window.innerWidth);
  }, [windowWidth]);

  function openTabToGithub() {
    window.open("https://github.com/ejwoulfe");
  }

  function openResumePDF() {
    window.open(resumePDF);
  }

  return (
    <nav id="navigation">
      <div id="icons">
        <span id="logo">
          <h1 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            EJW4
          </h1>
        </span>
        <span id="resume_icon">
          <img
            src={resume}
            onClick={() => openResumePDF()}
            alt="pdf file of my resume"
          ></img>
        </span>
        <span id="github_icon">
          <img
            src={githubWhite}
            onClick={() => openTabToGithub()}
            alt="link to my github"
          ></img>
        </span>
      </div>

      {windowWidth < 750 ? (
        <CollapsedLinks></CollapsedLinks>
      ) : (
        <ExpandedLinks></ExpandedLinks>
      )}
    </nav>
  );
}
export default Navigation;
