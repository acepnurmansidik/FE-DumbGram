import { requestAPI } from "./config/index";

const ROOT_API = `http://localhost:5000/api/v1`;

// USER =====================================================
// GET user
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

// GET message user
export const getChatList = async () => {
  const url = `${ROOT_API}/message-user`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

// UPDATE user
export const setUpdateProfile = async (data, id) => {
  const url = `${ROOT_API}/user/${id}`;
  let headers = {
    "Content-type": "multipart/form-data",
  };

  return requestAPI({
    url,
    method: "PATCH",
    data,
    headers,
    token: true,
  });
};

// COMMENTS =================================================
// GET comments
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

// POST create comment
export const setPostComment = async (data) => {
  const url = `${ROOT_API}/comment`;
  let headers = {};

  return requestAPI({
    url,
    method: "POST",
    data,
    headers,
    token: true,
  });
};

// FEED/POST ================================================
// POST create feed
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

// GET post/feed
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

// FOLLOW ====================================================
// GET followers
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

// GET following
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

// GET status follower
export const getStatusFollow = async (id) => {
  const url = `${ROOT_API}/following-detail/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

// POST & DELETE follow
export const actionBtnToggleFollow = async (id) => {
  const url = `${ROOT_API}/following/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "POST",
    headers,
    token: true,
  });
};

// ====================================================
