import React from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Tulis komentar..." className={styles.input} />
          <button className={styles.button}>Kirim</button>
        </div>
      ) : (
        <Link href="/login">Login untuk menulis komentar</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Kyzens</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            maxime libero error, est et cum earum unde culpa porro pariatur ipsa
            commodi eos quod laborum nam ducimus reiciendis labore sequi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
