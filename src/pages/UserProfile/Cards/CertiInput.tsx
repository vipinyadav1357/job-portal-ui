import { Button, Modal, TextInput } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconCalendar } from '@tabler/icons-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../../slices/ProfileSlice';

const CertiInput = (props: any) => {
    const [date1, setDate1] = useState<Date | null>(null);
    const [opened1, setOpened1] = useState(false);
    const userProfile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {
            certificateId: '' as string,
            issueDate: new Date() as Date,
            issuer: '' as string,
            location: '' as string,
            name: '' as string,
        },
        mode: 'controlled',
    });
    const handleSave = () => {
        let certificate = [...userProfile.certifications]
        certificate.push(form.getValues());
        certificate[certificate.length - 1].issueDate = new Date(certificate[certificate.length - 1].issueDate).toISOString();
        let updatedProfile = { ...userProfile, certifications: certificate }
        dispatch(changeProfile(updatedProfile))
        console.log(updatedProfile)
        props.setEdit(false);
        props.setAddCerti(false);
    }
    return (
        <div className='flex flex-col gap-3'>
            <div className='text-2xl font-semibold text-center'>Add Certificate</div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-start gap-10 items-center'>
                        <TextInput
                            {...form.getInputProps('name')}
                            className='w-3/4'
                            placeholder="Write your title"
                            label="Title"
                            variant="filled"
                            radius="lg"
                            size="md"
                            withAsterisk
                        />
                        <TextInput
                            {...form.getInputProps('issuer')}
                            className='w-3/4'
                            placeholder="Write your company"
                            label="Company"
                            // error="error"
                            variant="filled"
                            radius="lg"
                            size="md"
                            // icon={}
                            withAsterisk
                        />
                    </div>
                    <div className='flex justify-start gap-10 items-center'>
                        <TextInput
                            {...form.getInputProps('location')}
                            className='w-3/4'
                            placeholder="Write your location"
                            label="Location"
                            // error="error"
                            variant="filled"
                            radius="lg"
                            size="md"
                            // icon={}
                            withAsterisk
                        />
                        <div></div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 w-1/3'>
                    {(!date1) ? <>
                        <Button onClick={() => setOpened1(true)} leftIcon={<IconCalendar />} variant='outline' color='brightSun.4' className='w-36'>start Date</Button>
                    </>
                        : <>
                            <span className='text-sm text-bright-sun-400 underline '>
                                {date1?.toLocaleString('defaults', { month: 'long' }) + "-" + date1?.getFullYear()}
                            </span>
                        </>
                    }
                    <TextInput
                        {...form.getInputProps('certificateId')}
                        className='w-3/4'
                        placeholder="Write your certificate Id"
                        label="certificate Id"
                        // error="error"
                        variant="filled"
                        radius="lg"
                        size="md"
                        // icon={}
                        withAsterisk
                    />
                    <Modal
                        opened={opened1}
                        title="Choose a date and year"
                        onClose={() => setOpened1(false)}
                        overlayOpacity={0.25}
                        overlayBlur={1}
                        centered
                        overlayColor="#c5c5c5"
                        size="xs"
                    >
                        {/* <DatePicker placeholder="Pick date" label="Event date" withAsterisk onChange={setValue} value={value} /> */}
                        <Calendar {...form.getInputProps('issueDate')} value={date1} onChange={(val) => {
                            setDate1(val);
                            form.setFieldValue('issueDate', val as Date);
                        }} />
                    </Modal>

                </div>
            </div>
            <div className='flex justify-start gap-10 items-center'>
                <Button onClick={() => { handleSave() }} variant='outline' color='brightSun.4' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Save</Button>
                <Button onClick={() => { props.setAddCerti(false) }} variant='subtle' color='red' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Cancel</Button>
            </div>
        </div>
    )

}

export default CertiInput
