'use client';

import React, { useRef } from "react";
import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/context/ToastContext"; // <-- ToastContext import
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";

const poppin = Poppins({ subsets: ["latin"], weight: "500" });

const Cart = () => {
  const { addToCart, addToWishlist } = useCart();
  const { showToast } = useToast(); // <-- toast hook call

  const products = [
    {
      id: "gamepad1",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      image: "/assests/flashsale/gamepad.png",
    },
    {
      id: "keyboard1",
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      image: "/assests/flashsale/keyboard.png",
    },
    {
      id: "monitor1",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 5,
      image: "/assests/flashsale/tv.png",
    },
    {
      id: "chair1",
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      rating: 5,
      image: "/assests/flashsale/chair.png",
    },
  ];

  const productRefs = products.map(() => useRef(null));
  const inViews = productRefs.map((ref) => useInView(ref, { once: false }));

  const handleAdd = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    showToast(`${product.name} added to cart!`, "succes"); // <-- animated popup message
  };

  const handleWishlistClick = (product: any) => {
    addToWishlist(product);
    showToast(`${product.name} added to wishlist`, "info");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-0 flex-wrap">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          ref={productRefs[index]}
          initial={{ opacity: 0, y: 40 }}
          animate={inViews[index] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.01 }}
           whileHover={{ scale: 1.05 }} 
          className="group"
        >
          <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              width={190}
              height={180}
              className="w-[190px]"
            />

            <div className="flex flex-col gap-1 absolute top-3 right-[13px]">
              <div
                className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full cursor-pointer"
                onClick={() => handleWishlistClick(product)}
              >
                <CiHeart className="text-[21px]" />
              </div>
              <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full">
                <IoEyeOutline className="text-[16px]" />
              </div>
            </div>

            <div
              onClick={() => handleAdd(product)}
              className="absolute bottom-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div className="w-full bg-black text-white py-2 flex gap-1 justify-center rounded-b-md items-center">
                <h2 className="text-[16px]">Add To Cart</h2>
              </div>
            </div>
          </div>

          <div className="md:w-[201px] md:h-[84px] mt-3 text-center md:text-start flex flex-col justify-between">
            <h2 className={`${poppin.className} text-[16px] text-black`}>
              {product.name}
            </h2>

            <div className="flex items-center gap-1 justify-center md:justify-start">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <FaStar key={i} className="text-starcolor w-[20px]" />
              ))}
              {product.rating % 1 !== 0 && (
                <FaRegStarHalfStroke className="text-starcolor w-[20px]" />
              )}
              <p className={`${poppin.className} text-[14px] text-black/50`}>
                (65)
              </p>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <p className="text-[16px] text-dollarcolor">${product.price}</p>
              <p className="text-[16px] text-black/50 line-through">
                ${product.oldPrice}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cart;
  