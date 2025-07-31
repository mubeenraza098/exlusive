"use client";
import Nav from "../components/homepage/nav";
import Footer from "../components/homepage/footer";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const poppin = Poppins({ subsets: ["latin"], weight: "400" });
const poppin2 = Poppins({ subsets: ["latin"], weight: "500" });

const Contact = () => {
  // Breadcrumb
  const breadcrumbRef = useRef(null);
  const isBreadcrumbInView = useInView(breadcrumbRef, { once: false });

  // Left Card
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: false });

  // Right Form
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: false });

  return (
    <>
      {/* <Nav /> */}
      <div className="md:w-[1170px] md:mx-auto md:p-7">
        {/* Breadcrumb */}
        <motion.div
          ref={breadcrumbRef}
          initial={{ x: -80, opacity: 0 }}
          animate={isBreadcrumbInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="md:h-[21px] flex items-center gap-3 mt-10">
            <Link href={"/home"}>
              <h2 className={`${poppin.className} text-[14px] text-black/40`}>
                Home
              </h2>
            </Link>
            <p className={`${poppin.className} text-[14px] text-black/40`}>/</p>
            <h2 className={`${poppin.className} text-[14px] text-black`}>
              Contact
            </h2>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="md:flex md:gap-6 md:mt-20">
          {/* LEFT: Call / Write Card */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-[340px] h-[457px] mx-auto md:m-0 shadow-md flex flex-col items-center justify-center bg"
          >
            <div className="w-[270px] h-[366px] flex flex-col justify-between">
              {/* Call to Us */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isCardInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="flex gap-4 items-center">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-[40px] h-[40px] bg-[#DB4444] text-white rounded-full flex items-center justify-center text-[20px]"
                  >
                    <LuPhone />
                  </motion.div>
                  <h2 className={`${poppin2.className} text-[16px]`}>
                    Call To Us
                  </h2>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="mt-5 flex flex-col gap-3"
                >
                  <p className={`${poppin.className} text-[14px]`}>
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className={`${poppin.className} text-[14px]`}>
                    Phone: +8801611112222
                  </p>
                </motion.div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={isCardInView ? { width: "270px" } : {}}
                transition={{ delay: 0.6, duration: 1 }}
                className="h-[2px] bg-black/50"
              />

              {/* Write to Us */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isCardInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex gap-4 items-center">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-[40px] h-[40px] bg-[#DB4444] text-white rounded-full flex items-center justify-center text-[23px]"
                  >
                    <MdMailOutline />
                  </motion.div>
                  <h2 className={`${poppin2.className} text-[16px]`}>
                    Write To Us
                  </h2>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="mt-5 flex flex-col gap-3"
                >
                  <p className={`${poppin.className} text-[14px]`}>
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className={`${poppin.className} text-[14px]`}>
                    Emails: customer@exclusive.com
                  </p>
                  <p className={`${poppin.className} text-[14px]`}>
                    Emails: support@exclusive.com
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 100 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            className="md:w-[800px] h-auto md:m-0 mt-8 ml-[33px] mr-[33px] p-7 md:p-0 shadow-md md:flex md:flex-col md:items-center md:justify-center"
          >
            <div className="md:w-[737px] flex flex-col justify-between gap-5">
              {/* Input Fields */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="md:flex md:justify-between grid grid-cols-1 gap-4"
              >
                <input
                  type="text"
                  placeholder="Your Name *"
                  className={`${poppin.className} text-[16px] bg-[#F5F5F5] md:w-[235px] h-[50px] focus:outline-none p-3`}
                />
                <input
                  type="text"
                  placeholder="Your Email *"
                  className={`${poppin.className} text-[16px] bg-[#F5F5F5] md:w-[235px] h-[50px] focus:outline-none p-3`}
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className={`${poppin.className} text-[16px] bg-[#F5F5F5] md:w-[235px] h-[50px] focus:outline-none p-3`}
                />
              </motion.div>

              {/* Message Box */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-[#F5F5F5] p-3"
              >
                <textarea
                  placeholder="Your Message"
                  className={`${poppin.className} text-[16px] w-full h-[170px] resize-none bg-[#F5F5F5] focus:outline-none`}
                />
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isFormInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center md:justify-end"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="w-[234px] h-[56px] bg-[#DB4444] hover:bg-[#e15050bb] rounded-md flex items-center justify-center"
                >
                  <Link href={"#"}>
                    <button
                      className={`${poppin.className} text-[16px] text-[#FAFAFA]`}
                    >
                      Send Message
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Contact;
