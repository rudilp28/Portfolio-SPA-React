import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";


export default class Skills extends React.Component {
    render(){
        return(
          <div className="skills" id="skill">
              <div className="title-skill">
                 <h4>Skills</h4> 
                 <h2>My Skills</h2>
              </div>
              <div className="container-skill">
                <div className="contant-skill">
                    <FaHtml5 size="60px"/>
                    <h2>HTML5</h2>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>

                <div className="contant-skill">
                    <FaCss3Alt size="60px"/>
                    <h2>CSS</h2>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>

                <div className="contant-skill">
                    <FaJs size="60px"/>
                    <h2>JavaScript</h2>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div> 
              </div>

              <div className="container-skill">
                <div className="contant-skill">
                    <FaReact size="60px"/>
                    <h2>React</h2>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>

                <div className="contant-skill">
                    <FaGitSquare size="60px"/>
                    <h2>GitHub</h2>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>

                <div className="contant-skill">
                    <DiPhotoshop size="60px"/>
                    <h2>Photoshop</h2>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div> 
              </div>
          </div>
        );
    }
}

