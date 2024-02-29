import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe - </span>
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
          <div className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            sint facere? Porro perspiciatis in omnis!
          </div>
          <div className={styles.postContent}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              vitae cupiditate, maxime veritatis doloremque aperiam laborum
              optio, consequuntur repellat molestiae eligendi pariatur adipisci
              animi distinctio aliquam. Delectus praesentium alias maxime
              consequuntur assumenda, incidunt, eveniet exercitationem nam
              voluptate at pariatur ullam?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              expedita voluptate aut impedit dignissimos ab adipisci quibusdam
              error fugit exercitationem architecto reiciendis aliquam
              temporibus quidem porro, necessitatibus nemo consectetur ratione
              nam quisquam dolor tempora in sint esse! Necessitatibus inventore
              eaque blanditiis impedit ipsam at voluptas assumenda cum
              repellendus doloribus, molestiae incidunt illum aperiam
              exercitationem quibusdam quae. Ex, voluptatem odit. Incidunt saepe
              eum, dolores illo vero quaerat dicta officia facere, maxime sunt,
              porro aspernatur doloribus atque iure nisi aut quos molestiae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              enim, natus quisquam quas libero maiores odit repudiandae odio.
              Alias, sed rerum adipisci exercitationem qui ad quia voluptatem
              neque nesciunt praesentium? Tempora deserunt, voluptatibus
              inventore dignissimos dolorum culpa nostrum explicabo dolore?
              Molestiae ipsa fugit eius dolore commodi quo iste veritatis
              tenetur.
            </p>
          </div>
          <Comments />
        </div>
        <div className={styles.sidebar}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
