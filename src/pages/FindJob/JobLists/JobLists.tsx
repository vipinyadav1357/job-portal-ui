import React, { useEffect, useState } from 'react'

import JobCard from './JobCard/JobCard'
import SortJobs from './SortJobs/SortJobs'
import { getAllJob } from '../../../services/JobService'


const JobLists = () => {
    const [jobList, setJobList] = useState([{}]);
    useEffect(() => {
        getAllJob()
            .then((res) => {
                setJobList(res.filter((job: any) => job.jobStatus === 'ACTIVE'));
            })
            .catch(() => { });
    }, [])
    return (
        <div className='px-8 pt-16'>
            <div className='flex justify-between '>
                <div className='text-3xl font-semibold'>Recommended Job</div>
                <SortJobs />
            </div>
            <div className='mt-8 flex flex-wrap justify-center gap-10 '>
                {
                    jobList.map((job, index) => <div key={index}><JobCard {...job} /></div>)
                }
            </div>
        </div>
    )
}

export default JobLists
