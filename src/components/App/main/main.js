import React from "react";
import "./main.css"
import photo from "./IMG_2456.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';


export default class Main extends React.Component {

    render() {
        return(
            <div className="sectionOne">
                <div className="intro" id="intro">
                    <div className="profileIntro">
                        <img src={photo} alt="profile picture" className="profilePic"></img>
                        <h2>Hello world! I'm Mykee.</h2>
                </div>
                <div className="bio">
                    <p>Welcome to my digital playground! A little about me is I'm a passionate Full Stack Web Developer who fell in love with code. I am always dedicated to learning new skills. While on my off time I enjoy exercising and travleing.</p>
                    <div className="techTools">
                        Here are my Tech Tools
                        <FontAwesomeIcon icon={faCode} className="code-icon" pulse />
                        <div className="languages">
                            <div className="icon">HTML  <FontAwesomeIcon icon={faHtml5} pulse /></div>
                            <div className="icon">CSS <FontAwesomeIcon icon={faCss3Alt} pulse/></div>
                            <div className="icon">JavaScript <FontAwesomeIcon icon={faJsSquare} className="js-icon" pulse /></div>
                            <div className="icon">Python  <FontAwesomeIcon icon={faPython} pulse /></div>
                            <div className="icon">React  <FontAwesomeIcon icon={faReact} pulse/></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}