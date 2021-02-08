import React from 'react';
import './right_panel.scss';

function RightPanel(props) {


    function arrayIntoListFormat(array) {
        return (
            <ul>
                {array.map((value, index) => {
                    return (
                        <li className="list_item" key={index}>{value}</li>
                    )
                })}
            </ul>
        )

    }

    return (
        <div className="right_panel">
            <div className="description">
                <h3>Description</h3>
                <p>{props.description}</p>
            </div>

            <div className="goals">
                <h3>Goals</h3>
                {arrayIntoListFormat(props.goals)}
            </div>

            <div className="accomplishments">
                <h3>Accomplishments</h3>
                {arrayIntoListFormat(props.accomplishments)}

            </div>
        </div>
    )
}
export default RightPanel;