import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt="" src="/p1.jpeg" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href="/">
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </Link>

        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet in
          dicta iste architecto harum nesciunt similique, veniam dignissimos.
          Animi tempora est sunt facere itaque quisquam recusandae optio veniam
          maxime perferendis?
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
