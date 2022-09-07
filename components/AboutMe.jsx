import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const AboutMe = () => {
  return (
<div id='aboutme' class="container mx-auto px-8 ">
    <div className='grid grid-cols-1 mb-9 h-full md:grid-cols-2 '>
      <div className='max-h-[800px] md:h-screen'>
        <img className='w-screen h-[100%] object-cover object-center' src="https://live.staticflickr.com/65535/52337914121_6fc23f235f_k.jpg" alt="" />
        </div>
      <div className='flex justify-center bg-[#5651e5]/30 p-10'>
        <div className='mb-auto  mt-auto max-w-lg'>
          <h1 className='text-3xl uppercase'>Jomar Iresare</h1>
          <p className='font-semibold mb-5'> "Passion driven and people oriented" </p>
            <p className='text-left'>Graduated in Fall 2021 with a B.S. in Physics from CSULB. Applied physicist with a background in lithography, circuit design, and qualitative research. Experience with semiconductor development and designing circuitry. <br></br>
                Pursued physics due to a wide-breadth of interests from nuclear physics to audio engineering. Currently working in photography and Web Development.</p>
          <button  className='bg-black rounded-md py-3 px-7 mt-6 text-white hover:bg-amber-700 '>
          <Link href='/contact'>Ways to contact me</Link></button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutMe