'use client';

import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import Cart from "../carts/cart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppin1 = Poppins({ subsets: ["latin"], weight: "500" });
const poppin = Poppins({ subsets: ["latin"], weight: "600" });

const Categories = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // animation triggers every scroll into view
    margin: "-100px",
  });

  return (
   <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="md:w-[1170px] p-7 mx-auto"
>
  {/* Categories Label */}
  <div className="flex gap-3.5 items-center justify-center md:justify-start w-fit mx-auto md:mx-0">
    <div className="bg-myred w-[20px] h-[40px] rounded-md" />
    <h2 className={`${poppin.className} text-myred text-[16px]`}>
      Categories
    </h2>
  </div>

  {/* Browse By Category Heading */}
  <div className="flex  md:flex-row md:justify-between md:items-center  mt-3 text-center md:text-start gap-4 md:gap-0">
    {/* Heading */}
    <h2
      className={`${inter.className} font-semibold  text-[30px] md:text-[36px]`}
    >
      Browse By Category
    </h2>

    {/* Arrows – Only visible on desktop */}
    <div className="hidden md:flex gap-3 items-center">
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

  {/* You can inject your <CategoriesCart /> or similar component here */}
</motion.div>

  );
};

export default Categories;
