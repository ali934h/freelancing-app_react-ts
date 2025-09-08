import axios, { type AxiosInstance } from "axios";

const app = axios.create({
  baseURL: "https://freelancing-app.api.alihosseini.dev",
  withCredentials: true,
});

export default {
  get: <T = unknown>(url: string, config?: object) => app.get<T>(url, config),
  post: <T = unknown>(url: string, data?: unknown, config?: object) =>
    app.post<T>(url, data, config),
  delete: <T = unknown>(url: string, config?: object) =>
    app.delete<T>(url, config),
  patch: <T = unknown>(url: string, data?: unknown, config?: object) =>
    app.patch<T>(url, data, config),
};
