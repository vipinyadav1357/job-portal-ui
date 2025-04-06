import React from 'react'
import SortJobs from '../SortJobs/SortJobs'

const Jobs = () => {
    return (
        <div className='px-8 py-16'>
            <div className='flex justify-between '>
                <div>Recommended Job</div>
                <SortJobs />
            </div>
        </div>
    )
}

export default Jobs
