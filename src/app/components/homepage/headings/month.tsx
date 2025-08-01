'use client';

import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import Monthcart from "../carts/monthcart";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppin1 = Poppins({ subsets: ["latin"], weight: "500" });
const poppin = Poppins({ subsets: ["latin"], weight: "600" });

const Month = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // keep false for scroll-trigger repeat
    margin: "-100px", // triggers earlier during scroll
  });

  return (
   <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="md:w-[1170px] p-7 mx-auto"
>
  {/* This Month Heading */}
  <div className="flex gap-3.5 items-center justify-center md:justify-start">
    <div className="bg-myred w-[20px] h-[40px] rounded-md" />
    <h2 className={`${poppin.className} text-myred text-[16px]`}>This Month</h2>
  </div>

  {/* Best Selling Products Title + Button */}
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-3 gap-4">
    {/* Title */}
    <h2
      className={`${inter.className} font-semibold  md:text-[36px] text-[30px] text-center md:text-start`}
    >
      Best Selling Products
    </h2>

    {/* Button */}
    <div className="w-[159px] h-[56px] bg-[#DB4444] hover:bg-[#e15050bb] rounded-md flex items-center justify-center">
      <Link href={"#"}>
        <button className={`${poppin1.className} text-[16px] text-[#FAFAFA]`}>
          View All
        </button>
      </Link>
    </div>
  </div>

  {/* Product Cards */}
  <div className="mt-14">
    <Monthcart />
  </div>
</motion.div>

  );
};

export default Month;
