

import React from 'react';
import { FaGripLines } from "react-icons/fa";

export default class buttonMob extends React.Component {


    constructor()
    {
        super();
        this.state={
            visNav:'flex'
        }
    }

    /* Função de toggle */
    clickMe()
    {
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            });
        }else{
            this.setState({
                visNav:'flex'
            });
        }
        document.querySelector(".nav").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <FaGripLines size="40px"/>
                
                {/* <img src="../img/botao.png" alt=""/> */}
            </div>
        );
    }
}
