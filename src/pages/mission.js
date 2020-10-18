import React from 'react';
import styled from 'styled-components';
import {isMobile} from "react-device-detect";

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

.componentBox{
   
       
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    
}


.largeBreak {
    flex-basis: 100%;
    height: 6vh;
}
`;


export const Mission = () => {

    
    return(

        <Styles>
            <div className="pageBox">
                
                
                <div className="componentBox"> 
                    
                    <div className="largeBreak"></div>
                    Our Mission
                    <div className="largeBreak"></div>
                    text goes here
                    
                </div>
                
                
            </div>           
        </Styles>
  
)}