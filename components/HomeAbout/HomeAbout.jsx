/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./HomeAbout.module.css";
import { motion } from "framer-motion";

function HomeAbout() {
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
      <h1 className="font-bold text-[#131316] md:text-4xl text-xl mb-[10px] text-center">
        About Us
      </h1>
      <p className="text-[15px] font-[500] sm:mb-5 text-[#56616B] leading-6 text-center">
        Get to know more about us
      </p>

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
            <img src="/images/overview.jpg" alt="" className="rounded-t-md" />
          </div>
          <h3
            className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}
          >
            Company Overview
          </h3>
          <p className={`${styles.p} `}>
            IFZINA is a dynamic EPC company based in Lagos, Nigeria,
            specializing in providing comprehensive engineering, procurement,
            and construction services across various industries.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          custom={0}
          className={` ${styles.contentWrap} bg-[#EFF1F6] `}
        >
          <div className="w-[100%] md:w-[100%]">
            <img src="/images/mission.jpg" alt="" className="rounded-t-md" />
          </div>
          <h3
            className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}
          >
            Mission and Vission
          </h3>
          <p className={`${styles.p} `}>
            Our mission at IFZINA is to deliver innovative and sustainable
            solutions that exceed client expectations while contributing to the
            socio-economic development of Nigeria. We envision being the leading
            EPC provider in the region, recognized for our commitment to
            excellence and integrity.
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
            <img src="/images/team.jpg" alt="" className="rounded-t-md" />
          </div>
          <h3
            className={`${styles.h3} font-bold text-[#131316] md:text-2xl text-xl md:mb-[24px] mb-[10px]`}
          >
            Team Members
          </h3>
          <p className={styles.p}>
            Our team comprises highly skilled engineers, project managers, and
            technical experts with extensive experience in their respective
            fields. Led by visionary leaders and seasoned industry
            professionals, we are committed to delivering high-quality solutions
            tailored to meet our clients' needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeAbout;
