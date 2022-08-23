import { useEffect, useState } from "react";
import "./banner.scss";
import leftShape from "../../assets/banner_images/left-shape.png";
import rightShape from "../../assets/banner_images/right-shape.png";

function Banner() {
  const [leftshapeLoaded, setLeftShapeLoaded] = useState<boolean>(false);
  const [rightshapeLoaded, setRightShapeLoaded] = useState<boolean>(false);

  useEffect(() => {}, []);

  function renderBannerContect(): JSX.Element {
    return (
      <section id="banner">
        <img
          id="left_shape"
          src={leftShape}
          alt="shape with code background"
        ></img>
        <div id="personal_info">
          <div id="name">
            <h1>Ed Woulfe</h1>
          </div>
          <div id="role">
            <h1>Web Developer</h1>
          </div>
        </div>
        <img
          id="right_shape"
          src={rightShape}
          alt="shape with code background"
        ></img>
      </section>
    );
  }

  function loadingSpinner(): JSX.Element {
    return (
      <section id="banner">
        <div className="loader"></div>
        <img
          style={{ display: "none" }}
          onLoad={() => setLeftShapeLoaded(true)}
          id="left_shape"
          src={leftShape}
          alt="shape with code background"
        ></img>

        <img
          style={{ display: "none" }}
          onLoad={() => setRightShapeLoaded(true)}
          id="right_shape"
          src={rightShape}
          alt="shape with code background"
        ></img>
      </section>
    );
  }

  return (
    <>
      {rightshapeLoaded && leftshapeLoaded
        ? renderBannerContect()
        : loadingSpinner()}
    </>
  );
}
export default Banner;
