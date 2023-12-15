import React from "react";
import "./footer.css";


export default class footer extends React.Component {

    render() {
        return (
            <div className="footer" id="footer">
                <a href="https://github.com/Mykee9900" target="_blank"><p>Github</p></a>
                <a href="https://www.linkedin.com/in/elias-flores-629113217/" target="_blank"><p>Linkedin</p></a>
                <a href="mailto:mykee5511@gmail.com" target="_blank"><p>Email</p></a>
            </div>
        )
    }
}