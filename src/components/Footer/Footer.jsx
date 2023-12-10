"use client";

import React, { useContext } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          {theme === "dark" ? (
            <Image
              src="/logo-dark.png"
              alt="logo"
              width={120}
              height={50}
              className={styles.image}
            />
          ) : (
            <Image
              src="/logo-light.png"
              alt="logo"
              width={120}
              height={50}
              className={styles.image}
            />
          )}
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          minus cupiditate, incidunt quia facilis blanditiis numquam quod
          deserunt illo atque excepturi ipsa aspernatur laudantium sunt amet
          iste veritatis, officiis adipisci?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
