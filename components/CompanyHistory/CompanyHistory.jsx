// components/CompanyHistory.js

import React from "react";
import Image from "next/image";
import styles from "./CompanyHistory.module.css";

const CompanyHistory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/overview.jpg"}
          alt="Mission and Values"
          className={styles.image}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Company History</h2>
        <p>
          Established in 20XX, IFZINA has rapidly emerged as a trusted name in
          the Nigerian EPC industry. With a proven track record of successful
          projects and a dedicated team of professionals, we continue to set new
          standards of excellence in our field.
        </p>
      </div>
    </section>
  );
};

export default CompanyHistory;
