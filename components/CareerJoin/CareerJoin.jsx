"use client"
import React from 'react'
import {motion} from "framer-motion"

function CareerJoin() {
  return (
    <div>
      <main className="flex flex-col gap-5 mt-20">
        {/* <h1 className=" block font-display text-3xl text-center w-full font-semibold mt-8">Markets</h1> */}
        <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[40px]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="w-[100%] md:w-[50%]"
          >
            <img src="/images/team2.jpg" alt="" className="rounded-md" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="w-[100%] md:w-[50%] pt-5"
          >
            <h1 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
              Join Our Team
            </h1>
            <p className="text-[15px] font-[500] text-[#56616B] leading-6">
              {`At IFZINA, we believe that our people are our greatest asset. We
              are committed to attracting, developing, and retaining top talent
              who share our passion for excellence, innovation, and
              collaboration. If you're looking for a rewarding career where you
              can make a meaningful impact and grow both personally and
              professionally, we invite you to explore opportunities to join our
              dynamic team.`}
            </p>
          </motion.div>
        </section>

        {/* <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[40px]'  >
               <motion.div initial={{ opacity: 0, y:100 }} whileInView={{opacity: 1, y:0 }}   transition={{ ease: "easeInOut",  duration: 1 }} viewport={{once:true}} className='w-[100%] md:w-[50%] pt-5'>
                     <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Manufacturing and Industrial Facilities</h1>
                     <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA supports Nigeria{"'"}s manufacturing sector with state-of-the-art industrial facilities, factories, warehouses, and industrial parks. Through our EPC services, we facilitate economic diversification and industrialization, creating opportunities for growth and prosperity.</p>
               </motion.div>
      
               <motion.div initial={{ opacity: 0 , x:100}} whileInView={{ opacity: 1, x:0 }}  transition={{ ease: "easeInOut",  duration: 1 }} viewport={{once: true}} className='w-[100%] md:w-[50%]'>
                     <img src="/images/manufacturing.jpg" alt="" className='rounded-md' />
               </motion.div>
               
            </section>
            <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[40px]'  >
               
               <motion.div initial={{ opacity: 0 , x:-100}} whileInView={{ opacity: 1, x:0 }}  transition={{ ease: "easeInOut",  duration: 1 }} viewport={{once: true}} className='w-[100%] md:w-[50%]'>
                     <img src="/images/agriculture.jpg" alt="" className='rounded-md' />
               </motion.div>
               <motion.div initial={{ opacity: 0, y:100 }} whileInView={{opacity: 1, y:0 }}   transition={{ ease: "easeInOut",  duration: 1 }} viewport={{once:true}} className='w-[100%] md:w-[50%] pt-5'>
                     <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Agriculture and Agribusiness</h1>
                     <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA contributes to Nigeria{"'"}s agricultural sector with infrastructure development for irrigation systems, storage facilities, and processing plants. By enhancing agricultural productivity and value chain efficiency, we support food security and economic development in rural communities.</p>
               </motion.div>
               
            </section> */}
        <div className="mt- justify-start items-start flex lg:px-[100px] px-[25px] ">
          <a
            href="/contact"
            className="flex justify-center items-center w-[100%] lg:w-72 bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-8 text-[14px]  rounded-[100px] uppercase"
          >
            Reach Us
          </a>
        </div>
      </main>
    </div>
  );
}

export default CareerJoin;