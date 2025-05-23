import React from 'react'
import { Avatar, TextInput, Tooltip } from "@mantine/core"
import { IconSearch, IconBriefcase2Filled, IconId } from "@tabler/icons-react"
const DreamJob = () => {
    return (
        <div className='flex items-center px-20'>

            <div className='flex flex-col gap-3 w-[45%] text-mine-shaft-100'>

                <div className='text-6xl font-bold leading-tight [&>span]:text-bright-sun-400'>
                    Find Your <span className='tracking-wider [text-shadow:_2px_1px_3px_#f99b07,_-2px_-1px_3px_#f99b07,_-2px_1px_3px_#f99b07,_2px_-1px_3px_#f99b07] '>Dream Job</span> With Us
                </div>

                <div className='text-lg text-mine-shaft-200'>
                    Good Life Begins With Good Company, Start Explore Thousand Of Jobs In One Place
                </div>

                <div className='flex justify-between mt-2'>
                    <TextInput className='bg-mine-shaft-900 px-2 py-1 w-[40%] rounded-lg [&>label]:!text-bright-sun-400  [&_input]:!text-mine-shaft-100'
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                        icon={<IconBriefcase2Filled className='text-bright-sun-300' />}
                    />
                    <TextInput className='bg-mine-shaft-900 px-2 py-1 w-[40%] rounded-lg [&>label]:!text-bright-sun-400  [&_input]:!text-mine-shaft-100'
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Full-Time"
                        icon={<IconId className='text-bright-sun-300' />}
                    />
                    <div className='text-mine-shaft-100 w-[15%] h-full px-2 py-1 rounded-lg bg-bright-sun-400 flex items-center justify-center hover:bg-bright-sun-500 cursor-pointer'>
                        <IconSearch className='h-[90%] w-[90%] p-1.5' />
                    </div>
                </div>

            </div>

            <div className='w-[55%] flex items-center justify-center'>
                <div className='w-[30rem] relative border-2 border-bright-sun-400 rounded-full'>
                    <img src="/Boy.png" alt="boy" />
                    <div className='text-mine-shaft-100 absolute -right-16 top-[55%] w-fit border-bright-sun-400 border rounded-lg p-3 backdrop-blur-md'>
                        <div className='text-center text-sm mb-1'>got 10k+ Jobs</div>
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
                    <div className='absolute top-[30%] -left-12 border-bright-sun-400 border w-fit p-2 rounded-lg backdrop-blur-md flex flex-col items-center gap-2 tracking-wider'>
                        <div className='flex gap-2 items-center '>
                            <div className='w-11 h-11'>
                                <img src='google1.png' alt='' />
                            </div>
                            <div className='text-mine-shaft-100 text-sm'>
                                <div className='[text-shadow:_0px_0px_3px_#b0b0b0,_-0px_0px_3px_#b0b0b0,_-0px_0px_3px_#b0b0b0,_0px_-0px_3px_#b0b0b0]'>Software Engineer</div>
                                <div className='text-mine-shaft-200 text-xs'>Benguluru, India</div>
                            </div>
                        </div>
                        <div className='text-mine-shaft-200 flex gap-2 text-xs'>
                            <span>
                                1 Day Ago
                            </span>
                            <span>
                                1000+ Applicants
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DreamJob
