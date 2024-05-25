'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lottie from 'lottie-react';
import Helmet from 'react-helmet';

//components
import Navbar from '@/app/Components/Navbar';
import Navblock from '@/app/Components/Navblock';
import Footer from '@/app/Components/Footer';
import { BackgroundBeams } from "@/app/Components/blocks/Bgbeams";
import { AnimatedTooltip } from "@/app/Components/blocks/Devlistcontainer";
import loading from '@/public/Anim/load_white_paths.json';
import Head from "next/head";





export default function Devwall() {

    let [blury, setBlury] = useState('');
    let navBlur = () => {
        setBlury('blur');
    }

    let revertBlury = () => {
        setBlury('');
    }
    let [loadShow, setLoadShow] = useState('block');
    let [mainShow, setMainShow] = useState('hidden');


    let loadStyle = `${loadShow} z-[100] fixed inset-0 mx-auto my-auto rounded-lg bg-orngclr flex justify-center items-center w-[80px] h-[70px]`
    let mainStyle = `${mainShow} mb-[150px] ${blury} min-h-screen`;



    let changeLoad = () => {
        setLoadShow('hidden');
        setMainShow('block');


    }

    let handleFootScroll = () => {
        console.log("scroll to footer")
        const targetElement = document.getElementById('footer');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (



<>

        <main>

            <Helmet>
                <title>Developers | Terracode</title>
                <meta name="description" content="Our Team of experts in AI and software development" />
                
            </Helmet>

            <div className="min-h-screen">
                <div className={loadStyle}>
                    <Lottie animationData={loading} className="z-40" />
                </div>
                <motion.nav initial={{ marginTop: "-100px" }} animate={{ marginTop: '0px' }} transition={{ duration: 1.0 }} className='mb-[100vh] navblock:backdrop-blur-[10px] fixed z-40 navblock:bg-[rgba(0,0,0,0.4)] 2lg:border-b-[0.5px] border-b-[#fff]'>
                    <Navbar footer={handleFootScroll} func={navBlur} revert={revertBlury} />
                </motion.nav>
                <Navblock tile={5} />



                <div className={mainStyle}>

                    {/* <BackgroundBeams /> */}

                    <div className="flex pt-[20vh] items-center justify-center terraLogo:mx-[20px] mx-[100px] pb-[20px] gap-[40px] flex-wrap h-fit"><AnimatedTooltip changeLoad={changeLoad} /></div>

                </div>

            </div>

            <footer id="footer">
                <Footer />
            </footer>
        </main>

        </>
    );
}