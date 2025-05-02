import { Divider } from '@mantine/core'
import React, { useEffect } from 'react'
import PostedJobComponent from './PostedJobComponent';

const PostedJobsPage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-4 " >
            <Divider size={"xs"} color='brightSun.4' />
            {/* <div className='flex  gap-5'> */}
            <div className=' ml-5 '>
                <PostedJobComponent />
            </div>
        </div >
    )
}

export default PostedJobsPage
