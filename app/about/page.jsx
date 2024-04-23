/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Banner from '@/components/Banner/Banner';



const AboutPage = () => {
  return (
    <div>
      <Banner
        first={
          <h1 className="text-3xl md:text-6xl  font-semibold text-center my-8">About Us</h1>
        }
      />

      <main className='flex flex-col md:gap-10 gap-5 mt-5'>
         
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Company Overview</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA is a dynamic EPC company based in Lagos, Nigeria, specializing in providing comprehensive engineering, procurement, and construction services across various industries.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/overview.jpg" alt="" className='rounded-md' />
          </div>
      </section>
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/mission.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Mission and Vision</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>Our mission at IFZINA is to deliver innovative and sustainable solutions that exceed client expectations while contributing to the socio-economic development of Nigeria. We envision being the leading EPC provider in the region, recognized for our commitment to excellence and integrity.</p>
          </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'> Values and Philosophy</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>At  IFZINA, we are guided by the values of integrity, professionalism, collaboration, and excellence. We believe in fostering long-term relationships with our clients, suppliers, and stakeholders based on mutual respect and trust.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/value1.jpg" alt="" className='rounded-md' />
          </div>
      </section>
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/value2.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>History</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>Established in 20XX, IFZINA has rapidly emerged as a trusted name in the Nigerian EPC industry. With a proven track record of successful projects and a dedicated team of professionals, we continue to set new standards of excellence in our field.</p>
          </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Team Members</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>Our team comprises highly skilled engineers, project managers, and technical experts with extensive experience in their respective fields. Led by visionary leaders and seasoned industry professionals, we are committed to delivering high-quality solutions tailored to meet our clients' needs.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/team.jpg" alt="" className='rounded-md' />
          </div>
      </section>
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/price2.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Unique Selling Proposition (USP)</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>What sets IFZINA apart is our unwavering commitment to quality, safety, and innovation. We leverage cutting-edge technologies and best practices to deliver cost-effective solutions while maintaining the highest standards of performance and reliability.</p>
          </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Portfolio</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>Over the years, we have had the privilege of serving a diverse range of clients across industries such as oil and gas, power generation, infrastructure, and renewable energy. Our portfolio showcases our expertise in executing complex projects and delivering tangible results that drive our clients' success.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/profile.jpg" alt="" className='rounded-md' />
          </div>
      </section>
      
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/diversity.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Diversity and Inclusion</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>At IFZINA, we are committed to fostering a culture of diversity and inclusion. We believe that diversity strengthens our team, drives innovation, and enhances our ability to serve our clients effectively. We strive to create an environment where every voice is heard, respected, and valued.</p>
          </div>
         
      </section>
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Ethics</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>Integrity is at the core of everything we do at IFZINA. We conduct our business with honesty, transparency, and accountability, adhering to the highest ethical standards. Our commitment to ethical behavior guides our interactions with clients, partners, and stakeholders, ensuring mutual trust and long-term relationships built on integrity.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/ethics.jpg" alt="" className='rounded-md' />
          </div>
      </section>

      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
     
          <div className='w-[100%]  pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl  mb-[5px] text-center'>Testimonials</h1>
               <p className='text-[16px] font-[500] text-[#56616B] leading-6 text-center'>Don't just take our word for it. Hear what our clients have to say about working with us</p>

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

      </main>

    </div>
  );
};

export default AboutPage;
