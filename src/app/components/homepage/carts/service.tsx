'use client';

import { Poppins } from "next/font/google";
import { FaTruckFast } from "react-icons/fa6";
import { LuHeadset } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const poppin = Poppins({ subsets: ["latin"], weight: "600" });
const poppin2 = Poppins({ subsets: ["latin"], weight: "400" });

const Service = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, {
    once: false, // every time it scrolls into view
    margin: "-100px", // triggers a bit early
  });

  const serviceCards = [
    {
      icon: <FaTruckFast className="text-white text-[40px]" />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: <LuHeadset className="text-white text-[40px]" />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: <GoShieldCheck className="text-white text-[40px]" />,
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="md:w-[943px] md:h-[161px] md:flex md:justify-between md:mx-auto grid grid-cols-1 gap-12 mt-20"
    >
      {serviceCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
          className="md:w-[249px] md:h-[161px] flex flex-col items-center gap-4"
        >
          {/* Icon */}
          <div className="w-[80px] h-[80px] rounded-full bg-serviceicon/30 flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
              {card.icon}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-[256px] text-center">
            <h2 className={`${poppin.className} text-[20px] text-black`}>
              {card.title}
            </h2>
            <p className={`${poppin2.className} text-[14px] text-black`}>
              {card.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Service;
