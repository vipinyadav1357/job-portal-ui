import { Button } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpInput from './ExpInput'
import { formatToMonthYear } from '../../../services/Utilities/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../../slices/ProfileSlice'

const ExperienceCard = ({ props, edit, setEdit, index, }: any) => {
    const [editexp, setEditexp] = useState(false)
    const userProfile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    const hadleDelete = () => {
        let exp = [...userProfile.experience];
        exp.splice(props.index, 1);
        let updatedProfile = { ...userProfile, experience: exp };
        dispatch(changeProfile(updatedProfile));
        setEdit(false);
    }
    return (
        !editexp || !edit ?
            <div className='bg-mine-shaft-900  p-4 rounded-xl flex flex-col gap-5' >
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
                    <div className='text-sm text-bright-sun-400 underline '>{formatToMonthYear(props.startDate)} - {!props.working ? formatToMonthYear(props?.endDate) : 'present'}</div>
                </div>
                <div className='text-mine-shaft-300 text-sm text-justify p-1'>{props.description}</div>
                {
                    edit &&
                    <div className='flex justify-start gap-10 items-center'>
                        <Button onClick={() => { setEditexp(true) }} variant='outline' color='brightSun.4' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Edit</Button>
                        <Button onClick={hadleDelete} variant='subtle' color='red' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Delete</Button>
                    </div>
                }
            </div > : <ExpInput {...props} setEditexp={setEditexp} setEdit={setEdit} index={index} />

    )
}

export default ExperienceCard
