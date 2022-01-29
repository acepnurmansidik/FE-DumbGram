import axios from "axios";
import Cookies from "js-cookie";

export const requestAPI = async ({ url, method, data, headers, token }) => {
  if (token) {
    const jwtToken = atob(Cookies.get("token"));
    headers = {
      ...headers,
      Authorization: `Bearer ${jwtToken}`,
    };
  }
  const response = await axios({ url, method, data, headers });
  // response > 300 akan error
  if (response.status > 300) {
    const res = {
      error: true,
      status: "failed",
      message: response,
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
