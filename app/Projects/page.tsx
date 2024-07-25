"use client";
import Image from "next/image";
import { useState } from "react";

//----Components----//
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import Footer from "@/app/Components/Footer";
import Navblock from "@/app/Components/Navblock";
import Helmet from "react-helmet";

//PROJECTS Panel

import Projects from "@/app/Projects/Projects";

//---subCompos---
import ContactForm from "@/app/Components/blocks/ContactForm";
import Head from "next/head";

//utils

//----TEMP----//

export default function Home() {
  let [visibility, setVisibility] = useState("hidden");
  let [blury, setBlury] = useState("");

  function makeVisible() {
    setVisibility("");
    setBlury("blur");
  }

  let navBlur = () => {
    setBlury("blur");
  };

  function revertVisibility() {
    setVisibility("hidden");
    setBlury("");
  }

  let blured = "blur";

  const handleScroll = () => {
    const targetElement = document.getElementById("who");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Terracode</title>
        <meta name="description" content="Projects crafted by our Developers" />
      </Helmet>
      <main className=" p-0 flex flex-col gap-10 overflow-hidden ">
        <div className="fixed z-[2000] navblock:backdrop-blur-[25px] fixed navblock:bg-[rgba(0,0,0,0.4)] 2lg:border-b-[0.5px] border-b-[#fff]">
          <Navbar
            func={navBlur}
            revert={revertVisibility}
            visibility={visibility}
          />
        </div>
        <div className="fixed self-center mt-[100px] z-0">
          <Hero blury={blured} func={handleScroll} show="hidden" />
        </div>

        {/* Projects come here */}
        <div className="mt-[120px] z-[1000] flex flex-col mb-[150px] gap-[20px]">
          <div className="text-[#fff] mb-8 px-[250px] lgm:px-[100px] sm:px-[8px]  ckl:text-center terraLogo:w-full ">
            <section className="font-bold text-[45px]">
              Our <span className="text-orngclr">Products</span>
            </section>

            <section className="mt-[20px] px-[10px]">
              We have developed a range of SaaS solutions tailored to various
              niche markets, simplifying both personal and business operations.
              Our custom tailored software spans industries such as
              healthcare,hotels and more, consistently delivering exceptional
              satisfaction and enhancing business quality. Contact us and
              integrate the products with your business as well.
            </section>
          </div>
          <Projects blury={blury} />
        </div>

        <div className="z-[2000]">
          <Navblock tile={2} />
        </div>
        <Footer blury={blury} />
      </main>
    </>
  );
}
