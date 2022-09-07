import React from 'react'
import Head from 'next/head'
import Hero_3 from '../components/ContactMe'
import { motion } from 'framer-motion'

const contact = () => {
  return (


    <div>

      <Head>
        <title> contact me</title>
        <meta name="description" content="Site developed by Jomar Iresare using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      
        <Hero_3  />
    </div>


  )
}

export default contact;