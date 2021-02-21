import React, { useEffect, useState } from 'react';
import './about.scss';
import greatWall from '../../assets/about_section_images/greatwall.jpg';
import bigelowMtn from '../../assets/about_section_images/bigelow_mtn.jpg';
import chinaTown from '../../assets/about_section_images/china_town.jpg';

function About() {

    const [imageGallery, setImageGallery] = useState([]);
    const [currentImgNum, setCurrentImgNum] = useState(0);

    useEffect(() => {
        setImageGallery([greatWall, bigelowMtn, chinaTown]);
    }, []);




    function createImageButtons(images) {
        return (
            images.map((image, index) => {
                if (index === currentImgNum) {
                    return <button className="carousel_button_current" onClick={() => setCurrentImgNum(index)}></button>
                } else {
                    return <button className="carousel_button" onClick={() => setCurrentImgNum(index)}></button>

                }
            })
        )
    }





    function imageCarousel(images) {
        if (images.length > 0) {
            return (
                <div id="image_carousel">
                    <img src={images[currentImgNum]} alt={"self_image_" + currentImgNum}></img>
                    <div id="carousel_buttons">
                        {createImageButtons(imageGallery)}
                    </div>
                </div>
            );
        } else {
            return <h4>Collecting Images</h4>
        }


    }
    return (
        <div id="about">
            <div className="header"> <h1 className="header_text">About</h1></div>
            <div id="about_container">

                {imageCarousel(imageGallery)}


                <div id="about_text_container">
                    <h3 className="about_text">My name is Ed Woulfe. I am a recent college graduation with a
                        degree in Computer Science.</h3>
                    <h3 className="about_text">During my studies I discovered my passion for web development.
                    Ever since, I have been studying and practicing in order to expand
                        my web dev skills and knowledge.</h3>
                    <h3 className="about_text">I am excited to keep learning more, improving my skills and
                        working with others to make respectable and beautiful websites.</h3>
                    <h3 className="about_text">All contact information can be found on my resume. A link is
                        provided at the top of the page. Thank you!</h3>
                        <div id="border_right"></div>
                </div>
            </div>
        </div>
    )
}

export default About;