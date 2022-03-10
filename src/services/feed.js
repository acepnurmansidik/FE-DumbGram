import { requestAPI } from "./config/index";

const ROOT_API = `https://dumbgram-app.herokuapp.com/api/v1`;

// GET Like feed
export const getLikeFeed = async (id) => {
  const url = `${ROOT_API}/like/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

// POST like at feed
export const setLikeFeed = async (id) => {
  const url = `${ROOT_API}/like/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "POST",
    headers,
    token: true,
  });
};

// GET all feeds
export const getAllFeeds = async () => {
  const url = `${ROOT_API}/feeds`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};
