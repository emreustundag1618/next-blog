import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <div className={styles.avatarContainer}>
              <Image alt="" src="/p1.jpeg" fill className={styles.avatar}/>
            </div>
            <div className={styles.userInfo}>
              <span>John Doe - </span>
              <span>01.01.2024</span>
            </div>
          </div>
          <div className={styles.commentText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              facere culpa temporibus.
            </p>
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <div className={styles.avatarContainer}>
              <Image alt="" src="/p1.jpeg" fill className={styles.avatar}/>
            </div>
            <div className={styles.userInfo}>
              <span>John Doe - </span>
              <span>01.01.2024</span>
            </div>
          </div>
          <div className={styles.commentText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              facere culpa temporibus.
            </p>
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <div className={styles.avatarContainer}>
              <Image alt="" src="/p1.jpeg" fill className={styles.avatar}/>
            </div>
            <div className={styles.userInfo}>
              <span>John Doe - </span>
              <span>01.01.2024</span>
            </div>
          </div>
          <div className={styles.commentText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              facere culpa temporibus.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Comments;
