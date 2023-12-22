'use client'
import React from 'react'
import NavItem from './Navigation_Link'
import Modal from './Modal'
import { useState } from 'react'

export default function header() {

  const [ isActive, setIsActive] = useState(false);

  return (
    <div className='w-full'>
      <div className='  h-20  flex  justify-end items-center w-full relative z-10 px-6'>
      <NavItem  isActive={isActive} setIsActive={setIsActive} />
      </div>
      <Modal isActive={isActive}/>
    </div>
  )
}
