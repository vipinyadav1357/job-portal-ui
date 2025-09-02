import axios from "axios";
import { LoginRequest } from "./models/LoginRequest";
import { RegisterRequest } from "./models/RegisterRequest";
import axiosInterceptor from "../Interceptor/axiosInterceptor";

// const BASE_URL = "http://localhost:8080/users/";

const registerUser = async (userData: RegisterRequest) => {
    return axiosInterceptor.post("users/register", userData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error registering the user!", error);
            throw error;
        });
}

const sendOtp = async (email: string) => {
    const encodedEmail = encodeURIComponent(email);
    return axiosInterceptor.post(`users/otp/${encodedEmail}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error sending the OTP!", error);
            throw error;
        });
}
const verifyOtp = async (otp: string, email: string) => {
    const encodedEmail = encodeURIComponent(email);
    return axiosInterceptor.get(`users/otp/${encodedEmail}/${otp}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error verifying the OTP!", error);
            throw error;
        });
}
const resetPassword = async (userData: LoginRequest) => {
    return axiosInterceptor.post("users/changePass", userData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error resetting the password!", error);
            throw error;
        });
}
export { registerUser, resetPassword, sendOtp, verifyOtp };