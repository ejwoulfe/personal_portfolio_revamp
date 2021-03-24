import React, { useEffect, useState } from 'react';
import './banner.scss';
import leftShape from '../../assets/banner_images/left-shape.png';
import rightShape from '../../assets/banner_images/right-shape.png';


function Banner() {

    const [leftshapeLoaded, setLeftShapeLoaded] = useState(false);
    const [rightshapeLoaded, setRightShapeLoaded] = useState(false);


    useEffect(() => {


    }, [])

    function renderBannerContect() {
        return (
            <div id="banner">
                <img id="left_shape" src={leftShape} alt="shape with code background"></img>
                <div id="personal_info">
                    <div id="name">
                        <h1>Ed Woulfe</h1>
                    </div>
                    <div id="role">
                        <h1>Web Developer</h1>
                    </div>
                </div>
                <img id="right_shape" src={rightShape} alt="shape with code background"></img>

            </div>
        )
    }

    function loadingSpinner() {
        return (
            <div id="banner">
                <div className="loader"></div>
                <img style={{ display: "none" }} onLoad={() => setLeftShapeLoaded(true)} id="left_shape" src={leftShape} alt="shape with code background"></img>

                <img style={{ display: "none" }} onLoad={() => setRightShapeLoaded(true)} id="right_shape" src={rightShape} alt="shape with code background"></img>
            </div>
        )
    }


    return (

        <div>
            {rightshapeLoaded && leftshapeLoaded ? renderBannerContect() : loadingSpinner()}
        </div>

    )


}
export default Banner;