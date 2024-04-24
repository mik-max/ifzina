import React from 'react'
import styles from './HomeAbout.module.css'

function HomeAbout() {
  return (
   <section className={styles.course}>
      <h1 className={styles.h1}>About Us</h1>
      {/* <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}

      <div className={styles.row}>
         <div className={`${styles.col} bg-[#EFF1F6]`}>
            <div className='w-[100%] md:w-[100%]'>
                  <img src="/images/overview.jpg" alt="" className='rounded-md' />
            </div>
            <h3 className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}>Company Overview</h3>
            <p className={`${styles.p} `}>
               IFZINA is a dynamic EPC company based in Lagos, Nigeria, specializing in providing comprehensive engineering, procurement, and construction services across various industries.
            </p>
         </div>
         <div className={`${styles.col} bg-[#EFF1F6]`}>
            <div className='w-[100%] md:w-[100%]'>
                  <img src="/images/mission.jpg" alt="" className='rounded-md' />
            </div>
            <h3 className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}>Mission and Vision</h3>
            <p className={styles.p}>
               Our mission at IFZINA is to deliver innovative and sustainable solutions that exceed client expectations while contributing to the socio-economic development of Nigeria. We envision being the leading EPC provider in the region, recognized for our commitment to excellence and integrity.
            </p>
         </div>
         <div className={`${styles.col} bg-[#EFF1F6]`}>
            <div className='w-[100%] md:w-[100%]'>
                  <img src="/images/value1.jpg" alt="" className='rounded-md' />
            </div>
            <h3 className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}>Values and Philosophy</h3>
            <p className={styles.p}>
               At IFZINA, we are guided by the values of integrity, professionalism, collaboration, and excellence. We believe in fostering long-term relationships with our clients, suppliers, and stakeholders based on mutual respect and trust.
            </p>
         </div>
      </div>
      <div className=' justify-start items-start flex'>
         <a href="/about" className="flex justify-center items-center w-[100%] lg:w-72 bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-8 text-[14px]  rounded-[100px] uppercase">Learn more ....</a>
      </div>
   </section>
  )
}

export default HomeAbout