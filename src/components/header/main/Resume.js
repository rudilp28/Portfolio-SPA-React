import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";


export default class Resume extends React.Component {
    render(){
        return(
          <div className="resume" id="resume">
              <div className="title-skill">
                 <h4>My Resume</h4>
                 <h2>My Story</h2> 
              </div>
                <div className="contant-resume">
                    <FaUniversity size="60px"/>
                    <h2>Analise e Denvolvimento de sistemas</h2>
                    <label className="resume-date">2019 - 2021</label>
                    <span>UNIP(universidade paulista)</span>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>

                <div className="contant-resume">
                    <FaUniversity size="60px"/>
                    <h2>Design Gráfico</h2>
                    <label className="resume-date">2018 - 2019</label>
                    <span>FMU(Faculdade metropolitana unidas)</span>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>

                <div className="contant-resume">
                    <FaUserGraduate size="60px"/>
                    <h2>Técnico em Matrketing</h2>
                    <label className="resume-date">2017 - 2018</label>
                    <span>ETEC(Escola técinica estadual de são paulo)</span>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>

                <div className="contant-resume">
                    <FaUserGraduate size="60px"/>
                    <h2>Formação escolar</h2>
                    <label className="resume-date">2004 - 2008</label>
                    <span>Fundação Bradesco(Escola estadual de são paulo)</span>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't look 
                        even slightly believable.
                    </p>
                </div>
            
             
          </div>
        );
    }
}

