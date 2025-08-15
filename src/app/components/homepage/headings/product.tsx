'use client';

import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import Productcart from "../carts/productcart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

const poppin = Poppins({ subsets: ["latin"], weight: "600" });

const ProductHeading = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // Keep `false` for smoother repeated animation on scroll
    margin: "-100px 0px", // Slight early trigger
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:w-[1170px] p-7 mx-auto"
    >
      {/* Our Products Heading */}
      <div className="flex gap-3.5 items-center">
        <div className="bg-myred w-[20px] h-[40px] rounded-md" />
        <h2 className={`${poppin.className} text-myred text-[16px]`}>
          Our Products
        </h2>
      </div>

      {/* Explore Our Products Section */}
      <div className="flex justify-between mt-3 items-center">
        <div className="flex w-[600px] justify-between items-center">
          <h2 className={`${inter.className} font-semibold text-[36px]`}>
            Explore Our Products
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 items-center">
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

      {/* Product Cards */}
      <div className="mt-9">
        <Productcart />
      </div>
    </motion.div>
  );
};

export default ProductHeading;
