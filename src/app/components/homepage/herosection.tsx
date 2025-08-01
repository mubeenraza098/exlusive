'use client';

import { RiArrowDropRightLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const poppin = Poppins({ subsets: ["latin"], weight: "400" });
const poppin2 = Poppins({ subsets: ["latin"], weight: "500" });
const inter = Inter({ subsets: ["latin"] });

const Herosection = () => {
  const leftRef = useRef(null);
  const dividerRef = useRef(null);
  const bannerRef = useRef(null);
  const imageRef = useRef(null);

  const leftInView = useInView(leftRef, { once: false });
  const dividerInView = useInView(dividerRef, { once: false });
  const bannerInView = useInView(bannerRef, { once: false });
  const imageInView = useInView(imageRef, { once: false });

  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="md:w-[1170px] mt-8 md:mx-auto md:p-7 flex md:flex-row flex-col justify-between">
      {/* LEFT: Categories List */}
    <div className="md:flex md:gap-3">
        <div className="md:w-[217px] md:h-[334px] p-7 md:p-0" ref={leftRef}>
          <ul className={`${poppin.className} text-[16px] flex flex-col gap-[15px]`}>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/womans-fashion" className="w-full flex justify-between hover:text-[#DB4444]  items-center">
                <span>Woman’s Fashion</span>
                <RiArrowDropRightLine className="text-[30px]" />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/mens-fashion" className="w-full flex justify-between hover:text-[#DB4444]  items-center">
                <span>Men’s Fashion</span>
                <RiArrowDropRightLine className="text-[30px]" />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/electronic" className="w-full flex  justify-between hover:text-[#DB4444]  items-center">
                <span>Electronics</span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/homelifestyle" className="w-full flex justify-between items-center hover:text-[#DB4444] ">
                <span>Home & Lifestyle</span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/medicine" className="w-full flex justify-between items-center hover:text-[#DB4444] ">
                <span>Medicine</span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/sports-outdoor" className="w-full flex justify-between items-center hover:text-[#DB4444] ">
                <span>Sports & Outdoor</span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/babys-toys" className="w-full flex justify-between items-center hover:text-[#DB4444] ">
                <span>Baby’s & Toys</span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/groceries-pets" className="w-full flex justify-between items-center hover:text-[#DB4444] ">
                <span>Groceries & Pets</span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between"
            >
              <Link href="/health-beauty" className="w-full flex justify-between items-center hover:text-[#DB4444] ">
                <span>Health & Beauty</span>
              </Link>
            </motion.li>
          </ul>
        </div>

        {/* ✅ Animated Vertical Divider */}
      <motion.div
  ref={dividerRef}
  initial={{ height: 0, opacity: 0 }}
  animate={dividerInView ? { height: "405px", opacity: 1 } : {}}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="bg-black/10 w-[1.5px] md:-mt-[61px] hidden md:block"
/>
      </div>

      {/* RIGHT: Banner */}
      <motion.div
        ref={bannerRef}
        initial={{ opacity: 0, x: 60 }}
        animate={bannerInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:w-[892px] md:h-[344px] md:ml-5 bg-black flex md:flex-row flex-col-reverse justify-between items-center md:mx-0 mx-4"
      >
        {/* Banner Text Content */}
        <div className="text-white flex flex-col items-start md:p-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:w-[190px] md:h-[49px] flex items-center mx-auto md:mx-0 md:gap-[15px]"
          >
            <Image src={"/assests/product/applelogo.png"} width={40} height={40} alt="applelogo" />
            <h2 className={`${poppin.className} text-[16px]`}>iPhone 14 Series</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:w-[294px] md:h-[120px]"
          >
            <h2 className={`${inter.className} text-[48px] font-semibold md:text-start text-center`}>
              Up to 10% off Voucher
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-[113px] h-[28px] flex justify-between mx-auto md:mx-0 items-center md:ml-2 mb-8 md:mt-14"
          >
            <Link href={"#"}>
              <button className={`${poppin2.className} text-[16px] underline underline-offset-4`}>
                Shop Now
              </button>
            </Link>
            <FaArrowRight className="md:w-[24px]" />
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="pt-[16px]"
        >
          <Image
            src={"/assests/product/iphone.jpeg"}
            width={496}
            height={344}
            alt="iphone"
            className="h-[328px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Herosection;
