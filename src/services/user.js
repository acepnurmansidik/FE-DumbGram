import { requestAPI } from "./config/index";

const ROOT_API = `http://localhost:5000/api/v1`;

export const getUserAPI = async (id) => {
  const url = `${ROOT_API}/user/${id}`;
  let headers = {};

  const response = await requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });

  return response;
};

export const getFollowers = async (id) => {
  const url = `${ROOT_API}/followers/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

export const getFollowings = async (id) => {
  const url = `${ROOT_API}/following/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

export const getPosts = async (id) => {
  const url = `${ROOT_API}/feed/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

export const getComments = async (id) => {
  const url = `${ROOT_API}/comments/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

export const createPost = async (data) => {
  const url = `${ROOT_API}/feed`;
  let headers = {
    "Content-type": "multipart/form-data",
  };

  return requestAPI({
    url,
    method: "POST",
    data,
    headers,
    token: true,
  });
};

// ====================================================
