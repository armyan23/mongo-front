import Router from "next/router";
import axios from "axios";

const headers = {};
const apiServer = process.env.NEXT_PUBLIC_API_SERVER;

const instance = axios.create({
  baseURL: apiServer,
  headers,
});

let accessToken =
  typeof window !== "undefined" && localStorage.getItem("token");

if (accessToken) {
  instance.defaults.headers["Authorization"] = accessToken;
}

export const handleHeaders = (token = "") => {
  instance.defaults.headers["Authorization"] = token;
  localStorage.setItem("token", token);
};

export const logoutAction = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  delete instance.defaults.headers["Authorization"];
};

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      Router.push("/");
      logoutAction();
    }

    return error;
  }
);

export default instance;
