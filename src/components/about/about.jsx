import React, { useEffect, useState } from 'react';
import './about.scss';
import greatWall from '../../assets/about_section_images/greatwall.jpg';
import bigelowMtn from '../../assets/about_section_images/bigelow_mtn.jpg';
import chinaTown from '../../assets/about_section_images/china_town.jpg';

function About() {

    // State to hold the pictures in an array and to track what the current index is.
    const [imageGallery, setImageGallery] = useState([]);
    const [currentImgNum, setCurrentImgNum] = useState(0);

    useEffect(() => {
        setImageGallery([greatWall, bigelowMtn, chinaTown]);
    }, []);


    // Create buttons for each picture in the array. The index of the current picture in the array will be greyed out.
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
                    <h4 className="about_text">I'm a college graduation with a bachelor's degree in Computer Science.</h4>
                    <h4 className="about_text">During a web concepts course at university, I learned more about web development and how the front end and back end technologies work together to form the modern web. I was hooked.</h4>
                    <h4 className="about_text">Ever since, I have been building and learning new things in order to expand
                        my developer skills and knowledge.</h4>
                    <div id="border_right"></div>
                </div>
            </div>
        </div>
    )
}

export default About;