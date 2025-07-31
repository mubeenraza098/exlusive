import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
const poppin = Poppins({ subsets: ["latin"], weight: "500" });
const poppin1 = Poppins({ subsets: ["latin"], weight: "400" });

const Cart = () => {
  return (
    <div className="md:w-[1170px] md:flex  md:justify-between md:mx-auto md:p-7  gap-5  ">
      <div className="md:h-[350px]  md:flex flex-col ">
        <div className="md:w-[260px] h-[250px]  relative bg-iconcolor rounded-md flex items-center justify-center">
          <Image
            src={"/assests/gamepad.png"}
            alt="gamepad"
            width={190}
            height={180}
            className="w-[190]"
          />
          <div className="w-[55px] h-[26px] bg-[#DB4444] rounded-md  absolute left-[13px] top-3 flex items-center justify-center">
            <p className={`${poppin1.className} text-[12px] text-white`}>
              -40%
            </p>
    
          </div>
          <div className="flex flex-col gap-1 absolute top-3 right-[13px] ">
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><CiHeart className="text-[21px] font-bold"/></div>
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><IoEyeOutline className="text-[16px] font-bold" /></div>
          </div>
          {/* image div end */}
        </div>

        {/* content div */}
        <div className="w-[201px] h-[84px] mt-3 flex flex-col justify-between">
          <h2 className={`${poppin.className} text-[16px] text-black`}>
            HAVIT HV-G92 Gamepad
          </h2>
          <div className="flex gap-3">
            <p className={`${poppin.className} text-[16px] text-dollarcolor`}>
              $120
            </p>
            <p
              className={`${poppin.className} text-[16px] text-black/50 line-through`}
            >
              $160
            </p>
          </div>
          {/* star div */}
          <div className="flex items-center gap-1">
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <p className={`${poppin.className} text-[14px] text-black/50`}>
              (88)
            </p>
          </div>
        </div>
        {/* cartdiv */}
      </div>

      {/* 2nd cart */}
      <div className="h-[350px]  flex flex-col ">
        <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center">
          <Image
            src={"/assests/keyboard.png"}
            alt="keyboard"
            width={190}
            height={180}
            className="w-[190]"
          />
          <div className="w-[55px] h-[26px] bg-[#DB4444] rounded-md  absolute left-[13px] top-3 flex items-center justify-center">
            <p className={`${poppin1.className} text-[12px] text-white`}>
              -40%
            </p>
    
          </div>
          <div className="flex flex-col gap-1 absolute top-3 right-[13px] ">
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><CiHeart className="text-[21px] font-bold"/></div>
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><IoEyeOutline className="text-[16px] font-bold" /></div>
          </div>
          {/* image div end */}
        </div>

        {/* content div */}
        <div className="w-[201px] h-[84px] mt-3 flex flex-col justify-between">
          <h2 className={`${poppin.className} text-[16px] text-black`}>
            HAVIT HV-G92 Gamepad
          </h2>
          <div className="flex gap-3">
            <p className={`${poppin.className} text-[16px] text-dollarcolor`}>
              $120
            </p>
            <p
              className={`${poppin.className} text-[16px] text-black/50 line-through`}
            >
              $160
            </p>
          </div>
          {/* star div */}
          <div className="flex items-center gap-1">
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <p className={`${poppin.className} text-[14px] text-black/50`}>
              (88)
            </p>
          </div>
        </div>
        {/* cartdiv */}
      </div>
      {/* 3rd cart */}
      <div className="h-[350px]  flex flex-col ">
        <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center">
          <Image
            src={"/assests/tv.png"}
            alt="lcd"
            width={190}
            height={180}
            className="w-[190]"
          />
          <div className="w-[55px] h-[26px] bg-[#DB4444] rounded-md  absolute left-[13px] top-3 flex items-center justify-center">
            <p className={`${poppin1.className} text-[12px] text-white`}>
              -40%
            </p>
    
          </div>
          <div className="flex flex-col gap-1 absolute top-3 right-[13px] ">
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><CiHeart className="text-[21px] font-bold"/></div>
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><IoEyeOutline className="text-[16px] font-bold" /></div>
          </div>
          {/* image div end */}
        </div>

        {/* content div */}
        <div className="w-[201px] h-[84px] mt-3 flex flex-col justify-between">
          <h2 className={`${poppin.className} text-[16px] text-black`}>
            HAVIT HV-G92 Gamepad
          </h2>
          <div className="flex gap-3">
            <p className={`${poppin.className} text-[16px] text-dollarcolor`}>
              $120
            </p>
            <p
              className={`${poppin.className} text-[16px] text-black/50 line-through`}
            >
              $160
            </p>
          </div>
          {/* star div */}
          <div className="flex items-center gap-1">
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <p className={`${poppin.className} text-[14px] text-black/50`}>
              (88)
            </p>
          </div>
        </div>
        {/* cartdiv */}
      </div>
      {/* 4th cart */}
      <div className="h-[350px]  flex flex-col ">
        <div className="md:w-[260px] h-[250px] relative bg-iconcolor rounded-md flex items-center justify-center">
          <Image
            src={"/assests/chair.png"}
            alt="gamepad"
            width={190}
            height={180}
            className="w-[190]"
          />
          <div className="w-[55px] h-[26px] bg-[#DB4444] rounded-md  absolute left-[13px] top-3 flex items-center justify-center">
            <p className={`${poppin1.className} text-[12px] text-white`}>
              -40%
            </p>
    
          </div>
          <div className="flex flex-col gap-1 absolute top-3 right-[13px] ">
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><CiHeart className="text-[21px] font-bold"/></div>
            <div className="w-[34px] h-[34px] bg-white flex justify-center items-center rounded-full"><IoEyeOutline className="text-[16px] font-bold" /></div>
          </div>
          {/* image div end */}
        </div>

        {/* content div */}
        <div className="w-[201px] h-[84px] mt-3 flex flex-col justify-between">
          <h2 className={`${poppin.className} text-[16px] text-black`}>
            HAVIT HV-G92 Gamepad
          </h2>
          <div className="flex gap-3">
            <p className={`${poppin.className} text-[16px] text-dollarcolor`}>
              $120
            </p>
            <p
              className={`${poppin.className} text-[16px] text-black/50 line-through`}
            >
              $160
            </p>
          </div>
          {/* star div */}
          <div className="flex items-center gap-1">
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <FaStar className="text-starcolor w-[20px]" />
            <p className={`${poppin.className} text-[14px] text-black/50`}>
              (88)
            </p>
          </div>
        </div>
        {/* cartdiv */}
      </div>
      {/* main div */}
    </div>
  );
};

export default Cart;
