import React from 'react';
import styled from 'styled-components';
import {isMobile} from "react-device-detect";

import healthy1 from '../assets/healthy1.svg';
import healthy2 from '../assets/healthy2.svg';
import healthy3 from '../assets/healthy3.svg';


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


export const Healthy = () => {

    
    return(

        <Styles>
            <div className="pageBox">
                
                
                <div className="componentBox"> 
                    Healthy Options
                    <div className="largeBreak"></div>
                    We offer a wide range of healthy options to facilitate healthier eating for your staff members
                    <div className="largeBreak"></div>
                    Foods such as apples and oranges can be sold from our machines, with natural juices such as apple and orange juice, coconut water and aloe vera being available too
                    <div className="largeBreak"></div>
                        <img src={healthy1} className="icons" alt="Machines"/>
                        <img src={healthy2} className="icons" alt="Snacks"/>
                        <img src={healthy3} className="icons" alt="Snacks"/>
                        
                    <div className="largeBreak"></div>
                    Contact us to get in touch
                </div>
                
                
            </div>           
        </Styles>
  
)}