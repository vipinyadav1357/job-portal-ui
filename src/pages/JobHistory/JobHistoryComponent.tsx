import { Tabs } from '@mantine/core'
import { IconPhoto, IconBriefcase2Filled, IconUsers } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { jobList } from '../../Data/JobsData'
import JobHistoryCard from './JobHistoryCard'
import { getAllJob } from '../../services/JobService'

const JobHistoryComponent = () => {
    const [activeTab, setActiveTab] = useState<any>("APPLIED");
    const [jobList, setJobList] = useState<any>([]);
    const [showList, setShowList] = useState<any>([]);

    useEffect(() => {
        getAllJob().then((res) => {
            setJobList(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className='w-fit'>
            <div className='text-2xl font-semibold text-center mt-3'>Jobs history</div>

            <Tabs defaultValue={activeTab} onChange={setActiveTab}>
                <Tabs.List className='mb-5 [&_button]:text-lg font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex gap-5 items-center'>
                    <Tabs.Tab value="APPLIED" icon={<IconPhoto size={14} />} >Applied</Tabs.Tab>
                    <Tabs.Tab value="SAVED" icon={<IconBriefcase2Filled size={14} />}>Saved</Tabs.Tab>
                    <Tabs.Tab value="OFFERED" icon={<IconUsers size={14} />}>Offered</Tabs.Tab>
                    <Tabs.Tab value="INTERVIEWING" icon={<IconUsers size={14} />}>Interviewing</Tabs.Tab>

                </Tabs.List>

                <Tabs.Panel value={activeTab} pt="xs" className='[&>div]:w-fit '>

                    <div className='flex flex-wrap gap-10 justify-center '>
                        {
                            jobList.map((job: any, index: any) => (
                                <div key={index} >
                                    <JobHistoryCard {...job} {...{ [activeTab.toLowerCase()]: true }} />
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
