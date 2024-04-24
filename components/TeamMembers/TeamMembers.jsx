// components/TeamMembers.js

import React from "react";
import Image from "next/image";
import styles from "./TeamMembers.module.css";

const TeamMembers = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Team Members</h2>
        <p>
          Our team comprises highly skilled engineers, project managers, and
          technical experts with extensive experience in their respective
          fields. Led by visionary leaders and seasoned industry professionals,
          we are committed to delivering high-quality solutions tailored to meet
          our clients needs.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/group.jpg"}
          alt="Mission and Values"
          className={styles.image}
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default TeamMembers;
