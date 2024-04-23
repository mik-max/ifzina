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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vehicula purus vel tortor molestie, vitae bibendum dolor pulvinar.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur corporis debitis accusamus deserunt deleniti quia aspernatur aliquam magnam qui tempora tenetur commodi rem eius officia, iusto maiores. Beatae, doloribus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati aperiam praesentium eveniet enim optio incidunt molestiae, maxime, vitae pariatur excepturi porro sint deserunt velit eum molestias, corporis deleniti nulla?
        </p>
      </div>
    </section>
  );
};

export default CompanyHistory;
