import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, animateScroll as scroll } from "react-scroll";



export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
                
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-20} duration={700}>Home</Link>
                
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-20} duration={700}>About</Link>
                
                <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-20} duration={700}>Skills</Link>

                <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-20} duration={700}>Resume</Link>

                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-20} duration={700}>Portfolio</Link>

                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-20} duration={700}>Contact</Link>
            </div>
        )
    }
}

