import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ myKey, item }) => {
  return (
    <div key={myKey} className={styles.container}>
      <div className={styles.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/blog/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
        <Link href={`/blog/${item.slug}`} className={styles.link}>
          Baca Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Card;
