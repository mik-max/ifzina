"use client"
import React from 'react'
import { FadeIn } from './FadeIn'
import HomeAbout from './HomeAbout/HomeAbout'
import Banner from './HomeBanner/HomeBanner'
import HomeMarket from './HomeMarket/HomeMarket'
import Link from 'next/link'

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import {motion} from 'framer-motion'

const Home = () => {
     const [showButton, setShowButton] = useState(false);

     useEffect(() => {
       window.onscroll = function() {
         scrollFunction();
       };
     }, []);
   
     const scrollFunction = () => {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         setShowButton(true);
       } else {
         setShowButton(false);
       }
     };
   
     const fadeInAnimation = {
        initial: {
             opacity: 0,
             y:100,
        },
        animate: (index) => ({
             opacity: 1,
             y:0,
             transition: {
                  ease: "easeInOut",
                  delay:0.05 * index,
                  duration: 1
             }
        })
     }
     const serviceImageAnimation = {
        initial: {
             opacity: 0,
             x:-100,
        },
        animate: {
             opacity: 1,
             x:0,
             transition: {
                  ease: "easeInOut",
                  delay:0.05 ,
                  duration: 1
             }
        }
     }
   
     const topFunction = () => {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
     };
   
      const [inputValue, setInputValue] = useState("");
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      const handleLinkClick = () => {
        localStorage.setItem("inputValue", inputValue);
        setInputValue("");
      };

  return (
   <div className='mt-[100px]'>
      <section>
        <Banner
          first={
            <>
              <h1 className="font-semibold">Welcome to IFZINA</h1>
              <p>Your Premier EPC Partner in Nigeria.</p>
              <a href="" class="hero-btn">
                Visit us to know more
              </a>
            </>
          }
        />
      </section>
      <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%]"
        >
          <img src="/images/welcome2.jpg" alt="" className="rounded-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%] lg:mt-8 pt-[40px] lg:pt-[70px]"
        >
          <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
            Welcome to IFZINA
          </h2>
          <p className="text-[15px] font-[500] mb-10 text-[#56616B] leading-6">
            {`  At IFZINA, we are dedicated to delivering innovative and sustainable solutions that exceed client expectations while contributing to the socio-economic development of Nigeria. With our comprehensive engineering, procurement, and construction services, we bring global expertise and local insight to projects across various industries.`}
          </p>
          <p className="text-[15px] font-[500] mb-10 text-[#56616B] leading-6">
            {`  From the exploration and production of oil and gas to the development of renewable energy solutions, IFZINA is committed to driving economic growth, enhancing infrastructure, and promoting environmental stewardship in Nigeria. Our team of highly skilled professionals combines expertise with integrity to deliver cost-effective and reliable solutions that make a difference.`}
          </p>
          <p className="text-[15px] font-[500] mb-6 text-[#56616B] leading-6">
            {` Explore our website to learn more about our company, services, markets, and career opportunities. Contact us today to discuss how IFZINA can partner with you to bring your vision to life.`}
          </p>
        </motion.div>
      </section>

      <FadeIn className="py-">
        <HomeAbout />
      </FadeIn>

      <section className="md:mt-[40px] mt-[20px]">
        <h1 className="font-bold text-[#131316] md:text-4xl text-xl mb-[10px] text-center">
          Services
        </h1>
        <p className="text-[15px] font-[500] text-[#56616B] leading-6 text-center">
          Explore all of our services
        </p>
        <div className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
          <motion.div
            className="w-[100%] md:w-[50%]"
            variants={serviceImageAnimation}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <img src="/images/service.jpg" alt="" className="rounded-md" />
          </motion.div>
          <div className="flex flex-col w-[100%] md:w-[50%] pt-5 gap-10">
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              custom={0}
              className="bg-[#EFF1F6] p-5 rounded-md  border border-l-[5px] border-b-0 border-t-0 border-r-0 border-[#56616B]"
            >
              <h1 className="font-bold text-[#131316] md:text-2xl text-xl  mb-[10px]">
                Engineering Design and Consultation
              </h1>
              <p className="text-[15px] font-[500] text-[#56616B] leading-6">
                At IFZINA, we believe that every project is unique and deserves
                a tailored approach. Our engineering design and consultation
                services are crafted to fit the specific needs and goals of each
                client. From brainstorming innovative solutions to providing
                detailed engineering designs, our team combines global expertise
                with local insights to deliver practical and sustainable
                outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              custom={1}
              className="bg-[#EFF1F6] p-5 rounded-md  border border-l-[5px] border-b-0 border-t-0 border-r-0 border-[#56616B]"
            >
              <h1 className="font-bold text-[#131316] md:text-2xl text-xl  mb-[10px]">
                Turnkey Solutions for EPC Projects
              </h1>
              <p className="text-[15px] font-[500] text-[#56616B] leading-6">
                When it comes to turnkey solutions for EPC projects, IFZINA is
                your trusted partner from start to finish. We take pride in our
                ability to seamlessly integrate engineering, procurement, and
                construction services to deliver fully integrated solutions that
                exceed expectations. With a commitment to excellence and a
                passion for innovation, we turn challenges into opportunities
                and dreams into reality.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              custom={2}
              className="bg-[#EFF1F6] p-5 rounded-md  border border-l-[5px] border-b-0 border-t-0 border-r-0 border-[#56616B]"
            >
              <h1 className="font-bold text-[#131316] md:text-2xl text-xl  mb-[10px]">
                Welding and Fabrications
              </h1>
              <p className="text-[15px] font-[500] text-[#56616B] leading-6">
                Precision and quality are non-negotiable when it comes to
                welding and fabrications. At IFZINA, we combine craftsmanship
                with cutting-edge technology to deliver superior results that
                stand the test of time. From structural steel fabrication to
                custom metalwork, we take pride in our attention to detail and
                our commitment to excellence in every project we undertake.
              </p>
            </motion.div>
            <div className="w-[100%] flex justify-end items-center ">
              <a
                href="/service"
                className="flex justify-center items-center w-[100%] lg:w-72 bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-8 text-[14px]  rounded-[100px] uppercase"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[60vh] flex items-center md:mt-10 mt-5 bg-[#C90] rounded-3xl md:mx-[25px] mx-[15px] mb-[25px] py-[50px] lg:px-[100px] px-[20px]">
        <div className="relative ">
          <h1 className="text-[#131316] lg:text-5xl md:text-4xl text-2xl font-bold tracking-tighter mb-[5px]">
            With over 10k+ satisfied clients,
          </h1>
          <h3 className="text-[#131316] md:text-xl text-md font-bolsemibold tracking-tighter">
            IFZINA stands out as one of your most trusted premier EPC partner in
            Nigeria.
          </h3>
          <form autoComplete="off">
            <div className="flex mt-8 items-center bg-white rounded-[100px] md:h-[72px] h-[56px] md:w-[fit-content] w-[100%] text-black md:text-[18px] text-[16px] pr-[7px]">
              <input
                type="email"
                required
                className="md:text-[18px] text-[#56616B] text-[16px] pl-[20px] rounded-[100px] bg-white focus:outline-none md:w-[350px]  tracking-tight "
                placeholder="email address"
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="md:block hidden">
                <Link
                  href={"/contact"}
                  onClick={handleLinkClick}
                  className="flex justify-center items-center bg-[#C90] h-[56px] my-[7px] tracking-tight text-[#131316] cursor-pointer px-5  rounded-[100px]"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="md:hidden mt-5 block w-[100%] ">
              <Link
                href={"/contact"}
                onClick={handleLinkClick}
                className="flex justify-center items-center w-[100%] bg-black-300 h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-5 text-[14px]  rounded-[100px] uppercase"
              >
                Get started
              </Link>
            </div>
          </form>
        </div>
      </section>

      <FadeIn>
        <HomeMarket />
      </FadeIn>

      <FadeIn className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
        <div className="w-[100%]  pt-5">
          <h1 className="font-bold text-[#131316] md:text-4xl text-xl  mb-[5px] text-center">
            Testimonials
          </h1>
          <p className="text-[16px] font-[500] text-[#56616B] leading-6 text-center">
            Don{"'"}t just take our word for it. Hear what our clients have to
            say about working with us
          </p>

          <div className="flex md:flex-row flex-col md:gap-20 gap-5 mt-10">
            <div className="w-[100%] md:w-[50%] flex lg:flex-row flex-col gap-5 rounded-lg bg-[#EFF1F6] md:p-[32px] p-[20px] ">
              <img
                src="/images/bg1.jpg"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div>
                <p className="text-[14px] font-[500] text-[#56616B] leading-6">
                  {" "}
                  IFZINA exceeded our expectations with their professionalism
                  and attention to detail. Their dedication to delivering on
                  time and within budget is truly commendable.
                </p>
                <h2 className="font-bold text-[#56616B] text-xl mt-4">
                  John Doe
                </h2>
              </div>
            </div>
            <div className="w-[100%] md:w-[50%] flex lg:flex-row flex-col gap-5 rounded-lg bg-[#EFF1F6] md:p-[32px] p-[20px] ">
              <img
                src="/images/bg1.jpg"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div>
                <p className="text-[14px] font-[500] text-[#56616B] leading-6">
                  {" "}
                  IFZINA exceeded our expectations with their professionalism
                  and attention to detail. Their dedication to delivering on
                  time and within budget is truly commendable.
                </p>
                <h2 className="font-bold text-[#56616B] text-xl mt-4">
                  John Doe
                </h2>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div>
        {showButton && (
          <button
            onClick={topFunction}
            id="myBtn"
            title="Go to top"
            className={`fixed flex justify-center items-center right-4 bottom-4 animate-bounce w-16 rounded-full bg-black-300  z-50 h-16 ${
              showButton ? "block" : "hidden"
            }`}
          >
            <FaArrowUp color="#fff" className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Home