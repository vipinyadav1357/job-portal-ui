import axios from "axios"
import axiosInterceptor from "../Interceptor/axiosInterceptor";

// const BASE_URL = "http://localhost:8080/job/"

const postJob = async (jobData: any) => {
    return await axiosInterceptor.post(`job/post`, jobData)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const getJobById = async (id: any) => {
    return await axiosInterceptor.get(`job/get/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}
const getAllJob = async () => {
    return await axiosInterceptor.get(`job/getAll`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const applyJob = async (applicantDto: any, jobId: any) => {
    return await axiosInterceptor.post(`job/apply/${jobId}`, applicantDto)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const jobPostedBy = async (userId: any) => {
    return await axiosInterceptor.get(`job/postedBy/${userId}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const changeApplicationStatus = async (application: any) => {
    return await axiosInterceptor.post(`job/changeAppStatus`, application)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
export { postJob, getAllJob, getJobById, applyJob, jobPostedBy, changeApplicationStatus }