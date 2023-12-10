import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Topik hangat</h2>
      <h1 className={styles.title}>Paling Populer</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>

      <h2 className={styles.subtitle}>Berdasarkan topik</h2>
      <h1 className={styles.title}>Kategori</h1>
      <div className={styles.categoryList}>
        <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.culture}`}>
          Culture
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.coding}`}>
          Coding
        </Link>
      </div>

      <h2 className={styles.subtitle}>Dipilih oleh penulis</h2>
      <h1 className={styles.title}>Pilihan Penulis</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Kyzens - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
