import React from 'react'
import Link from 'next/link'

const Hero_2 = ({heading, message, texto}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-img-2'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10]rem'>
            <h2 className='text-6xl '>{heading}</h2>
            <p className='pl-12 text-3xl'>{message}</p>
            <p className='pb-9 text-md'>{texto}</p>
        </div>
    </div>
  )
}

export default Hero_2