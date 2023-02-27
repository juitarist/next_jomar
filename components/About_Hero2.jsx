import React, { FC, useEffect } from "react";
import { useAnimation } from "framer-motion";
import Link from 'next/link'


const About_Hero = ({heading, message, texto}) => {
  return (
    <div className='grid items-center justify-center h-screen mb-2 bg-fixed bg-center bg-cover bg-white'>
       
       
     {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[2]'/>



<div id='aboutme' class="container mx-auto px-10 max-w-[1200px]">
<div className='grid grid-cols-1 mb-2 h-full md:grid-cols-3 '>
<div className='max-h-[800px] md:h-screen pb-2'>
  <img className='w-screen h-[100%] object-cover object-center' src="https://live.staticflickr.com/65535/52337914121_6fc23f235f_k.jpg" alt="" />
  </div>
<div className='flex justify-center bg-white/100 px-10 col-span-2'>
  <div className='mb-auto  mt-auto max-w-lg '>



    <h1 className='text-2xl pt-2 font-light text-blue-500 uppercase'>"You know, I'm something <br /> of a scientist myself"</h1>
    <p className='font-light px-7 italic mb-3'> 'Passion driven and people oriented' </p>



      <p className='text-left font-light'>B.S. Physics from CSULB. Experimental physicist with experience in lithography. <br />
      I'm largely curious about everything and highly inqusitive. I love to learn, read, and discover new things. As a creative person who thought physics was a constrained topic, I found out physics with brimming with creativity and wonder through the many colleagues I met in the CSULB physics program. 

      <br /><br />
      Filipino. Currently working on mobile applications and web development. This website and my Web 1.x site are built by me.

      <br /><br />
      Favorite Quote: <i>" I'm only as smart as my paygrade "</i>
          
          </p> <br/>

      <p className='font-light px-1'>things i like:</p> 
        <ul className='list-disc px-11'>  
          
          <li className='font-light py-1 text-red-600'>all sorts of science</li> 
          <li className='font-light py-1 text-red-600'>music</li>
          <li className='font-light py-1 text-red-600'>learning and applications</li>
          <li className='font-light py-1 text-red-600'>guitars, pedals, amplifiers; oh my</li>
          <li className='font-light py-1 text-red-600'>philosophy talk</li>
          <li className='font-light py-1 text-red-600'>forging meaningful connections</li>

        </ul>

    <button  className='bg-black rounded-md py-3 px-7 mt-6 mx-2 text-white hover:bg-amber-700 ease-in duration-150'>
    <Link href='/contact'>Ways to contact me</Link></button>

    <button  className='bg-gradient-to-br from-purple-600 to-blue-500 rounded-full py-3 px-7 mt-2 mx-2 text-white hover:bg-gradient-to-bl ease-in duration-150'>
    <a href='https://juitarist.github.io/jomariresare/' target='_blank'>Learn more about me at my Web1.x page</a></button>
  </div>
</div>
</div>


  </div>




    </div>
  )
}

export default About_Hero
