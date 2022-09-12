import React from 'react'
import Link from 'next/link'
import { FaFlickr, FaInstagram, FaLinkedin, FaSoundcloud, FaTwitter } from 'react-icons/fa'

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
      <p className='text-left font-light'>Graduated in Fall 2021 with a B.S. in Physics from CSULB. Applied physicist with experience in lithography, semiconductor development, and circuit design. <br />
      I'm largely curious about everything and highliy inqusitive. I love to learn, read, and discover new things. Probably played a part in why I decided to pursue physics. I always felt like it would take away from my 'creative' outlets, but as I dove deeper into the subject, I would find out that there are tremendous amounts of creativity in physics and maths. I've met many colleagues with creativity and wonder pouring out during my undergrad and they've helped me understand that this is where I should be.

      <br /><br />
      INFJ. But an F/T switch. Currently working on mobile applications and web development. 

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

    <button  className='bg-black rounded-md py-3 px-7 mt-6 mb-9 text-white hover:bg-amber-700 ease-in duration-150'>
    <Link href='/contact'>Ways to contact me</Link></button>
  </div>
</div>
</div>


  </div>




    </div>
  )
}

export default About_Hero
