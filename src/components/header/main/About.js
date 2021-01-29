import React from 'react';

export default class About extends React.Component {
    render(){
        return(
            <div className="container1" id="about">
                <div className="perfil">
                        <img src="/img/perfil.png"></img>
                        <source media="(max-width: 768px)" srcSet="/img/perfil.png" />
                        <source media="(min-width: 769px)" srcSet="/img/perfil.png" />
                        
                    
                </div> 
               <div className="inform">
                    <h4>About me</h4>
                    <h2>who i m</h2>
                <div className="A-text">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look 
                    even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be 
                    sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
                    generators on the Internet tend to repeat predefined chunks as necessary, making this the 
                    first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
                    with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                    The generated Lorem Ipsum is therefore 
                    always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>
                <div className="bloco-info">
                    <div className="mini-bloco1">
                        <p className="text-bloco">Full Name: Rudinei Lopes De Barros</p>
                        
                        <p className="text-bloco">Birthday: 17 Julho 1990</p>
                    </div>
                    <div className="mini-bloco2">
                        <p className="text-bloco">Address: São paulo SP</p>
                        <p className="text-bloco">Nationality: Brasileiro</p>
                    </div>
                </div>
                    
                </div>
                
            </div>
            
        );
    }
}

