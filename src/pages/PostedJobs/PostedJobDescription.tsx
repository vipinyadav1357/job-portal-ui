import { Badge, Tabs } from '@mantine/core'
import { IconPhoto, IconBriefcase2Filled, IconUsers } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import JobProfile from '../JobProfile/JobProfile'
import TalentCard from '../FindTalent/Talents/TalentCard/TalentCard'


const PostedJobDescription = (props: any) => {
    const [job, setJob] = useState<any>({})
    useEffect(() => {
        window.scroll(0, 0);
        setJob(props.job);
    }, [props.job])
    return (
        <div className='mt-5 w-5/6'>
            <div className='text-2xl font-semibold  mt-3 flex items-center'>{job?.jobTitle} <Badge mr={"md"} mb={"lg"} size='xs' variant='light' color='BrightSun.4' >new</Badge></div>
            <div className='font-medium text-mine-shaft-300 mb-5'>{job?.location}</div>
            <div>
                <Tabs defaultValue="Overview">
                    <Tabs.List className='mb-5 [&_button]:text-lg font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex gap-5 items-center'>
                        <Tabs.Tab value="Overview" icon={<IconPhoto size={14} />} >Overview</Tabs.Tab>
                        <Tabs.Tab value="Applicants" icon={<IconBriefcase2Filled size={14} />}>Applicants</Tabs.Tab>
                        <Tabs.Tab value="Invited" icon={<IconUsers size={14} />}>Invited</Tabs.Tab>
                        <Tabs.Tab value="offered" icon={<IconBriefcase2Filled size={14} />}>offered</Tabs.Tab>
                        <Tabs.Tab value="rejected" icon={<IconUsers size={14} />}>rejected</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="Overview" pt="xs" className='[&>div]:w-fit '>
                        <JobProfile job={job} edit={true} />
                    </Tabs.Panel>

                    <Tabs.Panel value="Applicants" pt="xs">
                        <div className=' flex flex-wrap gap-10 justify-center'>
                            {
                                job?.applicants?.filter((applicant: any) => applicant.applicationStatus === "APPLIED")
                                    .map((talent: any, index: any) => {
                                        console.log(talent);
                                        return (
                                            <div key={index}>
                                                {
                                                    <TalentCard applicants={talent} posted />
                                                }
                                            </div>
                                        )
                                    }
                                    )
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="Invited" pt="xs">
                        <div className=' flex flex-wrap gap-10 justify-center'>
                            {
                                job?.applicants?.filter((applicant: any) => applicant.applicationStatus === "INTERVIEWING")
                                    .map((talent: any, index: any) =>
                                        <div key={index}>
                                            {
                                                <TalentCard applicants={talent} invite />
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered" pt="xs">
                        <div className=' flex flex-wrap gap-10 justify-center'>
                            {
                                job?.applicants?.filter((applicant: any) => applicant.applicationStatus === "OFFERED")
                                    .map((talent: any, index: any) =>
                                        <div key={index}>
                                            {
                                                <TalentCard applicants={talent} invite />
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="rejected" pt="xs">
                        <div className=' flex flex-wrap gap-10 justify-center'>
                            {
                                job?.applicants?.filter((applicant: any) => applicant.applicationStatus === "REJECTED")
                                    .map((talent: any, index: any) =>
                                        <div key={index}>
                                            {
                                                <TalentCard applicants={talent} invite />
                                            }
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
