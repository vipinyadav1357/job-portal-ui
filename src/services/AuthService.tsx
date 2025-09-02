import axios from "axios";

const BASE_URL = "http://localhost:8080/users/"

const logInUser = async (login: any) => {
    return await axios.post(BASE_URL + "login", login)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error logging in the user!", error);
            throw error;
        });
}

export { logInUser };