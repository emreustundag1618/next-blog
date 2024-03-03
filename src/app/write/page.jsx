"use client";

import styles from "./write.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

// Only import ReactQuill when window is defined
let ReactQuill;
if (typeof window !== "undefined") {
  ReactQuill = require("react-quill");
}

const WritePage = () => {
  const { status: sessionStatus } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (file) {
      const upload = async () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.error(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };
      upload();
    }
  }, [file]);

  // Redirect to homepage if user is already authenticated
  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.push("/");
    }
  }, [sessionStatus, router]);

  if (sessionStatus === "loading") {
    return <div className={styles.loading}>Loading</div>;
  }

  const slugify = (str) => {
    return str
    .toLowerCase() // Convert string to lowercase
    .replace(/[^\w\s-]/g, '') // Remove non-word characters (alphanumeric, underscore, hyphen)
    .replace(/\s+/g, '-') // Replace whitespace characters with hyphens
    .replace(/--+/g, '-') // Replace consecutive hyphens with a single hyphen
    .trim(); // Trim leading and trailing whitespace
  }

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: "temp desc",
        content: value,
        img: media,
        slug: slugify(title),
        catSlug: "travel"
      }),
    });

    console.log(res);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.inputTitle}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* TODO:ADD CATEGORY */}
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
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />

            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image
                  className={styles.xxx}
                  src="/sun.png"
                  alt=""
                  width={16}
                  height={16}
                />
              </label>
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
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
