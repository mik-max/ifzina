// components/MissionAndValues.js

import React from "react";
import Image from 'next/image'
import styles from "./MissionAndValues.module.css";

const MissionAndValues = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/bg4.jpg"}
          alt="Mission and Values"
          className={styles.image}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Mission and Values</h2>
        <p>
          Our mission at IFZINA is to deliver innovative and sustainable
          solutions that exceed client expectations while contributing to the
          socio-economic development of Nigeria. We envision being the leading
          EPC provider in the region, recognized for our commitment to
          excellence and integrity.
        </p>
      </div>
    </section>
  );
};

export default MissionAndValues;
