import { requestAPI } from "./config/index";

const ROOT_API = `http://localhost:5000/api/v1`;

// GET notif message
export const getNotifMessage = async () => {
  const url = `${ROOT_API}/notif-message`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

export const updateNotifMessage = async (id) => {
  const url = `${ROOT_API}/notif-message/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "DELETE",
    headers,
    token: true,
  });
};
