import { Divider } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import PostedJobComponent from './PostedJobComponent';
import PostedJobDescription from './PostedJobDescription';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { jobPostedBy } from '../../services/JobService';

const PostedJobsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const userProfile = useSelector((state: any) => state.profile);
    const [job, setJob] = useState<any>({});
    const [jobList, setJobList] = useState<any[]>([]);

    useEffect(() => {
        window.scroll(0, 0);

        if (userProfile?.id) {
            jobPostedBy(userProfile.id)
                .then((jobList) => {
                    if (jobList && jobList.length > 0 && Number(id) === 0) navigate(`/posted-job/${jobList[0].id}`);
                    setJobList(jobList.filter((job: any) => job.jobStatus === "DRAFT" || job.jobStatus === "ACTIVE" || job.jobStatus === "CLOSED"));
                })
                .catch((e) => console.log(e));
        }
    }, [userProfile]);
    useEffect(() => {
        setJob(jobList.filter((job: any) => job.id === Number(id))[0]);
    }, [id, jobList]);
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-4 " >
            <Divider size={"xs"} color='brightSun.4' />
            {/* <div className='flex  gap-5'> */}
            <div className='flex justify-between'>
                <PostedJobComponent jobList={jobList} job={job} />
                <Divider orientation='vertical' size={"xs"} color='brightSun.4' mx={"lg"} my={"xs"} />
                <PostedJobDescription job={job} />
            </div>
        </div >
    )
}

export default PostedJobsPage
