import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, IconClockHour3, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card } from '../../Data/JobDescData'
import { profile } from '../../Data/TalentData'

const JobProfile = (props: any) => {
    return (
        <div className='w-2/3 mx-5 pb-3'>
            <div className='flex justify-between '>
                <div className='flex items-center gap-2'>
                    <div className='p-4 bg-mine-shaft-700 rounded-md'>
                        <img className='h-16' src={`/Icons/${props.company}.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold text-2xl tracking-wide'>{props.jobTitle}</div>
                        <div className='text-lg text-mine-shaft-300'>{props.company} <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {props.applicants} applicants</div>
                        <div className='text-sm text-mine-shaft-300'>
                            <IconClockHour3 className='inline-block text-bright-sun-400' />12 Days ago
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center '>
                    <div className='text-sm'>
                        <Link to={"/apply-job"} >
                            <Button variant='light' color='brightSun.4' bg={"mineShaft.7"} >Apply</Button>
                        </Link>
                    </div>
                    <IconBookmark className='text-bright-sun-400 hover:fill-bright-sun-400 hover:stroke-bright-sun-400 transition-all duration-200' stroke={1.5} />
                </div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div className='flex items-center py-10 justify-around'>
                {card.map((item, index) => <div key={index} className='flex flex-col w-fit items-center'>
                    <ActionIcon className='h-12 w-12' color="brightSun.4" radius="xl" variant="light" bg={"mineShaft.7"} >
                        <item.icon size={30} />
                    </ActionIcon>
                    <div className='text-sm font-semibold'>{item.name}</div>
                    <div className='font-semibold'>{item.value}</div>
                </div>)}
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div>
                <div className='font-semibold text-2xl mb-3'>Required Skills</div>
                <div className='flex flex-wrap gap-3  px-10'>
                    {
                        profile
                            .skills
                            .map((skill: any, index: any) => <div key={index} className='bg-bright-sun-300 font-medium bg-opacity-15 rounded-3xl  px-3 py-1 text-center'><ActionIcon className='h-fit w-fit ' color="brightSun.4" variant="transparent" >
                                {skill}
                            </ActionIcon></div>
                            )}

                </div>
            </div>
        </div>
    )
}

export default JobProfile
