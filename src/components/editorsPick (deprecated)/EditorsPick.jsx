import Link from "next/link";
import Image from "next/image";
import styles from "../menu/menu.module.css";

const EditorsPick = () => {
  return (
    <div className={styles.items}>
          <Link className={styles.item} href="/">
            <div className={styles.imageContainer}>
              <Image alt="" src="/p1.jpeg" className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                travel
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
          </Link>
          <Link className={styles.item} href="/">
            <div className={styles.imageContainer}>
              <Image alt="" src="/p1.jpeg" className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.food}`}>food</span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
          </Link>
          <Link className={styles.item} href="/">
            <div className={styles.imageContainer}>
              <Image alt="" src="/p1.jpeg" className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.culture}`}>
                culture
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
          </Link>
          <Link className={styles.item} href="/">
            <div className={styles.imageContainer}>
              <Image alt="" src="/p1.jpeg" className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.fashion}`}>
                fashion
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
          </Link>
        </div>
  )
}

export default EditorsPick
