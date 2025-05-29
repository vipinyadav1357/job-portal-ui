import axios from "axios";

const BASE_URL = "http://localhost:8080/users/";

const registerUser = async (userData: any) => {
    console.log("Registering user with data:", userData);
    return axios.post(BASE_URL + "register", userData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error registering the user!", error);
            throw error;
        });
}
const loginUser = async (userData: any) => {
    return axios.post(BASE_URL + "login", userData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error registering the user!", error);
            throw error;
        });
}

export { registerUser, loginUser };