import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

export const getUserAPI = (id) => {
  const url = `${ROOT_API}/user/${id}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", headers, token: true });
};
