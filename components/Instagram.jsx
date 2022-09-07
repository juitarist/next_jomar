import React from 'react';
import Link from 'next/link';
import DSC02720 from '../public/DSC02720.jpg';
import DSC04195 from '../public/DSC04195.jpg';
import DSC05292 from '../public/DSC05292.jpg';
import DSCF1034 from '../public/DSCF1034.jpg';
import DSC04919 from '../public/DSC04919.jpg';
import DSCF0987 from '../public/DSCF0987.jpg';

import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1200px] mx-auto text-center py-14'>
        <p className='text-2xl text-blue-500 '>Follow me on Instagram</p>
        <a className='pb-4 hover:text-red-500' href='https://www.instagram.com/jomariresare'>@jomariresare</a>
        
        <div className='grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            
            <InstagramImg socialImg={DSC05292} /> 
            <InstagramImg socialImg={DSC04919} />
            <InstagramImg socialImg={DSCF0987} />
            <InstagramImg socialImg={DSC02720} />
            <InstagramImg socialImg={DSCF1034} />
            <InstagramImg socialImg={DSC04195} />
        </div>
    </div>
  )
}

export default Instagram