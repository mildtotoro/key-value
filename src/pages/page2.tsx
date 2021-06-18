import Head from "next/head";
import styles from "../styles/page.module.css";
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
      <main className={styles.main}>
        <div>
          <div>Key: {state.key}</div>
          <div>Value: {total}</div>
        </div>
        <button className={styles.button} onClick={back} type="button">
          Back
        </button>
      </main>
    </div>
  );
}
