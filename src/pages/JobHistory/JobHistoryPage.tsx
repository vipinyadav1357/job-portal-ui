import { Divider } from '@mantine/core'
import React from 'react'
import JobHistoryComponent from './JobHistoryComponent'

const JobHistoryPage = () => {
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-4 " >
            <Divider size={"xs"} color='brightSun.4' />
            {/* <div className='flex  gap-5'> */}
            <div className='py-5'>
                <JobHistoryComponent />
            </div>
        </div >
    )
}

export default JobHistoryPage
