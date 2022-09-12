import React, { useEffect, useState } from "react";
import Head from 'next/head'
import About_Hero2 from '../components/About_Hero2';
import Hero_3 from '../components/Hero_3';
import { motion } from "framer-motion";

const aboutme = () => {
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
        <title> about me</title>
        <meta name="description" content="Web 2.0 page for Jomar Iresare, physicist and dreamer. Developed using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <motion.div
        variants={{
          initial: {
            x: 0,
            y: 0,
            scale: 0,
            rotate: 0,
          },
          visible: {
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          ease: "easeOut",
          duration: 1.5,
        }}
      >
        <Hero_3 heading='hello' message='i am jomar iresare'/>
        <About_Hero2 />
        </motion.div>
    </div>
  )
}

export default aboutme;
