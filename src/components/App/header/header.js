import React from "react";
import "./header.css";
import logo from "./Logo1.png";


export default class header extends React.Component {

    render() {
        return (
            <div className="header">
                <img className="headerImg" src={logo} alt="Website logo"></img>
                <a href="#intro">Home</a>
                <a href="#footer">Contact Me</a>
                <a href="#projects">Projects</a>
            </div>
        )
    }
}