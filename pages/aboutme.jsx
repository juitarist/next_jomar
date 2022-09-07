import React from 'react'
import Head from 'next/head'
import About_Hero2 from '../components/About_Hero2';
import Hero_3 from '../components/Hero_3';

const aboutme = () => {
  return (
    <div>


      <Head>
        <title> about me</title>
        <meta name="description" content="Site developed by Jomar Iresare using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>


        <Hero_3 heading='hello' message='i am jomar iresare'/>
        <About_Hero2 />

    </div>
  )
}

export default aboutme;