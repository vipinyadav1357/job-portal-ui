import { IconBookmark, IconClockHour3, IconCurrencyRupee, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import { Divider, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
const JobCard = (props: any) => {
    return (
        <Link to={"/job-profile"} className='cursor-pointer bg-mine-shaft-900 w-80 p-4 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.5)] !hover:shadow-bright-sun-400 transition-all duration-500 ease-in-out'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-mine-shaft-800 rounded-md'>
                        <img className='h-7' src={`/Icons/${props.company}.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold tracking-wide'>{props.jobTitle}</div>
                        <div className='text-xs text-mine-shaft-300'>{props.company} <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {props.applicants ? props.applicants.length : 0} applicants</div>
                    </div>
                </div>
                <IconBookmark className='text-mine-shaft-300 hover:fill-mine-shaft-300 hover:stroke-mine-shaft-300 transition-all duration-200' stroke={1.5} />
            </div>
            <div className='flex gap-2 [&>div]:!px-2 [&>div]:!py-1 [&>div]:!bg-mine-shaft-800 [&>div]:!text-bright-sun-700 [&>div]:!rounded-lg [&>div]:!text-xs [&>div]:!font-semibold [&>div:hover]:!bg-bright-sun-500 [&>div:hover]:!text-mine-shaft-900'>
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <Text lineClamp={3} className='text-justify leading-4 text-xs text-mine-shaft-300'>
                {props.about}
            </Text>
            <Divider mr="xs" color='mine-shaft-700' />

            <div className='flex justify-between text-xs text-mine-shaft-400 items-center'>
                <div className='text-mine-shaft-200 [text-shadow:_0px_0px_3px_#b0b0b0,_-0px_0px_3px_#b0b0b0,_-0px_0px_3px_#b0b0b0,_0px_-0px_3px_#b0b0b0]'><IconCurrencyRupee className='inline-block' width={16} height={16} stroke={3} />{props.package}</div>
                <div className='flex items-center gap-1'><IconClockHour3 className='inline-block text-bright-sun-400' />{props.postedDaysAgo} Days ago</div>
            </div>
        </Link>
    )
}

export default JobCard
