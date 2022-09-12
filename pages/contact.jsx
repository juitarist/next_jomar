import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Hero_3 from '../components/ContactMe'
import { motion } from 'framer-motion'

const contact = () => {
  const [citation, setCitation] = useState(true);
  const [main, setMain] = useState(true);

  useEffect(() => {
    const ids = [
      setTimeout(() => setMain(true), 100),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);

  return (


    <div>

      <Head>
        <title> contact me</title>
        <meta name="description" content="Web 2.0 page for Jomar Iresare, physicist and dreamer. Developed using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <motion.div
        variants={{
          initial: {
            opacity: 0,
            y: -1200,
            display: "none",
          },
          visible: {
            opacity: 1,
            y: 0,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          ease: "anticipate",
          duration: 2.0,
        }}
      >

        <Hero_3  />

        </motion.div> 
    </div>


  )
}

export default contact;
