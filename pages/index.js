import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'
import Instagram from '../components/Instagram'
import AboutMe from '../components/AboutMe'



export default function Home() {
  return (



    <div>
      <Head>
        <title> jomar iresare</title>
        <meta name="description" content="Site developed by Jomar Iresare using next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Hero heading='jomar iresare' message='physicist.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>


  )
}
