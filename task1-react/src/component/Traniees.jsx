import React, { Component } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faFacebook, faLinkedin, faGithub);
function Traniees(props) {
    console.log(props.profileImg)
    return (
        <div className="Card card">
            <CardHeader />
            <div className="Content card-body">
                <img className="StdImg" src={props.profileImg} alt={`${props.name} image`} />
                <h5>{props.name}</h5>
                <h6>{props.address}</h6>
                <h5>{props.jobDescribtion}</h5>
                <p>{props.brief}</p>
                <div className="Accounts">
                    <a href={props.githubAccount} className="linkAccount" target="_blank">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a href={props.linkedInAccount} className="linkAccount" target="_blank">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a href={props.facebookAccount} className="linkAccount" target="_blank">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Traniees