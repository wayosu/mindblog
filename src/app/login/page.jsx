"use client";

import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data, status } = useSession();
  // console.log(data, status);

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Masuk dengan Google
        </div>
        <div className={styles.socialButton}>Masuk dengan Github</div>
        <div className={styles.socialButton}>Masuk dengan Facebook</div>
      </div>
    </div>
  );
};

export default Page;
