import { Avatar, Divider, Tabs, Tooltip } from '@mantine/core'
import { IconBriefcase2Filled, IconMapPin, IconPhoto, IconUsers } from '@tabler/icons-react'
import React from 'react'
import AboutCompanycomponent from './AboutCompanycomponent'
import CopmanyJobsComponent from './CopmanyJobsComponent'
import CompanyEmployee from './CompanyEmployee'

const CompanyProfile = (props: any) => {
    return (
        <div className='w-3/4 ml-5'>
            <div className='relative'>
                <img className='rounded-t-2xl' src="/profile/banner.jpg" alt="" />
                <img className=' p-2 rounded-3xl h-36 w-36 absolute -bottom-1/3 left-3 border-8 border-mine-shaft-950 bg-mine-shaft-950' src="Icons/Google.png" alt="" />
            </div>
            <div className='px-5 mt-16 flex flex-col gap-1'>
                <div className='text-3xl flex justify-between items-center font-semibold'>
                    Google
                    <Avatar.Group spacing="sm">
                        <Tooltip label="Vipin Yadav" withArrow>
                            <Avatar src="avatar.png" radius="xl" />
                        </Tooltip>
                        <Tooltip label="Deepak Yadav" withArrow>
                            <Avatar src="avatar1.png" radius="xl" />
                        </Tooltip>
                        <Tooltip label="Kamalesh Yadav" withArrow>
                            <Avatar src="avatar2.png" radius="xl" />
                        </Tooltip>
                        <Tooltip
                            withArrow
                            label={
                                <>
                                    <div>and more...</div>
                                </>
                            }
                        >
                            <Avatar radius="xl">+10k</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
                {/* <div className='text-mine-shaft-200 text-xl flex items-center gap-1'><IconBriefcase2Filled /> {props.role} <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {props.company}</div> */}
                <div className='text-lg flex gap-1 items-center text-mine-shaft-300'>
                    <IconMapPin stroke={1.5} />{props.location}
                </div>
            </div>
            <Divider size={"xs"} my="xl" color='brightSun.4' />
            <div>
                <div>
                    <Tabs defaultValue="about">
                        <Tabs.List className='mb-5 [&_button]:text-lg font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex gap-5 items-center'>
                            <Tabs.Tab value="about" icon={<IconPhoto size={14} />} >about</Tabs.Tab>
                            <Tabs.Tab value="jobs" icon={<IconBriefcase2Filled size={14} />}>jobs</Tabs.Tab>
                            <Tabs.Tab value="employees" icon={<IconUsers size={14} />}>employees</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="about" pt="xs">
                            <AboutCompanycomponent />
                        </Tabs.Panel>

                        <Tabs.Panel value="jobs" pt="xs">
                            <CopmanyJobsComponent />
                        </Tabs.Panel>
                        <Tabs.Panel value="employees" pt="xs">
                            <CompanyEmployee />
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile
