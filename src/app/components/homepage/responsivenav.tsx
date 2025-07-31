import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Link from "next/link";
// icons import
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const ResNav = () => {
  const navlink = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
    { name: "Sign Up", link: "/signup" },
  ];
  return (
    <>
    <div className="md:w-[1170px] md:h-[100px]    mx-auto flex justify-between items-center p-7 ">
      <div className="  md:w-[675px] md:flex justify-between pt-6 items-center">
        <div>
          <h2 className={`${inter.className} text-[24px] tracking-wider font-bold text-black`}>
            Exclusive
          </h2>
        </div>
    
      </div>

      
    </div>
 
    </>
  );
};

export default ResNav;
