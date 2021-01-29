import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";


export default class Portfolio extends React.Component {
    render(){
        return(
          <div className="skills" id="portfolio">
              <div className="title-skill">
                 <h4>Portfolio</h4> 
                 <h2>My Portfolio</h2>
              </div>
              <div className="container-skill">
                <div className="contant-portfolio">
                    <FaGitAlt size="60px"/>
                    <h2>Pokedex-JavaScript</h2>
                    <p>Ir para projeto no Github</p>
                    <a href="https://github.com/rudilp28/Pokedex-JavaScript" target="_blank"><button type="button">Go</button></a>
                </div>

                <div className="contant-portfolio">
                    <FaGitAlt size="60px"/>
                    <h2>SW controle pizzaria</h2>
                    <p>Ir para projeto no Github</p>
                    <a href="https://github.com/rudilp28/Desenvolvimento-de-um-software-de-controle-para-uma-pizzaria" target="_blank"><button type="button">Go</button></a>
                </div>

                <div className="contant-portfolio">
                    <FaGitAlt size="60px"/>
                    <h2>JavaScript Calculator</h2>
                    <p>Ir para projeto no Github</p>
                    <a href="https://github.com/rudilp28/Simple-JavaScript-calculator" target="_blank"> <button type="button">Go</button></a>
                </div> 
              </div>

              <div className="container-skill">
                <div className="contant-portfolio">
                    <FaGitAlt size="60px"/>
                    <h2>Land-page</h2>
                    <p>Ir para projeto no Github</p>
                    <a href="hhttps://github.com/rudilp28/Land-page" target="_blank"> <button type="button">Go</button></a>
                </div>

                <div className="contant-portfolio">
                    <FaGitAlt size="60px"/>
                    <h2>Curso EAD</h2>
                    <p>Ir para projeto no Github</p>
                    <a href="https://github.com/rudilp28/Projeto-curso-Ead" target="_blank"> <button type="button">Go</button></a>
                </div>

                <div className="contant-portfolio">
                    <FaGitAlt size="60px"/>
                    <h2>Page Login</h2>
                    <p>Ir para projeto no Github</p>
                    <a href="https://github.com/rudilp28/Tela-login" target="_blank"> <button type="button">Go</button></a>
                </div> 
              </div>
          </div>
        );
    }
}

