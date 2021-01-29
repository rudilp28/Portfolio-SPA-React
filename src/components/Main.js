import React from 'react';
import Capa from "./header/main/Capa";
import About from "./header/main/About";
import Skills from "./header/main/Skills";
import Resume from "./header/main/Resume";
import Portfolio from "./header/main/Portfolio";
import Contact from "./header/main/Contact";
import Maps from "./header/main/Maps";

export default class Main extends React.Component {

    render(){
        return(
            <div className="main" id="home">
                <Capa/>
                <About/>
                <Skills/>
                <Resume/>
                <Portfolio/>
                <Contact/>
                <Maps/>
            </div>
        );
    }
}