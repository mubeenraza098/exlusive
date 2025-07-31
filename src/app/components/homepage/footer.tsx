import { BiRightArrow } from "react-icons/bi";
import { Inter, Poppins } from "next/font/google";
import { FaFacebookF } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({ subsets: ["latin"], weight: "500" });
const poppin2 = Poppins({ subsets: ["latin"], weight: "400" });
const Footer = () => {
  return (
   
    <div className="bg-black ">
    <div
      className={`md:w-full md:mt-10 md:h-[440px]  md:p-0 bg-black md:flex md:flex-row  md:items-center`}
    >
      {/* main div */}
      <div className={`md:w-[1170px] md:h-[236px] md:mx-auto   p-7 `}>
        <div className="md:flex md:justify-between">
          {/* 2nd main div  */}

          {/* 1st box  */}
          <div
            className={`md:w-[217px] md:h-[188px]   md:flex md:flex-col md:justify-between `}
          >
            <div
              className={`md:w-[206px] md:h-[124px] text-center md:text-start  md:flex md:flex-col md:justify-between`}
            >
              <h2
                className={`${inter.className} text-[24px] font-bold  text-white`}
              >
                Exclusive
              </h2>
              <h2 className={`${poppin.className}text-[20px] text-white`}>
                Subscribe
              </h2>
              <p className={`${poppin.className}text-[16px] text-white`}>
                Get 10% off your first order
              </p>
            </div>
            <div
              className={`w-[217px] h-[48px] border-2  border-white flex items-center mx-auto md:mx-0 gap-8  `}
            >
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`${poppin2.className} text-[16px] w-[140px] focus:outline-none bg-black pl-3 text-white`}
                />
              </div>
              <div className={`w-[24px] h-[24px] bg-black`}>
                <BiRightArrow className={`text-[20px] text-white`} />
              </div>
            </div>
          </div>
          {/* 1st box end  */}

          {/* 2nd box  */}
          <div
            className={`md:w-[175px] mt-8 md:mt-0 md:h-[180px] text-center md:text-start  md:flex md:flex-col md:justify-between `}
          >
            <div>
              <h2
                className={`${poppin.className} text-[20px] font-bold text-white`}
              >
                Support
              </h2>
            </div>
            <div
              className={`md:w-[175px] md:h-[128px] md:flex md:flex-col md:justify-between`}
            >
              <p className={`${poppin.className}text-[16px] text-white`}>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className={`${poppin.className}text-[16px] text-white`}>
                exclusive@gmail.com
              </p>
              <p className={`${poppin.className}text-[16px] text-white`}>
                +88015-88888-9999
              </p>
            </div>
          </div>
          {/* 2nd box  */}

          {/* 3rd box  */}
          <div
            className={`md:w-[123px] mt-8 md:mt-0  md:h-[236px] text-center md:text-start  md:flex md:flex-col md:justify-between`}
          >
            <div>
              <h2
                className={`${poppin.className} text-[20px] font-bold text-white`}
              >
                Account
              </h2>
            </div>
            <div className={`md:w-[123px] md:h-[184px]  `}>
              <ul className="md:flex md:flex-col gap-4">
                <Link href={"/"}>
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    My Account
                  </li>
                </Link>
                <Link href={""}>
                  {" "}
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    Login / Register
                  </li>
                </Link>
                <Link href={""}>
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    Cart
                  </li>
                </Link>
                <Link href={""}>
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    Wishlist
                  </li>
                </Link>
                <Link href={""}>
                  {" "}
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    Shop
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* 3rd box  */}

          {/* 4th box  */}
          <div
            className={`md:w-[109px] mt-8 md:mt-0  md:h-[196px] text-center md:text-start  md:flex md:flex-col md:justify-between`}
          >
            <div>
              <h2
                className={`${poppin.className} text-[20px] font-bold text-white`}
              >
                Account
              </h2>
            </div>
            <div className={`md:w-[109px] md:h-[144px]  `}>
              <ul className="md:flex md:flex-col gap-4">
                <Link href={"/"}>
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    Privacy Policy
                  </li>
                </Link>
                <Link href={""}>
                  {" "}
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    Terms Of Use
                  </li>
                </Link>
                <Link href={""}>
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    FAQ
                  </li>
                </Link>
                <Link href={""}>
                  <li className={`${poppin2.className} text-[16px] text-white`}>
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* 4th box  */}

          {/* 5th box  */}
          <div
            className={`md:w-[198px] mt-8 md:mt-0  md:h-[210px] text-center md:text-start  md:flex md:flex-col md:justify-between  `}
          >
            <div>
              <h2
                className={`${poppin.className} text-[20px] font-bold text-white`}
              >
                Download App
              </h2>
            </div>

            <div
              className={`md:w-[198px] md:h-[110px] md:flex md:items-center `}
            >
              <h2 className={`${poppin.className} text-[12px] text-white/40`}>
                Save $3 with App New User Only
              </h2>
            </div>

            <div
              className={`md:w-[198px]  md:h-[110px] flex md:flex-row    md:mx-0  md:justify-between `}
            >
              <div className="flex mx-auto md:mx-0 ">
              <div className="mt-2 md:mt-0">
                <Image
                  src={"/assests/section/qrcode.jpeg"}
                  width={80}
                  height={80}
                  alt="qrcode"
                  className={`border-2 border-white`}
                />
              </div>

              <div className={`md:w-[110px] md:h-[84px]  -mt-9`}>
                <div className={`md:w-[110px] md:h-[40px] `}>
                  <Image
                    src={"/assests/section/playstore.png"}
                    width={104}
                    height={30}
                    alt="qrcode"
                    className={`w-[120px]  `}
                  />
                </div>

                <div
                  className={`md:w-[110px] md:h-[40px] ml-1 -mt-16 md:-mt-0  `}
                >
                  <Image
                    src={"/assests/section/appstore.png"}
                    width={104}
                    height={34}
                    alt="qrcode"
                    className={`w-[105px] md:w-[100px]`}
                  />
                </div>
              </div>
              </div>
            </div>

            <div  
              className={`md:w-[168px] h-[24px] md:mt-4 justify-center flex md:gap-8 gap-6 text-white`}
            >
              <FaFacebookF className="text-[20.06px]" />
              <PiTwitterLogo className="text-[25.06px]" />
              <RxInstagramLogo className="text-[22px]" />
              <RiLinkedinLine className="text-[22px]" />
            </div>
          </div>

          {/* 5th box  */}

          {/* end 2nd main div  */}
        </div>

        {/* white background  */}
      </div>

      {/* end main div */}
    </div>
    
    {/* copy right   */}
    <div className={`flex items-center gap-2 justify-center  md:-mt-8 pb-7 md:pb-0 `}>
        <FaRegCopyright className="text-white/40 text-[16px]"/>
        <h2 className={` ${poppin2.className} text-[16px] text-white/40`}>Copyright Rimel 2022. All right reserved</h2>
      </div>

      </div>
   
  );
};

export default Footer;
