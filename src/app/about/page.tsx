"use client";

import Service from "../components/homepage/carts/service";
import { GoGift } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";

import { TbShoppingBagHeart } from "react-icons/tb";
import { PiTwitterLogo } from "react-icons/pi";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const poppin = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef, useState } from "react";

const About = () => {
  const [showCursor, setShowCursor] = useState(true);
  const headingRef = useRef(null);

  // for breadcrumb
  const breadcrumbRef = useRef(null);
  const isInView = useInView(breadcrumbRef, {
    once: false,
  });

  // for carts
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, {
    once: false,
  });
  // for image and text hero section
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: false });
  const imageInView = useInView(imageRef, { once: false });

  // for people carts
  const teamRef = useRef(null);
const isTeamInView = useInView(teamRef, {
  once: false,
});


  return (
    <>
      {/* <Nav /> */}

      {/* maindiv */}
      <div className="md:w-[1170px] md:p-7 md:mx-auto">
        {/* home and about  */}
        <motion.div
          ref={breadcrumbRef}
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="md:h-[21px] flex items-center gap-3 mt-10">
            <Link href={"/home"}>
              <h2 className={`${poppin.className} text-[14px] text-black/40`}>
                Home
              </h2>
            </Link>
            <Link href={"#"}>
              <p className={`${poppin.className} text-[14px] text-black/40`}>
                /
              </p>
            </Link>
            <Link href={"#"}>
              <h2 className={`${poppin.className} text-[14px] text-black`}>
                About
              </h2>
            </Link>
          </div>
        </motion.div>

        {/* end home and about */}

        {/* image and content */}
        <div className="md:flex md:flex-row md:items-center md:gap-16 md:mt-8 mt-6 flex flex-col-reverse ">
          {/* content */}
          <motion.div
            ref={textRef}
            initial={{ x: -80, opacity: 0 }}
            animate={textInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="md:w-[525px] md:h-[336px] md:flex md:flex-col md:gap-12 md:p-0 md:text-start text-center p-4 "
          >
            <div className=" md:w-[277px] md:h-[64px]" ref={headingRef}>
              <h1 className={`${inter.className} text-[54px] font-semibold`}>
                <Typewriter
                  words={["Our Story"]}
                  typeSpeed={70}
                  deleteSpeed={0}
                  delaySpeed={1000}
                  loop={1}
                  cursor={showCursor}
                  onLoopDone={() => setShowCursor(false)}
                />
              </h1>
            </div>
            <div className="md:w-[525px]">
              <p className="text-[16px]">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <br />
              <p className="text-[16px]">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </motion.div>

          {/* image */}
          <motion.div
            ref={imageRef}
            initial={{ x: 80, opacity: 0, scale: 0.95 }}
            animate={imageInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="md:w-[837px]"
          >
            <Image
              src="/assests/section/about.jpeg"
              alt="aboutsection"
              width={837}
              height={609}
              className="md:w-[837px]"
            />
          </motion.div>
        </div>
        {/* end image and content div */}

        {/* cart box */}
        <div
          ref={cardsRef}
          className="mt-36 md:flex h-[230px] md:flex-row gap-7 grid grid-cols-1"
        >
          {[...Array(4)].map((_, i) => {
            const content = [
              {
                icon: <GoGift className="text-white text-[40px]" />,
                number: "10.5k",
                text: "Sallers active our site",
                bg: "bg-serviceicon/30",
                border: "border-black/30",
                color: "text-black",
              },
              {
                icon: <AiOutlineDollar className="text-white text-[40px]" />,
                number: "33k",
                text: "Monthly Product Sale",
                bg: "bg-white/30",
                border: "border-[#DB4444]",
                color: "text-white",
                box: "bg-[#DB4444] drop-shadow-lg",
              },
              {
                icon: <TbShoppingBagHeart className="text-white text-[40px]" />,
                number: "45.5k",
                text: "Customer active in our site",
                bg: "bg-serviceicon/30",
                border: "border-black/30",
                color: "text-black",
              },
              {
                icon: <TbShoppingBagHeart className="text-white text-[40px]" />,
                number: "25k",
                text: "Annual gross sale in our site",
                bg: "bg-serviceicon/30",
                border: "border-black/30",
                color: "text-black",
              },
            ][i];

            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={isCardsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`w-[270px] h-[230px] mx-auto md:gap-3 flex flex-col items-center justify-center border-2 ${
                  content.border
                } ${content.box || ""}`}
              >
                <div className="w-[80px] h-[80px] rounded-full bg-serviceicon/30 flex items-center justify-center">
                  <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
                    {content.icon}
                  </div>
                </div>
                <div>
                  <h2
                    className={`${inter.className} text-[32px] font-bold ${content.color} text-center`}
                  >
                    {content.number}
                  </h2>
                  <p
                    className={`${poppin.className} text-[16px] ${content.color} text-center`}
                  >
                    {content.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* cart box end  */}

        {/* people div  */}
       <motion.div
  ref={teamRef}
  className="md:flex justify-between md:mt-36 md:p-0 grid grid-cols-1 gap-14 p-7 mt-[900px]"
>
  {[...Array(3)].map((_, index) => {
    const memberData = [
      {
        name: "Tom Cruise",
        role: "Founder & Chairman",
        img: "/assests/section/about1.png",
        width: 236,
        height: 391,
      },
      {
        name: "Emma Watson",
        role: "Managing Director",
        img: "/assests/section/about2.png",
        width: 285,
        height: 300,
      },
     
      {
        name: "Will Smith",
        role: "Product Designer",
        img: "/assests/section/about3.png",
         width: 500,
  height: 500,
      },
    ][index];

    return (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        animate={isTeamInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.3 }}
        whileHover={{ scale: 1.03 }}
        className="md:w-[350px] md:h-[564px] md:text-start text-center"
      >
        <div className="bg-[#F5F5F5] pt-10">
          <Image
            src={memberData.img}
            width={memberData.width}
            height={memberData.height}
            alt={memberData.name}
            className={`w-[${memberData.width}px] h-[${memberData.height}px] flex mx-auto`}
          />
        </div>
        <div className="md:mt-3 mt-2">
          <h2 className={`${inter.className} text-[32px] font-medium`}>
            {memberData.name}
          </h2>
          <p className={`${poppin.className} text-[16px] md:pl-0.5`}>
            {memberData.role}
          </p>
          <div className="md:w-[104px] md:h-[24px] flex md:justify-start gap-1.5 items-center justify-center mt-2">
            <PiTwitterLogo className="text-[20.06px]" />
            <RxInstagramLogo className="text-[18px]" />
            <RiLinkedinLine className="text-[17.5px]" />
          </div>
        </div>
      </motion.div>
    );
  })}
</motion.div>

        {/* people div end  */}
        <Service />
        {/* main div */}
      </div>
    </>
  );
};

export default About;
