import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";


export default class Contatc extends React.Component {
    render(){
        return(
          <div className="resume" id="contact">
              <div className="title-skill">
                 <h4>Contact me</h4>
                 <h2>Get in touch</h2> 
              </div>
                <div className="row">
                    <div className="box">
                        <div className="contant-contact">
                            <FaMapMarkedAlt size="30px"/>
                            <h2>Location</h2>
                            <p>Osasco <br/> São paulo</p>
                        </div>
                        <div className="contant-contact">
                            <FaEnvelopeOpenText size="30px"/>
                            <h2>Email</h2>
                            <p>rudinei.lopes@hotmail.com <br/> rudineilp23@gmail.com</p>
                        </div>

                        
                    </div>
                    <div className="form">
                        <form name="form1" id="form1" method="post" action="">   
                            <input type="text" name="nome" id="nome" placeholder="Name:"/>
                            <input type="email" name="email" id="email" placeholder="Email:"/>
                            <textarea name="message" id="message" placeholder="Message:"></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
          </div>
        );
    }
}

