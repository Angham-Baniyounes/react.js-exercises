import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
function CardHeader() {
    return (
        <div className="ImgHeader">
            <FontAwesomeIcon className="pencil" icon={faPencilAlt} />
        </div>
    );
}
export default CardHeader;