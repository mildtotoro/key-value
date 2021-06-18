import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getValue } from "../api/service";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PageOne({ state, dispatch }) {
  const router = useRouter();
  const [isLoading, setLoad] = useState(false);

  const load = async () => {
    setLoad(true);
    const res = await getValue();
    if (res?.result.toLowerCase() === "ok") {
      dispatch({
        type: "setValues",
        payload: { values: res.value, key: res.key },
      });
    }
    setLoad(false);
  };

  const calculate = () => {
    router.push({
      pathname: "/page2",
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {state.values.length === 0 && (
          <button className={styles.button} onClick={load} type="submit">
            Load{isLoading && "..."}
          </button>
        )}

        {state.values.length > 0 && (
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
