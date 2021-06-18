import axios from "axios";

interface KeyResponse {
  result: string;
  key: string;
}

interface ValueResponse {
  result: string;
  value: [];
  key: string;
}

const instance = axios.create({
  baseURL: "https://asia-east2-candidateplayground.cloudfunctions.net",
});

instance.interceptors.request.use(
  async function (config) {
    if (config.url === "/value") {
      const data = await getKey();
      config.headers.Authorization = data.key;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    const { data, config } = response;
    if (config.url === "/value") {
      data.key = config.headers.Authorization;
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getKey = async () => {
  try {
    const res = await instance.get<KeyResponse>("/key");
    const { data } = res;
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getValue = async () => {
  try {
    const res = await instance.get<ValueResponse>("/value");
    const { data } = res;
    return data;
  } catch (e) {
    console.error(e);
  }
};
