import { Badge, Tabs } from '@mantine/core'
import { IconPhoto, IconBriefcase2Filled, IconUsers } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import JobProfile from '../JobProfile/JobProfile'
import TalentCard from '../FindTalent/Talents/TalentCard/TalentCard'


const PostedJobDescription = (props: any) => {
    const [job, setJob] = useState<any>();
    const [applicants, setApplicants] = useState<any[]>([]);
    const [tab, setTab] = useState<string>('Overview');
    useEffect(() => {
        window.scroll(0, 0);
        if (tab === "Overview") {
            setJob(props?.job);
        }
        if (tab === "APPLIED" || tab === "INTERVIEWING" || tab === "OFFERED" || tab === "REJECTED") {
            setApplicants(props?.job?.applicants?.filter((applicant: any) => applicant.applicationStatus === tab));
        }
    }, [props.job, tab]);
    const handleTabChange = (value: string) => {
        setTab(value);
    };
    return (
        <div className='mt-5 w-5/6'>
            {
                <>
                    <div className='text-2xl font-semibold  mt-3 flex items-center'>{job?.jobTitle ?? ""} <Badge mr={"md"} mb={"lg"} size='xs' variant='light' color='BrightSun.4' >new</Badge></div>
                    <div className='font-medium text-mine-shaft-300 mb-5'>{job?.location ?? ""}</div>
                    <div>
                        <Tabs value={tab} onTabChange={handleTabChange}>
                            <Tabs.List className='mb-5 [&_button]:text-lg font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex gap-5 items-center'>
                                <Tabs.Tab value="Overview" icon={<IconPhoto size={14} />} >Overview</Tabs.Tab>
                                <Tabs.Tab value="APPLIED" icon={<IconBriefcase2Filled size={14} />}>Applicants</Tabs.Tab>
                                <Tabs.Tab value="INTERVIEWING" icon={<IconUsers size={14} />}>Invited</Tabs.Tab>
                                <Tabs.Tab value="OFFERED" icon={<IconBriefcase2Filled size={14} />}>offered</Tabs.Tab>
                                <Tabs.Tab value="REJECTED" icon={<IconUsers size={14} />}>rejected</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value={tab} pt="xs">
                                {tab === "Overview" ?
                                    <JobProfile job={job} edit={true} />
                                    :
                                    <div className=' flex flex-wrap gap-10 justify-center'>
                                        {
                                            applicants?.length === 0 || Object.keys(applicants ?? {}).length === 0
                                                ?
                                                <div className='text-2xl font-semibold text-mine-shaft-300'>No {tab} applicants</div>
                                                :
                                                applicants?.map((talent: any, index: any) => {
                                                    return (
                                                        <div key={index}>
                                                            {
                                                                <TalentCard applicants={talent} posted={tab === "APPLIED" ? true : false} invite={tab === "INTERVIEWING" ? true : false} />
                                                            }
                                                        </div>
                                                    )
                                                }
                                                )
                                        }
                                    </div>
                                }

                            </Tabs.Panel>
                        </Tabs>
                    </div>
                </>
            }

        </div>
    )
}

export default PostedJobDescription
