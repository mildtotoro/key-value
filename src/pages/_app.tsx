import "../styles/globals.css";
import { useReducer } from "react";

import reducer from "../reducer";

const initialState = {
  key: "",
  values: [],
};

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Component state={state} dispatch={dispatch} {...pageProps} />;
}

export default MyApp;
