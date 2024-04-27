import React from 'react'
import { motion } from "framer-motion";

const HomeMarket = () => {
  return (
    <div>
      <div className="w-[100%] text-center mt-5">
        <h1 className="font-bold text-[#131316] md:text-4xl text-xl mb-[10px] text-center">
          Market
        </h1>
        <p className="text-[15px] font-[500] text-[#56616B] leading-6 text-center">
          Explore all our progress in various market space
        </p>
      </div>
      <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%]"
        >
          <img src="/images/oil.jpg" alt="" className="rounded-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%] pt-5"
        >
          <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
            Oil and Gas
          </h2>
          <p className="text-[15px] font-[500] text-[#56616B] leading-6">
            {`  IFZINA brings global expertise and local insight to Nigeria's
            thriving oil and gas industry. With our comprehensive EPC services,
            we support projects across the upstream, midstream, and downstream
            sectors, contributing to the exploration, production,
            transportation, refining, and distribution of Nigeria's abundant oil
            and gas resources.`}
          </p>
        </motion.div>
      </section>
      <section className="flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%] pt-5"
        >
          <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
            Renewable Energy
          </h2>
          <p className="text-[15px] font-[500] text-[#56616B] leading-6">
            With a commitment to sustainability, IFZINA pioneers the development
            of renewable energy projects in Nigeria, including solar, wind,
            hydroelectric, and other clean energy solutions. By harnessing the
            power of renewable resources, we drive environmental stewardship and
            energy independence for future generations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%]"
        >
          <img
            src="/images/renewable-energy.jpg"
            alt=""
            className="rounded-md"
          />
        </motion.div>
      </section>
      <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%]"
        >
          <img src="/images/agriculture.jpg" alt="" className="rounded-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] md:w-[50%] pt-5"
        >
          <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
            Agriculture and Agribusiness
          </h2>
          <p className="text-[15px] font-[500] text-[#56616B] leading-6">
            {`IFZINA contributes to Nigeria's agricultural sector with
            infrastructure development for irrigation systems, storage
            facilities, and processing plants. By enhancing agricultural
            productivity and value chain efficiency, we support food security
            and economic development in rural communities.`}
          </p>
          <div className="w-[100%] flex justify-end items-center mt-4 ">
            <a
              href="/market"
              className="flex justify-center items-center w-[100%] lg:w-72 bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-8 text-[14px]  rounded-[100px] uppercase"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomeMarket
