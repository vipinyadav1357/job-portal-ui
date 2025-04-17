import React from 'react'
import { jobList } from '../../Data/JobsData'
import JobCard from '../FindJob/JobLists/JobCard/JobCard'

const RecommandedJobs = () => {
    return (
        <div className='w-1/3'>
            <div className='font-semibold text-xl mb-5 ml-5'>Recommanded Jobs</div>
            <div className='flex flex-wrap flex-col items-center gap-5'>
                {
                    jobList.map((job, index) => index < 5 && <div key={index}><JobCard {...job} /></div>)
                }
            </div>
        </div>
    )
}

export default RecommandedJobs
