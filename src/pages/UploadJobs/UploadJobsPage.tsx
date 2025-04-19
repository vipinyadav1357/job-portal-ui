import React, { useEffect } from 'react'
import UploadJobs from './Upload/UploadJobs'

const UploadJobsPage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-16 " >
            <UploadJobs />
        </div>
    )
}

export default UploadJobsPage
