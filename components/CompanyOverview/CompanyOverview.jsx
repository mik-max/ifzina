// components/CompanyOverview.js

import React from "react";
import Image from "next/image";
import styles from "./CompanyOverview.module.css";

const CompanyOverview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Company Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vehicula purus vel tortor molestie, vitae bibendum dolor pulvinar.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src={'/images/overview2.jpg'}
          alt="Company Overview"
          className={styles.image}
          width={200} height={200}
        />
      </div>
    </section>
  );
};

export default CompanyOverview;
