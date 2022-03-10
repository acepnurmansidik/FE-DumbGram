import { requestAPI } from "./config";

const ROOT_API = `https://dumbgram-app.herokuapp.com/api/v1`;

export const setRegister = (data) => {
  const url = `${ROOT_API}/register`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "POST", data, headers });
};

export const setLogin = (data) => {
  const url = `${ROOT_API}/login`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "POST", data, headers });
};
