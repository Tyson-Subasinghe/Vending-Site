import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import {isMobile} from "react-device-detect";
import {motion} from "framer-motion";
import Logo from '../assets/logo.png';
import healthyImage from '../assets/healthy.svg';
import drinkImage from '../assets/drinks.svg';
import snackImage from '../assets/snacks.svg';




const Styles = styled.div`

.pageBox{
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}


.logo{
    position: relative;
    z-index: -2;
    ${isMobile ? 
      `    
      width: 40%;
      top: 5%;
      
      `
      :
      `
      width: 15%;
      top: 5%;
      `
    }
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display: inline-block;
    mouseEvents: none;
  }


.icons{
    position: relative;
    ${isMobile ? 
      `    
      width: 30%;
      top: 5%;
      
      `
      :
      `
      width: 10%;
      top: 5%;
      `
    }
    
  }

.componentBox{
   
       
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        
        
    
}

.break {
    flex-basis: 100%;
    height: 2vh;
}

.largeBreak {
    flex-basis: 100%;
    height: 6vh;
}
`;


export const Home = () => {

    
    return(

        <Styles>
            <div className="pageBox">
                
                
                <div className="componentBox"> 
                    <img src={Logo} className="logo" alt="Vending.com.au Logo"/>
                    <div className="break"></div>
                    <div style={{fontWeight:'bold'}}>
                        We are Vending.com.au
                    </div>
                    
                    <div className="largeBreak"></div>
                    Sydney's first sustainable healthy vending company
                    <div className="break"></div>
                    Click on an icon to get started
                    <div className="largeBreak"></div>
                        
                    <Tooltip title="Healthy Options">
                        <motion.img src={healthyImage} className="icons" alt="Healthy options" whileHover={{ scale: 1.1 }} onClick={()=>{window.location='/healthyoptions'}}/>        
                    </Tooltip>
                        
                    <Tooltip title="Drinks" >
                        <motion.img src={drinkImage} className="icons" alt="Drinks" whileHover={{ scale: 1.1 }} onClick={()=>{window.location='/drinks'}}/>
                    </Tooltip>

                    <Tooltip title="Snacks">
                        <motion.img src={snackImage} className="icons" alt="Snacks" whileHover={{ scale: 1.1 }} onClick={()=>{window.location='/snacks'}}/>
                    </Tooltip>
                        
                    <div className="largeBreak"></div>
                    
                    <motion.a style={{fontWeight:'bold'}} whileHover={{ scale: 1.1 }} href={'/mission'}>
                        Our mission
                    </motion.a>
                    
                </div>
                
                
            </div>           
        </Styles>
  
)}