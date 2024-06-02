'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Helmet from 'react-helmet';


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
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import fbApp from '@/app/fb/firebaseInit';



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
        formDone(); // Call the function to handle what happens on successful form submission
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

  }


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

  let [loadShow, setLoadShow] = useState('hidden');

  let mainStyle = `flex flex-col justify-between h-[100vh] p-0 overflow-x-hidden`
  //let formStyle = `${formVisible} ${blury} z-10 absolute mt-[240px] self-center p-10 `
  let loadFormStyle = `${formVisible} ${blury} mdm:w-[350px] w-[500px] flex flex-col self-center mt-[80px] m-3 mb-[100px] z-20`
  let successStyle = `${successShow} flex mx-[60px] flex-col self-center z-40 backdrop-blur-[25px] rounded-lg px-4 bg-[rgba(0,0,0,0.4)] justify-center items-center p-2 gap-2 z-20 mb-[120px] mt-[100px] sm:mt-[100px]`
  let loadStyle = `${successShow == "hidden" ? "" : "hidden"} ${loadShow} z-[100] fixed inset-0 mx-auto my-auto rounded-lg bg-orngclr flex justify-center items-center w-[80px] h-[70px]`
  let blured = "blur"
  let inputField = "text-orngclr box-border focus:ring-0  bg-[#0000] border-x-0 border-t-0 border-b-2 border-orngclr mb-[2px] w-full"
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
        <Lottie animationData={doneTick} className="w-[50vh] h-[50vh]  mdm:w-[37vh] mdm:h-[37vh] opacity-90 mb-[-50px]" />
        <p className="text-center text-lg"><p className='text-orngclr font-bold font-[35px]'>Thank You... </p> We have Recieved your Request and Soon we will Contact You....</p>
        <a href="/" className="bg-orngclr px-3 py-1 rounded-lg border-2 border-orngclr"> Done </a>
      </div>

      <div className={loadStyle}>
        <Lottie animationData={loading} className="z-40" />
      </div>
      {/* <div className={formStyle}> */}
      {/* <form onSubmit={handleSubmit} action="#" method="POST" className='flex flex-col flex-wrap justify-center items-center'>
                    <div>
                    <span>  I &apos;m  </span>
                    <input type="text" name="name" id="name" placeholder='Your name' className={inputField}/>
                    <span>  and i &apos;m here to  </span>
                    <input type="email" name="email" id="email" className={inputField}/>
                    <span>  and you can contact me through  </span>
                    <input type="text" name="message" id="message" className={inputField}/>
                    <span>  and i &apos;m here to  </span>
                    </div>
                    <button type="submit" onClick = {formDone} className="px-4 w-[100px] mt-[20px] flex justify-center py-1 rounded-lg bg-orngclr border-2 border-orngclr">
                        <Image src={send} alt="send Icon" className='' style={{height:'18px',width:'18px',}} />
                    </button>
                    
                </form> */}


      {/* NEW FORM BEGINES ___________ */}





      <form onSubmit={handleSubmit} action="#" method="POST" className={loadFormStyle}>
        <div className="space-y-12">


          <div className=" pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 text-orngclr">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Enter your correct details in the below fields..</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-[1.2rem] sm:grid-cols-6">
              <div className="sm:col-span-6">



                <label htmlFor="first-name" className={errorStyles["name"]}>
                  *please enter the name
                </label>
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder='eg:- Alex Walter'
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 h-[50px] ring-[#000] py-1.5 text-orngclr font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-orngclr font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}


              <div className="sm:col-span-6">
                <label htmlFor="mnumber" className={errorStyles["mobNumber"]}>
                  *please enter a mobile number
                </label>
                <label htmlFor="mnumber" className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    id="mnumber"
                    placeholder='eg:- (+1) XXX XXX XXXX'
                    name="mnumber"
                    type="text"
                    autoComplete="mobile number"
                    className="block w-full rounded-md h-[50px] border-0 py-1.5 text-orngclr font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md h-[50px] border-0 py-1.5 text-orngclr font-medium shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Sri Lanka</option>
                    <option>Mexico</option>
                    <option>Australia</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Japan</option>
                    <option>India</option>
                    <option>Brazil</option>
                    <option>South Africa</option>
                    <option>China</option>
                    <option>Russia</option>
                    <option>Italy</option>
                    <option>Spain</option>
                    <option>Argentina</option>
                    <option>South Korea</option>
                    <option>Saudi Arabia</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">

                <label htmlFor="email" className={errorStyles["email"]}>
                  *please enter an email
                </label>

                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  placeholder='eg:- Alex@gmail.com'
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 h-[50px] py-1.5 text-orngclr font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>




              {/* <div className="pb-2 sm:w-[80vw]">
                <label htmlFor="about" className={errorStyles["btype"]}>
                  *please select an option
                </label>

                <h2 className="text-base font-semibold leading-7 text-orngclr">Businesss Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  if you are seeking a software solution for your business or personal use
                </p>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <div className="mt-6 space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="business"
                            name="business"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-in[#000] focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="comments" className="font-medium text-gray-900">
                            Business
                          </label>
                          <p className="text-gray-500">a software solution for commercial use in businesses</p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="personal"
                            name="personal"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="candidates" className="font-medium text-gray-900">
                            Personal
                          </label>
                          <p className="text-gray-500">a software solution for personal use</p>
                        </div>
                      </div>

                    </div>
                  </fieldset>
                </div>
              </div> */}
            </div>
          </div>



          <div className="">
            <h2 className="text-base font-semibold leading-7 text-orngclr">Requirement Information</h2>
            <div className="mt-2 grid grid-cols-1 gap-x-6 ">
              {/* <div className="">

                <label htmlFor="username" className={errorStyles["title"]}>
                  *provide a solution category
                </label>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Software Category
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                    <input
                      type="text"
                      name="service-category"
                      placeholder='eg:- AI Solution'
                      id="reqtitle"
                      autoComplete="username"
                      className="block flex-1 border-0 text-orngclr font-medium bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"

                    />
                  </div>
                </div>
              </div> */}

              <div className="col-span-full">


                <label htmlFor="about" className={errorStyles["desc"]}>
                  *provide a description
                </label>

                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Breifly Explain About your Requirement
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="req-about"
                    rows={3}
                    placeholder='eg:- I need an AI solution for my business to get the tasks automated'
                    className="block w-full h-[230px] rounded-md text-orngclr font-medium border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>




            </div>
          </div>

          {/* <div className="border-b border-gray-900/10 pb-12">
             <h2 className="text-base font-semibold leading-7 text-orngclr">Notifications</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We will always let you know about updates and inquery status, how would you like ?
            </p>

            <div className="mt-10 space-y-10">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="not-email"
                        name="not-email"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="comments" className="font-medium text-gray-900">
                        via Email
                      </label>
                      <p className="text-gray-500">Get notified by email about inquery updates</p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="not-mobile"
                        name="not-mobile"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="candidates" className="font-medium text-gray-900">
                        via Mobile
                      </label>
                      <p className="text-gray-500">Get notified by mobile message about inquery updates</p>
                    </div>
                  </div>

                </div>
              </fieldset>
            </div> 
          </div>*/}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <a href="/" className="border-2 border-[#ffffff] px-4 rounded-md py-2 text-sm font-semibold leading-6 text-red">
            Cancel
          </a>
          <button
            // onClick = {formDone}
            type="submit"
            className="rounded-md bg-orngclr px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>

      <Navblock tile={4} />

      <footer className="mt-[20vh] z-20">
        <Footer blury={blury} />
      </footer>
    </div>

    </>
  );
}