'use client';

import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Featurecart from "../carts/featurecart";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

const poppin = Poppins({ subsets: ["latin"], weight: "600" });

const Feauter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:w-[1170px] p-7 mx-auto mt-20 md:mt-0"
    >
      {/* Featured Label */}
      <div className="flex gap-3.5 items-center">
        <div className="bg-myred w-[20px] h-[40px] rounded-md" />
        <div>
          <h2 className={`${poppin.className} text-myred text-[16px]`}>
            Featured
          </h2>
        </div>
      </div>

      {/* New Arrival Heading */}
      <div className="flex justify-between mt-3 items-center">
        <div className="flex w-[600px] justify-between items-center">
          <div className="mt-3">
            <h2 className={`${inter.className} font-semibold text-[36px]`}>
              New Arrival
            </h2>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-7">
        <Featurecart />
      </div>
    </motion.div>
  );
};

export default Feauter;
