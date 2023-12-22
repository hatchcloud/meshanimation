import React from 'react'

export default function index({isActive, setIsActive}) {
  return (
    <div className= {`${isActive ? 'hidden' : 'hidden'} h-72 w-80 flex justify-center items-center bg-slate-100 rounded-lg text-black absolute`}>
      Modal
    </div>
  )
}
