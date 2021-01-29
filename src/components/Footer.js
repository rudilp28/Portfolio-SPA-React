import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";


export default class footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <div className="icones">
                <a href="https://www.linkedin.com/in/rudinei-lopes-53687a9a/" target="_blank"><FaLinkedin size="60px"/></a>
                <a href="https://github.com/rudilp28/" target="_blank"><FaGitSquare size="60px"/></a>
                <a href="https://www.behance.net/rudineiroc4558" target="_blank"><FaBehanceSquare size="60px"/></a>
            </div>
            <p>All Right Resenved © 2020 RD Developer</p>
            </div>
        );
    }
}

