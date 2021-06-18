import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getValue } from "../api/service";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PageOne({ state, dispatch }) {
  const router = useRouter();
  const [isShowLoadBtn, setLoad] = useState(true);

  const load = async () => {
    const res = await getValue();
    setLoad(false);
    if (res?.result.toLowerCase() === "ok") {
      dispatch({
        type: "setValues",
        payload: { values: res.value, key: res.key },
      });
    }
  };

  const calculate = () => {
    router.push({
      pathname: "/page2",
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isShowLoadBtn && (
          <button className={styles.button} onClick={load} type="submit">
            Load
          </button>
        )}
        {!isShowLoadBtn && (
          <>
            {state.values.map((val, i) => {
              return <input key={`${i}`} type="text" defaultValue={val} />;
            })}
            <button className={styles.button} onClick={calculate} type="submit">
              Calculate
            </button>
          </>
        )}
      </main>
    </div>
  );
}
