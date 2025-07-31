"use client";
import ResNav from "../components/homepage/nav";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({ subsets: ["latin"], weight: "400" });
const poppin2 = Poppins({ subsets: ["latin"], weight: "500" });

const Page = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: false });
  const isContentInView = useInView(contentRef, { once: false });

  return (
    <>
      <div className="md:w-[1170px] md:h-[781px] mx-auto md:flex md:items-center">
        {/* IMAGE SECTION */}
        <motion.div
          ref={imageRef}
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          animate={isImageInView ? { x: 0, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.03 }}
          className="md:w-[919px] md:h-[706px]"
        >
          <Image
            src={"/assests/signup.jpeg"}
            alt="signup"
            width={919}
            height={706}
            className="md:-ml-16 md:h-[620px] md:w-[919px]"
          />
        </motion.div>

        {/* CONTENT SECTION */}
        <motion.div
          ref={contentRef}
          initial={{ x: 100, opacity: 0 }}
          animate={isContentInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          className="md:p-7 md:mb-6"
        >
          <div className="md:w-[371px] md:h-[530px] p-7 md:p-0">
            {/* heading */}
            <div className="md:[339px] md:h-[78px]">
              <h2
                className={`${inter.className} text-[36px] font-medium text-center md:text-start`}
              >
                Create an account
              </h2>
              <h2
                className={`${poppin.className} text-[16px] text-center md:text-start`}
              >
                Enter your details below
              </h2>
            </div>

            {/* input boxes */}
            <div className="flex flex-col gap-[35px] mt-11">
              <input
                type="text"
                placeholder="Name"
                className={`${poppin.className} text-[16px] text-black/40 border-b-2 border-b-black pb-[6px] md:w-[370px] focus:outline-none`}
              />
              <input
                type="email"
                placeholder="Email or Phone"
                className={`${poppin.className} text-[16px] text-black/40 border-b-2 border-b-black pb-[6px] md:w-[370px] focus:outline-none`}
              />
              <input
                type="password"
                placeholder="Password"
                className={`${poppin.className} text-[16px] text-black/40 border-b-2 border-b-black pb-[6px] md:w-[370px] focus:outline-none`}
              />
            </div>

            {/* BUTTON 1: Create Account */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isContentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="md:w-[371px] h-[56px] bg-[#DB4444] hover:bg-[#e15050bb] md:mx-auto mt-8 rounded-md flex items-center justify-center"
            >
              <Link href={"#"}>
                <button
                  className={`${poppin2.className} text-[16px] text-[#FAFAFA]`}
                >
                  Create Account
                </button>
              </Link>
            </motion.div>

            {/* BUTTON 2: Google */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isContentInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="md:w-[371px] h-[56px] bg-white border border-1 md:mx-auto mt-4 rounded-md flex items-center justify-center"
            >
              <div className="md:w-[199px] flex items-center gap-2">
                <FcGoogle className="text-[24px]" />
                <Link href={"#"}>
                  <button
                    className={`${poppin2.className} text-[16px] text-black`}
                  >
                    Sign up with Google
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* LOGIN TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="md:[248px] mt-3"
            >
              <div className="flex items-center gap-2 justify-center">
                <p className={`${poppin.className} text-[16px]`}>
                  Already have account?
                </p>
                <p
                  className={`${poppin2.className} text-[16px] underline underline-offset-8`}
                >
                  <Link href={"/loginpage"}>Log in</Link>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
