import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
            atque dolor ratione non repellendus eaque!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Kyzens</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              tempora. Itaque, laborum odio. Accusamus vel tenetur consectetur.
              Repudiandae reiciendis alias consequuntur? Vel laborum delectus
              fugiat consectetur repudiandae mollitia, sit possimus, id, minus
              tempora facere molestiae a perferendis expedita voluptate
              accusantium alias ipsam! Ipsum id aperiam laboriosam soluta
              mollitia rem excepturi rerum quisquam at enim quasi maxime,
              corporis voluptate repellat atque saepe, sunt nulla! Consequatur
              reiciendis porro eum asperiores, maiores assumenda enim non
              dignissimos recusandae? Odio ab enim possimus ex est id labore
              fugiat sit veniam, modi error corporis, ullam libero dignissimos
              eos nam at accusamus harum, sequi tempore. Nemo, enim!
            </p>

            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              tempora. Itaque, laborum odio. Accusamus vel tenetur consectetur.
              Repudiandae reiciendis alias consequuntur? Vel laborum delectus
              fugiat consectetur repudiandae mollitia, sit possimus, id, minus
              tempora facere molestiae a perferendis expedita voluptate.
            </p>

            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              tempora. Itaque, laborum odio. Accusamus vel tenetur consectetur.
              Repudiandae reiciendis alias consequuntur? Vel laborum delectus
              fugiat consectetur repudiandae mollitia, sit possimus, id, minus
              tempora facere molestiae a perferendis expedita voluptate
              accusantium alias ipsam! Ipsum id aperiam laboriosam soluta
              mollitia rem excepturi rerum quisquam at enim quasi maxime.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Page;
