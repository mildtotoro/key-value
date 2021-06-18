type State = {
  key: string;
  values: number[];
};

type Action = {
  type: string;
  payload: State;
};

export default function reducer(
  state: State,
  { type, payload }: Action
): State {
  const { values, key } = payload;
  switch (type) {
    case "setValues":
      return { ...state, values, key };
    default:
      throw new Error();
  }
}
