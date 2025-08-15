"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import { useToast } from "@/app/context/ToastContext";

const poppin = Poppins({ subsets: ["latin"], weight: "500" });

const Monthcart = () => {
  const { addToCart, addToWishlist } = useCart();
   const { showToast } = useToast(); // <-- toast hook call

  const products = [
    {
      id: "hoodie1",
      name: "The north coat",
      price: 260,
      oldPrice: 260,
      rating: 5,
      image: "/assests/product/pinkhoodie.png",
      width: 200,
      height: 180,
    },
    {
      id: "bag1",
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 4.5,
      image: "/assests/product/bag.png",
      width: 200,
      height: 180,
    },
    {
      id: "speaker1",
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4.5,
      image: "/assests/product/speaker.png",
      width: 200,
      height: 180,
    },
    {
      id: "shelf1",
      name: "Small BookSelf",
      price: 360,
      oldPrice: 0,
      rating: 5,
      image: "/assests/product/bookshelf.png",
      width: 700,
      height: 180,
    },
  ];

  // Use container-based animation instead of individual refs
  const containerRef = useRef<HTMLDivElement>(null);
  const containerInView = useInView(containerRef, { once: false });

  interface Product {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
    image: string;
    width: number;
    height: number;
  }

  const handleAdd = (product: Product) => {
    const cartItem = { ...product, quantity: 1 };
    addToCart(cartItem);
    showToast(`${product.name} added to cart!`, "success"); 
  };

  const handleWishlistClick = (product: Product) => {
    const cartItem = { ...product, quantity: 1 };
    addToWishlist(cartItem);
    showToast(`${product.name} added to wishlist`, "info");
  };

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row justify-between gap-14 md:gap-0 flex-wrap">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 40 }}
          animate={containerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="md:h-[350px] flex flex-col group"
        >
          <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={product.width}
              height={product.height}
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
                <h2 className={`${poppin.className} text-[16px]`}>Add To Cart</h2>
              </div>
            </div>
          </div>

          <div className="md:w-[201px] md:h-[84px] mt-3 text-center md:text-start flex flex-col justify-between">
            <h2 className={`${poppin.className} text-[16px] text-black`}>
              {product.name}
            </h2>
            <div className="flex items-center gap-1 justify-center md:justify-start">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <FaStar key={`star-${product.id}-${i}`} className="text-starcolor w-[20px]" />
              ))}
              {product.rating % 1 !== 0 && (
                <FaRegStarHalfStroke className="text-starcolor w-[20px]" />
              )}
              <p className={`${poppin.className} text-[14px] text-black/50`}>(65)</p>
            </div>
            <div className="flex gap-3 justify-center md:justify-start">
              <p className={`${poppin.className} text-[16px] text-dollarcolor`}>
                ${product.price}
              </p>
              {product.oldPrice > 0 && (
                <p className={`${poppin.className} text-[16px] text-black/50 line-through`}>
                  ${product.oldPrice}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Monthcart;
