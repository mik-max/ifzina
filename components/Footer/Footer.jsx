// components/Footer.js

import React from "react";
import styles from "./Footer.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (

     <footer className="w-full lg:px-[100px] md:px-[50px] px-[25px] py-[50px] bg-[#EFF1F6]">
          
          <div className="flex md:flex-row flex-col lg:gap-20 md:gap-10">
               <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-8 w-[50%]">
                    <Link href="/">
                         <Image src={"/images/ifzina_logo.png"} width={200} height={200} alt="logo"/>
                    </Link>
                    <div className="lg:mt-5">
                         <h4 className="text-[#131316] text-2xl font-semibold ">Quick Links</h4>
                         <ul className={styles.linkList}>
                         <li >
                              <a href="/" className=" text-md text-[#56616B] hover:text-[#131316]  cursor-pointer  hover:underline">Home</a>
                         </li>
                         <li >
                              <a href="/service" className=" text-md text-[#56616B] hover:text-[#131316]  cursor-pointer  hover:underline">Services</a>
                         </li>
                         <li>
                              <a href="/about" className=" text-md text-[#56616B] hover:text-[#131316]  cursor-pointer  hover:underline">About</a>
                         </li>
                         <li>
                              <a href="/market" className=" text-md text-[#56616B] hover:text-[#131316] cursor-pointer  hover:underline">Market</a>
                         </li>
                         <li>
                              <a href="/career" className=" text-md text-[#56616B] hover:text-[#131316] cursor-pointer  hover:underline">Career</a>
                         </li>
                         <li >
                              <a href="/contact" className=" text-md text-[#56616B] cursor-pointer  hover:underline hover:text-[#131316]">Contact Us</a>
                         </li>
                         </ul>
                    </div>
               </div>
               <div className="mt-5">
                    <p className="text-[#131316] text-sm font-bold tracking-wide mb-5">Ready to partner with us? Get in touch with our team today to discuss how IFZINA can support your next project.  </p>
                    <p className="text-[#56616B] text-sm leading-7 "><span>Address:</span> 11 Odetola Avenue, Alagbado Lagos, Nigeria </p>
               
                    <p className="text-[#56616B]  text-sm leading-7" ><span>Phone:</span> <a href="tel:+2348034090741" target="_blank">+234-803-4090741 </a></p>
               
                    <p className="text-[#56616B]  text-sm leading-7"><span>Email:</span><a href="mailto:info@ifzina.com" target="_blank"> info@ifzina.com</a></p>
                    <div className="flex space-x-3 mt-4 ">
                         <Link
                               href="https://www.instagram.com/ifzina1?igsh=aGlobTBsemJ6czI="
                              className={` flex justify-center items-center right-4 bottom-4  w-12 rounded-full bg-black-300  z-50 h-12`}
                              target={"_blank"}
                         >
                              <FiInstagram  color="#fff" className="w-6 h-6"  />
                         </Link>
                         <Link
                               href="https://x.com/ifzina71080?t=AKp-XSCqd1nZjOixQcoGBA&s=09"
                              className={` flex justify-center items-center right-4 bottom-4  w-12 rounded-full bg-black-300  z-50 h-12 `}
                              target={"_blank"}
                         >
                              <FaTwitter  color="#fff" className="w-6 h-6"  />
                         </Link>
                         <Link
                               href="https://www.facebook.com/share/TaXiVZWSyUSvuAk7/?mibextid=qi2Omg"
                              className={` flex justify-center items-center right-4 bottom-4  w-12 rounded-full bg-black-300  z-50 h-12`}
                              target={"_blank"}
                         >
                              <FaFacebookF  color="#fff" className="w-6 h-6"  />
                         </Link>
                         {/* <Link
                               href=""
                              className={` flex justify-center items-center right-4 bottom-4  w-12 rounded-full bg-black-300  z-50 h-12`}
                              target={"_blank"}
                         >
                              <FaLinkedinIn  color="#fff" className="w-6 h-6"  />
                         </Link> */}
                    </div>

               </div>
          </div>

     </footer>
    
  );
};

export default Footer;
