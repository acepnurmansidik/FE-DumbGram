import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

export const setRegister = (data) => {
  const url = `${ROOT_API}/register`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "POST", data, headers });
};
