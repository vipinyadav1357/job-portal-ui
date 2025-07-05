import { Divider } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import PostedJobComponent from './PostedJobComponent';
import PostedJobDescription from './PostedJobDescription';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllJob, getJobById, jobPostedBy } from '../../services/JobService';

const PostedJobsPage = () => {
    const { id } = useParams();
    const userProfile = useSelector((state: any) => state.profile);
    const [job, setJob] = useState<any>({});
    const [jobList, setJobList] = useState<any[]>([]);

    useEffect(() => {
        window.scroll(0, 0);

        if (userProfile?.id) {
            jobPostedBy(userProfile.id)
                .then((jobList) => {
                    setJob(jobList.filter((job: any) => job.id === Number(id))[0]);
                    setJobList(jobList.filter((job: any) => job.jobStatus === "DRAFT" || job.jobStatus === "ACTIVE"));
                })
                .catch((e) => console.log(e));
        }
    }, [id, userProfile]);
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-4 " >
            <Divider size={"xs"} color='brightSun.4' />
            {/* <div className='flex  gap-5'> */}
            <div className='flex justify-between'>
                <PostedJobComponent jobList={jobList} job={job} />
                <Divider orientation='vertical' size={"xs"} color='brightSun.4' mx={"lg"} my={"xs"} />
                <PostedJobDescription {...job} />
            </div>
        </div >
    )
}

export default PostedJobsPage
