import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          {/* If we use fill as the prop of Image component we will need to wrap it with an imageContainer */}
          {/* It's useful for images such as logo or social icons having a known ratio like 1/1 */}
          <Image src="/logo.png" alt="emre blog" width={50} height={50} />
          <h2 className={styles.logoText}>emreblog</h2>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          praesentium eligendi placeat alias vitae animi id voluptate rerum et,
          vero sunt excepturi ducimus suscipit ipsam dolores iste neque,
          assumenda nisi?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/about">Instagram</Link>
          <Link href="/contact">Tiktok</Link>
          <Link href="/contact">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
