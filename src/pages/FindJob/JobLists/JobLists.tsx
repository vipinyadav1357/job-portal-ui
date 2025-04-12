import React from 'react'

import JobCard from './JobCard/JobCard'
import { jobList } from '../../../Data/JobsData'
import SortJobs from './SortJobs/SortJobs'


const JobLists = () => {
    return (
        <div className='px-8 pt-16'>
            <div className='flex justify-between '>
                <div className='text-3xl font-semibold'>Recommended Job</div>
                <SortJobs />
            </div>
            <div className='mt-8 flex flex-wrap justify-center gap-5 '>
                {
                    jobList.map((job, index) => <div key={index}><JobCard {...job} /></div>)
                }
            </div>
        </div>
    )
}

export default JobLists
