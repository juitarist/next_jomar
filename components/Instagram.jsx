import React from 'react';
import Link from 'next/link';
import DSC08357 from '../public/DSC08357.jpg';
import DSC04195 from '../public/DSC04195.jpg';
import mikey from '../public/mikey.png';
import DSC04812 from '../public/DSC04812.jpg';
import DSC08381 from '../public/DSC08381.jpg';
import DSC08963 from '../public/DSC08963.jpg';

import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1200px] mx-auto text-center py-14'>
        <p className='text-2xl text-blue-500 '>Follow me on Instagram</p>
        <a className='pb-4 hover:text-red-500' href='https://www.instagram.com/jomariresare'>@jomariresare</a>
        
        <div className='grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            
            <InstagramImg socialImg={mikey} /> 
            <InstagramImg socialImg={DSC08381} />
            <InstagramImg socialImg={DSC08963} />
            <InstagramImg socialImg={DSC08357} />
            <InstagramImg socialImg={DSC04812} />
            <InstagramImg socialImg={DSC04195} />
        </div>
    </div>
  )
}

export default Instagram