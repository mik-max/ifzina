/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './CareerOpenings.module.css'
import {motion} from "framer-motion"

function CareerOpenings() {
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
        delay: 0.3 * index,
      },
    }),
  };

  return (
    <section className={styles.course}>
      {/* <h1 className={styles.h1}>About Us</h1>
      <p className={styles.p}>Get to know more about us</p> */}

      <div className={styles.row}>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          custom={0}
          className={` ${styles.contentWrap} bg-[#EFF1F6] `}
        >
          <div className="w-[100%] md:w-[100%]">
            <img src="/images/jobOpening.jpg" alt="" className="rounded-t-md" />
          </div>
          <h3
            className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}
          >
            Current Openings
          </h3>
          <p className={`${styles.p} `}>
            Check back soon for updates on current job openings at IFZINA. We
            are continuously growing and expanding our team, and new
            opportunities may arise in various departments and locations. In the
            meantime, feel free to submit your resume and cover letter to [
            <b>careers@ifzina.com</b>](<b>mailto:careers@ifzina.com</b>) for
            consideration for future positions.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          custom={0}
          className={` ${styles.contentWrap} bg-[#EFF1F6] w-[50%] `}
        >
          <div className="w-[100%] md:w-[100%]">
            <img src="/images/apply.jpg" alt="" className="rounded-t-md" />
          </div>
          <h3
            className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}
          >
            How to Apply
          </h3>
          <p className={styles.p}>
            To apply for a position at IFZINA, please send your resume and cover
            letter to [<b>careers@ifzina.com</b>](
            <b>mailto:careers@ifzina.com</b>) with the subject line indicating
            the position you are applying for. In your cover letter, please
            include a brief summary of your qualifications, relevant experience,
            and why you are interested in joining the IFZINA team. We will
            review your application carefully and reach out to qualified
            candidates for further consideration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerOpenings;