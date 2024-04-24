"use client"
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import Banner from "@/components/HomeBanner/HomeBanner";
import HomeMarket from "@/components/HomeMarket/HomeMarket";
import HomeServices from "@/components/HomeServices/HomeServices";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";
export default function Home() {

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

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <section>
        <Banner 
          first={
            <>
              <h1 className="font-semibold">Welcome to IFZINA</h1>
              <p>Your premier Engineering, Procurement, and Construction partner in Nigeria.</p>
              <a href="" class="hero-btn">Visit us to know more</a>
            </>
          }
        />
      </section>
      
      <section id="about" className="py-">
        <HomeAbout/>
      </section>

      <section>
        <HomeServices/>
      </section>
      {/* <section className="flex flex-col lg:mt-20 sm:mt-32 mt- md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]"> */}
        <HomeMarket/>
        {/* </section> */}

      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%]  pt-5'>
                <h1 className='font-bold text-[#131316] md:text-4xl text-xl  mb-[5px] text-center'>Testimonials</h1>
                <p className='text-[16px] font-[500] text-[#56616B] leading-6 text-center'>Don{"'"}t just take our word for it. Hear what our clients have to say about working with us</p>

                <div className='flex md:flex-row flex-col md:gap-20 gap-5 mt-10'>
                    <div className='w-[100%] md:w-[50%] flex lg:flex-row flex-col gap-5 rounded-lg bg-[#EFF1F6] md:p-[32px] p-[20px] '>
                          <img src='/images/bg1.jpg' className='w-[60px] h-[60px] rounded-full'/>
                          <div>
                              <p className='text-[14px] font-[500] text-[#56616B] leading-6'> IFZINA exceeded our expectations with their professionalism and attention to detail. Their dedication to delivering on time and within budget is truly commendable.</p>
                              <h2 className='font-bold text-[#56616B] text-xl mt-4'>John Doe</h2>
                          </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] flex lg:flex-row flex-col gap-5 rounded-lg bg-[#EFF1F6] md:p-[32px] p-[20px] '>
                          <img src='/images/bg1.jpg' className='w-[60px] h-[60px] rounded-full'/>
                          <div>
                              <p className='text-[14px] font-[500] text-[#56616B] leading-6'> IFZINA exceeded our expectations with their professionalism and attention to detail. Their dedication to delivering on time and within budget is truly commendable.</p>
                              <h2 className='font-bold text-[#56616B] text-xl mt-4'>John Doe</h2>
                          </div>
                    </div>
                </div>
          </div>
      </section>

      <div>
        {showButton && (
          <button onClick={topFunction} id="myBtn" title="Go to top" className={`fixed right-4 bottom-4 animate-bounce w-16 text-[#004080] z-50 h-16 ${showButton ? 'block' : 'hidden'}`}>
            <IoArrowUpCircleSharp className="w-full h-full" />
          </button>
        )}
      </div>
    </div>
  );
}
