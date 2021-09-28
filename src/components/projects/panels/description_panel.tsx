import { Project } from '../../../interfaces/project_interface';
import './description_panel.scss';


function DescriptionPanel({ description, goals, accomplishments }: Project) {




    // Take in an array from the project object and put it into a list format.
    function arrayIntoListFormat(array: string[]) {
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
    function arrayIntoDescription(descriptionText: string[]) {
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

                {arrayIntoDescription(description)}

            </div>

            <div className="goals">
                <h3>Goals</h3>

                {arrayIntoListFormat(goals)}

            </div>

            <div className="accomplishments">
                <h3>Accomplishments</h3>

                {arrayIntoListFormat(accomplishments)}


                <div className="border_bottom_right"></div>


            </div>

        </div>
    )
}
export default DescriptionPanel;