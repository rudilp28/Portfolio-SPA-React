import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';



export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
                <AnchorLink href='#home' offset="20">Home</AnchorLink>
                <AnchorLink href='#about' offset="25">About</AnchorLink>
                <AnchorLink href='#skill' offset="25">Skills</AnchorLink>
                <AnchorLink href='#resume' offset="25">Resume</AnchorLink>
                <AnchorLink href='#portfolio' offset="25">Portfolio</AnchorLink>
                <AnchorLink href='#contact'>Contact</AnchorLink>
            </div>
        )
    }
}

