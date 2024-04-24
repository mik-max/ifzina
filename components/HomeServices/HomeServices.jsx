import React from 'react'
import styles from './HomeServices.module.css'
function HomeServices() {
  return (
    <div>
      <section className={styles.campus}>
         <h1  className={styles.h1}>Services Offered</h1>
         <p  className={styles.p}>
            Contact Us Today to Discuss Your Project Needs and Learn How IFZINA Can Partner With You to Bring Your Vision to Life! 
            {/* <br/> Certainly! Here{"'"}s the revised SERVICE page with the addition of the Training at IFZINA section: */}
         </p>
         
         <div className={`${styles.row} mt-[5%] bg-[#EFF1F block sm:flex justify-center items-center justify-items-center gap-x-5 `}>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/designer3.png"/>
               <div className={styles.layer}>
                  <h3 className={styles.h3}>Engineering Design and Consultation</h3>
               </div>
            </div>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/designer3.png"/>
               <div className={styles.layer}>
                  <h3>Procurement and Supply Chain Management</h3>
               </div>
            </div>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/designer3.png"/>
               <div className={styles.layer}>
                  <h3>Construction and Project Management</h3>
               </div>
            </div>
            {/* <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/designer3.png"/>
               <div className={styles.layer}>
                  <h3>Turnkey Solutions for EPC Projects</h3>
               </div>
            </div> */}
            
         </div>
         <div className={`${styles.row} mt-[5%] bg-[#EFF1F block sm:flex justify-center items-center justify-items-center gap-x-5 `}>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/elect1.jpg"/>
               <div className={styles.layer}>
                  <h3>Service Provider to Major EPC Firms</h3>
               </div>
            </div>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/elect1.jpg"/>
               <div className={styles.layer}>
                  <h3>Service Provider to Major EPC Firms</h3>
               </div>
            </div>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/elect1.jpg"/>
               <div className={styles.layer}>
                  <h3>Service Provider to Major EPC Firms</h3>
               </div>
            </div>
         </div>

      </section>
    </div>
  )
}

export default HomeServices