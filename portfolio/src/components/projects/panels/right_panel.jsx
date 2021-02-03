import React from 'react';
import './right_panel.scss';

function RightPanel(props) {

    return (
        <div className="right_panel">
            <div className="description">
                <h3>Description</h3>
                <p>{props.description}</p>
            </div>

            <div className="goals">
                <h3>Goals</h3>
                <p>{props.goals}</p>
            </div>

            <div className="challenges">
                <h3>Challenges</h3>
                <p>{props.challenges}</p>
            </div>
        </div>
    )
}
export default RightPanel;