import axios, { InternalAxiosRequestConfig } from "axios";
import { removeUser } from "../slices/UserSlice";

const axiosInterceptor = axios.create({
    baseURL: "http://localhost:8080/"
});

axiosInterceptor.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Add authorization token to headers
        const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInterceptor.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle token expiration or other errors
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            removeUser();
            window.dispatchEvent(new Event("unauthorized"));
        }
        return Promise.reject(error);
    }
);

export default axiosInterceptor;
