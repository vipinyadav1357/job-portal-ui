import axios from "axios";

const BASE_URL = "http://localhost:8080/notification/";

const getNotifications = async (userId: any) => {
    return axios
        .get(`${BASE_URL}getAllNoti/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching notifications!", error);
            throw error;
        });
};

export { getNotifications };
