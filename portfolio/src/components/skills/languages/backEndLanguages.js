import node from '../../../assets/icons/node.svg';
import php from '../../../assets/icons/php.svg';
import mysql from '../../../assets/icons/mysql.svg';
import mongodb from '../../../assets/icons/mongodb.svg';

function fillBackEndLanguages(obj){
    obj = {
        type: "Back End",
        weekly: {
            "Node": node
        },
        past: {
            "PHP": php,
            "MySQL": mysql,
            "MongoDB": mongodb
        }
    }
    return obj;
}

export default fillBackEndLanguages;