import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/auth";

export const loginUser = (body) => {
  const loginUrl = baseUrl + "/login";
  return axios.post(loginUrl, body);
};

export const logOutUser = (token) => {
  const authAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return authAxios.delete("/logout");
};
