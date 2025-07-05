import { Tabs } from '@mantine/core'
import { IconPhoto, IconBriefcase2Filled } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import PostedJobCard from './PostedJobCard'

const PostedJobComponent = (props: any) => {
    const [jobs, setJobs] = useState<any>();
    const [activeTab, setActiveTab] = useState<string>('ACTIVE');

    useEffect(() => {
        setActiveTab(props.job?.jobStatus || 'ACTIVE')
        setJobs(props.jobList)
    }, [props.jobList, props.job]);
    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };
    return (
        <div className='w-1/6 ml-5 mt-5'>
            <div className='text-2xl font-semibold text-center mt-3'>Jobs</div>
            <div>
                <Tabs variant='pills' value={activeTab} onTabChange={handleTabChange}>
                    <Tabs.List className='mb-5 [&_button]:text-sm font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex flex-wrap gap-0 items-center justify-evenly'>
                        <Tabs.Tab value="ACTIVE" icon={<IconPhoto size={14} />} >Active[{jobs?.filter((job: any) => job.jobStatus === "ACTIVE").length}]</Tabs.Tab>
                        <Tabs.Tab value="DRAFT" icon={<IconBriefcase2Filled size={14} />}>Drafts[{jobs?.filter((job: any) => job.jobStatus === "DRAFT").length}]</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value={activeTab} pt="xs">
                        <div className='flex flex-col gap-5'>
                            {
                                jobs?.filter((job: any) => job.jobStatus === activeTab).map((job: any, index: any) => (
                                    <PostedJobCard key={index} {...job} />
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default PostedJobComponent
