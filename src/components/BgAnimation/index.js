'use client'
import React from 'react'
import Style from './style.module.css'
import { motion } from 'framer-motion'

export default function index() {

  const variants = {
      initial: {}, 
      animate: {
        rotate: 360, 
        transition: {
          duration: 12, 
          delay: 0.001,
          repeat: Infinity, 
          repeatType: "loop",
          ease: "linear"
        }
      }
  };
  const variants_2 = {
    initial: {}, 
    animate: {
      rotate: 360, 
      transition: {
        duration: 20, 
        delay: 0.001,
        repeat: Infinity, 
        repeatType: "loop",
        ease: "linear"
      }
    }
};

  return (
    <div className={ Style.animation_elipse}> 
      <motion.div 
        className={ `${Style.elipse} ${Style.e_1}` }
        initial="initial"
        animate="animate"
        variants={variants} 
      ></motion.div>
      <motion.div 
        className={ `${Style.elipse} ${Style.e_3}` }
        initial="initial"
        animate="animate"
        variants={variants_2} 
      ></motion.div>
      <motion.div 
        className={ `${Style.elipse} ${Style.e_2}` }
        initial="initial"
        animate="animate"
        variants={variants} 
      ></motion.div>
    </div>
  )
}
