'use client'
import Image from 'next/image';
import { useState } from 'react';
import { animate, motion } from 'framer-motion'
import Helmet from 'react-helmet';


//----Components----//
import Navbar from './Components/Navbar';
import HomePage from '@/app/Components/Who';
//import Contact from './Components/Contact';
import Services from '@/app/Components/Services';
import Contact from '@/app/Components/Connect';
import Navblock from './Components/Navblock';
import Hero from '@/app/Components/Hero';
import Terrians from './Components/Terrians';

import Footer from '@/app/Components/Footer';
import PopForm from '@/app/Components/blocks/popMail';

import fbApp from '@/app/fb/firebaseInit';





//---subCompos---
import ContactForm from '@/app/Components/blocks/ContactForm';
import Head from 'next/head';
import { Metadata } from 'next/types';

//utils




//----TEMP----// 



export default function Home() {





  let [visibility, setVisibility] = useState('hidden');
  let [blury, setBlury] = useState('');


  let navBlur = () => {
    setBlury('blur');
  }

  function revertVisibility() {
    setVisibility('hidden');
    setBlury('');
  }


  const handleScroll = () => {
    const targetElement = document.getElementById('who');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let handleFootScroll = () => {
    console.log("scroll to footer")
    const targetElement = document.getElementById('footer');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const footer = "jkl"

  return (
    <>


      <Helmet>
        <title>Terracode</title>
        <meta name="description" content="At Terracode, We specialize in bespoke AI solutions and cutting-edge software designed to optimize efficiency and surpass client expectations, ensuring streamlined processes and exceptional outcomes." />
      </Helmet>
      
      <div className=" p-0 flex flex-col gap-10 overflow-hidden" >


        <motion.nav initial={{ marginTop: "-100px" }} animate={{ marginTop: '0px' }} transition={{ duration: 1.0 }} className='navblock:backdrop-blur-[25px] fixed z-40 navblock:bg-[rgba(0,0,0,0.4)] 2lg:border-b-[0.5px] border-b-[#fff]'>
          <Navbar func={navBlur} revert={revertVisibility} visibility={visibility} footer={handleFootScroll} />
        </motion.nav>
        <div className='mt-[120px]'><Hero blury={blury} func={handleScroll} /></div>


        <Navblock tile={1} />




        <HomePage blury={blury} />
        <Services blury={blury} />
        <Contact blury={blury} visibility={visibility} revert={revertVisibility} />


        {/* <ContactForm visibility={visibility} func={revertVisibility} /> */}
        <Terrians blury={blury} />

        <footer id="footer">
          <Footer blury={blury} />
        </footer>












      </div>

    </>
  )
}
