import axios from "axios";
import { getStoredAuthToken } from "./authToken";
// import { showToast } from "../component/CustomeToast";
const defaults = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${getStoredAuthToken()}`,
  }),
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

const api = (method, url, variables, responsetype) =>
  new Promise((resolve, reject) => {
    axios({
      url: url.includes("http") ? `${url}` : `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      responseType: responsetype ? "blob" : "json",
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        console.log("error res = ", error);
        // error.response&& error.response.data.message === "Unauthorized"?
        //   showToast("error", error.response.data.message):
        //   showToast("error", "Some ")
        if (error.response) {
          if (error.response.data.statusCode === 401) {
            localStorage.removeItem("access_token");
            window.location.href = "/login";
            // history.push('/login');
            // window.location.reload();
            // window.location.href = "/login";
            // process.exit();
          } else {
            reject(error.response.data);
          }
        } else {
          reject(defaults.error);
        }
        // reject(e.response);
      }
    );
  });

export default {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  put: (...args) => api("put", ...args),
  patch: (...args) => api("patch", ...args),
  delete: (...args) => api("delete", ...args),
};
