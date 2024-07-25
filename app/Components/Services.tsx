"use client";
import Image from "next/image";

import { VariantLabels, animate, motion } from "framer-motion";
import { useState } from "react";

import Tile from "@/app/Components/blocks/tile";

//--tools
import Typewriter from "typewriter-effect";

//-----IMAGES---

import buildtxt from "@/public/BUILD.png";
//--fstile--
import fstack from "@/public/fstack.png";
import fstackW from "@/public/fstackW.png";
import reacticn from "@/public/react.png";
import pythonicn from "@/public/python.png";
import jsicn from "@/public/js.png";
import csharpicn from "@/public/csharp.png";
import phpicn from "@/public/php.png";
import cpp from "@/public/cpp.png";
import go from "@/public/go.png";

//--mobiletile--
import mobphone from "@/public/mobile.png";
import mobphoneB from "@/public/mobphoneB.png";
import kotlin from "@/public/kotlin.png";
import swift from "@/public/swift.png";
import java from "@/public/java.png";
import flutter from "@/public/flutter.png";

//----enterpriseTile----
import enterp from "@/public/enterprise.png";
import enterpB from "@/public/entB.png";
import netCore from "@/public/netcore.png";
import rust from "@/public/rust.png";

//AI Idea Tile
import idea from "@/public/research.png";
import ideaB from "@/public/Ideab.png";
import tf from "@/public/tensorf.png";
import numpy from "@/public/numpy.png";

//ImageBundlesForTiles
const tileImgs = {
  fullstack: {
    //img - for front side
    //simg - for back side
    img1: fstack,
    img2: fstackW,
    simglst: [reacticn, pythonicn, jsicn, rust, csharpicn, phpicn, cpp, go],
  },
  mobile: {
    img1: mobphoneB,
    img2: mobphone,
    simglst: [kotlin, swift, flutter, java],
  },
  enterprise: {
    img1: enterpB,
    img2: enterp,
    simglst: [netCore, csharpicn, rust, swift, java],
  },
  AI: {
    img1: ideaB,
    img2: idea,
    simglst: [pythonicn, tf, numpy, cpp],
  },
};

export default function Services(attr: any) {
  return (
    <div
      className={`${attr.blury} flex flex-col gap-[50px] mb-[70px] items-center lg:items-start py-6 mx-9 mt-[25vh] sm:mt-[70px]`}
    >
      <div className="flex gap-2 justify-center lg:justify-start items-center">
        <section className="text-[#4E4C4C] flex font-semibold text-[3rem] sm:text-[9vw] pl-6">
          <span className="text-[#ffff]">::</span>Our Services
          <span className="text-[#ffff]">..//</span>
        </section>
      </div>

      <div className="sm:hidden self-start absolute ">
        <Image src={buildtxt} alt="buildText"></Image>
      </div>

      <div className="circles flex gap-4 flex-wrap items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <Tile
            img={tileImgs.fullstack}
            topic="Web Development"
            desc="Our company excels in designing bespoke web applications that cater to specific business requirements. We integrate robust APIs to ensure seamless functionality, enhancing user engagement and operational efficiency across diverse platforms."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tile
            img={tileImgs.mobile}
            className="mr-[-20px]"
            topic="Mobile Application Development"
            desc="We are experts in creating state-of-the-art mobile applications, offering both hybrid and native development options. Our approach ensures optimal performance and adaptability, providing tailored solutions that meet the unique demands of your business."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tile
            img={tileImgs.enterprise}
            className="mr-[-20px]"
            topic="Enterprise Solutions"
            desc="We deliver advanced enterprise solutions that empower businesses to streamline processes, boost productivity, and achieve sustained growth. Our strategic implementations help you navigate complex market dynamics and maintain competitive advantage."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Tile
            img={tileImgs.AI}
            className="mr-[-20px]"
            topic="Artificial Intelligence and Research"
            desc="Our AI research and innovation team excels in developing and integrating cutting-edge artificial intelligence technologies. We specialize in AI model training and development, driving industry transformation and setting new benchmarks for technological advancement."
          />
        </motion.div>
      </div>
    </div>
  );
}
