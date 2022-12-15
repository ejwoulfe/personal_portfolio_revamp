import { useEffect, useState } from "react";
import "./banner.scss";
import code from "../../assets/icons/banner/code-solid.svg";
import mouse from "../../assets/icons/banner/computer-mouse-solid.svg";

function Banner() {
  useEffect(() => {}, []);

  function renderBannerContect(): JSX.Element {
    return (
      <section className="banner">
        <div>
          <img src={code} alt="computer with code on the screen" />
          <img src={mouse} alt="computer mouse" />
        </div>
      </section>
    );
  }

  function loadingSpinner(): JSX.Element {
    return (
      <section id="banner">
        <div className="loader"></div>
      </section>
    );
  }

  return <>{renderBannerContect()}</>;
}
export default Banner;
