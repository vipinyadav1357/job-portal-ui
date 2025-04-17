import { ActionIcon, Avatar, Button, Divider, Tooltip } from '@mantine/core'
import { IconBookmark, IconClockHour3, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card, desc } from '../../Data/JobDescData'
import { profile } from '../../Data/TalentData'
//@ts-ignore
import DOMPurify from 'dompurify';

const JobProfile = (props: any) => {
    const data = DOMPurify.sanitize(desc)
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
                {
                    card
                        .map((item, index) =>
                            <div key={index} className='flex flex-col w-fit items-center'>
                                <ActionIcon className='h-12 w-12' color="brightSun.4" radius="xl" variant="light" bg={"mineShaft.7"} >
                                    <item.icon size={30} />
                                </ActionIcon>
                                <div className='text-sm font-semibold'>{item.name}</div>
                                <div className='font-semibold'>{item.value}</div>
                            </div>
                        )}
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div>
                <div className='font-semibold text-2xl mb-3'>Required Skills</div>
                <div className='flex flex-wrap gap-3  px-10'>
                    {
                        profile
                            .skills
                            .map((skill: any, index: any) =>
                                <div key={index} className='bg-bright-sun-300 font-medium bg-opacity-15 rounded-3xl px-3 py-1 text-center'><ActionIcon className='h-fit w-fit' color="brightSun.4" variant="transparent" >
                                    {skill}
                                </ActionIcon>
                                </div>
                            )}
                </div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div>
                <div className='font-semibold text-2xl mb-3'> Job Description</div>
                <div className='[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_ul]:mx-5 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1' dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />
            <div className='flex flex-col gap-2'>
                <div className='font-semibold text-2xl mb-4'> About The Company</div>
                <div className='flex justify-between '>
                    <div className='flex items-center gap-2'>
                        <div className='p-4 bg-mine-shaft-700 rounded-md'>
                            <img className='h-10' src={`/Icons/${props.company}.png`} alt="hi" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className=' font-medium text-lg tracking-wide'>{props.company}</div>
                            <div className='text-lg text-mine-shaft-300 flex gap-1 items-center'>
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
                                        <Avatar radius="xl" bg={"mineShaft.7"} >+10k</Avatar>
                                    </Tooltip>
                                </Avatar.Group>employees</div>
                        </div>
                    </div>
                    <Link to={""} >
                        <Button variant='light' color='brightSun.4' bg={"mineShaft.7"} >visit </Button>
                    </Link>
                </div>
                <div className='text-justify text-mine-shaft-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus laborum nam dolore fugit hic autem itaque expedita quam sapiente officiis repellendus velit voluptatibus reprehenderit, voluptatem doloribus tempora maxime esse. Natus iusto nam voluptas aperiam atque. Ab enim aliquam, nesciunt, eum fuga sed voluptatum modi aspernatur officia itaque hic doloremque ipsam?</div>
            </div>
            <Divider size={"sm"} my="md" color='brightSun.0' />

        </div>
    )
}

export default JobProfile
