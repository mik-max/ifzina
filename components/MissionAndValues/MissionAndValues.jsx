// components/MissionAndValues.js

import React from "react";
import Image from 'next/image'
import styles from "./MissionAndValues.module.css";

const MissionAndValues = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src={'/images/bg4.jpg'}
          alt="Mission and Values"
          className={styles.image}
          width={200} height={200}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Mission and Values</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vehicula purus vel tortor molestie, vitae bibendum dolor pulvinar.
        </p>
      </div>
    </section>
  );
};

export default MissionAndValues;
