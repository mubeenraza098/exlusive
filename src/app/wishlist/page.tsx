// page.tsx (Updated Wishlist Page with Eye Icon in "Just For You")
'use client';
import React, { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


// Mock products list (to simulate random cart display)
const allProducts = [
  { id: "gamepad1", name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, image: "/assests/flashsale/gamepad.png" },
  { id: "keyboard1", name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, image: "/assests/flashsale/keyboard.png" },
  { id: "monitor1", name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, image: "/assests/flashsale/tv.png" },
  { id: "chair1", name: "S-Series Comfort Chair", price: 375, oldPrice: 400, image: "/assests/flashsale/chair.png" },

  { id: "bag1", name: "Gucci duffle bag", price: 1200, oldPrice: 1500, image: "/assests/product/bag.png" }
];

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  const [randomProducts, setRandomProducts] = useState<any[]>([]);

  useEffect(() => {
    // Randomly select 4 products to show
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    setRandomProducts(shuffled.slice(0, 4));
  }, []);

  const headerRef = useRef(null);
const isInView = useInView(headerRef, { once: false });
  return (
    <div className="md:w-[1170px] p-7 mx-auto">
      {/* Wishlist Header */}
     <motion.div
  ref={headerRef}
  className="flex justify-between items-center mt-20"
>
  {/* Heading - Animate from Left */}
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    animate={isInView ? { x: 0, opacity: 1 } : {}}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h2 className="text-black text-[20px]">Wishlist ({wishlist.length})</h2>
  </motion.div>

  {/* View All Button - Animate from Right + Hover Effect */}
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    animate={isInView ? { x: 0, opacity: 1 } : {}}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    <Link href="#">
      <button className="w-[223px] h-[56px] rounded-md border-2 border-black flex items-center justify-center text-[16px] text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">
        View All
      </button>
    </Link>
  </motion.div>
</motion.div>

      {/* Wishlist Items */}
  <div className="md:grid md:grid-cols-4 flex flex-col gap-14 md:gap-6 mt-16">
  {wishlist.length > 0 ? (
    wishlist.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="md:h-[350px] flex flex-col group"
      >
        {/* Product Card */}
        <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={190}
            height={180}
            className="w-[190px]"
          />

          {/* Remove Icon */}
          <div className="flex flex-col gap-1 absolute top-3 right-[13px]">
            <div
              className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"
              onClick={() => removeFromWishlist(product.id)}
            >
              <RiDeleteBin6Line className="text-[21px]" />
            </div>
          </div>

          {/* Add to Cart */}
          <div className="absolute bottom-0 w-full text-center cursor-pointer">
            <div
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="w-full bg-black text-white py-2 flex gap-1 justify-center rounded-b-md items-center"
            >
              <IoCartOutline className="text-[24px]" />
              <h2 className="text-[16px]">Add To Cart</h2>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-[201px] md:h-[84px] mt-3 text-center md:text-start flex flex-col md:gap-2">
          <h2 className="text-[16px] text-black">{product.name}</h2>
          <div className="flex gap-3 justify-center md:justify-start">
            <p className="text-[16px] text-dollarcolor">${product.price}</p>
            <p className="text-[16px] text-black/50 line-through">${product.oldPrice}</p>
          </div>
        </div>
      </motion.div>
    ))
  ) : (
    <p>Your wishlist is empty.</p>
  )}
</div>

      {/* Just For You Section */}
   <div className="flex justify-between items-center mt-20">
  {/* Heading with red bar and text */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="flex gap-3.5 items-center"
  >
    <div className="bg-myred w-[20px] h-[40px] rounded-md "></div>
    <div>
      <h2 className="text-black text-[20px]">Just For You</h2>
    </div>
  </motion.div>

  {/* Animated "See All" Button */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group w-[150px] h-[56px] border-2 border-black mx-auto mt-5 md:m-0 rounded-md flex items-center justify-center cursor-pointer hover:bg-black transition duration-300 ease-in-out"
  >
    <Link href={"#"}>
      <button className="text-[16px] text-black group-hover:text-white transition duration-300 ease-in-out">
        See All
      </button>
    </Link>
  </motion.div>
</div>

      {/* Just For You Random Products */}
<div className="md:grid md:grid-cols-4 flex flex-col gap-14 md:gap-6 mt-16">
  {randomProducts.length > 0 ? (
    randomProducts.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="md:h-[350px] flex flex-col group"
      >
        {/* Just For You Product */}
        <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={190}
            height={180}
            className="w-[190px]"
          />

          {/* Eye Icon */}
          <div className="flex flex-col gap-1 absolute top-3 right-[13px]">
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full">
              <IoEyeOutline className="text-[19px]" />
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="absolute bottom-0 w-full text-center cursor-pointer">
            <div
              onClick={() => addToCart(product)}
              className="w-full bg-black text-white py-2 flex gap-1 justify-center rounded-b-md items-center"
            >
              <IoCartOutline className="text-[24px]" />
              <h2 className="text-[16px]">Add To Cart</h2>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-[201px] md:h-[84px] mt-3 text-center md:text-start flex flex-col md:gap-2">
          <h2 className="text-[16px] text-black">{product.name}</h2>
          <div className="flex gap-3 justify-center md:justify-start">
            <p className="text-[16px] text-dollarcolor">${product.price}</p>
            <p className="text-[16px] text-black/50 line-through">${product.oldPrice}</p>
          </div>
        </div>
      </motion.div>
    ))
  ) : (
    <p>No items available for &quot;Just For You&quot;.</p>
  )}
</div>


    </div>
  );
};

export default Wishlist;
