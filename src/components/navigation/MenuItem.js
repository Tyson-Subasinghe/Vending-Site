import React from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-bootstrap';
import home from '../../assets/home.svg';



const icons = [home];
const variants = {
  open: {
    width: 200,
    y: 0,
    zIndex: 100,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    zIndex: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }) => {
  
  return (
    
    <NavLink href={i.url} style={{color:"rgba(0,0,0,0)"}} >
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="icon-placeholder" ><img src={home} style={{width:'25px' }} alt="icon" /></div>
        <div className="text-placeholder" >{i.title}</div>
      </motion.li>
    </NavLink>
    
  );
};


