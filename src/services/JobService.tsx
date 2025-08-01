import axios from "axios"

const BASE_URL = "http://localhost:8080/job/"

const postJob = async (jobData: any) => {
    return await axios.post(BASE_URL + `post`, jobData)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const getJobById = async (id: any) => {
    return await axios.get(BASE_URL + `get/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}
const getAllJob = async () => {
    return await axios.get(BASE_URL + `getAll`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const applyJob = async (applicantDto: any, jobId: any) => {
    return await axios.post(BASE_URL + `apply/${jobId}`, applicantDto)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const jobPostedBy = async (userId: any) => {
    return await axios.get(BASE_URL + `postedBy/${userId}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
const changeApplicationStatus = async (application: any) => {
    return await axios.post(BASE_URL + `changeAppStatus`, application)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}
export { postJob, getAllJob, getJobById, applyJob, jobPostedBy, changeApplicationStatus }