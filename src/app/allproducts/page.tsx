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
import Link from "next/link";

const poppin = Poppins({ subsets: ["latin"], weight: "500" });
const poppin1 = Poppins({ subsets: ["latin"], weight: "400" });

const Allrpoduct = () => {
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
    {
      id: "gamepad1",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      image: "/assests/flashsale/gamepad.png",
       width: 190,
      height: 180,
    },
    {
      id: "keyboard1",
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      image: "/assests/flashsale/keyboard.png",
      width: 190,
      height: 180,
    },
    {
      id: "monitor1",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 5,
      image: "/assests/flashsale/tv.png",
      width: 190,
      height: 180,
    },
    {
      id: "chair1",
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      rating: 5,
      image: "/assests/flashsale/chair.png",
      width: 190,
      height: 180,
    },
     {
      id: 'cart1',
      name: 'Cesar Cat',
      price: 260,
      oldPrice: 260,
      rating: 5,
      image: '/assests/product/dogbreed.jpeg',
      width: 115,
      height: 180,
    },
    {
      id: 'cart2',
      name: 'Canon D-7865',
      price: 960,
      oldPrice: 1160,
      rating: 5,
      image: '/assests/product/camera.png',
      width: 200,
      height: 180,
    },
    {
      id: 'cart3',
      name: 'Dell Core-i5',
      price: 160,
      oldPrice: 170,
      rating: 5,
      image: '/assests/product/laptop.png',
      width: 200,
      height: 180,
    },
    {
      id: 'cart4',
      name: 'Samsole Men Kit',
      price: 360,
      oldPrice: 0,
      rating: 5,
      image: '/assests/product/facewash.png',
      width: 180,
      height: 180,
    },
    {
      id: 'cart5',
      name: 'Sport Toy Car',
      price: 260,
      oldPrice: 300,
       rating: 2,
      image: '/assests/product/car.png',
      width: 160,
      height: 180,
    },
    {
      id: 'cart6',
      name: 'Nike Sport Shoes',
      price: 960,
      oldPrice: 1160,
      rating: 2,
      image: '/assests/product/shoes.png',
      width: 200,
      height: 180,
    },
    {
      id: 'cart7',
      name: 'Playstation Game Pad',
      price: 160,
      oldPrice: 170,
      rating: 3.5,
      image: '/assests/product/gamepad2.png',
      width: 350,
      height: 180,
    },
    {
      id: 'cart8',
      name: 'Winter Hoodie',
      price: 360,
      oldPrice: 0,
      rating: 3,
      image: '/assests/product/jacket.png',
      width: 200,
      height: 180,
    },
     {
      id: "camera2",
      name: "Canon EOS R5",
      price: 260,
      oldPrice: 260,
      rating: 5,
      image: "/assests/electronic/camera2.webp",
      width: 200,
      height: 180,
    },
    {
      id: "blackairbuds1",
      name: "Sony WF-1000XM5",
      price: 299.99,
      oldPrice: 400,
      rating: 4.5,
      image: "/assests/electronic/blackairbuds.webp",
      width: 200,
      height: 180,
    },
    {
      id: "cctv1",
      name: "Samsung Projector 4k",
      price: 160,
      oldPrice: 170,
      rating: 4.5,
      image: "/assests/electronic/cctv.webp",
      width: 200,
      height: 180,
    },
    {
      id: "cpupad1",
      name: "PlayStation 5",
      price: 360,
      oldPrice: 0,
      rating: 5,
      image: "/assests/electronic/cpupad.webp",
      width: 700,
      height: 180,
    },
    {
      id: "headphone1",
      name: "Bose QuietComfort 45",
      price: 120,
      oldPrice: 160,
      rating: 5,
      image: "/assests/electronic/headphone.webp",
       width: 190,
      height: 180,
    },
      {
      id: 'RoseGold1',
      name: 'Elite Smartwatch',
      price: 160,
      oldPrice: 170,
      rating: 3.5,
      image: '/assests/electronic/RoseGold1.webp',
      width: 170,
      height: 180,
    },
    {
      id: "laptop1",
      name: "MacBook Pro 16",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      image: "/assests/electronic/laptop2.webp",
      width: 190,
      height: 180,
    },
    {
      id: "smartphone1",
      name: "Samsung Galaxy S23",
      price: 370,
      oldPrice: 400,
      rating: 5,
      image: "/assests/electronic/smartphone.webp",
      width: 190,
      height: 180,
    },
    {
      id: "laptop2",
      name: "ASUS ROG Zephyrus G16",
      price: 375,
      oldPrice: 400,
      rating: 5,
      image: "/assests/electronic/laptop3.webp",
      width: 190,
      height: 180,
    },
     {
      id: 'smartwatch1',
      name: 'Garmin Venu 2',
      price: 260,
      oldPrice: 260,
      rating: 5,
      image: '/assests/electronic/smartwatch.webp',
      width: 150,
      height: 180,
    },
    {
      id: 'whiteairbuds1',
      name: 'Apple AirPods Pro 2nd gen',
      price: 960,
      oldPrice: 1160,
      rating: 5,
      image: '/assests/electronic/whiteairbuds.webp',
      width: 200,
      height: 180,
    },
    {
      id: 'jblsound1',
      name: 'JBL Ultra Booster',
      price: 160,
      oldPrice: 170,
      rating: 5,
      image: '/assests/electronic/jblsound.png',
      width: 200,
      height: 180,
    },
    {
      id: 'headphone2',
      name: 'Boat Headphone',
      price: 360,
      oldPrice: 0,
      rating: 5,
      image: '/assests/electronic/headphone2.png',
      width: 180,
      height: 180,
    },
    {
      id: 'cpupad2',
      name: 'Retro Game Wizard ',
      price: 260,
      oldPrice: 300,
       rating: 2,
      image: '/assests/electronic/cpupad2.png',
      width: 160,
      height: 180,
    },
    {
      id: 'watch1',
      name: 'Apple Watch Series 9 ',
      price: 960,
      oldPrice: 1160,
      rating: 2,
      image: '/assests/electronic/watch.png',
      width: 220,
      height: 180,
    },
   
    {
      id: 'Jaguar1',
      name: 'Jaguar Smart Watch',
      price: 360,
      oldPrice: 0,
      rating: 3,
      image: '/assests/electronic/Jaguar.webp',
      width: 200,
      height: 180,
    },
  ];

  // Sab refs aur inViews ek sath yahan banate hain
  const productRefs = products.map(() => useRef(null));
  const inViews = productRefs.map((ref) => useInView(ref, { once: false }));

  const handleAdd = (product: any) => {
    addToCart({ ...product, quantity: 1 });
        showToast(`${product.name} added to cart!`, "succes"); 
  };

  const handleWishlistClick = (product: any) => {
    addToWishlist(product);
       showToast(`${product.name} added to wishlist`, "info");
  };

    // for breadcrumb
  const breadcrumbRef = useRef(null);
  const isInView = useInView(breadcrumbRef, {
    once: false,
  });

  return (
    
  <div className="md:w-[1170px] p-7 md:mx-auto">
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
            <Link href={"home"}>
              <p className={`${poppin.className} text-[14px] text-black/40`}>
                /
              </p>
            </Link>
            <Link href={"#"}>
              <h2 className={`${poppin.className} text-[14px] text-black`}>
                All products
              </h2>
            </Link>
          </div>
        </motion.div>
     

<div className=" mt-14 mx-auto flex flex-col md:flex-row justify-between gap-14 md:gap-0 md:gap-y-16 flex-wrap ">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          ref={productRefs[index]}
          initial={{ opacity: 0, y: 40 }}
           animate={inViews[index] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.01 }}
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
          {[...Array(Math.floor(product.rating || 0))].map((_, i) => (
  <FaStar key={i} className="text-starcolor w-[20px]" />
))}

{(product.rating || 0) % 1 !== 0 && (
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
    </div>
  );
};

export default Allrpoduct;
