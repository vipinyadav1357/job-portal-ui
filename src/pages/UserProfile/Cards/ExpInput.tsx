import React, { useEffect, useState } from 'react'
import fields from '../../../Data/Profile'
import { Textarea, Modal, Button, Anchor, Checkbox } from '@mantine/core'
import { Calendar } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '@mantine/form';
import SelectInput from '../SelectInput/SelectInput';
import { changeProfile } from '../../../slices/ProfileSlice';

const ExpInput = (props: any) => {
    const [date1, setDate1] = useState<Date | null>(null);
    const [date2, setDate2] = useState<Date | null>(null);
    const [opened1, setOpened1] = useState(false);
    const [opened2, setOpened2] = useState(false);
    const [checked, setChecked] = useState(false);
    const userProfile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {
            title: '' as string,
            company: '' as string,
            location: '' as string,
            description: '' as string,
            startDate: new Date() as Date,
            endDate: new Date() as Date,
            working: false,
        },
        mode: 'controlled',
    });
    useEffect(() => {
        if (!props.add) {
            form.setValues({
                title: props.title
                , company: props.company
                , location: props.location
                , description: props.description
                , startDate: props.startDate
                , endDate: props.endDate
                , working: checked
            })
        }
        if (checked) {
            setDate2(new Date());
        }
    }, [checked, props])
    const handleSave = () => {
        let exp = [...userProfile.experience];
        if (props.add) {
            exp.push(form.getValues());
            exp[exp.length - 1].startDate = new Date(exp[exp.length - 1].startDate).toISOString();
            exp[exp.length - 1].endDate = new Date(exp[exp.length - 1].endDate).toISOString();
        } else {
            exp[props.index] = form.getValues();
            exp[props.index].startDate = new Date(exp[props.index].startDate).toISOString();
            exp[props.index].endDate = new Date(exp[props.index].endDate).toISOString();
        }
        let updatedProfile = {
            ...userProfile, experience: exp
        };
        console.log(updatedProfile);
        dispatch(changeProfile(updatedProfile));
        props.setEditexp(false);
        props.setEdit(false);
    }
    return (
        <div className='flex flex-col gap-3'>
            <div className='text-2xl font-semibold text-center'>{props.add ? "Add" : "Edit"} Experience</div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-start gap-10 items-center'>
                        <SelectInput form={form} name="title" {...fields[0]} />
                        <SelectInput form={form} name="company" {...fields[1]} />
                    </div>
                    <div className='flex justify-start gap-10 items-center'>
                        <SelectInput form={form} name="location" {...fields[2]} />
                        <div></div>
                    </div>
                    {/* <Textarea label="Enter Summary" autosize minRows={2} variant='filled' value={desc} onChange={(event) => setDesc(event.currentTarget.value)} className='[&_*]:border-bright-sun-400' /> */}
                </div>
                <div className='flex gap-5 '>
                    {(!date1 || !date2) ? <>
                        <Button onClick={() => setOpened1(true)} leftIcon={<IconCalendar />} variant='outline' color='brightSun.4'>start Date</Button>
                        <Button disabled={checked} onClick={() => setOpened2(true)} leftIcon={<IconCalendar />} variant='outline' color='brightSun.4' >end Date</Button>
                    </>
                        : <>
                            <span className='text-sm text-bright-sun-400 underline '>
                                <span>{date1?.toLocaleString('defaults', { month: 'long' }) + "-" + date1?.getFullYear()}</span>{"  -  "}
                                <span>{date2?.toLocaleString('defaults', { month: 'long' }) + "-" + date2?.getFullYear()}</span>
                            </span>
                        </>
                    }
                    <Checkbox {...form.getInputProps('working')} className='[&_*]:border-bright-sun-400'
                        checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                        label={<>Currently <Anchor>working here</Anchor></>}
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
                        <Calendar {...form.getInputProps('startDate')} value={date1} onChange={(val => {
                            setDate1(val)
                            form.setFieldValue('startDate', val as Date);
                        })} maxDate={date2 || undefined} />
                    </Modal>
                    <Modal
                        opened={opened2}
                        title="Choose a date and time"
                        onClose={() => setOpened2(false)}
                        overlayOpacity={0.25}
                        overlayBlur={1}
                        centered
                        overlayColor="#c5c5c5"
                        size="xs"
                    >
                        {/* <DatePicker placeholder="Pick date" label="Event date" withAsterisk onChange={setValue} value={value} /> */}
                        <Calendar {...form.getInputProps('endDate')} value={date2} onChange={(val => {
                            setDate2(val)
                            form.setFieldValue('endDate', val as Date);
                        })} maxDate={new Date()} minDate={date1 || undefined} />
                    </Modal>

                </div>
            </div>
            {/* value={desc} onChange={(event) => setDesc(event.currentTarget.value)} */}
            <Textarea {...form.getInputProps('description')} label="Enter Summary" autosize minRows={2} variant='filled' className='[&_*]:border-bright-sun-400' withAsterisk />
            <div className='flex justify-start gap-10 items-center'>
                <Button onClick={handleSave} variant='outline' color='brightSun.4' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Save</Button>
                <Button onClick={() => {
                    props.setEditexp(false);
                    props.setEdit(false);
                }} variant='subtle' color='red' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Cancel</Button>
            </div>
        </div>
    )
}

export default ExpInput
