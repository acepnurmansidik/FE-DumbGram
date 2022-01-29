import axios from "axios";

export const requestAPI = async ({ url, method, data, headers }) => {
  const response = await axios({ url, method, data, headers }).catch(
    (err) => err.response
  );
  // response > 300 akan error
  if (response.status > 300) {
    const res = {
      error: true,
      status: "failed",
      message: response.message.statusText,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    status: "success",
    message: "Response successfully obtained",
    data: response.data.data,
  };
  return res;
};
