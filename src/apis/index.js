import axios from "axios";

const instance = () => {
  const baseURL = "http://localhost:5000";
  let auth = localStorage.getItem("authData");
  let token = null;
   if ((auth)) {
      auth = JSON.parse(auth)
   }
  if(auth) token = auth?.token
  const headersAuth = { Authorization: `bearer ${token}` };
  axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
  axios.defaults.baseURL = baseURL
  return axios.create();
};

export default instance()