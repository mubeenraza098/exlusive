'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { Poppins } from 'next/font/google';
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { motion, useInView } from 'framer-motion';
import { useToast } from "@/app/context/ToastContext";

const poppin = Poppins({ subsets: ['latin'], weight: '500' });
const poppin1 = Poppins({ subsets: ['latin'], weight: '400' });

const Productcart = () => {
  const { addToCart, addToWishlist } = useCart();
  const { showToast } = useToast(); // <-- toast hook call

  interface Product {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
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

  const products = [
    {
      id: 'cart1',
      name: 'Cesar Cat',
      price: 260,
      oldPrice: 260,
      image: '/assests/product/dogbreed.jpeg',
      width: 115,
      height: 180,
    },
    {
      id: 'cart2',
      name: 'Canon D-7865',
      price: 960,
      oldPrice: 1160,
      image: '/assests/product/camera.png',
      width: 200,
      height: 180,
    },
    {
      id: 'cart3',
      name: 'Dell Core-i5',
      price: 160,
      oldPrice: 170,
      image: '/assests/product/laptop.png',
      width: 200,
      height: 180,
    },
    {
      id: 'cart4',
      name: 'Samsole Men Kit',
      price: 360,
      oldPrice: 0,
      image: '/assests/product/facewash.png',
      width: 180,
      height: 180,
    },
    {
      id: 'cart5',
      name: 'Sport Toy Car',
      price: 260,
      oldPrice: 260,
      image: '/assests/product/car.png',
      width: 160,
      height: 180,
    },
    {
      id: 'cart6',
      name: 'Nike Sport Shoes',
      price: 960,
      oldPrice: 1160,
      image: '/assests/product/shoes.png',
      width: 200,
      height: 180,
    },
    {
      id: 'cart7',
      name: 'Playstation Game Pad',
      price: 160,
      oldPrice: 170,
      image: '/assests/product/gamepad2.png',
      width: 350,
      height: 180,
    },
    {
      id: 'cart8',
      name: 'Winter Hoodie',
      price: 360,
      oldPrice: 0,
      image: '/assests/product/jacket.png',
      width: 200,
      height: 180,
    },
  ];

  const ProductCard = ({ product, index }: { product: Product; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    // Slower animation for left-side items
    const isLeft = index % 4 === 0;
    const duration = isLeft ? 1.2 : 0.6;

    return (
      <motion.div
        key={product.id}
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration, delay: index * 0.01 }}
        whileHover={{ scale: 1.05  }}
      >
        <div className="md:h-[350px] flex flex-col group">
          <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={product.width}
              height={product.height}
            />
            <div className="w-[55px] h-[26px] bg-[#DB4444] rounded-md absolute left-[13px] top-3 flex items-center justify-center">
              <p className={`${poppin1.className} text-[12px] text-white`}>-40%</p>
            </div>
            <div className="flex flex-col gap-1 absolute top-3 right-[13px]">
              <div
                className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"
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

          {/* Text Content */}
          <div className="md:w-[201px] h-[84px] mt-3 flex flex-col justify-between text-center md:text-start">
            <h2 className={`${poppin.className} text-[16px] text-black`}>
              {product.name}
            </h2>
            <div className="flex gap-3 md:justify-start justify-center">
              <p className={`${poppin.className} text-[16px] text-dollarcolor`}>
                ${product.price}
              </p>
              <p
                className={`${poppin.className} text-[16px] text-black/50 line-through`}
              >
                ${product.oldPrice}
              </p>
            </div>
            <div className="flex items-center gap-1 md:justify-start justify-center">
              <FaStar key="star-1" className="text-starcolor w-[20px]" />
              <FaStar key="star-2" className="text-starcolor w-[20px]" />
              <FaStar key="star-3" className="text-starcolor w-[20px]" />
              <FaStar key="star-4" className="text-starcolor w-[20px]" />
              <FaRegStarHalfStroke key="star-half" className="text-starcolor w-[20px]" />
              <p className={`${poppin.className} text-[14px] text-black/50`}>
                (65)
              </p>
            </div>
            <div className="md:w-[48px] md:h-[20px] flex md:justify-between mt-2 gap-1.5 md:gap-0 justify-center">
              <div className="w-[20px] h-[20px] bg-white rounded-full border-2 border-black">
                <div className="w-[12px] h-[12px] bg-[#FB1314] rounded-full mx-auto mt-0.5 "></div>
              </div>
              <div className="w-[20px] h-[20px] bg-[#DB4444] rounded-full "></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <div className="md:flex md:flex-row justify-between flex flex-col gap-14 md:gap-0">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <div className="md:flex md:flex-row justify-between flex flex-col gap-14 md:gap-0 mt-14">
        {products.slice(4, 8).map((product, index) => (
          <ProductCard key={product.id} product={product} index={index + 4} />
        ))}
      </div>
    </div>
  );
};

export default Productcart;
