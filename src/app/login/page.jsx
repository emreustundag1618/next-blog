"use client";

import { useSession, signIn } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const router = useRouter();

  // Redirect to homepage if user is already authenticated
  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      router.push("/");
    }
  }, [sessionStatus, router]);

  if (sessionStatus === "loading") {
    return <div className={styles.loading}>Loading</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default Login;
