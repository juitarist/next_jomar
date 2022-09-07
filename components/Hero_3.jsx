import React from 'react'
import Link from 'next/link'

const Hero_2 = ({heading, message, texto}) => {
  return (
    <div className='flex items-center  justify-center h-screen mb-1 bg-fixed bg-center bg-cover bg-black'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10]rem'>
            <h2 className='text-8xl  text-white'>{heading}</h2>
            <p className='py-0 pl-10 text-3xl text-white'>{message}</p>
            <p className='pb-9 text-md'>{texto}</p>
        </div>
    </div>
  )
}

export default Hero_2