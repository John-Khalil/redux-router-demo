import React from 'react'

export default function TailwindResponsive() {
  return (
    
    <>
        <div className='m-10 w-32 h-24 bg-red-500 lg:bg-gray-500 lg:inline-block'></div>
        <div className='m-10 w-32 h-24 bg-indigo-500 lg:bg-red-500 lg:inline-block'></div>
        <div className='m-10 w-32 h-24 lg:bg-yellow-500 hidden lg:inline-block'></div>
        <div className='m-10 w-32 h-24 bg-yellow-500 lg:bg-green-500 lg:inline-block'></div>
    </>
  )
}
