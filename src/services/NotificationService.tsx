import axios from "axios";
import axiosInterceptor from "../Interceptor/axiosInterceptor";

const BASE_URL = "http://localhost:8080/notification/";

const getNotifications = async (userId: any) => {
    return axiosInterceptor
        .get(`notification/getAllNoti/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error fetching notifications!", error);
            throw error;
        });
};
const changeNotificationStatus = async (notificationId: any) => {
    return axiosInterceptor
        .post(`notification/change/${notificationId}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error changing notification status!", error);
            throw error;
        });
}

export { getNotifications, changeNotificationStatus };
