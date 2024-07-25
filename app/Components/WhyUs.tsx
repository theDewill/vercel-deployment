import Image from "next/image";
import { useState } from "react";
import { animate, motion } from "framer-motion";
import ExpIcn from "@/public/ExpIcn.png";
import InnovationIcn from "@/public/innovation.png";
import AgileIcn from "@/public/agile.png";
import handShake from "@/public/hshake.png";
import Communicate from "@/public/communicate.png";
import QualityIcn from "@/public/quality.png";

export default function Whyus(attr: any) {
  let mainStyle = `${attr.blury} flex flex-col px-[10vw] justify-center gap-10 navblock:mb-[200px]`;

  let styles = {
    container: `text-start `,
    fp: `text-[#ffffff] text-[1rem] sm:text-[0.9rem] mb-2`,
    pcontainer: `border-2 border-[rgb(155,153,152)] rounded-[30px] flex flex-row items-center gap-5 max-w-[400px] p-4`,
    sp: `text-[rgb(190,190,190)] text-[0.8rem] `,
    img: { height: "50px", width: "50px" },
    imgStyle: `h-[50px]; w-[50px];`,
  };

  return (
    <div className={mainStyle}>
      <div className="text-[3rem]">
        <p>
          Why Us <span className="text-orngclr">?</span>
        </p>
      </div>

      <div
        id="list-content"
        className="flex flex-wrap gap-x-20 gap-y-10 justify-center"
      >
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles["pcontainer"]}
        >
          <Image
            src={InnovationIcn}
            alt="Innovation Icon"
            className={styles["imgStyle"]}
            style={styles["img"]}
          />
          <div className={styles["container"]}>
            <p className={styles["fp"]}>Innovative Custom Solutions</p>
            <p className={styles["sp"]}>
              We deliver software and AI solutions customized for your unique
              needs, ensuring future-ready innovations that give you a
              competitive edge.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles["pcontainer"]}
        >
          <Image
            src={ExpIcn}
            alt="Expertise Icon"
            className={styles["imgStyle"]}
            style={styles["img"]}
          />
          <div className={styles["container"]}>
            <p className={styles["fp"]}>Expertise and Experience</p>
            <p className={styles["sp"]}>
              Our team of highly skilled professionals brings extensive
              expertise in AI, mobile apps, and web development to solve complex
              challenges efficiently.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles["pcontainer"]}
        >
          <Image
            src={AgileIcn}
            alt="Agile Icon"
            className={styles["imgStyle"]}
            style={styles["img"]}
          />
          <div className={styles["container"]}>
            <p className={styles["fp"]}>Agile and Flexible Approach</p>
            <p className={styles["sp"]}>
              We adapt quickly to changes with our agile methodology, aligning
              our solutions closely with your evolving business needs for
              optimal outcomes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles["pcontainer"]}
        >
          <Image
            src={QualityIcn}
            alt="Quality Icon"
            className={styles["imgStyle"]}
            style={styles["img"]}
          />
          <div className={styles["container"]}>
            <p className={styles["fp"]}>Commitment to Quality and Excellence</p>
            <p className={styles["sp"]}>
              Quality is at our core. We implement strict QA measures to ensure
              our solutions always exceed client expectations and drive
              significant value.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles["pcontainer"]}
        >
          <Image
            src={Communicate}
            alt="Communication Icon"
            className={styles["imgStyle"]}
            style={styles["img"]}
          />
          <div className={styles["container"]}>
            <p className={styles["fp"]}>Transparent Communication</p>
            <p className={styles["sp"]}>
              Clear, consistent communication is central to our process. We keep
              you in the loop through every step, ensuring projects meet your
              vision precisely.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles["pcontainer"]}
        >
          <Image
            src={handShake}
            alt="Customer Service Icon"
            className={styles["imgStyle"]}
            style={styles["img"]}
          />
          <div className={styles["container"]}>
            <p className={styles["fp"]}>Customer-Centric Service</p>
            <p className={styles["sp"]}>
              Our dedication to your success drives us. We offer ongoing support
              and aim to build lasting relationships beyond mere transactions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
