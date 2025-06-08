import axios from "axios";
import { LoginRequest } from "./models/LoginRequest";
import { RegisterRequest } from "./models/RegisterRequest";

const BASE_URL = "http://localhost:8080/users/";

const registerUser = async (userData: RegisterRequest) => {
    console.log("Registering user with data:", userData);
    return axios.post(BASE_URL + "register", userData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error registering the user!", error);
            throw error;
        });
}
const loginUser = async (userData: LoginRequest) => {
    return axios.post(BASE_URL + "login", userData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error registering the user!", error);
            throw error;
        });
}
const sendOtp = async (email: string) => {
    const encodedEmail = encodeURIComponent(email);
    return axios.post(BASE_URL + `otp/${encodedEmail}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error sending the OTP!", error);
            throw error;
        });
}
const verifyOtp = async (otp: string, email: string) => {
    const encodedEmail = encodeURIComponent(email);
    return axios.get(BASE_URL + `otp/${encodedEmail}/${otp}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error verifying the OTP!", error);
            throw error;
        });
}
const ResetPassword = async (userData: LoginRequest) => {
    return axios.post(BASE_URL + "changePassword", userData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error resetting the password!", error);
            throw error;
        });
}
export { registerUser, loginUser, ResetPassword, sendOtp, verifyOtp };