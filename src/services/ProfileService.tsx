import { ProfileData } from "./models/ProfileData";
import axiosInterceptor from "../Interceptor/axiosInterceptor";

// const BASE_URL = "http://localhost:8080/profile/";

const getProfile = async (userId: string) => {
    return axiosInterceptor.get(`profile/get/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching the profile!", error);
            throw error;
        });
}
const updateProfile = async (profileData: ProfileData) => {
    return axiosInterceptor.put(`profile/update`, profileData)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error updating the profile!", error);
            throw error;
        });
}
const getAllProfiles = async () => {
    return axiosInterceptor.get(`profile/getAll`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching all profiles!", error);
            throw error;
        });
}
export { getProfile, updateProfile, getAllProfiles };