export default function reducer(state, { type, payload }) {
  const { values, key } = payload;
  switch (type) {
    case "setValues":
      return { ...state, values, key };

    default:
      throw new Error();
  }
}
