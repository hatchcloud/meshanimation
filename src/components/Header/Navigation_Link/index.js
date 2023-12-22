import React from 'react'
import { motion } from 'framer-motion'
import { NavArrowDown } from 'iconoir-react'; 
import Style from './style.module.css'
import { useRef, useEffect, useState } from 'react'

export default function index({isActive, setIsActive}) {
  const [isHover, setIsHover] = useState(false)
  const btn = useRef()
  useEffect(() => {
    const { left, top, height, width } = btn.current.getBoundingClientRect()
    console.log(btn.current.getBoundingClientRect()); 
  }, []);

  return (
    
    <div 
      ref={btn}
      onMouseEnter={ ()=> {setIsHover(!isHover)}} 
      onMouseLeave={ ()=> {setIsHover(!isHover)}}
      onClick={ ()=> {setIsActive(!isActive)}} 
      className=' flex items-center rounded-full bg-slate-50 hover:bg-sky-100 transition-colors stroke-slate-800 text-slate-900 px-4 cursor-pointer'> 
      <div className='h-12 w-30 overflow-hidden'>
        <motion.div 
          className='w-full h-full relative'
          animate= {{top: isHover ? '-100%' : '0'}}
          transition={{ duration: 0.5, ease: [ 0.76, 0, 0.24, 1]}}
        >
          <div className='w-full h-full  p-3 text-center'>
            <p>
              Compre aquí
            </p>
          </div>
          <div className='w-full h-full  p-3 text-center'>
            <p>
              Ingrese a aquí
            </p>
          </div>
        </motion.div>
      </div>
  
    <div className={`${isActive ? Style.open : Style.close} ${Style.icon}`}>
      <NavArrowDown height={24} width={24}/>
    </div>
      
    </div>
  )
}
