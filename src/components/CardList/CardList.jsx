import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Image from "next/image";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tulisan Terbaru</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
