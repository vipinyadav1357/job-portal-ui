import React from 'react'
import { jobList } from '../../Data/JobsData'
import JobCard from '../FindJob/JobLists/JobCard/JobCard'

const CopmanyJobsComponent = () => {
    return (
        <div className=' flex flex-wrap gap-3 justify-center'>
            {
                jobList.map((job, index) => <div key={index}><JobCard {...job} /></div>)
            }
        </div>
    )
}

export default CopmanyJobsComponent
