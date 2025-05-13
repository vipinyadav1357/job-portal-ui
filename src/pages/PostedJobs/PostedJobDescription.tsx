import { Badge, Tabs } from '@mantine/core'
import { IconPhoto, IconBriefcase2Filled, IconUsers } from '@tabler/icons-react'
import React from 'react'
import CompanyEmployee from '../CompanyProfile/CompanyEmployee'
import { jobList } from '../../Data/JobsData'
import JobProfile from '../JobProfile/JobProfile'
import { talents } from '../../Data/TalentData'
import TalentCard from '../FindTalent/Talents/TalentCard/TalentCard'


const PostedJobDescription = () => {

    return (
        <div className='mt-5 w-3/4 px-5'>
            <div className='text-2xl font-semibold  mt-3 flex items-center'>Software Engineer <Badge mr={"md"} mb={"lg"} size='xs' variant='light' color='BrightSun.4' >new</Badge></div>
            <div className='font-medium text-mine-shaft-300 mb-5'>Benguluru, India</div>
            <div>
                <Tabs defaultValue="Overview">
                    <Tabs.List className='mb-5 [&_button]:text-lg font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex gap-5 items-center'>
                        <Tabs.Tab value="Overview" icon={<IconPhoto size={14} />} >Overview</Tabs.Tab>
                        <Tabs.Tab value="Applicants" icon={<IconBriefcase2Filled size={14} />}>Applicants</Tabs.Tab>
                        <Tabs.Tab value="Invited" icon={<IconUsers size={14} />}>Invited</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="Overview" pt="xs" className='[&>div]:w-full '>
                        <JobProfile {...jobList[0]} edit={true} />
                    </Tabs.Panel>

                    <Tabs.Panel value="Applicants" pt="xs">
                        <div className=' flex flex-wrap gap-10 justify-around'>
                            {
                                talents
                                    .map((job, index) =>
                                        <div key={index}>
                                            <TalentCard talentData={job} posted />
                                        </div>
                                    )
                            }
                        </div>                    </Tabs.Panel>
                    <Tabs.Panel value="Invited" pt="xs">
                        <div className=' flex flex-wrap gap-10 justify-around'>
                            {
                                talents
                                    .map((job, index) =>
                                        <div key={index}>
                                            <TalentCard talentData={job} invite />
                                        </div>
                                    )
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default PostedJobDescription
