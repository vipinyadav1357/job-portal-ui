import { Divider } from '@mantine/core'
import React, { useEffect } from 'react'
import PostedJobComponent from './PostedJobComponent';
import PostedJobDescription from './PostedJobDescription';

const PostedJobsPage = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <div className="min-h-[100vh] text-mine-shaft-100 bg-mine-shaft-950 font-['poppins'] pt-4 " >
            <Divider size={"xs"} color='brightSun.4' />
            {/* <div className='flex  gap-5'> */}
            <div className='flex justify-between'>
                <PostedJobComponent />
                <Divider orientation='vertical' size={"xs"} color='brightSun.4' mx={"lg"} my={"xs"} />
                <PostedJobDescription />
            </div>
        </div >
    )
}

export default PostedJobsPage
