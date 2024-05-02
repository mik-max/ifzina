"use client";
import CareerOpenings from './CareerOpenings/CareerOpenings';
import CareerJoin from './CareerJoin/CareerJoin';
import Banner from './Banner/Banner';
import { FadeIn } from './FadeIn';
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import styles from './Career.module.css';
import React, {useState, useEffect} from 'react';

const Career = () => {

     const [showButton, setShowButton]=useState(false)

     const scrollFunction = () => {
          if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
     };
     useEffect(() => {
          window.onscroll = function() {
            scrollFunction();
          };
     }, []);
      
        const fadeInAnimation = {
          initial: {
            opacity: 0,
            y: 100,
          },
          animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeInOut",
              delay: 0.05 * index,
              duration: 1,
            },
          }),
        };
        const serviceImageAnimation = {
          initial: {
            opacity: 0,
            x: -100,
          },
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              ease: "easeInOut",
              delay: 0.05,
              duration: 1,
            },
          },
        };
      
        const topFunction = () => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };

  return (
     <div className='mt-[100px]'>
     <section>
       <Banner
         first={
           <h1 className="text-3xl md:text-6xl  font-semibold text-center my-8">
             Career at IFZINA
           </h1>
           
         }
         bgImage={"bg-about-bg"}
       />
     </section>

     <FadeIn>
       <CareerJoin />
     </FadeIn>

     <section className="md:mt-[40px] mt-[20px]">
       <h1 className="font-bold text-[#131316] md:text-4xl text-xl mb-[10px] text-center">
         Why Choose IFZINA?
       </h1>

       <div className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <motion.div
           className="w-[100%] md:w-[50%]"
           variants={serviceImageAnimation}
           initial="initial"
           whileInView={"animate"}
           viewport={{ once: true }}
         >
           <img src="/images/chooseIfzina.jpg" alt="Choose IFZINA" className="rounded-md" />
         </motion.div>
         <div className="flex flex-col w-[100%] md:w-[50%] pt-5 gap-10">
           <p className="text-[16px] font-[500] text-[#56616B] leading-6 text-center">
             At IFZINA, we offer more than just a job – we offer a fulfilling
             career where you can thrive and succeed. Here are some reasons why
             you should consider joining our team:
           </p>
           <motion.div
             variants={fadeInAnimation}
             initial="initial"
             whileInView={"animate"}
             viewport={{ once: true }}
             custom={0}
             className="bg-[#EFF1F6] p-5 rounded-md  border border-l-[5px] border-b-0 border-t-0 border-r-0 border-[#56616B]"
           >
             <h1 className="font-bold text-[#131316] md:text-2xl text-xl  mb-[10px]">
               Opportunities for Growth
             </h1>
             <p className="text-[15px] font-[500] text-[#56616B] leading-6">
               {`We are committed to investing in our employees' development and
               providing opportunities for growth and advancement within the
               company. Whether you're just starting your career or looking to
               take the next step, IFZINA offers a supportive environment where
               you can reach your full potential.`}
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
               Challenging Projects
             </h1>
             <p className="text-[15px] font-[500] text-[#56616B] leading-6">
               At IFZINA, we tackle some of the most complex and challenging
               projects in the industry. From large-scale infrastructure
               developments to cutting-edge renewable energy projects, our
               diverse portfolio offers endless opportunities to learn, grow,
               and make a difference.
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
               Collaborative Culture
             </h1>
             <p className="text-[15px] font-[500] text-[#56616B] leading-6">
               We believe in the power of collaboration and teamwork. At
               IFZINA, you will work alongside talented professionals from
               diverse backgrounds who share a common goal of delivering
               excellence to our clients. Our inclusive and supportive culture
               fosters creativity, innovation, and mutual respect.
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
               Commitment to Sustainability
             </h1>
             <p className="text-[15px] font-[500] text-[#56616B] leading-6">
               Sustainability is at the core of everything we do at IFZINA. We
               are committed to minimizing our environmental impact, promoting
               social responsibility, and contributing to the communities where
               we operate. Join us in building a more sustainable future for
               generations to come.
             </p>
           </motion.div>
           <div className="w-[100%] flex justify-end items-center ">
             <a
               href="/contact"
               className="flex justify-center items-center w-[100%] lg:w-72 bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-8 text-[14px]  rounded-[100px] uppercase"
             >
               Learn more
             </a>
           </div>
         </div>
       </div>
     </section>

     <section className={styles.staticSection}>
       <div className={styles.staticContentWrap}>
         <div>
           <h1>Join Us</h1>
         </div>
         <div className="p-2">
           <p className='text-left'>
             Are you ready to take the next step in your career? Join us at
             IFZINA and become part of a dynamic team dedicated to excellence,
             innovation, and sustainability. We look forward to welcoming you
             aboard and working together to shape the future of engineering,
             procurement, and construction.
           </p>
         </div>
       </div>
     </section>
     <FadeIn className="py-[3px]">
       <CareerOpenings />
     </FadeIn>
     {/* <section className="h-[60vh] flex items-center md:mt-10 mt-5 bg-[#C90] rounded-3xl md:mx-[25px] mx-[15px] mb-[25px] py-[50px] lg:px-[100px] px-[20px]">
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
             />
             <div className="md:block hidden">
               <button className="flex justify-center items-center bg-[#C90] h-[56px] my-[7px] tracking-tight text-[#131316] cursor-pointer px-5  rounded-[100px]">
                 Get started
               </button>
             </div>
           </div>
           <div className="md:hidden mt-5 block w-[100%] ">
             <button className="flex justify-center items-center w-[100%] bg-black-300 h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-5 text-[14px]  rounded-[100px] uppercase">
               Get started
             </button>
           </div>
         </form>
       </div>
     </section> */}

     {/* <FadeIn className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
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
     </FadeIn> */}

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

export default Career