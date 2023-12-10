"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  // temporary
  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.responsiveLink}>
            Home
          </Link>
          <Link href="/" className={styles.responsiveLink}>
            About
          </Link>
          <Link href="/" className={styles.responsiveLink}>
            Contact
          </Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className={styles.responsiveLink}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" className={styles.responsiveLink}>
                Write
              </Link>
              <Link href="/logout" className={styles.responsiveLink}>
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
