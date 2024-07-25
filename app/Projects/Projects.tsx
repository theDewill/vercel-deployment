"use client";
import Image from "next/image";
import { VariantLabels, animate, motion } from "framer-motion";

import zimone from "@/public/Projects/ZIM/one.png";
import zimtwo from "@/public/Projects/ZIM/two.png";
import medone from "@/public/Projects/Medigo/one.png";
import medtwo from "@/public/Projects/Medigo/two.png";

export default function SimProject(attr: any) {
  let content = [
    {
      topic: "Zimular",
      swap: false,
      body: "Zimular is a cutting-edge simulation tool for industries like manufacturing, hospital systems, traffic management, logistics,energy and more applications. It offers real-time insights, customizable monitoring, and scalable solutions with dashboard visualizations to optimize performance.",
      img: [zimone, zimtwo],
    },
    {
      topic: "Medigo",
      swap: true,
      body: "Medigo is an advanced software solution designed for healthcare professionals to efficiently manage appointments and patient data. It offers seamless cloud storage for patient information, automatic prescription and bill generation, and AI-powered listening features for transcribing conversations. Medigo is ideal for hospital management, private dispensary management, and secure patient data backup for doctors, ensuring streamlined operations and enhanced patient care.",
      img: [medone, medtwo],
    },
  ];
  return (
    <div className="flex flex-col mt-[100px] gap-[100px]">
      {content.map((project, index) => (
        <div
          key={index}
          className="self-center flex mdm:flex-col gap-10 items-center justify-center"
        >
          <motion.div
            className="flex flex-col justify-center w-[30vw] mdm:w-[80vw]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={project.img[0]}
              className={`h-auto ${project.swap ? "z-10" : "z-20"} w-[18vw] mdm:w-[60vw] rounded-md self-start`}
              alt="zimular"
            />
            <Image
              src={project.img[1]}
              className={`h-auto ${project.swap ? "z-20" : "z-10"} w-[18vw] mdm:w-[60vw] mt-[-80px] mdm:mt-[-20px] rounded-md self-end`}
              alt="zimular"
            />
          </motion.div>

          <motion.div
            className={`${attr.blury}  h-auto w-[40vw] mdm:w-[80vw] flex flex-col mdm:items-center text-orngclr bg-[#000000] rounded-[40px] self-center p-6 pl-8 mdm:rounded-[40px]`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-[35px] mdm:text-[25px] font-semibold   ">
              {project.topic}
            </h1>

            <section className="mdm:text-[14px] font-medium text-[#ffff] mdm:text-center">
              <p className="pt-2">{project.body}</p>
            </section>

            <a
              href={`mailto:contact@terracodedev.com?subject=Terracode - Product Inquiries - ${project.topic}`}
              className={`px-4 py-2 bg-[#ffff] rounded-md w-fit flex items-center gap-2 mt-5`}
            >
              <p className="text-[#000000] font-medium">
                Inquire about the Product
              </p>
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
