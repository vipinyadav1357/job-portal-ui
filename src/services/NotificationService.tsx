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
const changeNotificationStatus = async (notificationId: any) => {
    return axios
        .post(`${BASE_URL}change/${notificationId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error changing notification status!", error);
            throw error;
        });
}

export { getNotifications, changeNotificationStatus };
