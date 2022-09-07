import React from 'react'
import Link from 'next/link'

const Hero = ({heading, message, texto}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10]rem'>
            <h2 className='text-3xl '>{heading}</h2>
            <p className='pt-2 pl-2 text-lg font-light'>{message}</p>
            <p className='pl-6 text-lg font-light'>photographer.</p>
            <p className='pl-10 text-lg font-light'>programmer.</p>
            <p className='pb-9 text-md'>{texto}</p>
            <button className='px-8 py-2 border font-light hover:bg-indigo-700 ease-in duration-150'>
            <Link href='/contact'>Get in touch with me</Link></button>
        </div>
    </div>
  )
}

export default Hero