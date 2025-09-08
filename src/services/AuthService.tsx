import axios from "axios";
import axiosInterceptor from "../Interceptor/axiosInterceptor";


const logInUser = async (login: any) => {
    return await axiosInterceptor.post("users/login", login)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error logging in the user and then error is!", error);
            throw error;
        });
}

export { logInUser };