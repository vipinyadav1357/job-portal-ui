import React, { useEffect, useState } from 'react'
import { jobList } from '../../Data/JobsData'
import JobCard from '../FindJob/JobLists/JobCard/JobCard'
import { getAllJob } from '../../services/JobService';
import { useParams } from 'react-router-dom';

const RecommandedJobs = () => {
    const { id } = useParams()
    const [jobList, setJobList] = useState<any>(null);
    useEffect(() => {
        getAllJob()
            .then((res) => {
                setJobList(res)
            })
            .catch(() => { });
    }, [])
    return (
        <div className='w-1/3'>
            <div className='font-semibold text-xl mb-5 ml-5'>Recommanded Jobs</div>
            <div className='flex flex-wrap flex-col items-center gap-5'>
                {
                    jobList?.map((job: any, index: any) => index < 5 && id != job.id && <div key={index}><JobCard {...job} /></div>)
                }
            </div>
        </div>
    )
}

export default RecommandedJobs
