'use client';

import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const poppin = Poppins({ subsets: ["latin"], weight: "600" });
const poppin2 = Poppins({ subsets: ["latin"], weight: "400" });

const Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // <-- this ensures it triggers every time it comes into view
    margin: "-100px", // <-- makes it a bit more sensitive to scroll
  });

  return (
    <div
      ref={ref}
      className="md:w-[1170px] md:h-[500px] md:mx-auto mt-14 md:p-7 px-4  flex md:flex-row items-center"
    >
      <div className="bg-black md:w-[1170px] flex md:flex-row flex-col-reverse items-center justify-between">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.35,
              },
            },
          }}
          className="md:h-[420px] flex flex-col justify-center md:gap-5 gap-2 mb-14 md:m-0 md:pl-10 md:text-start text-center"
        >
          {[
            <h2 key="cat" className={`${poppin.className} text-[#00FF66] text-[16px]`}>
              Categories
            </h2>,
            <h2 key="title" className={`${poppin.className} md:w-[450px] w-[300px] text-[#FAFAFA] md:text-[48px] text-[35px]`}>
              Enhance Your Music Experience
            </h2>,
            <div key="timer" className="flex gap-5 md:justify-start justify-center">
              {[
                { label: 'Hours', value: '23' },
                { label: 'Days', value: '05' },
                { label: 'Minutes', value: '30' },
                { label: 'Seconds', value: '48' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[62px] h-[62px] bg-white rounded-full flex flex-col items-center justify-center"
                >
                  <p className={`${poppin.className} text-[16px]`}>{item.value}</p>
                  <p className={`${poppin2.className} text-[11px]`}>{item.label}</p>
                </div>
              ))}
            </div>,
            <div key="btn" className="w-[171px] h-[56px] mt-5 bg-[#00FF66] hover:bg-[#e15050bb] rounded-md flex items-center justify-center md:m-0 mx-auto">
              <Link href={"#"}>
                <button className={`${poppin.className} text-[16px] text-[#FAFAFA]`}>Buy Now!</button>
              </Link>
            </div>
          ].map((element, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              {element}
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          className="md:w-[600px] md:h-[420px] flex items-center relative justify-center"
        >
          <Image
            src={"/assests/section/section.png"}
            alt="radio"
            width={600}
            height={330}
            className="w-[600px] z-50"
          />
          <div className="bg-[#D9D9D9] rounded-full w-[300px] h-[350px] blur-[200px] absolute -z-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
