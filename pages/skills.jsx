import React from 'react'
import Head from 'next/head'
import Hero_2 from '../components/Hero_2'
import Experiments from '../components/Experiments';
import Coding from '../components/Coding';
import Music from '../components/Music';

const skills = () => {
  return (
    <div>

      <Head>
        <title> talents</title>
        <meta name="description" content="Site developed by Jomar Iresare using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>


        <Hero_2 heading='Skills' message='and Experience ' texto=' ' />
        <Experiments />
        <Coding />

    </div>
  )
}

export default skills;