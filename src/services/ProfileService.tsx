import axios from "axios";
import { ProfileData } from "./models/ProfileData";

const BASE_URL = "http://localhost:8080/profile/";

const getProfile = async (userId: string) => {
    return axios.get(BASE_URL + `get/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching the profile!", error);
            throw error;
        });
}
const updateProfile = async (profileData: ProfileData) => {
    return axios.put(BASE_URL + `update`, profileData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error updating the profile!", error);
            throw error;
        });
}
const getAllProfiles = async () => {
    return axios.get(BASE_URL + `getAll`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching all profiles!", error);
            throw error;
        });
}
export { getProfile, updateProfile, getAllProfiles };