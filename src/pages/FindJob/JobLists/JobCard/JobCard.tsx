import { IconBookmark, IconBookmarkFilled, IconClockHour3, IconCurrencyRupee, IconPointFilled } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Button, Divider, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { formatDateToDayFromCurrentDate } from '../../../../services/Utilities/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../../../slices/ProfileSlice'
const JobCard = (props: any) => {
    const userProfile = useSelector((state: any) => state.profile);
    const [saved, setSaved] = useState<boolean>(false)
    const dispatch = useDispatch();
    useEffect(() => {
        // Check if the job is already saved
        if (userProfile?.savedJobs?.includes(props.id)) {
            setSaved(true);
        } else {
            setSaved(false);
        }
    }, [userProfile, props.id, saved]);

    const handleSavedJob = () => {
        let savedJobs = [...userProfile?.savedJobs || []];
        if (saved) {
            setSaved(false);
            // Remove from saved jobs
            const index = savedJobs.indexOf(props.id);
            if (index > -1) {
                savedJobs.splice(index, 1);
                let updatedProfile = { ...userProfile, savedJobs: savedJobs }
                dispatch(changeProfile(updatedProfile));
            }
        } else {
            setSaved(true);
            // Add to saved jobs
            savedJobs = [...savedJobs, props.id];
            let updatedProfile = { ...userProfile, savedJobs: savedJobs }
            dispatch(changeProfile(updatedProfile));
        }
    }
    return (
        <div className='cursor-pointer bg-mine-shaft-900 w-80 p-4 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.5)] !hover:shadow-bright-sun-400 transition-all duration-500 ease-in-out'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-mine-shaft-800 rounded-md'>
                        <img className='h-7' src={`/Icons/${props.company}.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold tracking-wide'>
                            {props.jobTitle}
                        </div>
                        <div className='text-xs text-mine-shaft-300'>
                            {props.company}
                            <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {props.applicants ? props.applicants.length : 0} applicants</div>
                    </div>
                </div>
                {saved ? <IconBookmarkFilled onClick={handleSavedJob} className='text-bright-sun-400 transition-all duration-200' stroke={1.5} /> : <IconBookmark onClick={handleSavedJob} className='text-bright-sun-400 hover:fill-bright-sun-400 hover:stroke-bright-sun-400 transition-all duration-200' stroke={1.5} />}
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
                <div className='text-mine-shaft-200 [text-shadow:_0px_0px_3px_#b0b0b0,_-0px_0px_3px_#b0b0b0,_-0px_0px_3px_#b0b0b0,_0px_-0px_3px_#b0b0b0]'>
                    <IconCurrencyRupee className='inline-block' width={16} height={16} stroke={3} />
                    {props.packageOffered + " "}lpa</div>
                <div className='flex items-center gap-1'><IconClockHour3 className='inline-block text-bright-sun-400' />{formatDateToDayFromCurrentDate(props.postTime)}ago</div>
            </div>
            <Link to={`/job-profile/${props.id}`}>
                <Button fullWidth color='brightSun.4' variant='outline'>view Job</Button>
            </Link>
        </div>
    )
}

export default JobCard

