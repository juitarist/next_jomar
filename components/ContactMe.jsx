import React from 'react';
import Link from 'next/link';
import { FaFlickr, FaInstagram, FaLinkedin, FaSoundcloud, FaTwitter, FaSafari } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='grid items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-img-3'>
       
       
     {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'/>


        <div className='max-w-[1200px] text-center justify-center items-center grid  mx-5 px-20 py-5 rounded-xl  border-1 border-red-300 bg-white/100 text-black z-[2] mt-[-10]rem'>

            <h2 className='text-4xl uppercase  pt-2 pb-3 '>Social Links</h2>
            <p className='py-2 font-light text-l'>You can contact me through any of these sites!</p>


            <div className='flex items-center justify-between max-w-[700px] m-auto pt-2 pb-0'> 

              <a href='https://linkedin.com/in/jiresare' target='_blank' className='rounded-lg shadow-lg shadow-blue-500 p-3 m-2 cursor-pointer hover:scale-150 ease-in duration-300'>

                <FaLinkedin size={20} />

              </a>
              <a href='https://instagram.com/jomariresare' target='_blank' className='rounded-lg shadow-lg shadow-blue-500 p-3 m-2 cursor-pointer hover:scale-150 ease-in duration-300'>

                <FaInstagram size={20} />


              </a>              
              <a href='https://twitter.com/jomariresare' target='_blank' className='rounded-lg shadow-lg shadow-blue-500 p-3 m-2 cursor-pointer hover:scale-150 ease-in duration-300'>

                <FaTwitter size={20} />

              </a>
              <a href='https://soundcloud.com/jomariresare' target='_blank' className='rounded-lg shadow-lg shadow-blue-500 p-3 m-2 cursor-pointer hover:scale-150 ease-in duration-300'>

                <FaSoundcloud size={20} />

              </a>
              <a href='https://www.flickr.com/people/jomariresare/' target='_blank' className='rounded-lg shadow-lg shadow-blue-500 p-3 m-2 cursor-pointer hover:scale-150 ease-in duration-300'>              

                <FaFlickr size={20} />

              </a>

            </div>

            <div className='flex items-center justify-between max-w-[700px] m-auto pb-3'> 
            
            <a href='https://juitarist.github.io/jomariresare/' target='_blank' className='rounded-lg shadow-lg shadow-blue-500 py-3 px-36 m-2 cursor-pointer hover:scale-125 ease-in duration-300'>              
                
                <FaSafari size={20} />

              </a>

            </div>


        </div>

 
    </div>
  )
}

export default ContactMe
