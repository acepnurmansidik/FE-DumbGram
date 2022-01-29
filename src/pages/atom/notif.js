import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export const setNotification = (status, msg) => {
  if (status === "success") {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
};

export const getTokenId = () => {
  // get & convert from cookies
  const getTokenCookies = atob(Cookies.get("token"));
  // decode token
  const getUserToken = jwt_decode(getTokenCookies);
  return getUserToken.id;
};
