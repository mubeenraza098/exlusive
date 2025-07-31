'use client';

import { useState, useEffect, useRef } from "react";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cart from "../carts/cart";
import { motion, useInView } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const poppin1 = Poppins({ subsets: ["latin"], weight: "500" });
const poppin = Poppins({ subsets: ["latin"], weight: "600" });

const Flashsale = () => {
  // Countdown Logic
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll-based animation logic
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {
    once: false, // triggers every time it comes into view
    margin: "-100px",
  });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="md:w-[1170px] mt-16 p-7 md:mx-auto"
    >
      {/* Today’s Section */}
      <div className="flex gap-3.5   items-center ">
        <div className="bg-myred w-[20px] h-[40px] rounded-md" />
        <div><h2 className={`${poppin.className} text-myred  text-[16px]`}>Today's</h2></div>
      </div>

      {/* Flash Sale Header */}
      <div className="md:flex md:flex-row md:justify-between mt-3  text-center md:text-start md:items-center">
        <div className="md:flex md:w-[600px] md:justify-between md:items-center">
          <h2 className={`${inter.className} font-semibold text-[36px]`}>Flash Sales</h2>

          {/* Countdown Timer */}
          <div className="flex md:w-[302px] gap-3 ">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <h2 className={`${poppin1.className} text-[12px]`}>{label}</h2>
                  <h2 className={`${poppin.className} text-[32px]`}>
                    {Object.values(timeLeft)[i]}
                  </h2>
                </div>
                {i < 3 && <div className="flex items-center pt-3"><h2 className="text-[30px]">:</h2></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex mt-3 md:m-0 gap-3">
          <div className="w-[40px] h-[40px] bg-iconcolor rounded-full pt-3 pl-3">
            <Link href={"#"}>
              <FaArrowLeft className="w-[16px]" />
            </Link>
          </div>
          <div className="w-[40px] h-[40px] bg-iconcolor rounded-full pt-3 pl-3">
            <Link href={"#"}>
              <FaArrowRight className="w-[16px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Product Cart Section */}
      <div className="md:mt-7 mt-12">
        <Cart />
      </div>
    </motion.div>
  );
};

export default Flashsale;
