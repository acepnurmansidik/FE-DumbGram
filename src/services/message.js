import { requestAPI } from "./config/index";

const ROOT_API = `http://localhost:5000/api/v1`;

// GET chat list sender
export const getChatListSender = async () => {
  const url = `${ROOT_API}/message-sender`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

// GET chat list receiver
export const getChatListReceiver = async () => {
  const url = `${ROOT_API}/message-receiver`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

// GET message user
export const getMessageUserDetail = async (id) => {
  const url = `${ROOT_API}/message-user/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "GET",
    headers,
    token: true,
  });
};

// POST send message user
export const setSendMessage = async (data, id) => {
  const url = `${ROOT_API}/message/${id}`;
  let headers = {};

  return requestAPI({
    url,
    method: "POST",
    headers,
    data,
    token: true,
  });
};
