import React from 'react'
import Image from 'next/image'

const Experiments = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-7 pb-10'>

       

        <div className='grid md:grid-cols-2'>
            <h1 className='text-2xl pb-3 text-center tracking-widest uppercase text-[#5651e5]'>Relevant Coursework - BS Physics CSULB Fall 2021 </h1>

            <ul className='list-disc px-11'>  
          
          <li className='font-light '>Advanced Experimental Methods in Nanoscale Physics</li> 
          <li className='font-light '>Electronics</li>
          <li className='font-light '>Thermodynamics</li>
          <li className='font-light '>Probability and Statistics</li>
          <li className='font-light '>Electricity and Magnetism</li>
          <li className='font-light '>Quantum Physics</li>

        </ul>

            <h1 className='text-2xl mt-5 text-center tracking-widest uppercase text-[#5651e5]'>Software </h1>

            <ul className='list-disc mt-5 px-11'>  
          
          <li className='font-light '>LabView</li> 
          <li className='font-light '>MATLAB</li>
          <li className='font-light '>Windows, MacOS, iOS, Android</li>
          <li className='font-light '>Mathematica</li>
          <li className='font-light '>JMP</li>
          <li className='font-light '>Visual Studio</li>
          <li className='font-light '>Adobe Photoshop</li>
          <li className='font-light '>Adobe Lightroom</li>
          <li className='font-light '>Figma</li>
          <li className='font-light '>DaVinci Resolve</li>
          <li className='font-light '>Ableton</li>

        </ul>

            </div>


        <h1 className='text-2xl mt-8 text-center tracking-widest uppercase text-[#5651e5]'>Experiments</h1>
        <div className='grid gird-rows-none md:grid-cols-5 p-4 gap-2'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://live.staticflickr.com/65535/52293602986_2f48876d51_k.jpg' 
                alt='/' 
                layout='responsive'
                width='500'
                height='330'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
            <Image src='https://live.staticflickr.com/65535/52293867569_b08f3a13c4_k.jpg' 
                alt='/' 
                layout='responsive'
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
            <Image src='https://live.staticflickr.com/65535/52292623397_76dd691a0a_k.jpg' 
                alt='/' 
                layout='responsive'
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>            
            <div className='w-full h-full'>
            <Image src='https://live.staticflickr.com/65535/52293602151_eaffae97a2_k.jpg' 
                alt='/' 
                layout='responsive'
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>            
            <div className='w-full h-full'>
            <Image src='https://live.staticflickr.com/65535/52293602613_0110dcdd49_k.jpg' 
                alt='/' 
                layout='responsive'
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>

        </div>
        <div className='max-w-[400px] mx-auto'>
        <p className='text-red-600  text-md'>Fabrication of a Graphene Field Effect Transistor (GFET): </p>
        <p className='pl-7 font-light'>Designed and developed a Graphene Field Effect Transistor. Developed a process method in order to acheive the proper specifications of a GFET. </p>

        <p className='text-red-600  text-md'>Fundamental Noise of a Metal-Semiconductor Junction: </p>
        <p className='pl-7 font-light'>Analyzed noise characteristics of an M-S junction at increasing temperatures to find interactions between increasing noise and the effects of a Schottky barrier.</p>
        </div>


    </div>
  )
}

export default Experiments