import { Tabs } from '@mantine/core'
import { IconPhoto, IconBriefcase2Filled, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { jobList } from '../../Data/JobsData'
import JobHistoryCard from './JobHistoryCard'

const JobHistoryComponent = () => {
    return (
        <div className='w-fit'>
            <div className='text-2xl font-semibold text-center mt-3'>Jobs history</div>

            <Tabs defaultValue="Applied" >
                <Tabs.List className='mb-5 [&_button]:text-lg font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex gap-5 items-center'>
                    <Tabs.Tab value="Applied" icon={<IconPhoto size={14} />} >Applied</Tabs.Tab>
                    <Tabs.Tab value="Saved" icon={<IconBriefcase2Filled size={14} />}>Saved</Tabs.Tab>
                    <Tabs.Tab value="Offered" icon={<IconUsers size={14} />}>Offered</Tabs.Tab>
                    <Tabs.Tab value="Interviewing" icon={<IconUsers size={14} />}>Interviewing</Tabs.Tab>

                </Tabs.List>

                <Tabs.Panel value="Applied" pt="xs" className='[&>div]:w-fit '>

                    <div className='flex flex-wrap gap-10 justify-center '>
                        {
                            jobList.map((job, index) => (
                                <div key={index} >
                                    <JobHistoryCard {...job} applied />
                                </div>
                            ))
                        }
                    </div>
                </Tabs.Panel>

                <Tabs.Panel value="Saved" pt="xs">
                    <div className='flex flex-wrap gap-10 justify-center '>
                        {
                            jobList.map((job, index) => (
                                <div key={index} >
                                    <JobHistoryCard {...job} saved />
                                </div>
                            ))
                        }
                    </div>

                </Tabs.Panel>
                <Tabs.Panel value="Offered" pt="xs">
                    <div className='flex flex-wrap gap-10 justify-center '>
                        {
                            jobList.map((job, index) => (
                                <div key={index} >
                                    <JobHistoryCard {...job} offered />
                                </div>
                            ))
                        }
                    </div>

                </Tabs.Panel>
                <Tabs.Panel value="Interviewing" pt="xs">
                    <div className='flex flex-wrap gap-10 justify-center '>
                        {
                            jobList.map((job, index) => (
                                <div key={index} >
                                    <JobHistoryCard {...job} interviewing />
                                </div>
                            ))
                        }
                    </div>

                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default JobHistoryComponent
