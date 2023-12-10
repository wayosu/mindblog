import React from "react";
import styles from "./login.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Masuk dengan Google</div>
        <div className={styles.socialButton}>Masuk dengan Github</div>
        <div className={styles.socialButton}>Masuk dengan Facebook</div>
      </div>
    </div>
  );
};

export default Page;
