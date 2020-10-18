import React from 'react';
import styled from 'styled-components';
import {isMobile} from "react-device-detect";
import machine1 from '../assets/machine1.svg';
import machine2 from '../assets/machine2.svg';
import machine3 from '../assets/machine3.svg';
import machine4 from '../assets/machine4.svg';

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



export const Machines = () => {
    
    return(
    <Styles>
        <div className="pageBox"> 
            
            <div className="componentBox"> 
                    
                <div className="largeBreak"></div>
                Our Machines
                <div className="largeBreak"></div>
                
                <img src={machine1} className="icons" alt="Machines"/>
                <img src={machine2} className="icons" alt="Snacks"/>
                <img src={machine3} className="icons" alt="Snacks"/>
                <img src={machine4} className="icons" alt="Snacks"/>
                <div className="largeBreak"></div>
                Contact us
                <div className="largeBreak"></div>
            </div>

        </div>
    </Styles>
    

  
)}