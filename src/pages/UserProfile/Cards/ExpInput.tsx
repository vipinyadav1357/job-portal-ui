import React, { useEffect, useState } from 'react'
import SelectInput from '../SelectInput/SelectInput'
import fields from '../../../Data/Profile'
import { Textarea, Modal, Button, Anchor, Checkbox } from '@mantine/core'
import { Calendar } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';

const ExpInput = (props: any) => {
    const [desc, setDesc] = useState<string>("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.")
    const [date1, setDate1] = useState<Date | null>(null);
    const [date2, setDate2] = useState<Date | null>(null);
    const [opened1, setOpened1] = useState(false);
    const [opened2, setOpened2] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            setDate2(new Date());
        }
    }, [checked])
    return (
        <div className='flex flex-col gap-3'>
            <div className='text-2xl font-semibold text-center'>{props.add ? "Add" : "Edit"} Experience</div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-start gap-10 items-center'>
                        <SelectInput {...fields[0]} />
                        <SelectInput {...fields[1]} />
                    </div>
                    <div className='flex justify-start gap-10 items-center'>
                        <SelectInput {...fields[2]} />
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
                    <Checkbox className='[&_*]:border-bright-sun-400'
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
                        <Calendar value={date1} onChange={setDate1} maxDate={date2 || undefined} />
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
                        <Calendar value={date2} onChange={setDate2} maxDate={new Date()} minDate={date1 || undefined} />
                    </Modal>

                </div>
            </div>
            <Textarea label="Enter Summary" autosize minRows={2} variant='filled' value={desc} onChange={(event) => setDesc(event.currentTarget.value)} className='[&_*]:border-bright-sun-400' withAsterisk />
            <div className='flex justify-start gap-10 items-center'>
                <Button onClick={() => { props.setEditexp(false) }} variant='outline' color='brightSun.4' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Save</Button>
                <Button onClick={() => { props.setEditexp(false) }} variant='subtle' color='red' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Cancel</Button>
            </div>
        </div>
    )
}

export default ExpInput
