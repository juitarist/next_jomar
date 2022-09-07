import React from 'react'
import Image from 'next/image'

const Music = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-7 pb-10'>
        <h1 className='text-2xl text-center tracking-widest uppercase text-[#5651e5]'>Music</h1>
        <div className='grid gird-rows-none md:grid-cols-5 p-4 gap-2'>

            <div className='w-full h-full'>
                <Image src='https://live.staticflickr.com/65535/52293602986_2f48876d51_k.jpg' 
                alt='/' 
                layout='responsive'
                width='215'
                height='217'
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

        </div>

        <p className='font-bold text-md'> Music 1 </p>
        <p>Text</p>

        <p className='font-bold text-md'>Music 2 </p>
        <p>text</p>

        <p className='font-bold text-md'>Music 3 </p>
        <p>text</p>

    </div>
  )
}

export default Music