"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";

import { motion } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoSearch, IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Nav = () => {
  const { cart, wishlistCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    console.log("Wishlist Count Updated:", wishlistCount);
  }, [wishlistCount]);

  return (
    <>
      <div className="md:w-[1170px] md:h-[100px] md:mx-auto flex justify-between items-center p-7">
        {/* Logo + Nav */}
        <motion.div
          className="md:w-[675px] md:flex justify-between md:pt-6 items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[24px] tracking-wider font-bold text-black">
            Exclusive
          </h2>

          <div className="hidden md:flex md:items-center">
            <ul className="text-[16px] text-center w-[367px] flex justify-between items-center mr-7 ">
              {["Home", "Contact", "About", "Sign Up"].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Link
                  className="hover:text-[#DB4444]"
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Search + Icons */}
        <motion.div
          className="hidden md:flex w-[347px] justify-between pt-4 items-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-4 w-[230px] bg-inputcolor p-2 rounded-sm">
            <input
              type="text"
              placeholder="What are you looking for"
              className="text-[12px] bg-inputcolor focus:outline-none"
            />
            <IoSearch className="text-[20px]" />
          </div>

          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link href="/wishlist" className="relative">
              <IoMdHeartEmpty className="w-[32px] h-[32px]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link href="/cart" className="relative">
              <IoCartOutline className="w-[32px] h-[32px]" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-40 text-[30px]">
          <button onClick={toggleMenu}>
            {!menuOpen ? <IoMenuSharp /> : <RxCross2 />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed md:hidden bg-white inset-0 z-50"
          >
            <div className="flex justify-between p-7">
              <h2 className="text-[24px] tracking-wider font-bold text-black">
                Exclusive
              </h2>
              <button className="ml-40 text-[30px]" onClick={toggleMenu}>
                <RxCross2 />
              </button>
            </div>

            <div className="mt-2">
              <ul className="text-[16px] text-center flex flex-col gap-4 ">
                {[
                  "Home",
                  "Contact",
                  "About",
                  "Sign Up",
                  "Wishlist",
                  "Cart",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Link
                    className="hover:text-[#DB4444]"
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                  >
                    {item}
                  </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      <div className="md:mt-2">
        <hr />
      </div>
    </>
  );
};

export default Nav;
