"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import fbApp from '@/app/fb/firebaseInit';

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface dev {
  id: number;
  did: string;
  name: string;
  desc: string;
  img: string;
}

async function getDevelopers() : Promise<dev[]> {
  try {
    const developersCollection = collection(fbApp, "developers");
    const querySnapshot = await getDocs(developersCollection);
    const developersArray : dev[] = querySnapshot.docs.map(doc => ({
      did: doc.id,
      ...doc.data() as {name : string; desc : string; img : string; id : number}
    }));
    console.log("Developers fetched successfully");
    return developersArray; // Returns the array of developers
  } catch (e) {
    console.error("Error fetching developers: ", e);
    return []; // Return an empty array in case of error
  }
}



export const AnimatedTooltip = (attr: any) => {


  let [devLoad, setDevLoad] = useState(false);
  let [developers, setDevelopers] = useState<dev[]>([]);

  async function handleDevs() {
    let devs : dev[] = await getDevelopers();
    setDevelopers(devs);
    setDevLoad(true);
    attr.changeLoad();
  }

  useEffect(() => {
    handleDevs();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (


    <motion.div className="flex flex-col items-center justify-start gap-[50px] w-full h-full px-4 py-4 bg-[rgb(18,18,18)] rounded-[20px] shadow-xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        duration: 0.1,
        stiffness: 160,
        damping: 10
      }}>

      <div className="font-bebas font-bold text-[25px] text-center">
        &quot;We Craft Tomorrow, Pixel by Pixel – <span className="text-orngclr">Where Code Meets Creativity.</span>&quot;
      </div>

      <div className="flex gap-[80px] flex-wrap justify-center items-center">
        {developers.map((dev, idx) => (
          <motion.div
            className="-mr-4  relative group"
            key={dev.name}
            onMouseEnter={() => setHoveredIndex(dev.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 160,
              damping: 10
            }}

          >

            {/* Desc popup box code - uncomment if needed */}

            {/* {hoveredIndex === dev.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="font-bold text-white relative z-30 text-base">
                {dev.name}
              </div>
              <div className="text-orngclr text-xs">{dev.desc}</div>
            </motion.div>
          )} */}
            <Image
              onMouseMove={handleMouseMove}
              height={150}
              width={150}
              src={dev.img}
              alt={dev.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-[10rem] w-[10rem] border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
            />

            <div className="text-center">
              <p>{dev.name}</p>
              <p className="text-[#7e7670] font-medium">{dev.desc}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
};
