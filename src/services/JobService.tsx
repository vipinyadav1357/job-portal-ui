import axios from "axios"

const BASE_URL = "http://localhost:8080/job/"

const postJob = async (jobData: any) => {
    return await axios.post(BASE_URL + `post`, jobData)
        .then(response => {
            console.log("response is", response)
            return response.data
        })
        .catch(error => {
            console.error("There was an error while posting the job!", error);
            throw error;
        });
}
const getJobById = async (id: any) => {
    return await axios.get(BASE_URL + `get/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error("There was an error while getting the specific jobs!", error);
            throw error;
        });
}
const getAllJob = async () => {
    return await axios.get(BASE_URL + `getAll`)
        .then(response => {
            console.log("response is", response)
            return response.data
        })
        .catch(error => {
            console.error("There was an error while getting the All jobs!", error);
            throw error;
        });
}
const applyJob = async (applicantDto: any, jobId: any) => {
    return await axios.post(BASE_URL + `apply/${jobId}`, applicantDto)
        .then(response => {
            console.log("response is", response)
            return response.data
        })
        .catch(error => {
            console.error("There was an error while getting the All jobs!", error);
            throw error;
        });
}
const jobPostedBy = async (userId: any) => {
    return await axios.get(BASE_URL + `postedBy/${userId}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error("There was an error while getting the All jobs!", error);
            throw error;
        });
}
const changeApplicationStatus = async (application: any) => {
    return await axios.post(BASE_URL + `changeAppStatus`, application)
        .then(response => {
            console.log("response is", response)
            return response.data
        })
        .catch(error => {
            console.error("There was an error while getting the All jobs!", error);
            throw error;
        });
}
export { postJob, getAllJob, getJobById, applyJob, jobPostedBy, changeApplicationStatus }