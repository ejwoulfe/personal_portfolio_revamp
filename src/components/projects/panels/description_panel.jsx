import React from 'react';
import './description_panel.scss';


function DescriptionPanel(props) {



    // Take in an array from the project object and put it into a list format.
    function arrayIntoListFormat(array) {
        return (
            <ul>
                {array.map((value, index) => {
                    return (
                        <li className="list_item" key={"list_item_" + index}>{value}</li>
                    )
                })}
            </ul>
        )

    }

    // Format the description array from the object into a paragraph.
    function arrayIntoDescription(descriptionText) {
        return (
            <div>
                {descriptionText.map((value, index) => {

                    return <p key={"description_section_" + index}>{value}</p>;

                })
                }
            </div>
        );
    }



    return (
        <div className="description_panel">
            <div className="description">
                <div className="border_top_left"></div>
                <h3>Description</h3>

                {arrayIntoDescription(props.description)}

            </div>

            <div className="goals">
                <h3>Goals</h3>

                {arrayIntoListFormat(props.goals)}

            </div>

            <div className="accomplishments">
                <h3>Accomplishments</h3>

                {arrayIntoListFormat(props.accomplishments)}


                <div className="border_bottom_right"></div>


            </div>

        </div>
    )
}
export default DescriptionPanel;