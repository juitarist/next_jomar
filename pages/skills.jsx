import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Hero_2 from '../components/Hero_2'
import Experiments from '../components/Experiments';
import Coding from '../components/Coding';
import Music from '../components/Music';
import { motion } from "framer-motion";

const skills = () => {
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
        <title> talents</title>
        <meta name="description" content="Web 2.0 page for Jomar Iresare, physicist and dreamer. Developed using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <motion.div
        variants={{
          initial: {
            opacity: 0,
            x: -1000,
            scale: 1,
            rotate: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          ease: "easeOut",
          duration: 2.0,
        }}
      >
        <Hero_2 heading='Skills' message='and Experience ' texto=' ' />
        <Experiments />
        <Coding />
        </motion.div>
    </div>
  )
}

export default skills;
