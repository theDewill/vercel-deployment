'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Helmet from 'react-helmet';


//----SHAD Compos--//
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"


//----Components----//
import Navbar from '@/app/Components/Navbar';
import Navblock from '@/app/Components/Navblock';
import Hero from '@/app/Components/Hero';
import Footer from '@/app/Components/Footer';
import send from '@/public/sendICN.png'
import doneTick from '@/public/Anim/doneTick.json'
import sentTick from '@/public/Anim/sentAnim.json';
import loading from '@/public/Anim/load_white_paths.json';
import formTxt from '@/public/Inquiry.png'
import FormDone from '@/public/formDone.png';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import fbApp from '@/app/fb/firebaseInit';
import { create } from 'domain';



export default function Home() {

    let [blury, setBlury] = useState('');


    let navBlur = () => {

        setBlury('blur');
    }
    function revertVisibility() {

        setBlury('');
    }

    let [formVisible, setFormVisibility] = useState('')
    let [successShow, setSuccessShow] = useState('hidden')

    let handleSubmit = async (event: any) => {

        event.preventDefault();
        const formContent = new FormData(event.target);
        console.log("form submit called")
        const name = formContent.get("first-name");
        const mobileNumber = formContent.get("mnumber");
        const email = formContent.get("email");
        const business = formContent.get("business")
        const personal = formContent.get('personal')
        const title = formContent.get("service-category")
        const desc = formContent.get("req-about")

        setnameer(name ? 'hidden' : 'block');
        setemailer(email ? 'hidden' : 'block');
        setmnumer(mobileNumber ? 'hidden' : 'block');
        setbtypeer(business || personal ? 'hidden' : 'block');
        settitleer(title ? 'hidden' : 'block');
        setdescer(desc ? 'hidden' : 'block');


        if (name && mobileNumber && email && desc) {
            setLoadShow("");
            setBlury('blur');
            console.log("inside approved");
            const formData: any = {};

            formContent.forEach((value, key) => {
                formData[key] = value;
            });

            formData.createdAt = serverTimestamp();

            try {
                const docRef = await addDoc(collection(fbApp, "orders"), formData);
                console.log("Document written with ID: ", docRef.id);
                //window.location.href = '../';
                formDone(); // Call the function to handle what happens on successful form submission
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

    }


    //handleSub2
    let handleSubmit2 = async () => {


        let InputData = {
            nameData: inputFieldState.inpName,
            mobileNumber: inputFieldState.inpMob,
            email: inputFieldState.inpEmail,
            Requirement: inputFieldState.inpReq,
            Country: inputFieldState.inpCountry,
            createdAt: serverTimestamp(),
        }


        if (InputData.nameData && InputData.mobileNumber && InputData.email && InputData.Requirement) {
            setLoadShow("");
            setBlury('blur');
            console.log("inside approved");

            try {
                const docRef = await addDoc(collection(fbApp, "orders"), InputData);
                console.log("Document written with ID: ", docRef.id);
                //window.location.href = '../';
                formDone(); // Call the function to handle what happens on successful form submission
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

    }
    //---end handle sub2


    //form error handle
    let commonErr = "text-sm font-medium leading-6 text-[#FF0000]"

    let [nameer, setnameer] = useState('hidden')
    let [emailer, setemailer] = useState('hidden')
    let [mnumer, setmnumer] = useState('hidden')
    let [btypeer, setbtypeer] = useState('hidden')
    let [titleer, settitleer] = useState('hidden')
    let [descer, setdescer] = useState('hidden')

    let errorStyles = {
        "name": `${nameer} ${commonErr}`,
        "email": `${emailer} ${commonErr}`,
        "mobNumber": `${mnumer} ${commonErr}`,
        "btype": `${btypeer} ${commonErr}`,
        "title": `${titleer} ${commonErr}`,
        "desc": `${descer} ${commonErr}`,
    }

    let formDone = () => {
        console.log("form Done called")
        const targetElement = document.getElementById('navbar');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setFormVisibility('hidden')
        setLoadShow("hidden");
        setSuccessShow('')

    }

    let [inputFieldState, setInputFieldState] = useState({
        inpName: '',
        inpEmail: '',
        inpMob: '',
        inpCountry: '',
        inpReq: '',
    });


    //Each tile content 
    let FormContent = {
        cards: [
            {
                item: "name",
                title: "Let's Get to Know You",
                ex: "e.g, Ethan James",
                set: (Inpval: string) => setInputFieldState(prevState => ({ ...prevState, inpName: Inpval }))
            },
            {
                item: "email",
                title: "Your Preferred Email, Please",
                ex: "yourmail@example.com",
                set: (Inpval: string) => setInputFieldState(prevState => ({ ...prevState, inpEmail: Inpval }))
            },
            {
                item: "mobile",
                title: "Your Contact Number",
                ex: "e.g, (+94)xxxxxxxxx",
                set: (Inpval: string) => setInputFieldState(prevState => ({ ...prevState, inpMob: Inpval }))
            },

            {
                item: "country",
                title: "Where are you from...",
                ex: "Your Country here",
                set: (Inpval: string) => setInputFieldState(prevState => ({ ...prevState, inpCountry: Inpval }))
            },
            {
                item: "Req",
                title: "What can we offer you...",
                ex: "e.g., I require an AI model to optimize our business workflow.",
                set: (Inpval: string) => setInputFieldState(prevState => ({ ...prevState, inpReq: Inpval }))
            },
        ]
    }

    

    let [loadShow, setLoadShow] = useState('hidden');

    let mainStyle = `flex flex-col justify-between h-[100vh] p-0 overflow-x-hidden`
    //let formStyle = `${formVisible} ${blury} z-10 absolute mt-[240px] self-center p-10 `
    let loadFormStyle = `${formVisible} ${blury} w-max flex flex-col self-center mt-[80px] mb-[100px] z-20`
    let successStyle = `${successShow} flex mx-[60px] flex-col self-center z-40 backdrop-blur-[25px] rounded-[40px] px-8 py-6 bg-[rgba(0,0,0,0.4)] justify-center items-center  gap-6 z-20 mb-[120px] mt-[100px] sm:mt-[100px]`
    let loadStyle = `${successShow == "hidden" ? "" : "hidden"} ${loadShow} z-[100] fixed inset-0 mx-auto my-auto rounded-lg bg-orngclr flex justify-center items-center w-[80px] h-[70px]`
    let blured = "blur"
    let inputField = "text-3xl mdm:text-[23px] formMid:text-[23px] mdm:text-center font-bold text-orngclr box-border focus:ring-0  bg-[#0000] border-x-0 border-t-0 border-b-4 border-orngclr mb-[2px] mdm:mb-[1px] w-full focus:border-[#ffffff] border-dotted"
    let txtAreaField = "text-l mdm:text-[3vw] font-bold text-orngclr h-42 rounded-[10px] box-border focus:ring-0  bg-[#000] border-2 border-[#000] mb-[2px] w-full focus:border-[#ffffff]"
    return (

        <>

            <Helmet>
                <title>Contact | Terracode</title>
                <meta name="description" content="Provide us with your requirement" />
            </Helmet>
            <div className={mainStyle}>


                <div className="absolute top-[40vh] left-[60px] sm:hidden">
                    <Image src={formTxt} alt="formText" />
                </div>

                <nav id="navbar" className="z-30 border-b-[0.5px] border-b-[#fff]"><Navbar show="hidden" func={navBlur} revert={revertVisibility} /></nav>
                <div className='fixed self-center mt-[80px]'>
                    <Hero blury={blured} show="hidden" />
                </div>

                <div className={successStyle} id="tickAnim">
                    {/* <Lottie animationData={doneTick} className="w-[50vh] h-[50vh]  mdm:w-[37vh] mdm:h-[37vh] opacity-90 mb-[-50px]" /> */}
                    <Image src={FormDone} alt="formText" />
                    <p className="text-center text-lg"><p className='text-orngclr font-bold font-[35px]'>Thank You... </p> We have Recieved your Requirement <br></br>Our team will contact you Soon...</p>
                    <a href="/" className="bg-[#ffffff] px-4 py-2 rounded-lg font-bold text-[#000]"> Continue </a>
                </div>

                <div className={loadStyle}>
                    <Lottie animationData={loading} className="z-40" />
                </div>

                <form onSubmit={handleSubmit} action="#" method="POST" className={loadFormStyle}>

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-max flex terraLogo:flex-col gap-[50px]"
                    >
                        <CarouselContent>
                            {FormContent.cards.map((item, index) => (
                                <CarouselItem key={index} className="">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex mdm:flex-col  gap-[30px] items-center justify-center p-6">
                                                <span className="text-4xl font-semibold navBlock:w-[700px]">{item.title}</span>
                                                <p className="mdm:hidden text-4xl text-orngclr font-bold">{">"}</p>
                                                {item.item === "Req" ?
                                                    <textarea name={item.item} id={item.item} placeholder={item.ex} className={txtAreaField} onChange={(e) => item.set(e.target.value)}></textarea> :
                                                    <input type="text" name={item.item} id={item.item} placeholder={item.ex} className={inputField} onChange={(e) => item.set(e.target.value)} />}

                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious /> */}
                        <CarouselNext count={5} submission={handleSubmit2}/>
                    </Carousel>
                </form>


                <div className={`${blury} flex gap-[40px] lgm:flex-col items-center self-center z-20 mx-[20px]`}>

                    <div className='bg-[#000] rounded-xl w-[500px] terraLogo:w-[90vw] p-4'>
                        <p className='font-bold text-orngclr text-xl mb-2'>E-Mail</p>
                        <p className='text-[rgb(190,190,190)] text-lg'>Our Customer Relations team will reply you via an email within 24H</p>
                        <p className='text-[#ffffff] font-bold text-xl mt-6'>contact@terracodedev.com</p>
                    </div>

                    <div className='bg-[#000] rounded-xl w-[500px] terraLogo:w-[90vw] p-4'>
                        <p className='font-bold text-orngclr text-xl mb-2'>Cellular Line</p>
                        <p className='text-[rgb(190,190,190)] text-lg'>Connect with our customer relation team and schedule a meeting with us or convey your requirement</p>
                        <p className='text-[#ffffff] font-bold text-xl mt-6'>{"(+94)775824406"}</p>
                    </div>
                </div>




                <Navblock tile={4} />

                <footer className="mt-[20vh] z-20">
                    <Footer blury={blury} />
                </footer>
            </div>

        </>
    );
}