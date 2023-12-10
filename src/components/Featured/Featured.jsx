import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hai, minders!</b> Ayo buat tulisan dari pikiranmu.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            vel qui eum quibusdam eius iste error ratione, voluptatem, non
            eveniet omnis quia dolorum, ut illo praesentium est. Corrupti ipsum
            mollitia dolorem minus, esse nulla blanditiis repellat quibusdam
            dolore officia. Vitae.
          </p>
          <button className={styles.button}>Baca Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
