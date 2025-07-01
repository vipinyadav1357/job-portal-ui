import { Divider, LoadingOverlay } from '@mantine/core'
import { IconPointFilled, IconClockHour3 } from '@tabler/icons-react'
import React, { useState } from 'react'
import ApplyJobForm from './sections/ApplyJobForm';
import { formatDateToDayFromCurrentDate } from '../../services/Utilities/Utilities';

const ApplyJobComponent = (props: any) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            <div className='w-2/3 mx-auto'>
                <LoadingOverlay className='min-h-[150vh]'
                    loaderProps={{ size: 'lg', color: 'brightSun.4', variant: 'bars' }}
                    overlayOpacity={0.1}
                    overlayBlur={2}
                    zIndex={1000}
                    overlayColor="#c5c5c5"
                    visible={isLoading}
                />
                <div className='flex justify-between px-5'>
                    <div className='flex items-center gap-2'>
                        <div className='p-4 bg-mine-shaft-700 rounded-md'>
                            <img className='h-16' src={`/Icons/${props.company}.png`} alt="hi" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className=' font-semibold text-2xl tracking-wide'>{props.jobTitle}</div>
                            <div className='flex gap-1 items-center'>
                                <div className='text-lg text-mine-shaft-300'>{props.company} <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' /> {props.applicants ? props.applicants.length : 0} applicants</div>
                                <div className='text-lg text-mine-shaft-300'>
                                    <IconClockHour3 className='inline-block text-bright-sun-400' />{formatDateToDayFromCurrentDate(props.postTime)} ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider size={"xs"} my="md" color='brightSun.4' />
                <ApplyJobForm setLoading={setIsLoading} />
            </div>
        </>
    )
}

export default ApplyJobComponent
