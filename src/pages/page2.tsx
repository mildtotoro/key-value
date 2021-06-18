import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function PageTwo({ state }) {
  const router = useRouter();
  const total = state.values.reduce((result, item) => {
    return result + item;
  }, 0);
  const back = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Key: {state.key}
        <div></div>
        Value: {total}
        <button onClick={back} type="button">
          Back
        </button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
