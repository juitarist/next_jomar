import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'
import Instagram from '../components/Instagram'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Experiments from '../components/Experiments';
import Coding from '../components/Coding';



const Home = () => {
  const [citation, setCitation] = useState(true);
  const [main, setMain] = useState(false);

  useEffect(() => {
    const ids = [
      setTimeout(() => setMain(true), 100),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);

  return (
    <>
      <Head>
        <title> jomar iresare</title>
        <meta name="description" content="Web 2.0 Homepage for Jomar Iresare, physicist and dreamer. Developed using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <motion.div
        variants={{
          initial: {
            opacity: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          ease: "anticipate",
          duration: 1.0,
        }}
      >
      <Hero heading='jomar iresare' message='physicist.' />
      <Slider slides={SliderData} />
      <Instagram />
      </motion.div>
    </>
  );
};




export default Home;
