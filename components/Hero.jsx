import React from 'react'
import Link from 'next/link'



const Hero = ({heading, message, texto}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10]rem '>
            <h2 className='text-5xl '>{heading}</h2>
            <p className='ml-10 pt-1 pl-6 text-lg font-light'>{message}</p>
            <p className='ml-10 pl-10 text-lg font-light'>photographer.</p>
            <p className='ml-10 pl-14 text-lg font-light'>programmer.</p>
            <p className='pb-1 text-md'>{texto}</p>
            <button className='ml-28 px-3 py-2 border font-light hover:bg-indigo-700 ease-in duration-150'>
            <Link href='/contact'>get in touch with me</Link></button>
        </div>
    </div>
  )
}

export default Hero
