import Image from 'next/image';
import { useState } from 'react';
import { animate, motion } from 'framer-motion'

import Ballset from '@/public/ballset.png';


export default function Terrians(attr : any) {
    
    let mainStyle = `${attr.blury} flex flex-col justify-center  p-[130px] gap-10`
    
    return(
        <div className = {mainStyle}>
            <div className="firstCircleSet self-end"><Image src={Ballset} alt="Ballset" className='w-[170px]'/></div>

            


            <div className="terrianImg image self-center w-[75vw] rounded-[86px] flex terraLogo:flex-col gap-[70px] mdm:gap-[30px] items-center justify-center  py-[50px] px-[60px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('../../public/terriansBack.jpg')" }}>
                <section className="flex flex-col text-7xl text-center">
                    <p>Meet</p>
                    <p className="text-orngclr">Terrians</p>
                </section>

                <section className=" lgm:hidden terraLogo:hidden flex flex-col text-7xl">
                   {'/ >'}
                </section>
                <a href="../Developers" className="border-2 border-orngclr px-4 py-2 rounded-lg"> Let&apos;s Visit Our Team  </a>
            </div>
            <div className="secondCircleSet self-start"><Image src={Ballset} alt="Ballset" className='w-[170px]'/></div>
        </div>
    );
}