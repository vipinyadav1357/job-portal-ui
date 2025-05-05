import { Tabs } from '@mantine/core'
import { IconPhoto, IconBriefcase2Filled } from '@tabler/icons-react'
import React from 'react'
import { activeJobs } from '../../Data/PostedJob'
import PostedJobCard from './PostedJobCard'

const PostedJobComponent = () => {
    return (
        <div className='w-1/6 ml-5 mt-5'>
            <div className='text-2xl font-semibold text-center mt-3'>Jobs</div>
            <div>
                <Tabs variant='pills' defaultValue="Active">
                    <Tabs.List className='mb-5 [&_button]:text-sm font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex flex-wrap gap-2 items-center justify-evenly'>
                        <Tabs.Tab value="Active" icon={<IconPhoto size={14} />} >Active[4]</Tabs.Tab>
                        <Tabs.Tab value="Drafts" icon={<IconBriefcase2Filled size={14} />}>Drafts[1]</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="Active" pt="xs">
                        <div className='flex flex-col gap-5'>
                            {
                                activeJobs.map((job, index) => (
                                    <PostedJobCard key={index} {...job} />
                                ))
                            }
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="Drafts" pt="xs">
                        Drafts
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default PostedJobComponent
