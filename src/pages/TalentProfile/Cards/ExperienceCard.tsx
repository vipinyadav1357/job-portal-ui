import { IconMapPin } from '@tabler/icons-react'
import React from 'react'

const ExperienceCard = ({ props }: any) => {
    return (
        <div className='bg-mine-shaft-900  p-4 rounded-xl flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-mine-shaft-800 rounded-md'>
                        <img className='h-10' src={`/Icons/${props.company}.png`} alt="hi" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className=' font-semibold tracking-wide'>{props.title}</div>
                        <div className='text-sm text-mine-shaft-300 flex gap-2 items-center'>
                            {props.company}
                            <div className='flex items-center gap-1'>
                                <IconMapPin height={16} width={16} className='text-bright-sun-400' stroke={1.5} />{props.location}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-sm text-bright-sun-400 underline '>{props.startDate} - {props.endDate}</div>
            </div>
            <div className='text-mine-shaft-300 text-sm text-justify p-1'>{props.description}</div>
        </div>
    )
}

export default ExperienceCard
