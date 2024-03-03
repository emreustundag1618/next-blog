"use client";

import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({desc, postSlug})
    });
    mutate();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment"
            className={styles.input}
            onChange={e => setDesc(e.target.value)}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.userContainer}>
                  {item?.user?.image && (
                    <div className={styles.avatarContainer}>
                      <Image
                        alt=""
                        src={item.user.image}
                        fill
                        className={styles.avatar}
                      />
                    </div>
                  )}

                  <div className={styles.userInfo}>
                    <span>{item.user.name} - </span>
                    <span>{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <div className={styles.commentText}>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
