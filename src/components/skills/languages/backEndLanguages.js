import node from '../../../assets/icons/png/node.png';
import php from '../../../assets/icons/svg/php.svg';
import mysql from '../../../assets/icons/svg/mysql.svg';
import mongodb from '../../../assets/icons/svg/mongodb.svg';

function fillBackEndLanguages(obj){
    obj = {
        type: "Back End",
        weekly: {
            Node: node
        },
        past: {
            PHP: php,
            MySQL: mysql,
            MongoDB: mongodb
        }
    }
    return obj;
}

export default fillBackEndLanguages;