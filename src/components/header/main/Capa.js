import React, { useEffect, useState } from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    capa: {
        minHeight:"100vh", 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/img/capa-dark.jpg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Nunito",
    },
   
  
    appBar: {
        background: 'none',
        
    },
    appWrapper: {
        display: 'flex',
        width: '90%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
   
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5aff3d'
    },
    containerText: {
        textAlign: 'center',
        
    },
    containerIcon: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid'
        
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
        
    },
    subtitle: {
        color: '#fff',
        fontWeight: '400',
    },
    
    iconButton: {
        margin: '0',
        padding: '0',
        hover: '0'
    }
  
    
 
}));



export default function Capa() {

    
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        setChecked(true);
    },[])

    return( 
        
    <div className={classes.capa} > 
        
        <Collapse in={checked} {...(checked ? { timeout: 1200 } : {})} collapsedHeight={8}>
            <div className={classes.containerText} > 
                <h1 className={classes.title}>Olá, Eu sou  <br/><span className={classes.colorText}> Rudinei Lopes </span></h1>
                <h5 className={classes.subtitle}>Front End Developer </h5>
                <div className="boxIcon"  > 
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            </div>
        </Collapse>

        
    </div>
    );
}

