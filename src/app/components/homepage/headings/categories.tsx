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
      <div className="flex gap-3.5 items-center">
        <div className="bg-myred  w-[20px] h-[40px] rounded-md" />
        <h2 className={`${poppin.className} text-myred text-[16px]`}>
          Categories
        </h2>
      </div>

      {/* Browse By Category Heading */}
      <div className="flex md:flex-row flex-col md:justify-between mt-3 md:items-center">
        <div className="flex md:w-[600px] md:justify-between md:items-center">
          <h2 className={`${inter.className} font-semibold text-[36px]`}>
            Browse By Category
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex  gap-3  md:visible  items-center">
          <div className="w-[40px] h-[40px] bg-iconcolor rounded-full pt-3 pl-3">
            <Link href={"#"}>
              <FaArrowLeft className="w-[16px]" />
            </Link>
          </div>
          <div className="w-[40px] h-[40px]  bg-iconcolor rounded-full pt-3 pl-3">
            <Link href={"#"}>
              <FaArrowRight className="w-[16px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Place to inject animated content like <CategoriesCart /> */}
      {/* Example: <CategoriesCart /> */}
    </motion.div>
  );
};

export default Categories;
