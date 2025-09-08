import { ActionIcon, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../../slices/ProfileSlice';

const About = () => {
    const userProfile = useSelector((state: any) => state.profile);
    const [edit, setEdit] = useState(false);
    const [about, setAbout] = useState('');
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {
            about: ''
        },
    });

    const handleEdit = () => {
        if (!edit) {
            setEdit(true);
            if (userProfile?.about) {
                setAbout(userProfile.about);
            }
            form.setValues({
                about: userProfile?.about
            });
        } else {
            setEdit(false);
        }
    }
    const handleSave = () => {
        form.setFieldValue('about', about);
        console.log("Form submitted with values:", form.values);
        let updateProfile = { ...userProfile, ...form.values }
        console.log("updated profile", updateProfile);
        dispatch(changeProfile(updateProfile));
        form.reset();
        setEdit(false);
    }
    return (
        <>
            <div className='font-semibold text-2xl mb-3 flex justify-between items-center pr-5'>About
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

                    <Textarea autosize minRows={2} variant='filled' value={about} onChange={(e) => setAbout(e.currentTarget.value)} className='[&_*]:border-bright-sun-400' />

                    :
                    <div className=' text-mine-shaft-300 text-sm text-justify px-5'>
                        {userProfile?.about || "No about information available."}
                    </div>
            }
        </>
    )
}

export default About
