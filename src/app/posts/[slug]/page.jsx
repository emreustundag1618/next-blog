import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getSinglePost = async (slug) => {
  // the final best practise is a valid caching. here for testing purpose
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getSinglePost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            {/* We can check if the post.user has avatar? */}
            {post?.user.image && (
              <div className={styles.userImageContainer}>
                <Image src={post.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user?.name} - </span>
              <span className={styles.date}>
                {post.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.postDesc}>{post?.desc}</div>
          {post.content && (
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          )}

          <Comments postSlug={slug}/>
        </div>
        <div className={styles.sidebar}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
