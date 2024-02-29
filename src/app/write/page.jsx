"use client";

import styles from "./write.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const WritePage = () => {
  const { status: sessionStatus } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // Redirect to homepage if user is already authenticated
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/");
    }
  }, [sessionStatus, router]);

  if (sessionStatus === "loading") {
    return <div className={styles.loading}>Loading</div>;
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.inputTitle} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            className={styles.xxx}
            src="/sun.png"
            alt=""
            width={16}
            height={16}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image
                className={styles.xxx}
                src="/sun.png"
                alt=""
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                className={styles.xxx}
                src="/sun.png"
                alt=""
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                className={styles.xxx}
                src="/sun.png"
                alt=""
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.quillTextArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
