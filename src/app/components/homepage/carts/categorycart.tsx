'use client';

import React, { useRef } from "react";
import {
  HiDevicePhoneMobile,

} from "react-icons/hi2";
import {
  TbDeviceWatchStats,
  TbDeviceGamepad,
} from "react-icons/tb";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineCamera } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";

const poppin = Poppins({ subsets: ["latin"], weight: "400" });

const CategoriesCart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerInView = useInView(containerRef, { margin: "-100px", once: false });

  const icons = [
    <HiDevicePhoneMobile key="phone" className="md:text-[56px] text-[70px] font-extrabold" />,
    <HiOutlineDesktopComputer key="computer" className="md:text-[56px] text-[70px]" />,
    <TbDeviceWatchStats key="watch" className="md:text-[56px] text-[70px]" />,
    <AiOutlineCamera key="camera" className="md:text-[56px] text-[70px]" />,
    <FiHeadphones key="headphones" className="md:text-[56px] text-[70px]" />,
    <TbDeviceGamepad key="gaming" className="md:text-[56px] text-[70px]" />,
  ];

  const labels = ["Phones", "Computers", "SmartWatch", "Camera", "HeadPhones", "Gaming"];

  return (
    <>
      <div ref={containerRef} className="md:w-[1170px] flex md:flex-row md:justify-between flex-col md:gap-0 gap-10 md:mx-auto p-7">
        {icons.map((icon, i) => (
          <motion.div
            key={`category-${i}`}
            initial={{ opacity: 0, y: 40 }}
            animate={containerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`md:w-[170px] md:h-[145px] h-[190px] cursor-pointer flex items-center flex-col justify-center border-2 ${
              labels[i] === "Camera"
                ? "bg-[#DB4444] border-[#DB4444] text-white hover:bg-white hover:text-black hover:border-[#0000004D]"
                : "border-[#0000004D] hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]"
            } rounded-md shadow-md transition duration-300 ease-in-out`}
          >
            {icon}
            <div className={`${poppin.className} md:text-[16px] text-[20px] mt-2`}>
              {labels[i]}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:w-[1170px] p-7 mx-auto mt-6">
        <hr />
      </div>
    </>
  );
};

export default CategoriesCart;
