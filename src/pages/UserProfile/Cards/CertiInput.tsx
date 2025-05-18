import { Button, Modal, TextInput } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import React, { useState } from 'react'
import SelectInput from '../SelectInput/SelectInput';
import fields from '../../../Data/Profile';

const CertiInput = (props: any) => {
    const [date1, setDate1] = useState<Date | null>(null);
    const [opened1, setOpened1] = useState(false);

    return (
        <div className='flex flex-col gap-3'>
            <div className='text-2xl font-semibold text-center'>Add Certificate</div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-start gap-10 items-center'>
                        <TextInput
                            className='w-3/4'
                            placeholder="Write your title"
                            label="Title"
                            variant="filled"
                            radius="lg"
                            size="md"
                            withAsterisk
                        />                       <TextInput
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
                        <Calendar value={date1} onChange={setDate1} />
                    </Modal>

                </div>
            </div>
            <div className='flex justify-start gap-10 items-center'>
                <Button onClick={() => { props.setAddCerti(false) }} variant='outline' color='brightSun.4' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Save</Button>
                <Button onClick={() => { props.setAddCerti(false) }} variant='subtle' color='red' className='bg-mine-shaft-950 hover:bg-bright-sun-400/20 transition duration-300 ease-in-out' >Cancel</Button>
            </div>
        </div>
    )

}

export default CertiInput
