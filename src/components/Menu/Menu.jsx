import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../MenuPost/MenuPost";
import MenuCategories from "../MenuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Topik hangat</h2>
      <h1 className={styles.title}>Paling Populer</h1>
      <MenuPost withImage={false} />

      <h2 className={styles.subtitle}>Berdasarkan topik</h2>
      <h1 className={styles.title}>Kategori</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>Dipilih oleh penulis</h2>
      <h1 className={styles.title}>Pilihan Penulis</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
