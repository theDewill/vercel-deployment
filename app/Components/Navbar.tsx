'use client';
import Image from 'next/image'
import {useState} from 'react'
import { Source_Code_Pro } from 'next/font/google'
import {motion} from 'framer-motion'
//----IMAGES----//
import logo from '@/public/navLOGO.png'
import menu from '@/public/Menu.png'
import send from '@/public/sendICN.png'

//----Resources----//
import Navmenu from './blocks/Navmenu';
import ContactForm from '@/app/Components/blocks/ContactForm'


//----font engine----//
const font_1 = Source_Code_Pro({
    weight: '400',
    subsets: ['latin-ext'],
});

//-----style strings----

export default function Navbar (attr: any) {
    let [navPanelVisibility, toggleNavPanel] = useState('hidden');
    let [navBurger, setNavBurger] = useState('lgm:block');
    let [btnHover, setBtnHover] = useState(false);

    const navlist = `${font_1.className} flex gap-xxl lgm:hidden` ;//custom added gap style
const btnstr = `${font_1.className} ${attr.show} px-8 py-2 bg-[#ffff] rounded-md lgm:hidden w-fit flex items-center gap-2`


    let makeNavVisible = () => {
        toggleNavPanel('');
        setNavBurger('hidden');
        attr.func();
    }

    let hideNav = () => {
        toggleNavPanel('hidden');
        setNavBurger('lgm:block');
        attr.revert();
    }

    let navBurgerStyle = `hidden ${navBurger}` ;

    return (
        <div className='m-0 p-2 z-10 flex flex-col w-[100vw] '>
            <div className='hidden terraLogo:block self-end px-4 py-[4px] bg-[rgba(0,0,0,0.06)] rounded-[20px]' style={{ backdropFilter: "blur(25px)" }}>
            <Image src={logo} alt="Terracode Logo" className='' style={{height:'70px',width:'130px',}} /> 
            </div>
            <nav className='flex items-center justify-between px-[4vw] terraLogo:hidden'>
               <Image src={logo} alt="Terracode Logo" className='mr-4 ' style={{height:'70px',width:'130px',}} /> 
               <div>
                <ul className={navlist}>
                    <a href="../"><li className='hover:text-[rgb(124,124,124)] cursor-pointer transition-colors duration-300 ease-in-out'>Home</li></a>
                    <a href="../Projects"><li className='hover:text-[rgb(124,124,124)] cursor-pointer transition-colors duration-300 ease-in-out'>Projects</li></a>
                    <a href="../Developers"><li className='hover:text-[rgb(124,124,124)] cursor-pointer transition-colors duration-300 ease-in-out'>Our Team</li></a>


                    {/* <a href=""><li className='hover:text-orngclr cursor-pointer'>Solution</li></a> */}
                    <a href="https://github.com/Terracode-Dev"><li className='hover:text-[rgb(124,124,124)] cursor-pointer transition-colors duration-300 ease-in-out'>Github</li></a>
                    <a href="../Contact" ><li className='hover:text-[rgb(124,124,124)] cursor-pointer transition-colors duration-300 ease-in-out'>Contact</li></a>
                </ul>
               </div>

               <a href="../Contact" className={btnstr}> 
               <Image src={send} alt="send Icon" className='' style={{height:'25px',width:'25px',}} />
               </a>

               <button  onClick={makeNavVisible} className="hidden navblockR:block">
               <Image src={menu} alt="Terracode Logo" className={navBurgerStyle} style={{height:'40px',width:'40px',}} /> 
                </button>
                <div className='absolute top-[102px] right-[280px] '>
                <Navmenu navPanelVisibility={navPanelVisibility} func={hideNav}/>
                </div>
            </nav>

            {/* <div className="absolute top-[118px] w-[60vw] mx-[35vw]">
            <ContactForm visibility={attr.visibility} func={attr.revert} />
            </div> */}



        </div>
    )
}