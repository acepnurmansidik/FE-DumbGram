import { requestAPI } from "./config";

const ROOT_API = `http://localhost:5000/api/v1`;

export const getUserAPI = (id) => {
  const url = `${ROOT_API}/user/${id}`;
  let headers = {};

  return requestAPI({ url, method: "GET", headers, token: true });
};

export const getFollowers = (id) => {
  const url = `${ROOT_API}/followers/${id}`;
  let headers = {};

  return requestAPI({ url, method: "GET", headers, token: true });
};

export const getFollowings = (id) => {
  const url = `${ROOT_API}/following/${id}`;
  let headers = {};

  return requestAPI({ url, method: "GET", headers, token: true });
};

export const getPosts = (id) => {
  const url = `${ROOT_API}/feed/${id}`;
  let headers = {};

  return requestAPI({ url, method: "GET", headers, token: true });
};
