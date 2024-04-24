import React from 'react'
import styles from './HomeAbout.module.css'

function HomeAbout() {
  return (
   <section className={styles.course}>
      <h1 className={styles.h1}>About Us</h1>
      {/* <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}

      <div className={styles.row}>
         <div className={`${styles.col} bg-[#EFF1F6]`}>
            <h3 className={styles.h3}>Company Overview</h3>
            <p className={styles.p}>IFZINA is a dynamic EPC company based in Lagos, Nigeria, specializing in providing comprehensive engineering, procurement, and construction services across various industries.</p>
         </div>
         <div className={`${styles.col} bg-[#EFF1F6]`}>
            <h3 className={styles.h3}>Mission and Vision</h3>
            <p className={styles.p}>
               Our mission at IFZINA is to deliver innovative and sustainable solutions that exceed client expectations while contributing to the socio-economic development of Nigeria. We envision being the leading EPC provider in the region, recognized for our commitment to excellence and integrity.
            </p>
         </div>
         <div className={`${styles.col} bg-[#EFF1F6]`}>
            <h3 className={styles.h3}>Values and Philosophy</h3>
            <p className={styles.p}>
               At IFZINA, we are guided by the values of integrity, professionalism, collaboration, and excellence. We believe in fostering long-term relationships with our clients, suppliers, and stakeholders based on mutual respect and trust.
            </p>
         </div>
      </div>

   </section>
  )
}

export default HomeAbout