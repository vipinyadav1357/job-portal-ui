import React, { useState } from 'react'
import fields from '../../../Data/Profile'
import { ActionIcon } from '@mantine/core'
import { IconPencil, IconMapPin, IconCheck, IconX } from '@tabler/icons-react'
import { IconBriefcase2Filled, IconPointFilled } from '@tabler/icons-react'
import SelectInput from '../SelectInput/SelectInput'
import { useForm } from '@mantine/form'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../../slices/ProfileSlice'

const Info = () => {
    const [edit, setEdit] = useState(false);
    const userProfile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    // const user = useSelector((state: any) => state.user);
    const form = useForm({
        initialValues: {
            jobTitle: '',
            company: '',
            location: ''
        },
    });
    const handleEdit = () => {
        if (!edit) {
            setEdit(true);
            form.setValues({
                jobTitle: userProfile.jobTitle,
                company: userProfile.company,
                location: userProfile.location
            });
            console.log("Form submitted with values:", form.values);
        } else {
            setEdit(false);
        }
    }
    const handleSave = () => {
        let updateProfile = { ...userProfile, ...form.values }
        console.log("updated profile", updateProfile);
        dispatch(changeProfile(updateProfile));
        form.reset();
        setEdit(false);
    }
    return (
        <>
            <div className='px-5 mt-20 flex flex-col gap-1'>
                <div className='text-3xl flex justify-between items-center font-semibold'>
                    {userProfile?.name}
                    <div className='flex justify-between items-center'>
                        {edit && <ActionIcon onClick={handleSave} color="green.8" variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {edit ? <IconCheck size={30} stroke={1.5} /> : <IconPencil size={30} />}
                        </ActionIcon>}
                        <ActionIcon onClick={handleEdit} color={edit ? "red.8" : "brightSun.4"} variant="subtle" size={40} className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out'>
                            {edit ? <IconX size={30} stroke={1.5} /> : <IconPencil size={30} />}
                        </ActionIcon>
                    </div>
                </div>
                {
                    edit ?
                        <>
                            <div className='flex justify-start gap-10 items-center'>
                                <SelectInput form={form} name="jobTitle" {...fields[0]} />
                                <SelectInput form={form} name="company" {...fields[1]} />
                            </div>
                            <div className='flex justify-start gap-10 items-center'>
                                <SelectInput form={form} name="location" {...fields[2]} />
                                <div></div>
                            </div>
                        </>
                        :
                        <>
                            <div className='text-mine-shaft-200 text-xl flex items-center gap-1'>
                                <IconBriefcase2Filled />
                                {userProfile?.jobTitle}
                                <IconPointFilled width={16} height={16} className='inline-block text-bright-sun-400' />
                                {userProfile?.company}
                            </div>
                            <div className='text-lg flex gap-1 items-center text-mine-shaft-300'>
                                <IconMapPin stroke={1.5} />
                                {userProfile?.location}
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Info
