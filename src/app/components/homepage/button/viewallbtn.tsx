"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppin = Poppins({ subsets: ["latin"], weight: "500" });

const Viewallbtn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="md:mt-8"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
    >
      {/* Animated Button */}
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(219, 68, 68, 0.6)",
        }}
        transition={{ duration: 0.3 }}
        className="w-[234px] h-[56px] bg-[#DB4444] hover:bg-[#e15050bb] mx-auto rounded-md flex items-center justify-center cursor-pointer"
      >
        <Link href={"/allproducts"}>
          <button className={`${poppin.className} text-[16px] text-[#FAFAFA]`}>
            View All Products
          </button>
        </Link>
      </motion.div>

      {/* Animated HR Line */}
      <motion.div
        className="md:w-[1170px] md:visible p-7 mx-auto mt-10"
        initial={{ opacity: 0, width: 0 }}
        animate={isInView ? { opacity: 1, width: "100%" } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <hr />
      </motion.div>
    </motion.div>
  );
};

export default Viewallbtn;
