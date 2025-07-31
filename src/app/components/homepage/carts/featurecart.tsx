'use client';

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({ subsets: ["latin"], weight: "400" });
const poppin2 = Poppins({ subsets: ["latin"], weight: "500" });

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Featurecart = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // scroll ke hisaab se animation repeat hoga
    margin: "-100px", // early trigger for smoother experience
  });

  return (
    <div
      ref={ref}
      className="md:h-[600px] flex md:flex-row flex-col justify-between gap-4"
    >
      {/* Main Left Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        className="md:w-[520px] rounded-[4px] relative bg-black md:pr-8"
      >
        <Image
          src={"/assests/product/playstation.png"}
          alt="playsatation"
          width={800}
          height={500}
          className="md:w-[800px] md:h-[600px]"
        />
        <div className="md:w-[255px] md:h-[82px] absolute md:top-[420px] top-[108px] left-[35px] flex flex-col gap-[14px]">
          <h2 className={`${inter.className} font-semibold text-white text-[24px]`}>
            PlayStation 5
          </h2>
          <p className={`${poppin.className} text-[14px] w-[200px] md:w-full text-white`}>
            Black and White version of the PS5 coming out on sale.
          </p>
          <Link href={"#"}>
            <button className={`${poppin2.className} text-[16px] text-white underline underline-offset-4`}>
              Shop Now
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Side Cards */}
      <div>
        {/* 1st Small Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="md:w-[570px] md:h-[284px] rounded relative bg-[#0D0D0D] flex items-end justify-end"
        >
          <Image
            src={"/assests/product/women.jpeg"}
            alt="women"
            width={519}
            height={511}
            className="md:w-[432px] md:h-[283px]"
          />
          <div className="w-[255px] h-[82px] absolute md:top-[133px] top-[75px] left-[24px] flex flex-col gap-[14px]">
            <h2 className={`${inter.className} font-semibold text-white text-[24px]`}>
              Women’s Collections
            </h2>
            <p className={`${poppin.className} text-[14px] text-white`}>
              Featured woman collections that give you another vibe.
            </p>
            <Link href={"#"}>
              <button className={`${poppin2.className} text-[16px] text-white underline underline-offset-4`}>
                Shop Now
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 2 Cards in Row */}
        <div className="flex md:flex-row flex-col md:mt-8 mt-4 md:w-[570px] justify-between">
          {/* 3rd Card - Speaker */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="md:w-[270px] md:h-[284px] relative rounded bg-black flex justify-between items-center"
          >
            <Image
              src={"/assests/product/amazonspeaker.png"}
              alt="speaker"
              width={300}
              height={221}
              className="md:w-[230px] md:h-[260px] mx-auto z-50"
            />
            <div className="bg-[#D9D9D9] rounded-full blur-[150px] w-[200px] h-[210px] absolute top-16 left-9 -z-1"></div>
            <div className="w-[191px] h-[85px] absolute md:top-[165px] top-[200px] left-[24px] flex flex-col gap-[6px] z-50">
              <h2 className={`${inter.className} font-semibold text-white text-[24px]`}>
                Speakers
              </h2>
              <p className={`${poppin.className} text-[14px] text-white`}>
                Amazon wireless speakers
              </p>
              <Link href={"#"}>
                <button className={`${poppin2.className} text-[16px] text-white underline underline-offset-4`}>
                  Shop Now
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 4th Card - Perfume */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="md:w-[270px] h-[284px] relative md:m-0 mt-4 rounded bg-black flex justify-between items-center"
          >
            <Image
              src={"/assests/product/gucci.png"}
              alt="perfume"
              width={300}
              height={221}
              className="w-[230px] h-[260px] mx-auto z-50"
            />
            <div className="bg-[#D9D9D9] rounded-full blur-[150px] w-[250px] h-[210px] absolute top-16 left-9 -z-1"></div>
            <div className="w-[191px] h-[85px] absolute top-[165px] left-[24px] flex flex-col gap-[6px] z-50">
              <h2 className={`${inter.className} font-semibold text-white text-[24px]`}>
                Perfume
              </h2>
              <p className={`${poppin.className} text-[14px] text-white`}>
                GUCCI INTENSE OUD EDP
              </p>
              <Link href={"#"}>
                <button className={`${poppin2.className} text-[16px] text-white underline underline-offset-4`}>
                  Shop Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featurecart;
