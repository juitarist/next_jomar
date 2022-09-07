import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative'>
      <Image src={socialImg} alt='/' className='w-full h-full' layout='responsive' />


      {/* Overlay */}
      <a href="http://www.instagram.com/jomariresare" target="_blank">

        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group ease-in duration-200'  >
          <p className='text-gray-300 hidden group-hover:block '><FaInstagram size={50} />
          </p>
        </div>
      
      </a>
    </div>
  )
}

export default InstagramImg