// components/Footer.js

import React from "react";
import styles from "./Footer.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (

     <footer className="w-full lg:px-[100px] md:px-[50px] px-[25px] py-[50px] bg-black-300">
          
          <div className="flex md:flex-row flex-col lg:gap-20 md:gap-10">
               <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-8 w-[50%]">
                    <div>
                         <Image src={"/images/logo.png"} width={200} height={200} alt="logo"/>
                    </div>
                    <div className="lg:mt-5">
                         <h4 className="text-white text-2xl font-semibold ">Quick Links</h4>
                         <ul className={styles.linkList}>
                         <li >
                              <a href="/" className=" text-md text-[#56616B] hover:text-white  cursor-pointer  hover:underline">Home</a>
                         </li>
                         <li >
                              <a href="/services" className=" text-md text-[#56616B] hover:text-white  cursor-pointer  hover:underline">Services</a>
                         </li>
                         <li>
                              <a href="/about" className=" text-md text-[#56616B] hover:text-white  cursor-pointer  hover:underline">About</a>
                         </li>
                         <li>
                              <a href="/industries" className=" text-md text-[#56616B] hover:text-white cursor-pointer  hover:underline">Industries</a>
                         </li>
                         <li >
                              <a href="/contact" className=" text-md text-[#56616B] cursor-pointer  hover:underline hover:text-white">Contact Us</a>
                         </li>
                         </ul>
                    </div>
               </div>
               <div className="mt-5">
                    <p className="text-white text-sm font-bold tracking-wide mb-5">Ready to partner with us? Get in touch with our team today to discuss how IFZINA can support your next project.  </p>
                    <p className="text-[#56616B] text-sm leading-7 "><span>Address:</span> IFZINA , 11 Odetola Avenue, Alagbado Lagos, Nigeria </p>
               
                    <p className="text-[#56616B]  text-sm leading-7" ><span>Phone:</span> +234-803-4090741 </p>
               
                    <p className="text-[#56616B]  text-sm leading-7"><span>Email:</span> info@ifzina.com</p>
               

               </div>
          </div>

     </footer>
    
  );
};

export default Footer;
